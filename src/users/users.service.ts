import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'k4H5R@example.com',
    },
    {
      id: 2,
      name: 'Jane Doe',
      email: 'tNf0i@example.com',
    },
  ];
  getUsers() {
    return this.users;
  }
}
