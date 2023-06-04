import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DatabaseModule } from '../database/database.module';

import { UserController } from './controller';
import { UserService } from './service';
// import { PostRepository } from './repository';
import { UserEntity } from './entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([UserEntity]),
        // 调用装饰器自定义方法，注册自定义repository
        // DatabaseModule.forRepository([PostRepository]),
    ],
    controllers: [UserController],
    providers: [UserService],
    // exports: [UserService, DatabaseModule.forRepository([PostRepository])],
    exports: [UserService],
})
export class SystemModule {}
