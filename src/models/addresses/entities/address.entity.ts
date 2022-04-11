import { Card } from './../../cards/entities/card.entity';
import { Task } from "src/models/tasks/entities/task.entity";
import { Column, Entity, JoinTable, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Address {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ nullable: true })
    firstName: string;
    @Column({ nullable: true })
    lastName: string;
    @Column({ nullable: true })
    addressLine1: string;
    @Column({ nullable: true })
    addressLine2: string;
    @Column({ nullable: true })
    city: string;
    @Column({ nullable: true })
    state: string;
    @Column({ nullable: true })
    country: string;
    @Column({ nullable: true })
    zipCode: string;
    @OneToMany(() => Card, card => card.address)
    @JoinTable()
    card: Card[];
    @OneToMany(() => Task, task => task.shippingAddress)
    @JoinTable()
    task: Task[];
}
