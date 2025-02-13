import { Injectable } from '@nestjs/common';
export interface User {
  name: string;
  age: number;
}
@Injectable()
export class TasksService {
  private tasks = [];
  getTasks() {
    return this.tasks;
  }
  createTasks(task: any) {
    console.log(task);
    this.tasks.push(task);
    return task;
  }
}
