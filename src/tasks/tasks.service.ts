import { Injectable } from '@nestjs/common';
export interface User {
  name: string;
  age: number;
}
@Injectable()
export class TasksService {
  private tasks: { id: number; title: string; description: string }[] = [];
  getTasks() {
    return this.tasks;
  }
  getTask(id: number) {
    return this.tasks.find((task) => task.id === id);
  }
  createTasks(task: CreateTaskDto) {
    console.log(task);
    this.tasks.push({
      ...task,
      id: this.tasks.length + 1,
    });
    return task;
  }
}
