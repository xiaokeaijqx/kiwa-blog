"use client"
import React, {useEffect, useState} from 'react';
import Notecard from "@/components/shared/notecard";
import {queryArticleById} from "@/feature/article/services/articleapi";
import {toast} from "sonner";
import {ProcessedArticle} from "@/feature/article/types";
import indexImage1 from "@/public/indexImage1.jpg";
import Image from "next/image";
import {Calendar, Eye,  User} from "lucide-react";
import Thumbs from "@/components/shared/Thumbs";

import Commentcard from "@/components/shared/InputCard";
import {useParams} from "next/navigation";
import InputCard from "@/components/shared/InputCard"; // 导入 useRouter

// import { useRouter } from 'next/router';


const Page = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const params = useParams();
    const id = params.articleId; // 从搜索参数中获取 articleId
    const [article, setArticle] = useState<ProcessedArticle>({
        "id": "",
        "title": "",
        "content": "",
        "cover": "",
        "author": "sara",
        "publishTime": "",
        "category": {
            "categoryId": 0,
            "categoryName": ""
        },
        "tags": [
            {
                "tagId": 0,
                "tagName": ""
            },
        ],
        "hotScore": 0,
        "likeCount": 0,
        "favoriteCount": 0,
        "commentCount": 0,
        "readCount": 0,
        summary: "",
        timestamp: 0,
    });
    // const [isClient, setIsClient] = useState(false);
    // useEffect(() => {
    //     setIsClient(true); // 确保在客户端渲染时更新状态
    // }, []);

    // const { id } = isClient ? router.query : {}; // 确保在客户端渲染时获取 router.query



    useEffect(() => {
        // if (!id) return; // 如果 articleId 不存在，返回
        console.log(id);
        const getQueryArticleById = async () => {
            setLoading(true); // 设置加载状态为 true
            try {
                const { data } = await queryArticleById(id as string); // 请求文章数据
                setArticle(data); // 设置文章数据
            } catch (error) {
                console.log(error);
                toast.error("文章加载失败！");
            } finally {
                setLoading(false); // 设置加载状态为 false
            }
        };
        getQueryArticleById();
    }, []); // 添加 router 作为依赖

    if (loading) {
        return <div>加载中...</div>; // 加载状态
    }

    if (!article) {
        return <div>文章加载失败，请稍后重试。</div>; // 错误状态
    }


    return (
        <div className={"bg-[var(--background)] h-auto "}>

            {/*banner*/}
            <div className="relative h-[40vh] w-full overflow-hidden bg-[#000]">
                <Image
                    src={indexImage1}
                    alt={"首页图片"}
                    width={1920}
                    height={1080}
                    className="w-full h-full opacity-80 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                <div className={"absolute bottom-[5rem] left-0 right-0   w-[70vw] mx-auto bg-linear-to-t  text-white "}>
                    <h1 className={"text-4xl font-bold py-[2rem]"}>{article.title}</h1>
                    <div className={"flex gap-[3rem] align-center  opacity-90 animation-fade-in text-lg pb-[2rem]"}>
                        <div className={"flex align-center "}>
                            <User size={16}/>
                            {article.author}
                        </div>
                        <div className={"flex  mr-3 items-center"}>
                            <Calendar size={16}/>
                            {article.publishTime}
                        </div>
                        <div className={"flex  mr-3 items-center "}>
                            <Eye size={16}/>
                            {article.readCount}
                        </div>
                        <span className={'flex mr-3 items-center'}>
              <svg viewBox="0 0 1024 1024" width="16" height="16">
                <path
                    d="M113.834667 291.84v449.194667a29.013333 29.013333 0 0 0 28.842666 29.013333h252.928v90.453333l160.597334-90.453333h252.928a29.013333 29.013333 0 0 0 29.013333-29.013333V291.84a29.013333 29.013333 0 0 0-29.013333-29.013333h-665.6a29.013333 29.013333 0 0 0-29.696 29.013333z"
                    fill="#FFDEAD"></path>
                <path
                    d="M809.130667 262.826667h-665.6a29.013333 29.013333 0 0 0-28.842667 29.013333v40.106667a29.013333 29.013333 0 0 1 28.842667-29.013334h665.6a29.013333 29.013333 0 0 1 29.013333 29.013334V291.84a29.013333 29.013333 0 0 0-29.013333-29.013333z"
                    fill="#FFF3DB"></path>
                <path
                    d="M556.202667 770.048h252.928a29.013333 29.013333 0 0 0 29.013333-29.013333V362.837333s-59.733333 392.533333-724.309333 314.709334v63.488a29.013333 29.013333 0 0 0 28.842666 29.013333h253.098667v90.453333z"
                    fill="#F2C182"></path>
                <path
                    d="M619.008 632.32l101.888-35.157333-131.754667-76.117334 29.866667 111.274667zM891.904 148.992a61.44 61.44 0 0 0-84.138667 22.528l-19.968 34.133333 106.666667 61.610667 19.968-34.133333a61.781333 61.781333 0 0 0-22.528-84.138667z"
                    fill="#69BAF9"></path>
                <path d="M775.338667 198.775467l131.669333 76.032-186.026667 322.218666-131.6864-76.032z"
                      fill="#F7FBFF"></path>
                <path
                    d="M775.168 198.826667l-5.290667 9.216 59.221334 34.133333a34.133333 34.133333 0 0 1 12.458666 46.592l-139.946666 242.346667a34.133333 34.133333 0 0 1-46.762667 12.629333l-59.050667-34.133333-6.656 11.434666 88.746667 51.2L720.896 597.333333l186.026667-322.56z"
                    fill="#D8E3F0"></path>
                <path
                    d="M616.448 622.592l2.56 9.728 101.888-35.157333-44.885333-25.941334-59.562667 51.370667zM891.904 148.992c-1.024 0-2.218667-0.853333-3.242667-1.536A61.610667 61.610667 0 0 1 887.466667 204.8l-19.968 34.133333-73.728-42.496-5.12 8.704 106.666666 61.610667 19.968-34.133333a61.781333 61.781333 0 0 0-23.381333-83.626667z"
                    fill="#599ED4"></path>
                <path
                    d="M265.898667 417.621333H494.933333a17.066667 17.066667 0 1 0 0-34.133333H265.898667a17.066667 17.066667 0 1 0 0 34.133333zM265.898667 533.504H494.933333a17.066667 17.066667 0 0 0 0-34.133333H265.898667a17.066667 17.066667 0 0 0 0 34.133333z"
                    fill="#3D3D63"></path>
                <path
                    d="M959.488 354.645333a99.84 99.84 0 0 0-23.722667-127.488 78.677333 78.677333 0 0 0-142.848-64.170666l-11.605333 20.138666a17.066667 17.066667 0 0 0-20.821333 7.168l-32.085334 55.466667H142.677333a46.250667 46.250667 0 0 0-45.909333 46.08v449.194667a46.08 46.08 0 0 0 45.909333 46.08h236.032v73.386666a17.066667 17.066667 0 0 0 8.362667 14.848 17.066667 17.066667 0 0 0 8.704 2.218667 17.066667 17.066667 0 0 0 8.362667-2.218667l156.672-88.234666h248.32a46.08 46.08 0 0 0 46.08-46.08V398.677333L921.6 283.306667a17.066667 17.066667 0 0 0-4.266667-21.504l1.877334-3.413334a65.365333 65.365333 0 0 1 10.410666 79.189334l-53.077333 91.989333a56.832 56.832 0 0 0 20.821333 77.653333 17.066667 17.066667 0 0 0 24.234667-6.314666 17.066667 17.066667 0 0 0-6.997333-23.04 23.04 23.04 0 0 1-8.362667-31.061334z m-138.410667 386.389334a11.946667 11.946667 0 0 1-11.946666 11.946666H556.202667a17.066667 17.066667 0 0 0-8.362667 2.218667l-134.997333 76.117333v-61.269333a17.066667 17.066667 0 0 0-17.066667-17.066667H142.677333a11.946667 11.946667 0 0 1-11.776-11.946666V291.84a11.946667 11.946667 0 0 1 11.776-11.946667h565.930667L574.464 512a17.066667 17.066667 0 0 0-1.706667 12.970667L597.333333 615.253333H265.898667a17.066667 17.066667 0 1 0 0 34.133334h352.938666a17.066667 17.066667 0 0 0 5.802667 0l102.4-35.328a17.066667 17.066667 0 0 0 9.216-7.509334l85.333333-147.968z m-204.8-184.661334l63.829334 36.864-49.322667 17.066667z m206.848-170.666666v1.365333l-108.373333 186.709333-102.4-59.050666L781.482667 221.866667l102.4 59.050666z m76.458667-161.28L887.466667 244.224l-76.970667-44.373333 11.264-19.797334a44.544 44.544 0 1 1 77.141333 44.544z"
                    fill="#3D3D63"></path>
              </svg>
                            {article.commentCount}评论
            </span>
                        <span className={'flex mr-3 items-center'}>
                        <svg viewBox="0 0 1024 1024" width="16" height="16">
                <path d="M14.656 512a497.344 497.344 0 1 0 994.688 0 497.344 497.344 0 1 0-994.688 0z"
                      fill="#FF0000"></path>
                <path
                    d="M374.976 872.64c-48.299-100.032-22.592-157.44 14.421-211.37 40.448-58.966 51.115-117.611 51.115-117.611s31.659 41.386 19.115 106.005c56.149-62.72 66.816-162.133 58.325-200.405 127.317 88.746 181.59 281.002 108.181 423.381C1016 652.501 723.093 323.2 672.277 285.867c16.939 37.333 20.054 100.032-14.101 130.474-58.027-219.84-201.664-265.002-201.664-265.002 16.96 113.536-61.781 237.397-137.344 330.24-2.816-45.163-5.632-76.544-29.483-119.808-5.333 82.176-68.373 149.269-85.29 231.445-22.912 111.637 17.237 193.173 170.581 279.424z"
                    fill="#FFFFFF"></path>
              </svg>
                            {article.hotScore}热度
                        </span>
                        <span className={'flex mr-3 items-center'}>
              <svg viewBox="0 0 1024 1024" width="16" height="16">
                                    <path
                                        d="M510.671749 348.792894S340.102978 48.827055 134.243447 254.685563C-97.636714 486.565724 510.671749 913.435858 510.671749 913.435858s616.107079-419.070494 376.428301-658.749272c-194.095603-194.096626-376.428302 94.106308-376.428301 94.106308z"
                                        fill="#FF713C"></path>
                                </svg>
                            {article.favoriteCount}赞
            </span>
                    </div>
                </div>
            </div>
            {/*文章主题*/}
            <div className={"min-w-[600px]  w-[70vw] mx-auto rounded-[2rem] shadow-box bg-white relative top-[-5rem] py-[5rem] px-[4rem]"}>

                <h1>{article.title}</h1>
                <p className={"min-h-[30vh]"}>{article.content}</p>
                <div>
                    <span className={"text-lg"}>
                        文章最后更新于 {article.publishTime}
                    </span>
                </div>
                <Notecard name={article.author}/>
                <Thumbs/>
            </div>
            {/*评论区*/}
            {/* 评论区域 */}
            <section className={""}>
                <InputCard/>
                <div className={""}>


                </div>
            </section>
        </div>
    );
};

export default Page;