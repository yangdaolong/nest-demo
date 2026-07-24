import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { Cate } from 'src/entities/Cate';
import { CateController } from './cate.controller';
import { CateService } from './cate.service';

@Module({
  imports: [TypeOrmModule.forFeature([Cate]), forwardRef(() => AuthModule)],
  providers: [CateService],
  controllers: [CateController],
  exports: [CateService],
})
export class CateModule {}
