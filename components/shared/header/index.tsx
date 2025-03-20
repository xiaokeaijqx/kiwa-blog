import React from 'react';
import Link from "next/link";
import {APP_NAME} from "@/lib/constans";
import Menu from "@/components/shared/header/menu";
import Search from "@/components/shared/header/search";


const Header = () => {
    return (
        <header className="  w-full h-[5rem] fixed top-0 left-0 z-50 bg-black/20  transition-all duration-300">
            <div className=" flex justify-between items-center p-4 h-[5rem] max-w-[1200px] mx-auto">
                <div>
                    <Link href={"/"}>
                        {/*<Image src={"/logo.jpeg"}*/}
                        {/*       alt={"app logo"}*/}
                        {/*       height={48} width={48}*/}
                        {/*       priority={true}/>*/}
                        <span className="hidden font-bold text-4xl lg:block text-black ">{APP_NAME}</span>
                    </Link>
                </div>

                <Search/>
                <Menu />
            </div>
        </header>
    );
};

export default Header;