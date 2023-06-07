import { ObjectLiteral, SelectQueryBuilder } from 'typeorm';

import { PaginateOptions, PaginateReturn } from './types';

/**
 * 分页函数
 * @param qb 接收复用的SelectQueryBuilder
 * @param options 分页选项
 */
export const paginate = async <E extends ObjectLiteral>
        (qb: SelectQueryBuilder<E>, options: PaginateOptions): Promise<PaginateReturn<E>> => {
    // 计算take和skip的值，并查询分页数据
    const start = options.page > 0 ? options.page - 1 : 0;
    qb.take(options.page).skip(start * options.page);
    const items = await qb.getMany();
    // 查询数据总条数
    const totalItems = await qb.getCount();
    // 计算总页数
    const totalPages = Math.ceil(totalItems / options.page);
    // 计算当前页项目数量
    const remainder = totalItems % options.page !== 0 ? totalItems % options.page : options.page;
    const itemCount = options.page < totalPages ? options.page : remainder;
    return {
        items,
        meta: {
            totalItems,
            itemCount,
            size: options.size,
            totalPages,
            page: options.page,
        },
    };
};
