import axiosInstance from "@/lib/axios";
import {BASE_URL} from "@/lib/constans";
import {ArticleItemList, ProcessedArticle, ProcessedArticleItemList} from "@/feature/article/types";
import {articleTransformer} from "@/feature/article/transformers";

export const querySortArticles = async (): Promise<ProcessedArticleItemList> => {
    const {data} = await axiosInstance.get(`${BASE_URL}/public/v1/article/article/sortArticles`);

    const processData:ProcessedArticle[] = data.data.map(articleTransformer);
    return {
        data: processData,
        total: data.total,
        success: data.success
    };
}
