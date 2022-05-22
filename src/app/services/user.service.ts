import {EntityRepository, Repository, EntityManager, EntityTarget} from "typeorm";
import {User} from "../../domain/model/user.entity";
import {BaseService} from "./base.service";
import {Injectable} from "@nestjs/common";
import {UserRepository} from "../../infra/database/repository/user.repository";

@Injectable()
export class UserService extends BaseService<User>{

  constructor(
    private readonly repository: UserRepository){
    super(repository);
  }

}
