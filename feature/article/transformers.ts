// src/features/article/transformers.ts
import dayjs from 'dayjs'; // 时间库
import type { ProcessedArticle, ArticleListItem} from './types';

export const articleTransformer = (
    raw: ArticleListItem
): ProcessedArticle => {
    return {
        id: raw.id,
        title: raw.title,
        name: raw.name,
        src: raw.src,
        rating:  raw.rating,
        content: raw.content,
        description:raw.description ,
        // 时间格式化处理
        createdAt: dayjs(raw.createdAt).format('YYYY-MM-DD HH:mm'),
        // 新增计算字段
        timestamp: dayjs(raw.createdAt).unix()
    };
};