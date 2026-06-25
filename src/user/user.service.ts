import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/User';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  findAll() {
    return this.userRepository.find({
      relations: ['books'],
    });
  }
  findOne(id: number) {
    return this.userRepository.findOne({ where: { id }, relations: ['books'] });
  }
  delete(id: number) {
    return this.userRepository.delete(id);
  }
  //分页查询
  findAllPage(page: number, pageSize: number) {
    return this.userRepository.find({
      skip: (page - 1) * pageSize,
      take: pageSize,
      relations: ['books'],
    });
  }
}
