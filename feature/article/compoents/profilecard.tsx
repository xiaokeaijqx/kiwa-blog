import React from 'react';
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import {APP_NAME} from "@/lib/constans";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

const ProfileCard = () => {
    return (
        <Card className="shadow-2xl w-full  min-w-[18rem] h-[30rem] flex flex-col items-center justify-center gap-6 p-8
        bg-gradient-to-br from-pink-200 via-purple-100 to-indigo-200
        hover:shadow-xl transition-all duration-300 group">

            {/* 头像部分 */}
            <CardHeader className="p-4">
                <div className="relative inline-block rounded-full ring-4 ring-white ring-opacity-80
                group-hover:ring-opacity-100 transition-all">
                    <Avatar className="w-32 h-32 border-4 border-white/20">
                        <AvatarImage
                            src="https://github.com/shadcn.png"
                            className="group-hover:scale-105 transition-transform"
                        />
                        <AvatarFallback className="bg-gradient-to-r from-pink-300 to-purple-400 text-white">
                            KI
                        </AvatarFallback>
                    </Avatar>
                </div>
            </CardHeader>

            {/* 标题部分 */}
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600
            bg-clip-text text-transparent tracking-wide">
                {APP_NAME}
            </CardTitle>

            {/* 数据统计部分 */}
            <CardContent className="w-full p-4">
                <div className="flex justify-between text-center">
                    {/* 文章 */}
                    <div className="flex-1">
                        <p className="text-4xl font-bold text-purple-600 mb-1">112</p>
                        <p className="text-sm text-gray-600 font-medium">文章</p>
                    </div>

                    {/* 分隔线 */}
                    <div className="h-12 w-px bg-gray-200 mx-2"/>

                    {/* 分类 */}
                    <div className="flex-1">
                        <p className="text-4xl font-bold text-pink-600 mb-1">24</p>
                        <p className="text-sm text-gray-600 font-medium">分类</p>
                    </div>

                    {/* 分隔线 */}
                    <div className="h-12 w-px bg-gray-200 mx-2"/>

                    {/* 访问量 */}
                    <div className="flex-1">
                        <p className="text-4xl font-bold text-indigo-600 mb-1">5.6k</p>
                        <p className="text-sm text-gray-600 font-medium">访问量</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default ProfileCard;