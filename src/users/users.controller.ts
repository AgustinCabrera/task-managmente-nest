import {
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get('/users')
  getUsers() {
    return this.usersService.getUsers();
  }
  @Post('/users')
  @UsePipes(new ValidationPipe())
  createUser(@Body() user: CreateUserDto) {
    return this.usersService.createUser(user);
  }
}
