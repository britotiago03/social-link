"use client";

import Image from "next/image";
import Link from "next/link";

export default function MapPage() {
    return (
        <div className="min-h-screen">
            <div className={`flex flex-col items-center
            font-bold`}>
                <main className="flex flex-col
                items-center text-[#050022] text-center
                w-full md:w-1/3">
                    <div className="relative w-full">
                        <Image className="w-full"
                               src="/map/map.png"
                               width={393}
                               height={852}
                               alt="Map Image"
                        />
                        <div className="absolute top-48 right-30">
                            <Image
                                   src="/map/map_marker_icon.svg"
                                   width={34}
                                   height={42}
                                   alt="Map Marker Icon"
                            />
                        </div>
                        <nav className="absolute w-full px-5 py-7 top-0">
                            <Link className="absolute p-4 top-7 left-1"
                                  href={"/home"}>
                                <Image
                                    src="/arrow_white.svg"
                                    width={42}
                                    height={23}
                                    alt="Navigation arrow"
                                />
                            </Link>
                        </nav>
                    </div>
                </main>
            </div>
        </div>
    );
}