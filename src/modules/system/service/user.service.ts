import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DiscordSnowflake } from '@sapphire/snowflake';
import { Md5 } from 'ts-md5';
import { Repository } from 'typeorm';
import { UserEntity } from '../entity';
import { CreateUserDto, QueryUserDto, UpdateUserDto } from "../dto";

@Injectable()
export class UserService {

	constructor(@InjectRepository(UserEntity) protected userRepository: Repository<UserEntity>) {}

    /**
     * 新建用户，添加ValidationPipe验证管道
     */
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

    /**
     * 更新用户，添加ValidationPipe验证管道
     */
	async update(id: number, updateUserDto: UpdateUserDto) {
		await this.userRepository.update(id, updateUserDto);
		return this.findOne(id);
	}

	remove(id: number) {
		return this.userRepository.delete(id);
	}

    /**
     * 分页查询，验证分页参数
     */
    async pageQuery(dto: QueryUserDto) {
        // 计算skip、take值
		const skip = dto.size * (dto.page - 1);
		const take = dto.size;
		return await this.userRepository
				.createQueryBuilder("blade_user")
				.skip(skip)
				.take(take)
				.getMany();
	}
}
