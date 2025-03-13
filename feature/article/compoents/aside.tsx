import React from 'react';
import {Card} from "@/components/ui/card";
import Specialarticlecard from "@/feature/article/compoents/specialarticlecard";
import ProfileCard from "@/feature/article/compoents/profilecard";

const Aside = ({}) => {
    return (
        <div className={"flex flex-col gap-y-[3rem]"}>
            <ProfileCard />
            <Card className={"p-[2rem]"}>
                🌏 朋友圈
            </Card>

            <Card>
                <Specialarticlecard/>
                <Specialarticlecard/>
                <Specialarticlecard/>
            </Card>
        </div>
    );
};

export default Aside;