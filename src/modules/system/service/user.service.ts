import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserEntity } from '../entity/user.entity';
import { CreateUserDto } from '../entity/dto/create-user.dto';
import { UpdateUserDto } from '../entity/dto/update-user.dto';

@Injectable()
export class UserService {

  constructor(@InjectRepository(UserEntity) protected userRepository: Repository<UserEntity>) {}

  create(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto);
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOne({ where: { id } });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    await this.userRepository.update(id, updateUserDto);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
