import React from 'react';
import indexImage from "@/public/indexImage.jpg";
import Image from "next/image";

const SpecialArticleCard = () => {
    return (
        <div className="flex w-full bg-white h-[10rem] rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative w-1/3 ">
                <Image
                    src={indexImage}
                    alt="首页图片"
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    priority
                />
            </div>
            <div className="w-2/3 p-6 flex flex-col justify-between">
                <div>
                    <h2 className="text-xl font-bold text-gray-800 mb-2 hover:text-blue-600 transition-colors">
                        最美传递健康是穆沙拉卡
                    </h2>
                    <p className="text-gray-600 text-sm line-clamp-3">
                        在这里添加文章摘要或描述内容...
                    </p>
                </div>
                <div className="flex items-center justify-between mt-4 mb-2">
                    <div className="text-sm text-gray-500">
                        2024-03-21
                    </div>
                    <div className="text-sm text-blue-600 hover:text-blue-800">
                        阅读更多 →
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialArticleCard;