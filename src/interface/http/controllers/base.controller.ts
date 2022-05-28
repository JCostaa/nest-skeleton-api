import {IBaseService} from '../../../app/services/base/ibase.service'
import {Body, Delete, Get, Param, Post, Query, UsePipes, ValidationPipe} from "@nestjs/common";
import {ApiResponse} from "@nestjs/swagger";
import {UserCreateDto} from "./user/user.dto";
export class BaseController<T>{

  constructor(private readonly service: IBaseService<T>) {}

  @Get()
  @ApiResponse({ status: 200, description: 'Ok'})
  async index(@Query() query): Promise<T[]> {

    return this.service.paginate(query)
    //return this.service.findAll()
  }


  @UsePipes(ValidationPipe)
  @Post()
  store(@Body() payload:T): Promise<any>{
    return this.service.save(payload)
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Entity retrieved successfully.'})
  @ApiResponse({ status: 404, description: 'Entity does not exist'})
  async show(@Param('id') id: number): Promise<T> {
    return this.service.findOneById(id)
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'deleted entity successfully.'})
  @ApiResponse({ status: 404, description: 'Entity does not exist'})
  async destroy(@Param('id') id: number): Promise<any> {

    return this.service.delete(id)
  }
}
