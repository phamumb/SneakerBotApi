import { CoreModule } from './../core/core.module';
import { Task } from './entities/task.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';

@Module({
  controllers: [TasksController],
  providers: [TasksService],
  imports: [CoreModule, TypeOrmModule.forFeature([Task])]
})
export class TasksModule { }
