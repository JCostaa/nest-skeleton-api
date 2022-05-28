export interface IBaseService<T> {

  paginate(query:string):Promise<T[]>;
  findAll():Promise<T[]>;
  findOne(id:number):Promise<T>;
  findOneById(id:number):Promise<T>;
  update(id:number, entity: T): Promise<T>;
  save(entity: T):Promise<T>;
  delete(id:number):Promise<boolean>;

}
