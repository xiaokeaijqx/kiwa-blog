// src/features/article/transformers.ts
import dayjs from 'dayjs'; // 时间库
import type {ProcessedArticle, ArticleListItem} from './types';
// 首先修正转换器中的 tags 处理（原代码会报错，因为 tags 是数组）
// export const articleTransformer = (
//     raw: ArticleListItem
// ): ProcessedArticle => {
//     return {
//         id: raw.id,
//         title: raw.title,
//         summary: raw.summary || '', // 处理 null 值
//         cover: raw.cover , // 建议添加默认封面
//         author: raw.author,
//         publishTime: dayjs(raw.publishTime).format('YYYY-MM-DD HH:mm'),
//         category: {
//             categoryId: raw.category.categoryId,
//             categoryName: raw.category.categoryName,
//         },
//         // 修正 tags 处理（原写法会报错，因为 tags 是数组）
//         tags: raw.tags?.map((tag: { tagId: number; tagName: string; }) => ({
//             tagId: tag.tagId,
//             tagName: tag.tagName
//         })) || [], // 处理 null 值情况
//         hotScore: raw.hotScore || 0,
//         likeCount: raw.likeCount || 0,
//         favoriteCount: raw.favoriteCount || 0,
//         commentCount: raw.commentCount || 0,
//         readCount: raw.readCount || 0,
//         timestamp: dayjs(raw.publishTime).unix()
//     };
// };

export const articleTransformer = (
    raw: ArticleListItem
): ProcessedArticle => ({
    id: raw.id,
    title: raw.title,
    summary: raw.summary ?? '',
    cover: raw.cover ,
    author: raw.author,
    publishTime: dayjs(raw.publishTime).format('YYYY-MM-DD HH:mm'),
    category: {
        categoryId: raw.category.categoryId,
        categoryName: raw.category.categoryName,
    },
    tags: (raw.tags || []).map(tag => ({
        tagId: tag.tagId,
        tagName: tag.tagName
    })),
    hotScore: raw.hotScore ?? 0,
    likeCount: raw.likeCount ?? 0,
    favoriteCount: raw.favoriteCount ?? 0,
    commentCount: raw.commentCount ?? 0,
    readCount: raw.readCount ?? 0,
    timestamp: dayjs(raw.publishTime).unix()
});

// 使用示例
