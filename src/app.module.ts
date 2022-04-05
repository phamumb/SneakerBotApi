import { TasksModule } from './tasks/tasks.module';
import { ProxiesModule } from './proxies/proxies.module';
import { AddressesModule } from './addresses/addresses.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    AddressesModule,
    ProxiesModule,
    TasksModule
  ],
})
export class AppModule {}
