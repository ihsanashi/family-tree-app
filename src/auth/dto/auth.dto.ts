import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
} from 'class-validator';
import { PasswordCriteria } from '../password-criteria';

export class LoginDto {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @IsStrongPassword(PasswordCriteria)
  @ApiProperty()
  password: string;
}

export class RegisterDto extends LoginDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  username: string;
}
