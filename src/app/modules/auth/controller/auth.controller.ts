import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AccessToken } from 'src/shared/interfaces/interfaces/user/auth/jwt-payload.interfaces';
import { AuthCredentialsDto } from '../dto/auth-credentials.dto';
import { CreateAuthDto } from '../dto/create-auth.dto';
import { UpdateAuthDto } from '../dto/update-auth.dto';
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
