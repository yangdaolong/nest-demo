import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { Book } from 'src/entities/Book';
import { Cate } from 'src/entities/Cate';
import { User } from 'src/entities/User';
import { BookController } from './book.controller';
import { BookService } from './book.service';

@Module({
  imports: [TypeOrmModule.forFeature([Book, User, Cate]), AuthModule],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule {}
