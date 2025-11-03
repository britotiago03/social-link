"use client";

import Link from "next/link";
import Image from "next/image";
import {roboto} from "@/app/ui/fonts";
import { ChatConversation } from "@/app/ui/components";
import { useEffect } from "react";

export default function ChatPage() {
    useEffect(() => {
        window.scrollTo(0, document.body.scrollHeight);
    }, []);

    return (
        <div className={`${roboto.className} flex flex-col justify-between
        min-h-screen`}>
            <header className="grid grid-cols-5 px-5 pt-7 pb-2 sticky top-0 bg-white">
                <div className="flex">
                    <Link className="flex items-center h-2/3
                    md:h-1/3" href={"/home/chats"}>
                        <Image src="/arrow.svg"
                               width={42}
                               height={23}
                               alt="Navigation arrow"
                        />
                    </Link>
                </div>
                <div className="flex justify-center col-span-3 mt-10">
                    <div className="flex flex-col gap-1 items-center w-full">
                        <div className="bg-[#6E0061] p-2 w-1/5 md:w-1/13 rounded-full">
                            <Image
                                src="/profile_icon.svg"
                                width={91}
                                height={91}
                                alt="Profile Icon"
                            />
                        </div>
                        <h1>Thomas</h1>
                    </div>
                </div>
            </header>
            <div className={` flex flex-col items-center
            font-bold`}>
                <main className="flex flex-col px-5
                items-center text-[#050022] text-center
                w-full md:w-1/3">
                    <ChatConversation />
                    <div className="pt-5 pb-10 bg-white sticky bottom-0">
                        <form className="flex bg-[#FF986A] font-normal w-full
                    rounded-full">
                            <input className="grow px-5 py-2
                        focus:outline-none" type="text"/>
                            <div className="p-1 rounded-r-full w-1/9
                        cursor-pointer">
                                <div className="p-2 bg-[#FB4E00] rounded-full">
                                    <Image
                                        src="/send_message_icon.svg"
                                        width={640}
                                        height={640}
                                        alt="Send Message Icon"
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </div>
    );
}