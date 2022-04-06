import { TasksModule } from './tasks/tasks.module';
import { ProxiesModule } from './proxies/proxies.module';
import { AddressesModule } from './addresses/addresses.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppContextService } from './appcontext.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    AddressesModule,
    ProxiesModule,
    TasksModule
  ],
  providers: [AppContextService]
})
export class AppModule {}
