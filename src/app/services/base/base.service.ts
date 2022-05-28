import {ObjectLiteral, Repository} from "typeorm";
import {IBaseService} from "./ibase.service";
import {HttpException, HttpStatus, Query} from "@nestjs/common";

export abstract class BaseService<T extends ObjectLiteral> implements IBaseService<T> {

  protected repo: Repository<T>;

  async paginate(@Query() query, opts?): Promise<any> {
    if (query.paginate) {
      let limit = query.limit ?? 10;
      let page = query.page ?? 1;
      let take = limit;
      let skip = (page - 1) * take
      const [result, total] = await this.repo.findAndCount({take: take, skip: skip});
      return {
        data: result,
        meta: {
          page:{
            perPage:parseInt(limit),
            currentPage:parseInt(page),
            total: total
          }
        }
      }
    } else {
      return this.repo.find(opts)
    }
  }

  async findAll(opts?): Promise<T[]> {
    return this.repo.find(opts);
  }

  async delete(id: number): Promise<any> {
    try {
      const deleted = await this.repo.delete(id);
      if (!deleted.affected) {
        throw new HttpException('Objeto não encontrado!', HttpStatus.NOT_FOUND);
      }
    } catch (e) {
      throw  e;
    }

  }

  findOneById(id: number): Promise<T> {
    return this.repo.findOne({
      where: {
        id: id
      }
    })
  }

  findOne(options: any): Promise<T> {
    return this.repo.findOne(options)
  }

  async save(entity: any): Promise<T> {
    return this.repo.save(entity);
  }

  async update(id: number, entity: T): Promise<T> {
    try {

      await this.repo.update(id, entity)
      const updated = await this.repo.findOne(id);
      if (updated) {
        return updated;
      }
      throw new HttpException('Todo not found', HttpStatus.NOT_FOUND);
    } catch (e) {
      throw e;
    }
  }


}
