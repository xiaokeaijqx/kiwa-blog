import {ProcessedComment, ProcessedCommentList} from "@/feature/article/types";
import axiosInstance from "@/lib/axios";
import {BASE_URL} from "@/lib/constans";



export const ArticleComment = async (id:string, comment:string ,userId:string): Promise<ProcessedCommentList> => {
    const {data}= await axiosInstance.post(`${BASE_URL}/article/comment`, {

        body: JSON.stringify({
            id: id,
            content: comment,
            userId:userId
        }),
    });
    return data
};