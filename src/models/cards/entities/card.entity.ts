import { Address } from 'src/models/addresses/entities/address.entity';
import { Task } from 'src/models/tasks/entities/task.entity';
import { Column, Entity, JoinTable, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class Card {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  cardHolder: string;
  @Column()
  cardNumber: string;
  @Column()
  expiration: string;
  @Column()
  cvv: string;
  @ManyToOne(() => Address, { eager: true })
  @JoinTable()
  address: Address;
  @OneToMany(() => Task, task => task.card)
  task: Task[];
}
