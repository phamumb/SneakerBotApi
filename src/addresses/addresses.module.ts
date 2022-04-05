import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AddressesService } from './addresses.service';
import { AddressesController } from './addresses.controller';
import { Address } from './entities/address.entity';

@Module({
  controllers: [AddressesController],
  providers: [AddressesService],
  imports: [
    TypeOrmModule.forFeature([Address])
  ]
})
export class AddressesModule {}
