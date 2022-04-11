import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}


  @Get('/:id/start')
  async start(@Param('id') id: string) {
    return await this.tasksService.start(+id);
  }

  @Get('/:id/stop')
  async stop(@Param('id') id: string) {
    return await this.tasksService.stop(+id);
  }

  @Get()
  findAll() {
    return this.tasksService.findAll();
  }

  @Get('/sites')
  getSites() {
    return this.tasksService.getSites();
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tasksService.findOne(+id);
  }

  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(+id, updateTaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tasksService.remove(+id);
  }

}
