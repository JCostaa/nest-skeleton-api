import { Module } from '@nestjs/common';
import { ServicesModule } from 'src/app/services/_service.module';
import {UserController} from "./user/user.controller";
import {AuthController} from "./auth/auth.controller";
import {AuthModule} from "../../../app/services/auth/auth.module";
@Module({
  imports: [ServicesModule,AuthModule],
  providers: [],
  controllers: [UserController,AuthController],
})
export class ControllersModule { }
