import { ApiProperty } from '@nestjs/swagger';
import { User } from '@prisma/client';

export class AuthEntity {
  @ApiProperty()
  accessToken: string;

  @ApiProperty()
  user: Omit<User, 'password'>;
}
