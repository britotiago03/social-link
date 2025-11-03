"use client";

import {TopNavBar} from "@/app/ui/components";
import {roboto} from "@/app/ui/fonts";
import Image from "next/image";
import Link from "next/link";

export default function CreateActivityPage() {
    return (
        <div className="min-h-screen">
            <TopNavBar returnLink="/home"/>
            <div className={`${roboto.className} flex flex-col items-center
            font-bold`}>
                <main className="flex flex-col
                items-center py-10 px-5 gap-10 text-[#050022] text-center
                w-full md:w-1/3">
                    <div className="flex items-center gap-3 w-full text-2xl">
                        <Image className={`w-24 rounded-full`}
                               src="/jonas2.jpg"
                               width={1080}
                               height={1080}
                               alt="Picture of Jonas"
                        />
                        <div className="flex items-end grow">
                            <h1>Jonas Lund</h1>
                        </div>
                    </div>

                    <textarea className="w-full h-80 p-5 font-normal
                    focus:outline-none
                    inset-shadow-[5px_5px_4px_rgba(0,0,0,0.25)]">
                    </textarea>

                    {/* Options Section */}
                    <div className="grid grid-cols-4 border-1 cursor-pointer
                    border-[#6E0061] w-full">
                        <div className="flex justify-center items-center p-5 border-r-1
                        border-[#6E0061]">
                            <Image
                                src="/create-activity/camera_icon.svg"
                                width={33}
                                height={30}
                                alt="Camera Icon"
                            />
                        </div>
                        <div className="flex justify-center items-center p-5
                        border-r-1 border-[#6E0061]">
                            <Image
                                src="/create-activity/file_icon.svg"
                                width={19}
                                height={30}
                                alt="File Icon"
                            />
                        </div>
                        <div className="flex justify-center items-center p-5
                        border-r-1 border-[#6E0061]">
                            <Image
                                src="/create-activity/location_icon.svg"
                                width={24}
                                height={30}
                                alt="Location Icon"
                            />
                        </div>
                        <div className="flex justify-center items-center px-5 py-7">
                            <Image
                                src="/create-activity/favorite_icon.svg"
                                width={33}
                                height={30}
                                alt="Favorite Icon"
                            />
                        </div>
                    </div>

                    <div className="flex justify-end w-full">
                        <Link href={"/home/map"}>
                            <div className="flex justify-center bg-[#FB4E00]
                            px-15 py-3 rounded-full">
                                <Image
                                    src="/create-activity/right_arrow_icon.svg"
                                    width={27}
                                    height={19}
                                    alt="Post Icon"
                                />
                            </div>
                        </Link>
                    </div>

                </main>
            </div>
        </div>
    );
}