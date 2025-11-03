import {roboto} from "@/app/ui/fonts";
import Image from "next/image";
import Link from "next/link";
import { Carousel, ProfilePicture,
    ProfileName, Interests } from "@/app/ui/components";

export default function HomePage() {
    return (
        <div>
            <div className="flex flex-col items-center">
                <main className={`${roboto.className} flex flex-col min-h-screen
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
            </div>
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