import React, {useEffect, useState} from 'react';
import { CommentNodeResponse, ProcessedArticle} from "@/feature/article/types";
import {Send, Smile, Image} from "lucide-react";
import {ArticleComment, queryComment} from "@/feature/article/services/commentapi";
import CommentCard from "@/components/shared/CommentCard";
import {toast} from "sonner";

const InputCard = ({data}: {data:ProcessedArticle}) => {
    const [comment, setComment] = useState('');
    const [commentData, setCommentData] = useState<CommentNodeResponse[]|  undefined| null>()
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const userId = "11";

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // 输入验证
        if (!comment.trim()) {
            setError('评论内容不能为空');
            return;
        }

        setIsSubmitting(true);
        setError(null);

        try {
            // 提交评论
            const response = await ArticleComment(data.id, comment, userId,"2","type");
            console.log('Comment submitted successfully!');
            // setCommentData(response.data)
            // 清空输入框
            setComment('');
            toast.success("评论成功！");

            // 更新评论数量（假设 data 是一个状态，可以通过父组件更新）
            // 例如：onCommentSubmit();
        } catch (error) {
            console.error('Error submitting comment:', error);
            setError('提交评论失败，请稍后重试');
        } finally {
            setIsSubmitting(false);
        }
    };

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await queryComment({ targetId: "your-target-id" });
                setCommentData(response.data)
            } catch (error) {
                console.error('Error fetching comments:', error);
            }
        };
        fetchComments()
    }, []);

    return (
        <div className={"min-w-[600px]  w-[70vw] mx-auto "}>
            <h3 className={"pb-[2rem]"}>
                Comments | {data.commentCount}条留言
            </h3>

            <div className={"w-full bg-white shadow-box rounded-[2rem] bg-white py-[3rem] px-[2rem]"}>
                <div className={"w-full"}>
                    <fieldset>

                        <legend className="m">发表评论</legend>

                        <form onSubmit={handleSubmit}>
                            <textarea
                                className="textarea h-[14rem] w-full rounded-[1rem] border border-gray-300 p-[1rem] focus:outline-none focus:border-gray-500 focus:ring-2 focus:ring-gray-200 hover:border-gray-400 transition-colors"
                                placeholder="写下你的想法..."
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                            ></textarea>

                            {error && <div className="text-red-500 text-sm mt-2">{error}</div>}

                            <div className={"flex justify-between items-center mt-4"}>
                                <div className={"flex gap-[1rem]"}>
                                    <button
                                        type="button"
                                        className={"flex items-center justify-center w-[44px] h-[44px] rounded-[50%] border-none bg-[#f3f4f6] text-[#4b5563] cursor-pointer transition-all"}
                                        title="插入表情"
                                    >
                                        <Smile size={20}/>
                                    </button>
                                    <button
                                        type="button"
                                        className={"flex items-center justify-center w-[44px] h-[44px] rounded-[50%] border-none bg-[#f3f4f6] text-[#4b5563] cursor-pointer transition-all"}
                                        title="插入图片"
                                    >
                                        <Image size={20}/>
                                    </button>
                                </div>

                                <button
                                    type="submit"
                                    disabled={!comment.trim() || isSubmitting}
                                    className={"flex items-center justify-center gap-[1rem]  px-[1rem] rounded-[2rem] border-none bg-[#f3f4f6] text-[#4b5563] cursor-pointer transition-all w-[100px] h-[44px]"}
                                >
                                    <Send size={20}/>
                                    <span className={""}>发送</span>
                                </button>
                            </div>
                        </form>
                    </fieldset>
                </div>
                <div className={"w-full mt-[2rem]"}>
                    {commentData ? (
                        commentData.map((comment) => (

                            <CommentCard
                                key={comment.id}
                                data={comment}

                            />
                        ))
                    ) : (
                        <div className="text-gray-500 text-center py-4">
                            {isSubmitting ? "正在加载评论..." : "暂无评论"}
                        </div>
                    )}
                </div>
            </div>

        </div>
    );
};

export default InputCard;