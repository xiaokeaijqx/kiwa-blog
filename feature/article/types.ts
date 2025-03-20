export interface catgorytype {
    categoryId: number;
    categoryName: string;

}

export interface tagtype {
    tagId: number;
    tagName: string;
}


//  一篇文章
export interface ArticleListItem {
    id: string;
    title: string;
    summary: string;
    cover: string;
    author: string;
    publishTime: string;
    category: catgorytype
    tags: tagtype[];
    "hotScore": number,
    "likeCount": number,
    "favoriteCount": number,
    "commentCount": number,
    "readCount": number
}

//一篇加工后的文章
export interface ProcessedArticle {
    id: string;
    title: string;
    summary: string;
    content: string;
    cover: string;
    author: string;
    publishTime: string;
    category: catgorytype;
    tags:
        tagtype[];
    hotScore: number,
    likeCount: number,
    favoriteCount: number,
    commentCount: number,
    readCount: number,
    timestamp: number,
}

//加工后的文章data
export interface ProcessedArticleOne {
    data: ProcessedArticle;
    errorCode: number,
    errorMessage: string,
    success: boolean,
    showType: number
}


// 文章列表无其他
export interface ArticleItemList {
    articles: ArticleListItem[];
}

//加工后文章列表无其他
export interface ProcessedArticleItemList {
    articles: ProcessedArticle[];
}

// 加工后分类列表 整个分类文章
export interface ProcessedCategoryItems {
    category: {
        categoryId: number;
        categoryName: string;
    };
    articles: ProcessedArticle[];

}

//所有分类文章
export interface ProcessedCategoryItemList {
    data: ProcessedCategoryItems[]
    errorCode: number,
    errorMessage: string,
    success: boolean,
    showType: number

}

// --------------comment-----------------

export interface CommentListItem {
    id: string;
    avatar?: string;
    username?: string;
    userid?: string;
    level?: number;
    content: string;
    author: string;
    rank?: string;
    publishTime: string;
    likeCount?: number;
    replyCount?: number;
    replies?: CommentListItem[];
}

export interface ProcessedComment {
    id: string,
    avatar?: string,
    username?: string,
    level?: number,
    content: string,
    author: string,
    rank?: string,
    publishTime: string,
    likeCount?: number,
    replyCount?: number,
    replies?: ProcessedComment[],
    comment?: ProcessedComment
}


export interface ProcessedCommentList {
    data: ProcessedComment[];
    errorCode: number;
    errorMessage: string;
    success: boolean;
    showType: number;
}