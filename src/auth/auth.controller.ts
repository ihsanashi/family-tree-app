import { LoginDto, RegisterDto } from './dto/auth.dto';
import { AuthEntity } from './entities/auth.entity';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOkResponse({ type: AuthEntity })
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Post('register')
  @ApiOkResponse({ type: AuthEntity })
  register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }
}
