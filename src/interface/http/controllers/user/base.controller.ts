import { Get, Res, Param, HttpStatus, Post, Body, Put, Delete, Controller } from '@nestjs/common';
import {IBaseService} from "../../../../app/services/ibase.service";


export class BaseController<T> {

  constructor(private readonly _IBaseService: IBaseService<T>) { }

  @Get('/')
  async getAll(@Res() res): Promise<T[]> {

    try {

      const results: T[] = await this._IBaseService.findAll();

      return res.status(HttpStatus.OK).json(results);

    } catch (error) {

      return res.status(HttpStatus.NOT_FOUND).json(
        {
          message: 'Error. Please try again later.'
        }
      );

    }

  }

  @Get('/:id')
  async getOne(@Res() res, @Param('id') id:number): Promise<T> {

    try {

      const result: T = await this._IBaseService.findOne(id);
      return res.status(HttpStatus.OK).json(result);

    } catch (error) {

      return res.status(HttpStatus.NOT_FOUND).json(
        {
          message: 'Error. Please check the ID, and try again later.'
        }
      );

    }

  }



}
