import { AppContextService } from '../core/services/app-context.service';
import { Inject, Injectable } from '@nestjs/common';
import { BaseSite } from "./../core/utils/sites/base.site";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';
import Sites from '../core/utils/sites';

@Injectable()
export class TasksService {
  constructor(
    private appContext: AppContextService,
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {

  }
  create(createTaskDto: CreateTaskDto) {
    return this.taskRepository.save(createTaskDto);
  }

  findAll() {
    return this.taskRepository.find();
  }

  findOne(id: number) {
    return this.taskRepository.findOne({id: id});
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return this.taskRepository.update({id: id}, updateTaskDto);
  }

  remove(id: number) {
    return this.taskRepository.delete({id: id});
  }

  async start(id: number) {
    await this.appContext.queue(id);
  }
}
