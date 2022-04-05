import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ nullable: true })
    siteId: number;
    @Column({ nullable: true })
    url: string;
    @Column({ nullable: true })
    productCode: string;
    @Column({ nullable: true })
    styleIndex: number;
    @Column({ nullable: true })
    size: string;
    @Column({ nullable: true })
    shippingIndex: number;
    @Column({ nullable: true })
    billingAddressId: number;
    @Column({ nullable: true })
    shippingAddressId: number;
    @Column({ nullable: true })
    email: string;
}
