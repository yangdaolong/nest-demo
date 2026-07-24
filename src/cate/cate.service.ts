import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cate } from 'src/entities/Cate';
import { Repository } from 'typeorm';
@Injectable()
export class CateService {
  constructor(
    @InjectRepository(Cate)
    private readonly cateRepository: Repository<Cate>,
  ) {}
  findAll() {
    return this.cateRepository.find();
  }
}
