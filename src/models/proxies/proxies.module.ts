import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ProxiesService } from './proxies.service';
import { ProxiesController } from './proxies.controller';
import { Proxy } from './entities/proxy.entity';

@Module({
  controllers: [ProxiesController],
  providers: [ProxiesService],
  imports: [TypeOrmModule.forFeature([Proxy])]
})
export class ProxiesModule {}
