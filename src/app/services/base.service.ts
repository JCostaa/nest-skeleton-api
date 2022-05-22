import { Injectable, BadGatewayException, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { IBaseService } from './iBase.service';

@Injectable()
export class BaseService<T> implements IBaseService<T> {

  constructor(
    private readonly genericRepository: Repository<T>
  ) { }

  findAll(): Promise<T[]> {
    try {
      console.log(this.genericRepository);
      return this.genericRepository.find();
    } catch (error) {
      console.log(error);
      throw new BadGatewayException(error);
    }
  }

  findOne(id: number): Promise<T> {
    try {
      return <Promise<T>>this.genericRepository.findOne(id);
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }

  // async update(id:number,entity: T): Promise<any> {
  //
  // }
  //
  // async save(entity: T): Promise<T> {
  // }

  delete(id: number) {
    try {
      this.genericRepository.delete(id);
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }
}
