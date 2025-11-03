"use client";

import { NavBar } from "@/app/ui/components";
import { InterestsGrid } from "@/app/ui/interest-components";
import {roboto} from "@/app/ui/fonts";
import Image from "next/image";

export default function Interests() {
    return (
        <div>
            <NavBar returnLink="/home/profile" />
            <div className={`${roboto.className} flex flex-col items-center
            font-bold`}>
                <main className="flex flex-col
                items-center py-15 px-5 gap-7 text-[#050022] text-center
                w-full md:w-1/3">
                    <div className="flex w-full text-4xl">
                        <h1>Interests</h1>
                    </div>
                    {/* Search Bar */}
                    <form className="flex bg-[#FF986A] font-normal w-full">
                        <div className="flex justify-center items-center p-2
                        cursor-pointer">
                            <Image
                                src="/search_icon.svg"
                                width={32}
                                height={31}
                                alt="Search Icon"
                            />
                        </div>
                        <input className="grow p-2 focus:outline-none" type="text"/>
                    </form>
                    <InterestsGrid />
                </main>
            </div>

        </div>
    );
}