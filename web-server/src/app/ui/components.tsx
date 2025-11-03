"use client";

import Link from "next/link";
import Image from "next/image";

export function InputFieldText({ inputFieldId, inputFieldLabel }:
                               { inputFieldId: string, inputFieldLabel: string }) {
    return (
        <div className="flex flex-col items-start gap-1 font-bold">
            <label htmlFor={inputFieldId} className="px-3">
                {inputFieldLabel}</label>
            <input id={inputFieldId} type="text"
                   className="bg-[#D9D9D9] rounded-2xl p-3 w-80
                     inset-shadow-[0px_-5px_4px_rgba(0,0,0,0.25)]"
            />
        </div>
    );
}

export function InputFieldPassword({ inputFieldLabel }:{ inputFieldLabel: string }) {
    return (
        <div className="flex flex-col items-start gap-1 font-bold">
            <label htmlFor="password" className="px-3">
                {inputFieldLabel}</label>
            <input id="password" type="password"
                   className="bg-[#D9D9D9] rounded-2xl p-3 w-80
                     inset-shadow-[0px_-5px_4px_rgba(0,0,0,0.25)]"
            />
        </div>
    );
}

export function Carousel({ title}: { title: string }) {
    return (
        <section className="flex flex-col gap-3 items-start w-full
        font-bold">
            <h1 className="text-2xl">{title}</h1>
            <div className="flex gap-3 overflow-x-auto
                    overflow-y-hidden scroll-smooth snap-x snap-mandatory w-full">
                {[...Array(6)].map((_, i) => (
                    <div key={i} className="bg-[#D9D9D9] w-48 h-60
                        flex-shrink-0 snap-start"></div>
                ))}
            </div>
        </section>
    );
}

export function NavBar({ returnLink }: {returnLink:string }) {
    return (
        <nav className="flex px-5 pt-7 sticky top-0 bg-white z-20">
            <Link className="py-3" href={returnLink}>
                <Image src="/arrow.svg"
                       width={42}
                       height={23}
                       alt="Navigation arrow"
                />
            </Link>
        </nav>
    );
}

export function ProfilePicture({ width }: { width: string}) {
    return (
        <div className="relative
                        bg-[#6E0061] p-5 rounded-full">
            <Image className={`${width}`}
                src="/profile_icon.svg"
                width={91}
                height={91}
                alt="Profile Icon"
            />
            {/* Verified Icon */}
            <div className="absolute p-4 bottom-1 left-1
                            bg-[#FFB300] rounded-full">
                <Image className="absolute bottom-2 left-2"
                       src="/verified_icon.svg"
                       width={17}
                       height={13}
                       alt="Verified Icon"
                />
            </div>
        </div>
    );
}

export function ProfileName({ textSize }: {textSize:string}) {
    return (
        <div className={`flex gap-3 border-b-1 font-bold ${textSize}`}>
            <h1>FIRSTNAME</h1>
            <h1>LASTNAME</h1>
        </div>
    );
}
