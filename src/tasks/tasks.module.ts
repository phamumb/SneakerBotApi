import { Task } from './entities/task.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { AppContextService } from 'src/appcontext.service';

@Module({
  controllers: [TasksController],
  providers: [TasksService, AppContextService],
  imports: [TypeOrmModule.forFeature([Task])]
})
export class TasksModule { }
