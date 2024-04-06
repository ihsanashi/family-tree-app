import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
  MinLength,
  ValidationOptions,
} from 'class-validator';
import { PasswordCriteria } from '../password-criteria';

export const EmailValidationOptions: ValidationOptions = {
  message: 'Please enter a valid email',
};

export class LoginDto {
  @IsEmail({}, EmailValidationOptions)
  @IsNotEmpty()
  @ApiProperty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(PasswordCriteria.minLength)
  @ApiProperty()
  password: string;
}

export class RegisterDto {
  @IsString()
  @IsNotEmpty()
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
