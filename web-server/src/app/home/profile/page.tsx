"use client";
import { NavBar, ProfilePicture, ProfileName,
    Interests } from "@/app/ui/components";
import {roboto} from "@/app/ui/fonts";
import Link from "next/link";

export default function Profile() {
    return (
        <div>
            <NavBar returnLink="/home" />
            <div className={`${roboto.className} flex flex-col items-center
            font-bold`}>
                <main className="flex flex-col min-h-full
                items-center py-15 px-5 gap-10 text-[#050022] text-center
                w-full md:w-1/3">
                    <ProfilePicture width="w-32"/>
                    <div className="flex w-full">
                        <ProfileName textSize="text-2xl"/>
                    </div>

                    <div className="flex flex-col gap-5 w-full">
                        {/* About Me Section */}
                        <section className="flex flex-col gap-1 w-full">
                            <div className="flex w-full text-xl">
                                <h1>About Me</h1>
                            </div>
                            <div className="bg-[#D9D9D9] w-full h-32
                        flex-shrink-0 snap-start"></div>
                        </section>

                        {/* Interests Section */}
                        <section className="flex flex-col gap-1 w-full">
                            <div className="flex w-full text-xl">
                                <h1>Edit Interests</h1>
                            </div>
                            <Interests textSize="text-normal" />
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