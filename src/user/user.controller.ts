import { Controller, Get, Param, Query } from '@nestjs/common';
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

  @Get('delete/:id')
  delete(@Param('id') id: number) {
    return this.userService.delete(id);
  }
  @Get('findAllPage')
  findAllPage(
    @Query('page') page: number,
    @Query('pageSize') pageSize: number,
  ) {
    return this.userService.findAllPage(page, pageSize);
  }
}
