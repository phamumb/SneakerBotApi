import { Task } from './entities/task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Inject, Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Repository } from 'typeorm';
import { AppContextService } from '../appcontext.service';


@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
    private context: AppContextService
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
    await this.context.start();
  }
}
