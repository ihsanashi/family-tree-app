import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { PrismaModule } from 'src/prisma/prisma.module';

export const jwtSecret = process.env.JWT_SECRET;

@Module({
  controllers: [AuthController],
  imports: [
    JwtModule.register({
      global: true,
      secret: jwtSecret,
      signOptions: { expiresIn: '7d' },
    }),
    PassportModule,
    PrismaModule,
    UsersModule,
  ],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
