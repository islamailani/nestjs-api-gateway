import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { RequestTokenDto } from './dto/request-token.dto';
import { UserService } from '../user/user.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Post('request-token')
  async requestToken(@Body() requestTokenDto: RequestTokenDto): Promise<any> {
    const user = await this.userService.findByCredentials(
      requestTokenDto.email,
      requestTokenDto.password,
    );

    if (!user) {
      throw new NotFoundException(
        'No user found with the email or password provided.',
      );
    }

    return await this.authService.createToken(user.email);
  }

  @Get('data')
  @UseGuards(AuthGuard())
  findAll() {
    return {
      message: 'You are authenticated.',
    };
  }
}
