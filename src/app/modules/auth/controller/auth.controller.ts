import {
  Controller,
  Post,
  Body,
} from '@nestjs/common';
import { AccessToken } from 'src/shared/interfaces/interfaces/user/auth/jwt-payload.interfaces';
import { AuthCredentialsDto } from '../dto/auth-credentials.dto';
import { AuthService } from '../service/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signup')
  create(@Body() authCredentialsDto: AuthCredentialsDto) {
    return this.authService.signUp(authCredentialsDto);
  }

  @Post('/signin')
  singIn(@Body() authCredentialsDto: AuthCredentialsDto): Promise<AccessToken> {
    return this.authService.signIn(authCredentialsDto);
  }
}
