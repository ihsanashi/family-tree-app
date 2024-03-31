import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
} from 'class-validator';
import { PasswordCriteria } from '../password-criteria';

export class AuthDto {
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
