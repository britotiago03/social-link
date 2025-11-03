"use client";

import { TopNavBar, ProfilePicture, ProfileName, } from "@/app/ui/components";
import { Interests } from "@/app/ui/interest-components";
import {roboto} from "@/app/ui/fonts";
import Link from "next/link";

export default function ProfilePage() {
    return (
        <div className="min-h-screen">
            <TopNavBar returnLink="/home" />
            <div className={`${roboto.className} flex flex-col items-center
            font-bold`}>
                <main className="flex flex-col
                items-center py-15 px-5 gap-10 text-[#050022] text-center
                w-full md:w-1/3">
                    <ProfilePicture width="w-40" imageSrc="/jonas2.jpg"/>
                    <div className="flex w-full">
                        <ProfileName textSize="text-2xl"/>
                    </div>

                    <div className="flex flex-col gap-5 w-full">
                        {/* About Me Section */}
                        <section className="flex flex-col gap-1 w-full">
                            <div className="flex w-full text-xl">
                                <h1>About Me</h1>
                            </div>
                            <div className={`inline-block px-3 p-2 bg-[#D9D9D9]
                            font-normal text-left max-w-full`}>
                                <p>Hey, I’m Jonas 👋 I live in Oslo and
                                    love hiking, football, and live music.
                                    Always up for a coffee, a concert, or
                                    a trip to the mountains ☕🎶🏔️</p>
                            </div>
                        </section>

                        {/* Interests Section */}
                        <section className="flex flex-col gap-1 w-full">
                            <div className="flex w-full text-xl">
                            <h1>Edit Interests</h1>
                            </div>
                            <Link href={"/home/interests"}>
                                <Interests textSize="text-normal" />
                            </Link>
                        </section>
                    </div>
                </main>
                <Link href={"/"}>
                    <button className="text-xl my-10">Log out</button>
                </Link>
            </div>
        </div>
    );
}