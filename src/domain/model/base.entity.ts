import {BaseEntity, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export abstract class BaseModel extends BaseEntity{
  @PrimaryGeneratedColumn()
  public readonly id: number
}
