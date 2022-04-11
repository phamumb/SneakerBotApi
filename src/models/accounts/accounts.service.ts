import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { Account } from './entities/account.entity';

@Injectable()
export class AccountsService {
  constructor(
    @InjectRepository(Account)
    private accountRepository: Repository<Account>) {

  }
  create(createProxyDto: CreateAccountDto) {
    return this.accountRepository.save(createProxyDto);
  }

  findAll() {
    return this.accountRepository.find();
  }

  findOne(id: number) {
    return this.accountRepository.findOne({ id: id });
  }

  update(id: number, updateProxyDto: UpdateAccountDto) {
    return this.accountRepository.update({ id: id }, updateProxyDto);
  }

  remove(id: number) {
    return this.accountRepository.delete({ id: id });
  }
}
