import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {UserService} from "../../../../app/services/user.service";
import {User} from '../../../../domain/model/user.entity'
import {IBaseService} from "../../../../app/services/ibase.service";
import {BaseController} from "./base.controller";

@ApiTags('User')
@Controller('api/v1/users')
export class UserController  extends BaseController<User>{

  constructor(private readonly service:UserService){
    super(service);
  }

}
