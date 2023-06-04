import { IsNotEmpty, IsNumber } from 'class-validator';

export class BaseQueryDto {
    /**
     * 当前页
     */
    @IsNotEmpty()
    @IsNumber()
    page: number;
    /**
     * 页大小
     */
    @IsNotEmpty()
    @IsNumber()
    size: number;
}