import { AuthEntity } from './entities/auth.entity';
import * as bcrypt from 'bcrypt';
import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto, RegisterDto } from './dto/auth.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { roundsOfHashing } from './password-criteria';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async login(fields: LoginDto): Promise<AuthEntity> {
    const { email, password } = fields;

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
      user: user,
    };
  }

  async register(email: string, password: string): Promise<AuthEntity> {
    // check if user exists in DB
    const userExists = await this.prisma.user.findFirst({
      where: { email },
    });

    if (userExists) {
      throw new ConflictException(
        `An account already exists with the email ${email}`,
      );
    }

    const user = await this.prisma.user.create({
      data: {
        email: email,
        password: await bcrypt.hash(password, roundsOfHashing),
      },
    });

    return {
      accessToken: this.jwtService.sign({ userId: user.id }),
      user,
    };
  }
}
