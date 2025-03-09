import React from 'react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import indexImage1 from "@/public/indexImage1.jpg";
import {ProcessedArticle} from "@/feature/article/types";

const ArticleCard =
    ({data}: { data: ProcessedArticle }
    ) => {
        return (
            <Card
                className={"shadow-2xl max-w-sm h-[30rem] flex flex-col items-center justify-center gap-6 p-8 bg-gradient-to-br from-pink-200 via-purple-100 to-indigo-200 hover:shadow-xl transition-all duration-300 group"}>
                <CardHeader className={"w-full h-[18rem] "}>
                    <Image
                        src={indexImage1}
                        alt={"首页图片"}
                        className="w-full  h-[50vh] z-[-1] object-cover fixed top-0 left-0 before:absolute before:bg-col "
                        priority
                    />
                </CardHeader>

                <CardTitle>
                    {data.title}
                </CardTitle>

                <CardDescription>
                    {data.description}
                </CardDescription>

                <CardContent>
                    <div className="flex justify-between">
                        <div className={"bg-b/50"}>tag</div>
                        <div className={"bg-b/50"}>tag</div>
                    </div>
                </CardContent>


            </Card>
        );
    };


export default ArticleCard;