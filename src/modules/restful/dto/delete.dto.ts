import { IsDefined, IsNumber } from 'class-validator';

import { DtoValidation } from '@/modules/core/decorator';

/**
 * 批量删除验证
 */
@DtoValidation()
export class DeleteDto {
    @IsNumber( undefined, {
        each: true,
        message: 'ID格式错误',
    })
    @IsDefined({
        each: true,
        message: 'ID必须指定',
    })
    ids: number[] = [];
}
