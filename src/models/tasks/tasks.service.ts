
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AppContextService } from 'src/core/services/app-context.service';
import { Repository } from 'typeorm';
import Sites from '../../core/utils/sites';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';



@Injectable()
export class TasksService {
  constructor(
    private appContext: AppContextService,
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}
  create(createTaskDto: CreateTaskDto) {
    return this.taskRepository.save(createTaskDto);
  }

  findAll() {
    return this.taskRepository.find();
  }

  findOne(id: number) {
    return this.taskRepository.findOne({ id: id });
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return this.taskRepository.update({ id: id }, updateTaskDto);
  }

  remove(id: number) {
    return this.taskRepository.delete({ id: id });
  }

  getSites() {
    return Object.keys(Sites);
  }

  async start(id: number) {
    let task = await this.taskRepository.findOne({ id: id });
    await this.appContext.process(task);
  }

  async stop(id: number) {
    let task = await this.taskRepository.findOne({ id: id });
    await this.appContext.terminate(task);
  }
}
