import React from 'react';
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {EllipsisVertical, User} from "lucide-react";
import {Sheet,SheetContent,SheetDescription, SheetTrigger} from "@/components/ui/sheet";
import ModeToggle from "@/components/shared/header/modetoggle";



const Menu = () => {
    return (
        <div >
            <nav className="hidden md:flex w-[60rem] justify-evenly  ">

                <Button asChild variant={"ghost"} className={"text-[1.7rem]"}>
                    <Link href={"/"}  >
                        🏚️首页
                    </Link>
                </Button>
                <Button asChild variant={"ghost"}>
                    <Link href={"/app/(root)/article"} className={"text-[1.7rem]"}>
                        📒文章归档
                    </Link>
                </Button>
                <Button asChild variant={"ghost"}className={"text-[1.7rem]"}>
                    <Link href={"/trouble"}>
                        🌏旅拍
                    </Link>
                </Button>
                <Button asChild variant={"ghost"} className={"text-[1.7rem]"}>
                    <Link href={"/talk"}>
                        💬聊天室
                    </Link>
                </Button>
                <Button asChild variant={"ghost"} className={"text-[1.7rem]"}>
                    <Link href={"/message"}>
                        📪留言
                    </Link>
                </Button>
                <Button asChild variant={"ghost"} className={"text-[1.7rem]"}>
                    <Link href={"/about"}>
                        🐟关于
                    </Link>
                </Button>

                <ModeToggle />

                <Button asChild variant={"ghost"} className={"text-[1.7rem]"}>
                    <Link href="/sign-in">
                         <User />登陆
                    </Link>
                </Button>

            </nav>

            <nav className={"md:hidden"}>
                <Sheet>
                    <SheetTrigger>
                        <EllipsisVertical/>
                    </SheetTrigger>

                    <SheetContent className={"flex flex-col items-start"}>
                        菜单
                        <SheetDescription>
                            Your menu options
                        </SheetDescription>

                    <Button>
                        <Link href={"/"}>
                            🏚️首页
                        </Link>
                    </Button>
                    <Button>
                        <Link href={"/app/(root)/article"}>
                            📒文章归档
                        </Link>
                    </Button>
                    <Button>
                        <Link href={"/trouble"}>
                            🌏旅拍
                        </Link>
                    </Button>
                    <Button>
                        <Link href={"/talk"}>
                            💬聊天室
                        </Link>
                    </Button>
                    <Button>
                        <Link href={"/message"}>
                            📪留言
                        </Link>
                    </Button>
                    <Button>
                        <Link href={"/about"}>
                            📪关于
                        </Link>
                    </Button>
                    <ModeToggle/>
                    <Button asChild variant={"ghost"}>
                        <Link href="/sign-in">
                            <User/>Sign In
                        </Link>
                    </Button>
                    </SheetContent>
                </Sheet>
            </nav>
        </div>

);
};

export default Menu;