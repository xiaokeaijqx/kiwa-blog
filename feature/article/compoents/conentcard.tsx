import React from 'react';
import {ArticleListItem} from "@/feature/article/types";


const Conentcard = ({data}:{data:ArticleListItem}) => {
    return (
        <div className={"max-w-[900px] min-w-[500px] mt-[-6rem] mb-0 mx-auto relative"}>
            <div className={"bg-white rounded-[1.5rem] p-[4rem] shadow "}>
                <p>{data.summary}</p>
                <p className={"text-[#999] text-[1.4rem] mt-[2rem]"}>{data.publishTime}</p>
            </div>
            {/*<notecard {data.author}/>*/}
        </div>
    );
};

export default Conentcard;