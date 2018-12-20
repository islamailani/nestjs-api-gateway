import { Body, Controller, Get, NotFoundException, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { CreateUserDto, LoginUserDto } from '../user/dto';
import { UserService } from '../user/user.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService,
              private readonly userService: UserService) {
  }

  @Post('request-token')
  async requestToken(@Body() loginUserDto: LoginUserDto): Promise<any> {
    const user = await this.userService.findByCredentials(loginUserDto);

    if (!user) {
      throw new NotFoundException('No user found with the email or password provided.');
    }

    return await this.authService.createToken(user.email);
  }

  @Post('create-user')
  async createUser(@Body() createUserDto: CreateUserDto): Promise<any> {
    return await this.userService.create(createUserDto);
  }

  @Get('data')
  @UseGuards(AuthGuard())
  findAll() {
    return {
      message: 'You are authenticated.',
    };
  }
}
