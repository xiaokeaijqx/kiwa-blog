import {CommentList, LikeCommentResponse, ProcessedCommentList, UserLikeComment} from "@/feature/article/types";
import axiosInstance from "@/lib/axios";
import {BASE_URL} from "@/lib/constans";
import exp from "node:constants";


// "targetId":uuid,
// "userId": int,
//  "targetType": string",
//  "parentCommentId": uuid
//
// "content": "sint voluptate non"

export const ArticleComment = async (
    id: string, comment: string, userId: string, parentCommentId: string | null, targetType: string): Promise<CommentList> => {
    const {data} = await axiosInstance.post(`${BASE_URL}/comment`, {
        targetId: id,
        userId: userId,
        targetType: targetType,
        parentCommentId: parentCommentId,
        content: comment
    })


    return data
}


export const queryComment = async ( params: { targetId: string }): Promise<CommentList> => {
    const {data: res} = await axiosInstance.get(`${BASE_URL}/comment`, {params})
    return res
}
export  const queryLikeComment = async (id:string,userId:number,targetType:string,isActive:boolean):Promise<LikeCommentResponse>=>{
    const {data} = await axiosInstance.post(`${BASE_URL}/interaction/comment/like`,{
        targetId:id,
        userId:userId,
        targetType:targetType,
        isActive:isActive

    })
    return data
}