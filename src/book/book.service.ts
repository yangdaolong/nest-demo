import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from 'src/entities/Book';
import { User } from 'src/entities/User';
import { Repository } from 'typeorm';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private bookRepository: Repository<Book>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  async findAll() {
    const users = await this.userRepository.find();
    const books = await this.bookRepository.find();

    return { books, users };
  }
  async addBook() {
    const book = new Book();
    book.name = 'test book';
    book.userid = 1;
    book.cateid = 1;
    return this.bookRepository.save(book);
  }
  async deleteBook(id: number) {
    return this.bookRepository.softDelete({ id });
  }
}
