import React from 'react';
import Link from "next/link";



const Notecard = ({name}:{name:string}) => {
    return (
        <div className={"bg-blue-50 p-6 my-10 border-l-4 border-blue-400 rounded-md text-2xl leading-loose"}>
            <p><strong>作者：</strong>{name}</p>
            <p>1. 本网站部分内容可能来源于网络，仅供大家学习与参考，如有侵权，请联系站长（sara@poetize.cn）进行删除处理。</p>
            <p>2. 本网站一切内容不代表本站立场，并不代表本站赞同其观点和对其真实性负责。</p>
            <p>3. 版权＆许可请详阅
                <Link href="/copyright"  className={"text-blue-600 hover:text-blue-800"}>版权声明
                </Link>
            </p>
        </div>

    );
};

export default Notecard;