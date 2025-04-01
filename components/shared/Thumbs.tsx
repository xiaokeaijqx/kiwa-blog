import React, {useState} from 'react';
import {ThumbsDown, ThumbsUp} from "lucide-react";
import {queryLikeComment} from "@/feature/article/services/commentapi";
import {toast} from "sonner";

const Thumbs = () => {
    const [isLiked, setIsLiked] = useState(false);
    const [isDisliked, setIsDisliked] = useState(false);
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
                } else {
                    console.log(`点赞失败,${like}`)
                    setIsLiked(false)
                }

            })

        // }

    }

    return (

    <div className={"flex justify-center gap-[4rem] my-[4rem] mx-0"}>
        <div className={`text-sm text-gray-500  ${isLiked ? 'text-indigo-500' : ''}`}
             onClick={() => handleLikeClick()}>{data.likeCount}
            <ThumbsUp
                className={`inline-block w-4 h-4 ${isLiked ? 'fill-indigo-500 stroke-indigo-500' : 'stroke-current'}`}/>
        </div>
        <div className={"flex gap-[1rem]"}>
            <ThumbsDown className={"w-[24px]"}/>
            <span>不喜欢</span>
        </div>

    </div>
    );
};

export default Thumbs;