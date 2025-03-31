import React from 'react';
import {CommentNodeResponse} from "@/feature/article/types";
import Image from "next/image";

interface CommentCardProps {
    data: CommentNodeResponse,
}

const CommentCard = ({data}: CommentCardProps) => {
    return (
        <div className={"w-full flex border-b-2 border-gray-300 p-4 hover:bg-gray-100 transition duration-300"}>
            <div className={"w-[60px] h-[80px] flex flex-col items-center"}>
                <div className={"w-[60px] h-[60px] overflow-hidden relative rounded-full border-2 border-indigo-500"}>
                    <Image
                        src={data.author?.avatar}
                        alt={"用户头像"}
                        fill
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        priority
                    />
                </div>
                <div className={"mt-2 text-sm font-semibold text-gray-700"}>{data.author?.username}</div>
            </div>

            <div className={"w-full flex flex-col ml-4"}>
                <div className={"flex items-center mb-1"}>
                    <div className={"bg-indigo-500 text-white text-xs px-2 py-1 rounded-md"}>{data.author?.level}</div>
                    <div className={"border border-green-500 text-green-500 text-xs px-2 py-1 rounded-md ml-2"}>{data.author?.rank}</div>
                </div>
                <p className={"text-xs text-gray-500 mb-2"}>{data.createTime?.dateTime}</p>
                <div className={"text-black bg-indigo-50 p-2 rounded-md shadow-md"}>{data.content}</div>
            </div>
        </div>
    );
};

export default CommentCard;