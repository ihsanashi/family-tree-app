import { AuthEntity } from './entities/auth.entity';
import * as bcrypt from 'bcrypt';
import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  async login(email: string, password: string): Promise<AuthEntity> {
    // Fetch a user with the given email
    const user = await this.prisma.user.findUnique({ where: { email: email } });

    // throw error if user is not found
    if (!user) {
      throw new NotFoundException(`No user found with email: ${email}`);
    }

    // check if password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);

    // throw error if password is incorrect
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }

    // generate a JWT containing the user's ID and return it
    return {
      accessToken: this.jwtService.sign({ userId: user.id }),
    };
  }
}
