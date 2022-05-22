import { Module } from '@nestjs/common';
import {UserService} from "./user.service";
import {RepositoryModule} from "../../infra/database/repository/_repository.module";
@Module({
  imports: [RepositoryModule],
  providers: [UserService],
  exports: [UserService]
})
export class ServicesModule { }
