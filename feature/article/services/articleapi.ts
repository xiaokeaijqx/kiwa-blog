import axiosInstance from "@/lib/axios";
import {BASE_URL} from "@/lib/constans";
import {
    ArticleFormValues, CategoryType,

    ProcessedArticleOne,
    ProcessedCategoryItemList,
    ProcessedCategoryItems, TagType,
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

export  const queryArticleById = async (id:string):Promise<ProcessedArticleOne>=>{
    const {data} = await axiosInstance.get(`${BASE_URL}/article/${id}`);
    console.log(data)
    return {
        data: data.data,
        errorCode: data.errorCode,
        errorMessage: data.errorMessage,
        success: data.success,
        showType: data.showType
    };
}
// export const queryCategory = async (): Promise<catgorytype[]> => {
//     const response = await axiosInstance.get(`${BASE_URL}/basic-system/sysRole/page`);
//     return response.data.data;
// }

export const queryCategory = async (): Promise<CategoryType[]> => {
    const {data} = await axiosInstance.get(`${BASE_URL}/category`);
    return data.data;
}
export const queryTag = async (): Promise<TagType[]> => {
    const {data} = await axiosInstance.get(`${BASE_URL}/tag`);
    return data.data;
}

export const queryArticle = async (data: ArticleFormValues) => {
    const response = await axiosInstance.post(`${BASE_URL}/article`,
        data
    );
    console.log(data)
    return response;
}