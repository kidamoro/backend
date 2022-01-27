import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthCredentialsDto } from '../dto/auth-credentials.dto';
import { CreateAuthDto } from '../dto/create-auth.dto';
import { UpdateAuthDto } from '../dto/update-auth.dto';
import { AuthService } from '../service/auth.service';


@Controller('auth')
export class AuthController {
  constructor(private readonly usersService: AuthService) {}

  @Post('/signup')
  create(
    @Body() authCredentialsDto: AuthCredentialsDto) {
    return this.usersService.signUp(authCredentialsDto);
  }
}
