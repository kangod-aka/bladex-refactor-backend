import { Repository } from 'typeorm';

import { CustomRepository } from '@/modules/database/decorators';

import { UserEntity } from '../entity';

@CustomRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {
    buildBaseQB() {
        return this.createQueryBuilder('bu');
    }
}
