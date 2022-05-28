import {Body, Controller, Get, Post, UsePipes, ValidationPipe} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {UserService} from "../../../../app/services/user.service";
import {User} from '../../../../domain/model/user.entity'
import {UserCreateDto} from "./user.dto";
import {BaseController} from "../base.controller";

@ApiTags('User')
@Controller('api/v1/users')
export class UserController  extends  BaseController<User>{

  constructor(private readonly usersService: UserService) {
    super(usersService)
  }


  @UsePipes(ValidationPipe)
  @Post()
  store(@Body() payload:UserCreateDto): Promise<any>{
    return this.usersService.save(payload)
  }
}
