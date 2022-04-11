import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoreModule } from './core/core.module';
import { AccountsModule } from './models/accounts/accounts.module';
import { AddressesModule } from './models/addresses/addresses.module';
import { CardsModule } from './models/cards/cards.module';
import { ProxiesModule } from './models/proxies/proxies.module';
import { TasksModule } from './models/tasks/tasks.module';


@Module({
  imports: [
    TypeOrmModule.forRoot(),
    CoreModule,
    AddressesModule,
    ProxiesModule,
    TasksModule,
    AccountsModule,
    CardsModule
  ],
  providers: []
})
export class AppModule { }
