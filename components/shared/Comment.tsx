import React, {useState} from 'react';
import {CommentNodeResponse} from "@/feature/article/types";
import Image from "next/image";
import {ThumbsDown, ThumbsUp} from "lucide-react";
import {queryLikeComment} from "@/feature/article/services/commentapi";
import {toast} from "sonner";

interface CommentCardProps {
    data: CommentNodeResponse,
    isReply?: boolean
}


const Comment = ({data, isReply = false}: CommentCardProps) => {
        const [isLiked, setIsLiked] = useState(false);
        const [isDisliked, setIsDisliked] = useState(false);
        const [commentLike,setCommentLike] = useState(data.likeCount)

const  userId =11
        const handleLikeClick = () => {
           //异步所以必须用本地变量
            const like = !isLiked;
            // if (isLiked){
            console.log(isLiked) //false
            setIsLiked(like);
            setIsDisliked(false);
            console.log(like)//true
            queryLikeComment(data.id, Number(userId), "COMMENT", like)
                .then(r => {
                    console.log(r)
                    if (r.success && like) {
                        console.log("点赞成功,isLiked")
                        toast.success("点赞成功")
                        setIsLiked(true)
                        setCommentLike(commentLike+1)
                    } else {
                        console.log(`点赞失败,${like}`)
                        setIsLiked(false)
                        setCommentLike(commentLike-1)

                    }

                })

            // }

        }



        return (
            <div className={"w-full flex  p-4    bg-white"}>
                <div className={"w-[60px] h-[80px] flex flex-col items-center"}>
                    <div
                        className={`${isReply ? "w-[40px] h-[40px]" : "w-[60px] h-[60px]"} overflow-hidden relative rounded-full border-2 border-indigo-500`}
                    >
                        <Image
                            src={data.author?.avatar || "https://avatars.githubusercontent.com/u/74864696"}
                            alt={"用户头像"}
                            fill
                            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                            priority
                        />
                    </div>
                </div>

                <div className={"w-full flex flex-col ml-4"}>
                    <div className={"flex items-center mb-1"}>
                        <div className={"mt-2 text-md font-semibold text-gray-800"}>{data.author?.username}</div>
                        <div
                            className={"bg-indigo-500 text-white text-xs px-2 py-1 rounded-md"}>{data.author?.level}</div>
                        <div
                            className={"border border-green-500 text-green-500 text-xs px-2 py-1 rounded-md ml-2"}>{data.author?.rank}</div>
                    </div>
                    <div className={"text-black bg-indigo-50 p-2 rounded-md shadow-md text-lg"}>{data.content}</div>

                    <div className={"flex items-center gap-8 mt-5"}>
                        <p className={`text-sm text-gray-500 `}>{data.createTime?.dateTime}</p>
                        <div className={`text-sm text-gray-500  ${isLiked ? 'text-indigo-500' : ''}`}
                             onClick={() => handleLikeClick()}>{commentLike}
                            <ThumbsUp
                                className={`inline-block w-4 h-4 ${isLiked ? 'fill-indigo-500 stroke-indigo-500' : 'stroke-current'}`}/>
                        </div>
                        <div className={"text-sm text-gray-500 "}
                        >{commentLike}
                            <ThumbsDown
                                className={`inline-block w-4 h-4 ${isDisliked ? 'fill-indigo-500 stroke-indigo-500' : 'stroke-current'}`}
                            />
                        </div>


                        <div className={`text-sm text-gray-500 ${isReply && "hidden"}  `}>回复</div>

                        {/*<div className={"text-md text-gray-500"}>{data.path}</div>*/}
                    </div>


                </div>
            </div>
        );
    }
;

export default Comment;