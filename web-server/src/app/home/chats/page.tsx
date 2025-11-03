"use client";

import { TopNavBar, Messages, BottomNavBar } from "@/app/ui/components";
import {roboto} from "@/app/ui/fonts";

export default function ChatsPage() {
    return (
        <div className="flex flex-col justify-between min-h-screen">
            <TopNavBar returnLink="/home"/>
            <div className={`${roboto.className} flex flex-col items-center
            font-bold`}>
                <main className="flex flex-col
                items-center gap-10 text-[#050022] text-center
                w-full md:w-1/3">
                    <div className="flex flex-col gap-10 w-full text-2xl
                    items-center">
                        <div className="flex w-full px-5">
                            <h1>Messages</h1>
                        </div>
                        {/* Messages Container */}
                        <Messages />
                    </div>
                </main>
            </div>
            <BottomNavBar />
        </div>
    );
}