"use client";

import {roboto} from "@/app/ui/fonts";
import Image from "next/image";
import Link from "next/link";
import { Carousel, ProfilePicture, ProfileName,
    BottomNavBar } from "@/app/ui/components";
import { Interests } from "@/app/ui/interest-components";

export default function HomePage() {
    return (
        <div className="min-h-screen">
            <div className="flex flex-col items-center">
                <main className={`${roboto.className} flex flex-col
                items-center py-15 px-5 gap-10 text-[#050022] text-center
                w-full md:w-1/3`}>
                    {/* Profile Section */}
                    <div className="flex gap-3 items-center">
                        {/* Image Section */}
                        <div>
                            {/* Profile Picture */}
                            <Link href={"/home/profile"}>
                                <ProfilePicture width="w-24"/>
                            </Link>
                        </div>

                        {/* Description Section */}
                        <div className="flex flex-col gap-3 w-64">
                            {/* Name Section */}
                            <ProfileName textSize="text-base"/>
                            <Interests textSize="text-xs" />
                            <div className="flex justify-end">
                                <Link href={"/home/chats"}>
                                    <Image
                                        src="/chat_icon.svg"
                                        width={30}
                                        height={30}
                                        alt="Chat Icon"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Events Section */}
                    <Carousel title="Events"/>

                    {/* Recommended Section */}
                    <Carousel title="Recommended"/>

                </main>
            </div>
            <BottomNavBar />
        </div>
    );
}