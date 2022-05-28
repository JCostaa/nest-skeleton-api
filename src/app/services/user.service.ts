import {BaseService} from "./base/base.service";
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "../../domain/model/user.entity";
import {Repository} from "typeorm";
import {BcryptService} from "./auth/bcrypt.service";

export class UserService extends BaseService<User> {
  constructor(
    @InjectRepository(User) protected readonly repo: Repository<User>,
    private readonly bcryptService: BcryptService
  ) {
    super();
  }

  async save(entity: any): Promise<User> {
    entity.password = await this.bcryptService.hash(entity.password)
    return super.save(entity);
  }
}
