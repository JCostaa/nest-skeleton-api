import {EntityRepository, Repository} from "typeorm";
import {User} from "../../../domain/model/user.entity";

@EntityRepository(User)
export class UserRepository extends Repository<User>{

}
