import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressesModule } from './addresses/addresses.module';
import { CoreModule } from './core/core.module';
import { AppContextService } from './core/services/app-context.service';
import { ProxiesModule } from './proxies/proxies.module';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    CoreModule,
    AddressesModule,
    ProxiesModule,
    TasksModule,
  ],
  providers: []
})
export class AppModule { }
