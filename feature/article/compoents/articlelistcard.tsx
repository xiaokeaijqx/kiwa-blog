import React from 'react';
import ArticleCard from "@/feature/article/compoents/articlecard";
import {ProcessedArticle, ProcessedArticleItemList} from "@/feature/article/types";
import {Blocks, Volume2} from 'lucide-react';

// import {getAll} from "@/feature/article/services/article";

const ArticleList = ({data, title, limit}: { data: ProcessedArticleItemList; title?: string; limit?: number }) => {
    console.log("data", data)
    const limitedData = limit && data.articles ? data.articles.slice(0, limit) : data.articles;

    return (
        <div className="">
            <div className={"flex items-center gap-2 border-b border-dashed text-[var(--greyFont)] mt-[1rem]"}>
                <Blocks className="as variant='ghost'"/>
                <h2 className="h2-bold">
                    {title}
                </h2>
            </div>


            {limitedData && data.articles.length > 0 ? (
                <div
                    className="grid  gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 ">
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