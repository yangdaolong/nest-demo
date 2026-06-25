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

    const user = new User();
    user.username = 'test user';
    user.password = '123456';
    user.level = 1;
    user.point = 0;
    user.books = [book];

    await this.bookRepository.manager.transaction(async (manager) => {
      await manager.save(user);
    });

    return user;
  }
  async deleteBook(id: number) {
    return this.bookRepository.softDelete({ id });
  }
}
