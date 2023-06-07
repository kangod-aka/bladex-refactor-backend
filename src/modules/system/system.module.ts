import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DatabaseModule } from '../database/database.module';

import { UserController } from './controller';
import { UserService } from './service';
import { UserRepository } from './repository';
import { UserEntity, RoleEntity, DeptEntity, DictEntity } from './entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([UserEntity, RoleEntity, DeptEntity, DictEntity]),
        // 调用装饰器自定义方法，注册自定义repository
        DatabaseModule.forRepository([UserRepository]),
    ],
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService, DatabaseModule.forRepository([UserRepository])],
})
export class SystemModule {}
