import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DiscordSnowflake } from '@sapphire/snowflake';
import { Md5 } from 'ts-md5';
import { Repository } from 'typeorm';
import { UserEntity } from '../entity';
import { QueryUserDto } from "../dto/query-user.dto";

@Injectable()
export class UserService {

  constructor(@InjectRepository(UserEntity) protected userRepository: Repository<UserEntity>) {}

  create(userEntity: UserEntity) {
    // ID使用雪花算法
    userEntity.id = Number(DiscordSnowflake.generate() + "");
    // 密码使用MD5加密
    userEntity.password = Md5.hashStr(userEntity.password);
    return this.userRepository.save(userEntity);
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOne({ where: { id } });
  }

  async update(id: number, userEntity: UserEntity) {
    // 密码使用MD5加密
    userEntity.password = Md5.hashStr(userEntity.password);
    await this.userRepository.update(id, userEntity);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }

  async pageQuery(dto: QueryUserDto) {
    const skip = dto.size * (dto.page - 1);
    return await this.userRepository
        .createQueryBuilder("blade_user")
        .skip(skip)
        .take(dto.size)
        .getMany();
  }
}
