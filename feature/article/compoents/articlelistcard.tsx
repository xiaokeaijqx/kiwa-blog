import React from 'react';
import ArticleCard from "@/feature/article/compoents/articlecard";
import {ProcessedArticle, ProcessedArticleItemList} from "@/feature/article/types";

// import {getAll} from "@/feature/article/services/article";

const ArticleList = ({data, title,limit}: { data: ProcessedArticleItemList; title?: string;limit?:number }) => {
    const limitedData =limit ? data.data.slice(0, limit) : data.data;

    return (
        <div className="my-10">
            <h2 className="h2-bold mb-4">{title}</h2>
            {limitedData && limitedData.length > 0 ? (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                    {limitedData
                        .map((processedArticle: ProcessedArticle) => (
                            <ArticleCard
                                key={processedArticle.id} data={processedArticle}
                            />

                        ))}
                </div>

            ) : (
                <div>
                    <p>No products found</p>
                </div>
            )}
        </div>


    );
};

export default ArticleList;