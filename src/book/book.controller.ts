import { Controller, Get, Inject, Param } from '@nestjs/common';
import { BookService } from './book.service';

@Controller('book')
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
