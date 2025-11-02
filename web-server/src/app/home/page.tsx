import {roboto} from "@/app/ui/fonts";
import Image from "next/image";
import Link from "next/link";
import { Interest, Carousel } from "@/app/ui/components";

export default function HomePage() {
    return (
        <div>
            <main className={`${roboto.className} flex flex-col min-h-screen
            items-center py-15 px-5 gap-10 text-[#050022] text-center`}>
                {/* Profile Section */}
                <div className="flex gap-3 items-center">
                    {/* Image Section */}
                    <div>
                        {/* Profile Picture */}
                        <div className="relative
                        bg-[#6E0061] p-5 rounded-full">
                            <Image
                                src="/profile_icon.svg"
                                width={91}
                                height={91}
                                alt="Profile Icon"
                            />
                            {/* Verified Icon */}
                            <div className="absolute p-4 bottom-0 left-0
                            bg-[#FFB300] rounded-full">
                                <Image className="absolute bottom-2 left-2"
                                       src="/verified_icon.svg"
                                       width={17}
                                       height={13}
                                       alt="Verified Icon"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Description Section */}
                    <div className="flex flex-col gap-3 w-64">
                        {/* Name Section */}
                        <div className="flex gap-3 border-b-1">
                            <h1><b>FIRSTNAME</b></h1>
                            <h1><b>LASTNAME</b></h1>
                        </div>
                        <div className="flex gap-2 flex-wrap">
                            <Interest interestName="Sports"/>
                            <Interest interestName="Music"/>
                            <Interest interestName="Study Groups"/>
                            <Interest interestName="Arts & Crafts"/>
                            <Interest interestName="Movies & TV"/>
                            <Interest interestName="Games"/>
                            <Interest interestName="Nature"/>
                            <Interest interestName="Board Games"/>
                        </div>
                        <div className="flex justify-end">
                            <Image
                                src="/chat_icon.svg"
                                width={30}
                                height={30}
                                alt="Chat Icon"
                            />
                        </div>
                    </div>
                </div>

                {/* Events Section */}
                <Carousel title="Events"/>

                {/* Recommended Section */}
                <Carousel title="Recommended"/>

            </main>
            <nav className="flex justify-center gap-10 p-5 sticky bottom-0
            bg-white">
                <Link href={"/"}>
                    <Image
                        src="/match_icon.svg"
                        width={43}
                        height={43}
                        alt="Match Icon"
                    />
                </Link>
                <Link href={"/"}>
                    <Image
                        src="/create_activity_icon.svg"
                        width={44}
                        height={42}
                        alt="Create Activity Icon"
                    />
                </Link>
                <Link href={"/"}>
                    <Image
                        src="/home_icon.svg"
                        width={41}
                        height={43}
                        alt="Home Icon"
                    />
                </Link>
                <Link href={"/"}>
                    <Image
                        src="/map_icon.svg"
                        width={43}
                        height={43}
                        alt="Map Icon"
                    />
                </Link>
            </nav>
        </div>
    );
}