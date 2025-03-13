import React from 'react';
import {Volume2} from "lucide-react";

const Noticecard = () => {
    const notices = ["欢迎光临！", "部署文档：https://poetize.cn/article/26"]

    return (
        <div  className={"p-[2.2rem] border border-dashed text-[var(--greyFont)]  flex rounded-[1rem] mb-[2rem]"}>
            <div className={
                   "w-[4rem]  animation: my-scale 1.5s ease-out infinite "}>
                <Volume2 className={"text-[var(--themeBackground)]"}/>
            </div>
            <div>
                {notices.map((notice, index) => (
                    <div key={index} className={"ml-[1.5rem] leading-[3rem]"}>
                        {notice}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Noticecard;




