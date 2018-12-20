import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { CreateUserDto, LoginUserDto } from './dto';
import * as crypto from 'crypto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {
  }

  async findByCredentials(loginUserDto: LoginUserDto): Promise<UserEntity> {
    const conditions = {
      email: loginUserDto.email,
      password: crypto.createHmac('sha256', loginUserDto.password).digest('hex'),
    };
    return await this.userRepository.findOne(conditions);
  }

  async findByEmail(emailAddress: string): Promise<UserEntity> {
    const conditions = {
      email: emailAddress,
    };
    return await this.userRepository.findOne(conditions);
  }

  async create(createUserDto: CreateUserDto): Promise<UserEntity> {
    const { email, password } = createUserDto;

    const newUser = new UserEntity();
    newUser.email = email;
    newUser.password = password;

    return await this.userRepository.save(newUser);
  }
}
