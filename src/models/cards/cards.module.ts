import { Card } from 'src/models/cards/entities/card.entity';
import { Module } from '@nestjs/common';
import { CardsService } from './cards.service';
import { CardsController } from './cards.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [CardsController],
  providers: [CardsService],
  imports: [TypeOrmModule.forFeature([Card])]
})
export class CardsModule {}
