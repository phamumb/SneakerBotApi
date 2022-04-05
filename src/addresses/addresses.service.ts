import { Address } from './entities/address.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { Repository } from 'typeorm';

@Injectable()
export class AddressesService {
  constructor(
    @InjectRepository(Address)
    private addressesRepository: Repository<Address>
  ) {

  }
  create(createAddressDto: CreateAddressDto) {
    return this.addressesRepository.save(createAddressDto);
  }

  findAll() {
    return this.addressesRepository.find();
  }

  findOne(id: number) {
    return this.addressesRepository.findOne({ where: [{ id: id }] })
  }

  update(id: number, updateAddressDto: UpdateAddressDto) {
    return this.addressesRepository.update({ id: id }, updateAddressDto);
  }

  remove(id: number) {
    return this.addressesRepository.delete({ id: id });
  }
}
