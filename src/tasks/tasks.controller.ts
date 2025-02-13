import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';
@Controller('/tasks')
export class TaskController {
  tasksService: TasksService;
  constructor(tasksService: TasksService) {
    this.tasksService = tasksService;
  }
  @Get()
  getAllTasks() {
    return this.tasksService.getTasks();
  }
  @Post()
  createTask() {
    return this.tasksService.createTask();
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
