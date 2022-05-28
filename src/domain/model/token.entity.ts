import {BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {ApiProperty} from "@nestjs/swagger";
import {User} from "./user.entity";

@Entity({ name: 'tokens' })
export class Token extends BaseEntity {

  @ApiProperty({ description: 'Primary key as Token ID', example: 1 })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'Hash', example: '' })
  @Column()
  hash: string;

  @JoinColumn({ name: 'user_id' })
  @ManyToOne(type => Token, token => token.user) user: User;


}
