import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CateService } from './cate.service';

@Controller('cate')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class CateController {
  constructor(private readonly cateService: CateService) {}

  @Get('findAll')
  findAll() {
    return this.cateService.findAll();
  }
}
