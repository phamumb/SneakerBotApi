import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Proxy {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({nullable: true})
    ipAddress: string;
    @Column({nullable: true})
    port: string;
    @Column({nullable: true})
    protocol: string;
    @Column({nullable: true})
    username: string;
    @Column({nullable: true})
    password: string;
}
