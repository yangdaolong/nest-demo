import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cate } from 'src/entities/Cate';
import { CateController } from './cate.controller';
import { CateService } from './cate.service';

@Module({
  imports: [TypeOrmModule.forFeature([Cate])],
  providers: [CateService],
  controllers: [CateController],
  exports: [CateService],
})
export class CateModule {}
