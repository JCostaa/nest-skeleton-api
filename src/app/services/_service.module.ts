import { Module } from '@nestjs/common';
import {UserService} from "./user.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "../../domain/model/user.entity";
import {BcryptService} from "./auth/bcrypt.service";
import {AuthService} from "./auth/auth.service";
import {AuthModule} from "./auth/auth.module";


@Module({
  imports: [TypeOrmModule.forFeature([User]),AuthModule],
  providers: [UserService],
  exports: [UserService]
})
export class ServicesModule { }
