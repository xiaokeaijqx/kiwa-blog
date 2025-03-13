"use client"
import Image from "next/image";
import {Printer} from "@/components/print"
import indexImage1 from "@/public/indexImage1.jpg"
import {ChevronDown} from "lucide-react";
import ProfileCard from "@/feature/article/compoents/profilecard";
import {querySortArticles} from "@/feature/article/services/articleapi";
import ArticleList from "@/feature/article/compoents/articlelistcard";
import {

    ProcessedCategoryItemList,
    ProcessedCategoryItems
} from "@/feature/article/types";
import {useEffect, useState} from "react";
import {toast} from "sonner";
import Noticecard from "@/feature/article/compoents/noticecard";
import Aside from "@/feature/article/compoents/aside";


export default function HomePage() {
    const [sortArticles, setSortArticles] = useState<ProcessedCategoryItemList>()
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
                console.log("sortArticles", sortArticles)
                setSortArticles(sortArticles)
            } catch (error) {
                console.log(error)
                toast.error("文章加载失败！")
            } finally {
                setLoading(false)
            }
        }
        getSortArticles()
    }, [])

    // const {data: articles, total, success} = await querySortArticles();
    return (
        <div className={"w-full"}>
            {/*banner*/}
            <div className="relative h-[50vh] overflow-hidden w-full">
                <Image
                    src={indexImage1}
                    alt={"首页图片"}
                    className="w-full h-[60vh] z-[-1] object-cover absolute top-0 left-0 before:absolute before:bg-col"
                    priority
                />
                {/* 添加渐变遮罩 */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent z-[1]"></div>

                {/* 首页文字 - 调整样式 */}
                <div
                    className={"absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-2/3 flex flex-col inset-0 items-center justify-center text-[var(--white)] gap-8 z-[2]"}>
                    <h1 className={"text-5xl font-bold tracking-wider drop-shadow-lg"}>
                        <span>KIWA 欢迎你！</span>
                    </h1>
                    <div
                        className={"cursor-pointer px-8 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 shadow-lg"}>
                        <Printer printerInfo={'何处相逢，登宝钗楼，访铜雀台。'}/>
                    </div>
                </div>

                {/* 调整波浪动画的层级 */}




                <div className={
                    "h-[8.4rem] bg-[image:var(--bannerWave1)] bg-repeat-x w-[200%] absolute bottom-0 z-[3] wave1"
                }></div>

                <div className={
                    "h-[10rem] bg-[image:var(--bannerWave2)] bg-repeat-x w-[200%] absolute bottom-0 z-[4] wave2"
                }></div>


                <ChevronDown
                    className="absolute bottom-[6rem] left-1/2 -translate-x-1/2 text-[var(--white)] text-[2rem] w-[5rem] h-[5rem] font-bold cursor-pointer z-[5] animation-my-shake hover:scale-110 transition-transform duration-300"/>
            </div>

            {/*{contain}*/}

            <div className=" w-full   flex justify-center  px-4 sm:px-6 lg:px-8 py-8  ">

                <div className={"flex flex-row gap-[6rem] mx-4 w-[1200px]"}>

                            <div className={"w-1/4 "}>
                                <Aside/>
                            </div>

                            <div className={"w-3/4"}>
                                <Noticecard/>
                                {sortArticles?.data
                                    .map((oneCategoryItems: ProcessedCategoryItems) =>
                                        // <div key={oneCategoryItems.category.categoryId}>{oneCategoryItems.category.categoryId}</div>)
                                        <ArticleList data={oneCategoryItems} limit={8}
                                                     key={oneCategoryItems.category.categoryId}
                                                     title={oneCategoryItems.category.categoryName}/>)
                                }

                            </div>

                        </div>
                    </div>
                </div>


                );
                }
