import { Controller, Get, Inject } from '@nestjs/common';
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
}
