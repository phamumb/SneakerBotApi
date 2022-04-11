import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProxyDto } from './dto/create-proxy.dto';
import { UpdateProxyDto } from './dto/update-proxy.dto';
import { Proxy } from './entities/proxy.entity';

@Injectable()
export class ProxiesService {

  constructor(
    @InjectRepository(Proxy)
    private proxyRepository: Repository<Proxy>
  ) {

  }
  create(createProxyDto: CreateProxyDto) {
    return this.proxyRepository.save(createProxyDto);
  }

  findAll() {
    return this.proxyRepository.find();
  }

  findOne(id: number) {
    return this.proxyRepository.findOne({ id: id });
  }

  update(id: number, updateProxyDto: UpdateProxyDto) {
    return this.proxyRepository.update({ id: id }, updateProxyDto);
  }

  remove(id: number) {
    return this.proxyRepository.delete({ id: id });
  }
}
