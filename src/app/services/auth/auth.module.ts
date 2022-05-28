import { Module } from '@nestjs/common';
import { JwtModule as Jwt } from '@nestjs/jwt';
import {JwtTokenService} from "./jwt.service";
import {BcryptService} from "./bcrypt.service";
import {AuthService} from "./auth.service";
import {ServicesModule} from "../_service.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "../../../domain/model/user.entity";
import {UserService} from "../user.service";




@Module({
  imports: [
    Jwt.register({
      secret: '74YLbq4%c!wU',
      signOptions: { expiresIn: '24h' },
    }),
    TypeOrmModule.forFeature([User])
  ],
  providers: [JwtTokenService, BcryptService,AuthService,UserService],
  exports: [JwtTokenService, BcryptService,AuthService,UserService],
})
export class AuthModule { }
