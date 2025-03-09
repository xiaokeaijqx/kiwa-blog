"use client"
import Image from "next/image";
import {Printer} from "@/components/print"
import indexImage1 from "@/public/indexImage1.jpg"
import {ChevronDown} from "lucide-react";
import ProfileCard from "@/feature/article/compoents/profilecard";
import {querySortArticles} from "@/feature/article/services/articleapi";
import ArticleList from "@/feature/article/compoents/articlelistcard";
import {ProcessedArticleItemList} from "@/feature/article/types";
import {useEffect, useState} from "react";
import {toast} from "sonner";


export default function HomePage() {
    const [sortArticles, setSortArticles] = useState<ProcessedArticleItemList>({})
    const [loading, setLoading] = useState(true)

    // const sortArticles: ProcessedArticleItemList = {data: [
    //         {
    //             id: "1",
    //             title: "kiwabb的博客",
    //             name: "kiwabb",
    //             src: "https://avatars.githubusercontent.com/u/101063295?v=4",
    //             rating: "5",
    //             content: "kiwabb的博客",
    //             description: "kiwabb的博客",
    //             createdAt: "2023-10-01 15:30",
    //             timestamp: 1696102000,
    //
    //         },
    //     ],
    //     total: 1,}

    useEffect(() => {
        const getSortArticles = async () => {
            try {
                const sortArticles = await querySortArticles();
                setSortArticles(sortArticles)
            } catch (error) {
                console.log(error)
                toast.error("文章加载失败！")
            } finally {
                setLoading(false)
            }
        }
        getSortArticles()
    })

    // const {data: articles, total, success} = await querySortArticles();
    return (
        <div className={"w-full "}>
            {/*banner*/}
            <div className="relative h-[50vh]  overflow-hidden w-full">
                <Image
                    src={indexImage1}
                    alt={"首页图片"}
                    className="w-full  h-[50vh] z-[-1] object-cover fixed top-0 left-0 before:absolute before:bg-col "
                    priority
                />
                {/*首页文字*/}
                <div
                    className={"absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-2/3 flex flex-col  inset-0 items-center justify-center text-[var(--white)] gap-5"}>
                    <h1 className={"text-5xl font-bold "}><span>KIWA 欢迎你！</span></h1>
                    <div
                        className={"cursor-pointer px-6 rounded-lg bg-[var(--translucent)] text-[var(--white)] leading-[4rem] "}>
                        <Printer printerInfo={'何处相逢，登宝钗楼，访铜雀台。'}/>
                    </div>
                </div>


                <div
                    className={"h-[8.4rem] bg-[image:var(--bannerWave1)]  bg-repeat-x w-[200%] absolute bottom-0 z-5 animate-gradientBG "}></div>

                <div
                    className={"h-[10rem] bg-[image:var(--bannerWave2)]  bg-repeat-x w-[400%] absolute bottom-0 z-10 animate-gradientBG "}>
                </div>
                <ChevronDown
                    className="absolute bottom-[6rem] left-1/2 -translate-x-1/2 text-[var(--white)] text-[2rem] w-[5rem] h-[5rem] font-bold cursor-pointer z-15 animation-my-shake"/>
            </div>


            {/*{contain}*/}

            <div className={"w-full px-[3rem] "}>

                <div className={"flex flex-row gap-[2rem] "}>
                    <div className={"w-1/4 "}>
                        <ProfileCard/>
                    </div>

                    <div className={"w-3/4"}>
                        <ArticleList data={sortArticles}/>
                    </div>

                </div>
            </div>
        </div>


    );
}
