
import { Account } from "src/models/accounts/entities/account.entity";
import { Address } from "src/models/addresses/entities/address.entity";
import { Card } from "src/models/cards/entities/card.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

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
    @ManyToOne(() => Address)
    @JoinColumn()
    billingAddress: Address;
    @OneToOne(() => Address)
    @JoinColumn()
    shippingAddress: Address;
    @OneToOne(() => Account)
    @JoinColumn()
    account: Account;
    @OneToOne(() => Card)
    card: Card;
    @Column({default: false})
    isProcessed: boolean;
}
