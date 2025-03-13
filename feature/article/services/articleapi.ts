import axiosInstance from "@/lib/axios";
import {BASE_URL} from "@/lib/constans";
import {
    ProcessedCategoryItemList,
    ProcessedCategoryItems
} from "@/feature/article/types";
import {articleTransformer} from "@/feature/article/transformers";

export const querySortArticles = async (): Promise<ProcessedCategoryItemList> => {
    const {data} = await axiosInstance.get(`${BASE_URL}/article/main`);
    //article的合集
    console.log(data)

    // const processData:ProcessedCategoryItems[]=data.data
    //     .filter((categoryItems: ProcessedCategoryItems) => categoryItems.articles)
    //     .flatMap((CategoryItems: ProcessedCategoryItems) => CategoryItems.articles!.map(articleTransformer))
    data.data.forEach((categoryItems: ProcessedCategoryItems) => {
        if (categoryItems.articles) {
            categoryItems.articles = categoryItems.articles.map(articleTransformer);
        }
    });
    console.log(data.data)

    return {
        data: data.data,
        errorCode: data.errorCode,
        errorMessage: data.errorMessage,
        success: data.success,
        showType: data.showType
    };
}
