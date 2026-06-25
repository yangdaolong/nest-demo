import { Controller, Get, Redirect } from '@nestjs/common';
import { ApiExcludeEndpoint } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Redirect('/docs')
  @ApiExcludeEndpoint()
  getHello(): void {
    //跳转swagger文档 代码如下：
  }
}
