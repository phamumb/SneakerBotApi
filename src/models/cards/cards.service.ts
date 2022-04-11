import { Card } from 'src/models/cards/entities/card.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';
import { Repository } from 'typeorm';

@Injectable()
export class CardsService {
  constructor(
    @InjectRepository(Card)
    private cardRepository: Repository<Card>) {

  }
  create(createProxyDto: CreateCardDto) {
    return this.cardRepository.save(createProxyDto);
  }

  findAll() {
    return this.cardRepository.find();
  }

  findOne(id: number) {
    return this.cardRepository.findOne({ id: id });
  }

  update(id: number, updateProxyDto: UpdateCardDto) {
    return this.cardRepository.update({ id: id }, updateProxyDto);
  }

  remove(id: number) {
    return this.cardRepository.delete({ id: id });
  }
}
