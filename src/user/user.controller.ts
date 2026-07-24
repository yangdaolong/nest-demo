import {
  Body,
  Controller,
  Get,
  HttpException,
  Param,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UserService } from './user.service';
import { UserEditDto } from './userEdit.dto';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('findAll')
  findAll(@Req() req) {
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
  @Post('edit/:id')
  async edit(@Param('id') id: number, @Body() user: UserEditDto) {
    // const user_ = await this.userService.findOne(id);
    // if (user_?.updatedAt.getTime() != new Date(user.updatedAt).getTime()) {
    //   throw new HttpException('用户已被修改', 400);
    // }
    // throw new HttpException('用户已被修改', 400);

    const res = await this.userService.edit(id, user);
    if (res.affected == 0) {
      throw new HttpException('用户不存在或已被修改', 409);
    }
    return { statusCode: 200, data: res, message: '用户成功修改' };
  }
}
