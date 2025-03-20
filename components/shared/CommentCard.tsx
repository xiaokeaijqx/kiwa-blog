import React from 'react';
import { ProcessedComment} from "@/feature/article/types";
interface CommentCardProps {
    data: ProcessedComment,

}
const CommentCard = ({data}: CommentCardProps) => {
    return (
        <div>
            {data.avatar}
            {data.likeCount}
            {data.replyCount}
        </div>
    );
};

export default CommentCard;