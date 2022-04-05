import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
    @Column({ nullable: true })
    email: string;
    @Column({ nullable: true })
    phone: string;
}
