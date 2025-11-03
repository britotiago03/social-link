import { TopNavBar, BottomNavBar, ProfilePicture } from "@/app/ui/components";
import { Interests } from "@/app/ui/interest-components";
import {roboto} from "@/app/ui/fonts";
import Image from "next/image";

export default function MatchPage() {
    return (
        <div className="flex flex-col justify-between min-h-screen">
            <TopNavBar returnLink="/home"/>
            <div className={`${roboto.className} flex flex-col items-center
            font-bold`}>
                <main className="flex flex-col
                items-center py-15 px-5 gap-7 text-[#050022] text-center
                w-full md:w-1/3">
                    <ProfilePicture width="w-32" />
                    <div className="flex flex-col gap-20">
                        <div className="flex flex-col gap-7">
                            <div className="text-4xl">
                                <h1>NAME</h1>
                            </div>
                            {/* Interests Section */}
                            <div className="flex flex-col gap-5 w-full text-2xl">
                                <h1>Interests</h1>
                                <Interests textSize="text-2xl"/>
                            </div>
                        </div>
                        <div className="flex justify-around w-full">
                            <Image
                                src="/match/decline_icon.svg"
                                width={100}
                                height={100}
                                alt="Decline Icon"
                            />
                            <Image
                                src="/match/accept_icon.svg"
                                width={100}
                                height={100}
                                alt="Accept Icon"
                            />
                        </div>
                    </div>


                </main>
            </div>
            <BottomNavBar/>
        </div>
    );
}