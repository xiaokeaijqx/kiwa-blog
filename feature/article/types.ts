

export interface ArticleListItem {
    id: string;
    name: string;
    src: string;
    title: string;
    rating: string;
    content: string;
    description: string;
    createdAt?: string;
}

// src/features/article/types.ts
export interface ProcessedArticle {
    id: string;
    title: string;
    name: string;
    src: string;
    rating: string;
    content: string;
    description: string;
    createdAt: string; // 格式化后的 "2023-10-01 15:30"
    timestamp: number; // 新增处理字段：Unix 时间戳
}
export interface ArticleItemList {
    data: ArticleListItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
}

export interface ProcessedArticleItemList {
    data: ProcessedArticle[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
}
