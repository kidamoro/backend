import { UserInterface } from "src/shared/interfaces/interfaces/user/user.model.interface";
import { EntityRepository, Repository } from "typeorm";
import { AuthCredentialsDto } from "../dto/auth-credentials.dto";
import { User } from "../entity/user.entity";

@EntityRepository(User)
export class UserRepository extends Repository<User>{
    async createUser(authCredentialsDto: AuthCredentialsDto):Promise<void>{
        const {username, password}= authCredentialsDto;
        const user: UserInterface = this.create({username, password});
        await this.save(user)
    }
}