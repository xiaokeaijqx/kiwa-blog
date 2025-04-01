import {CommentList, LikeCommentResponse,} from "@/feature/article/types";
import axiosInstance from "@/lib/axios";
import {BASE_URL} from "@/lib/constans";


// "targetId":uuid,
// "userId": int,
//  "targetType": string",
//  "parentCommentId": uuid
//
// "content": "sint voluptate non"

export const ArticleComment = async (
    id: string,
    userId: number,
    targetType: string,
    parentCommentId: string | null,
    comment: string,
    ): Promise<CommentList> => {
    const {data} = await axiosInstance.post(`${BASE_URL}/comment`, {
        targetId: id,
        userId: userId,
        targetType: targetType,
        parentCommentId: parentCommentId,
        content: comment
    })


    return data
}




export const queryComment = async ( params: {
    current?: number;
    depth: number;
    pageSize?: number;
    previewReplyCount: number;
    sortField?: string;
    sortType?: string;
    "targetId": string;
}): Promise<CommentList> => {
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
export  const queryLikeArticle = async (id:string,userId:number,targetType:string,isActive:boolean):Promise<LikeCommentResponse>=>{
    const {data} = await axiosInstance.post(`${BASE_URL}/interaction/article/like`,{
        targetId:id,
        userId:userId,
        targetType:targetType,
        isActive:isActive

    })
    return data
}

export  const queryStarArticle = async (id:string,userId:number,targetType:string,isActive:boolean):Promise<LikeCommentResponse>=>{
    const {data} = await axiosInstance.post(`${BASE_URL}/interaction/article/favorite`,{
        targetId:id,
        userId:userId,
        targetType:targetType,
        isActive:isActive

    })
    return data
}