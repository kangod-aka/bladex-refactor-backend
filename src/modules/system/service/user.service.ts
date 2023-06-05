import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DiscordSnowflake } from '@sapphire/snowflake';
import { Md5 } from 'ts-md5';
import { Repository } from 'typeorm';
import { UserEntity } from '../entity';
import { CreateUserDto, QueryUserDto, UpdateUserDto } from "../dto";
import { isNil } from 'lodash';

@Injectable()
export class UserService {

  constructor(@InjectRepository(UserEntity) protected userRepository: Repository<UserEntity>) {}

  create(createUserDto: CreateUserDto) {
    // ID使用雪花算法
    createUserDto.id = Number(DiscordSnowflake.generate() + "");
    // 密码使用MD5加密
    createUserDto.password = Md5.hashStr(createUserDto.password);
    return this.userRepository.save(createUserDto);
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOne({ where: { id } });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    /*// 密码使用MD5加密（不允许修改密码）
    if (!isNil(updateUserDto.password)) {
      Md5.hashStr(updateUserDto.password);
    }*/
    await this.userRepository.update(id, updateUserDto);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }

  async pageQuery(dto: QueryUserDto) {
    const skip = dto.size * (dto.page - 1);
    const take = dto.size;
    return await this.userRepository
        .createQueryBuilder("blade_user")
        .skip(skip)
        .take(take)
        .getMany();
  }
}
