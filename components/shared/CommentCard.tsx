import React, {useState} from 'react';
import {CommentNodeResponse} from "@/feature/article/types";

import Comment from "@/components/shared/Comment";

interface CommentCardProps {
    data: CommentNodeResponse,
    isReply :boolean
}

const CommentCard = ({data,isReply=false}: CommentCardProps) => {

    return (

        <div className={`flex flex-col border-l-2 ${isReply ? "ml-10 pl-4 border-gray-200" : "border-gray-300"}`}>
            <Comment  key={data.id}
                      data={data}
            />

            <div className={"ml-[60px]"}>

            {data.replies?.map((reply) => (
                <Comment key={reply.id} data={reply} isReply={true}/>

            ))}
            </div>

            <div className={"text-sm text-gray-500  ml-15"}>`共{data.replyCount}条回复，点击查看`</div>

        </div>
    );
};

export default CommentCard;