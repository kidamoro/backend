import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from '../dto/auth-credentials.dto';
import { CreateAuthDto } from '../dto/create-auth.dto';
import { UpdateAuthDto } from '../dto/update-auth.dto';
import { UserRepository } from '../repository/users.repository';


@Injectable()
export class AuthService {
  constructor(
    @InjectRepository( UserRepository)
    private userRepository: UserRepository
  ){}
  async signUp(authCredentialsDto: AuthCredentialsDto):Promise<void>{
    return this.userRepository.createUser(authCredentialsDto);

  }
}
