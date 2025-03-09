import React from 'react';
import Link from "next/link";
import {APP_NAME} from "@/lib/constans";
import Menu from "@/components/shared/header/menu";


const Header = () => {
    return (
        <header className=" w-full h-[5rem] ">
            <div className=" flex justify-between items-center p-4 h-[5rem]">
                <div>
                    <Link href={"/"}>
                        {/*<Image src={"/logo.jpeg"}*/}
                        {/*       alt={"app logo"}*/}
                        {/*       height={48} width={48}*/}
                        {/*       priority={true}/>*/}
                        <span className="hidden font-bold text-4xl lg:block text-white ">{APP_NAME}</span>
                    </Link>
                </div>

                <div className={"w-[28rem]"}>111111</div>
                <Menu />
            </div>
        </header>
    );
};

export default Header;