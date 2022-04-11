
import { Address } from 'src/models/addresses/entities/address.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Card {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  cardNumber: string;
  @Column()
  expiration: string;
  @Column()
  cvv: string;
  @OneToOne(() => Address)
  address: Address;
}
