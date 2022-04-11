
import { Task } from './entities/task.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { CoreModule } from 'src/core/core.module';

@Module({
  controllers: [TasksController],
  providers: [TasksService],
  imports: [CoreModule, TypeOrmModule.forFeature([Task])]
})
export class TasksModule { }
