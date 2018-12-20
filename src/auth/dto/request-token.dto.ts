import { IsNotEmpty } from 'class-validator';

export class BaseUserDto {
  @IsNotEmpty()
  readonly email: string;

  @IsNotEmpty()
  readonly password: string;
}
