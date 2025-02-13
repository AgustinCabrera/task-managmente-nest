import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
@Controller('/tasks')
export class TaskController {
  tasksService: TasksService;
  constructor(tasksService: TasksService) {
    this.tasksService = tasksService;
  }
  @Get()
  getAllTasks(@Query() query: any) {
    console.log(query);
    return this.tasksService.getTasks();
  }
  @Get('/:id')
  getTask(@Param('id') id: string) {
    return this.tasksService.getTask(parseInt(id));
  }
  @Post()
  @UsePipes(new ValidationPipe())
  createTask(@Body() task: CreateTaskDto) {
    return this.tasksService.createTask(task);
  }
  @Put('id')
  updateTask() {
    return this.tasksService.updateTask();
  }
  @Delete('id')
  deleteTask() {
    return this.tasksService.deleteTask();
  }
  @Patch('id')
  updateTaskStatus() {
    return this.tasksService.patchTask();
  }
}
