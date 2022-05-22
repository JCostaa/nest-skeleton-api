import { Module } from '@nestjs/common';
import { ServicesModule } from 'src/app/services/_service.module';
import {UserController} from "./user/user.controller";
@Module({
  imports: [ServicesModule],
  providers: [],
  controllers: [UserController],
})
export class ControllersModule { }
