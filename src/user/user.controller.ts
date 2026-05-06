import { Controller, Get, Query } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('findAll')
  findAll() {
    return this.userService.findAll();
  }
  @Get('findOne')
  findOne(@Query('id') id: number) {
    return this.userService.findOne(id);
  }
}
