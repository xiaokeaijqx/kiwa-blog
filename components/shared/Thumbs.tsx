import React from 'react';
import {ThumbsDown, ThumbsUp} from "lucide-react";

const Thumbs = () => {
    return (

    <div className={"flex justify-center gap-[4rem] my-[4rem] mx-0"}>
        <div className={"flex gap-[1rem]"}>
            <ThumbsUp className={"w-[24px]"}/>
            <span>点赞</span>
        </div>
        <div className={"flex gap-[1rem]"}>
            <ThumbsDown className={"w-[24px]"}/>
            <span>不喜欢</span>
        </div>

    </div>
    );
};

export default Thumbs;