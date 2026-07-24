import { Controller, Get, Inject, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { BookService } from './book.service';

@Controller('book')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class BookController {
  constructor(
    @Inject(BookService)
    private readonly bookService: BookService,
  ) {}

  @Get()
  async findAll() {
    return this.bookService.findAll();
  }
  @Get('add')
  async addBook() {
    return this.bookService.addBook();
  }
  @Get('delete/:id')
  async deleteBook(@Param('id') id: number) {
    return this.bookService.deleteBook(id);
  }
}
