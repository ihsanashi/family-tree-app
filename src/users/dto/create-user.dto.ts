import { ApiProperty } from '@nestjs/swagger';
import { EmailValidationOptions } from 'src/auth/dto/auth.dto';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
  MinLength,
} from 'class-validator';
import { PasswordCriteria } from 'src/auth/password-criteria';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  @ApiProperty()
  username: string;

  @IsEmail({}, EmailValidationOptions)
  @IsNotEmpty()
  @ApiProperty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @IsStrongPassword(PasswordCriteria)
  @ApiProperty()
  password: string;
}
