"use client";

import Link from "next/link";
import Image from "next/image";
import {Dispatch, SetStateAction} from "react";
import {Interest} from "@/app/ui/interest-components";

export function InputFieldText({inputFieldId, inputFieldLabel}:
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

export function InputFieldPassword({inputFieldLabel}: { inputFieldLabel: string }) {
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

export function Carousel({title}: { title: string }) {
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

export function TopNavBar({returnLink}: { returnLink: string }) {
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

export function BottomNavBar() {
    return (
        <nav className="flex justify-center gap-10 p-5 sticky bottom-0
            bg-white">
            <Link href={"/home/match"}>
                <Image
                    src="/match_icon.svg"
                    width={43}
                    height={43}
                    alt="Match Icon"
                />
            </Link>
            <Link href={"/home/create-activity"}>
                <Image
                    src="/create_activity_icon.svg"
                    width={44}
                    height={42}
                    alt="Create Activity Icon"
                />
            </Link>
            <Link href={"/home"}>
                <Image
                    src="/home_icon.svg"
                    width={41}
                    height={43}
                    alt="Home Icon"
                />
            </Link>
            <Link href={"/home/map"}>
                <Image
                    src="/map_icon.svg"
                    width={43}
                    height={43}
                    alt="Map Icon"
                />
            </Link>
        </nav>
    );
}

export function ProfilePicture({width, imageSrc}: {
    width: string,
    imageSrc: string
}) {
    let verifiedSize = "0";
    if (width === "w-40") {
        verifiedSize = "2"
    }

    return (
        <div className="relative">
            <Image className={`${width} rounded-full`}
                   src={imageSrc}
                   width={1080}
                   height={1080}
                   alt="Picture of Jonas"
            />
            {/* Verified Icon */}
            <div className={`absolute p-4 bottom-${verifiedSize} left-${verifiedSize}
                            bg-[#FFB300] rounded-full`}>
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

export function ProfileName({textSize}: { textSize: string }) {
    return (
        <div className={`flex justify-center w-full
        font-bold border-b-1 ${textSize}`}>
            <h1>Jonas Lundberg</h1>
        </div>
    );
}

function Message({imageSrc, imageWidth, imageHeight, imageAlt,
                     name, unread, hasBorder}:
                     {
                         imageSrc: string, imageWidth: number,
                         imageHeight: number, imageAlt: string,
                         name: string, unread: boolean, hasBorder: boolean
                     }) {
    let border = "";
    if (hasBorder) {
        border = "border-t-1"
    }

    return (
        <div className={`flex gap-7 px-10 py-4 ${border}`}>
            <div className="relative w-1/7">
                <Image className="rounded-full"
                    src={imageSrc}
                    width={imageWidth}
                    height={imageHeight}
                    alt={imageAlt}
                />
                {/* Message Icon */}
                {unread ? (
                    <div className="absolute p-2 bottom-0 right-0
                                    bg-[#FB4E00] rounded-full">
                    </div>
                ) : (
                    <div></div>
                )}
            </div>
            <div className="text-lg">
                <h1>{name}</h1>
            </div>
        </div>
    );
}

export function Messages() {
    return (
        <div className="w-full border-t-1 border-b-1">
            <Message
                imageSrc="/thomas.jpg"
                imageWidth={1080}
                imageHeight={1080}
                imageAlt="Picture of Thomas Berg"
                name="Thomas Berg" unread={false} hasBorder={false}/>
            <Message
                imageSrc="/kristine.jpg"
                imageWidth={1080}
                imageHeight={1080}
                imageAlt="Picture of Kristine Nilsen"
                name="Kristine Nilsen" unread={true} hasBorder={true}/>
            <Message
                imageSrc="/lars.jpg"
                imageWidth={1080}
                imageHeight={1080}
                imageAlt="Picture of Lars Andersen"
                name="Lars Andersen" unread={true} hasBorder={true}/>
            <Message
                imageSrc="/tove.jpg"
                imageWidth={1048}
                imageHeight={1048}
                imageAlt="Picture of Tove Hansen"
                name="Tove Hansen" unread={true} hasBorder={true}/>
            <Message
                imageSrc="/elias.jpg"
                imageWidth={828}
                imageHeight={828}
                imageAlt="Picture of Elias Haugen"
                name="Elias Haugen" unread={false} hasBorder={true}/>
            <Message
                imageSrc="/peder.jpg"
                imageWidth={497}
                imageHeight={497}
                imageAlt="Picture of Peder Olsen"
                name="Peder Olsen" unread={false} hasBorder={true}/>
            <Message
                imageSrc="/julie.jpg"
                imageWidth={720}
                imageHeight={720}
                imageAlt="Picture of Julie Solberg"
                name="Julie Solberg" unread={true} hasBorder={true}/>
            <Message
                imageSrc="/karoline.jpg"
                imageWidth={1080}
                imageHeight={1080}
                imageAlt="Picture of Karoline Moen"
                name="Karoline Moen" unread={true} hasBorder={true}/>
        </div>
    );
}

function ChatMessage({message, isSender, isReplying}:
                         {
                             message: string, isSender: boolean,
                             isReplying: boolean
                         }) {
    let sendMessage = "justify-start";
    let messageColor = "bg-[#FF986A]";
    let marginTop = "mt-1";
    if (isSender) {
        sendMessage = "justify-end";
        messageColor = "bg-[#FB4E00]";
    }
    if (isReplying) {
        marginTop = "mt-3";
    }

    return (
        <div className={`w-full ${marginTop}`}>
            <div className={`flex ${sendMessage} w-full`}>
                <div className={`inline-block px-3 p-2 ${messageColor}
                            text-sm font-normal text-left rounded-2xl max-w-3/4`}>
                    <p>{message}</p>
                </div>
            </div>
        </div>
    );
}

export function ChatConversation() {
    return (
        <div className="flex flex-col w-full">
            <ChatMessage
                message="Hey, how have you been?"
                isSender={false}
                isReplying={false}
            />
            <ChatMessage
                message="I've been good! Just keeping busy with
                            work. You?"
                isSender={true}
                isReplying={true}
            />
            <ChatMessage
                message="Same here, trying to stay productive."
                isSender={false}
                isReplying={true}
            />
            <ChatMessage
                message="Have you checked out any of the events on the
                app yet?"
                isSender={false}
                isReplying={false}
            />
            <ChatMessage
                message="Yeah, I saw a few — there's that outdoor movie
                night this weekend. Looked kind of fun."
                isSender={true}
                isReplying={true}
            />
            <ChatMessage
                message="Oh yeah, I saw that too! I was thinking about
                going, but not sure if it'll be too crowded."
                isSender={false}
                isReplying={true}
            />
            <ChatMessage
                message="True. I like smaller things better."
                isSender={true}
                isReplying={true}
            />
            <ChatMessage
                message="What if we make our own event instead? Maybe
                something chill — like a picnic or a small hike?"
                isSender={true}
                isReplying={false}
            />
            <ChatMessage
                message="I like that idea! A hike sounds perfect actually."
                isSender={false}
                isReplying={true}
            />
            <ChatMessage
                message="We could post it as a public event and see if
                others want to join."
                isSender={false}
                isReplying={false}
            />
            <ChatMessage
                message="Yeah, let's do that. I can make the event if you want."
                isSender={true}
                isReplying={true}
            />
            <ChatMessage
                message="Sure, go for it. I'll help with the details."
                isSender={false}
                isReplying={true}
            />
            <ChatMessage
                message="Cool, I'll set it up later tonight and send you
                the link."
                isSender={true}
                isReplying={true}
            />
            <ChatMessage
                message="Perfect. Looking forward to it!"
                isSender={false}
                isReplying={true}
            />
        </div>
    );
}

export function ActivityDialog({setActivityAction, hasLiked, setLikeAction,
                               likes, setLikesAction, openLikesAction}:
                                   {
                                       setActivityAction:
                                           Dispatch<SetStateAction<boolean>>,
                                       hasLiked: boolean, setLikeAction:
                                           Dispatch<SetStateAction<boolean>>,
                                       likes: number, setLikesAction:
                                           Dispatch<SetStateAction<number>>,
                                       openLikesAction: () => void
                                   }) {
    function like() {
        setLikeAction(true);
        setLikesAction(likes + 1);
    }

    function unlike() {
        setLikeAction(false);
        setLikesAction(likes - 1);
    }

    return (
        <div className="absolute inset-0 bg-black/50
                            flex justify-center items-center">
            <div className="flex flex-col gap-5 bg-white w-80 h-96">
                <div className="grid grid-cols-5">
                    <div onClick={() => setActivityAction(false)}
                         className="p-5 cursor-pointer">
                        <Image
                            src="/map/close_icon.svg"
                            width={21}
                            height={21}
                            alt="Close Icon"
                        />
                    </div>
                    <div className="col-span-3 flex
                                        justify-center items-center text-3xl">
                        <h1>City Hike 🌿</h1>
                    </div>
                </div>
                <div className="flex px-5 justify-between items-center text-lg">
                    <h1>Saturday<br/>10:00 AM</h1>
                    <h1>Ametyst-atriet</h1>
                </div>
                <div className="text-left px-5 font-normal ">
                    <p>A chill weekend hike just outside the city 🌿
                        Easy trail, good company, and a picnic at the top — come
                        enjoy nature and meet new people!</p>
                </div>
                <div className="flex gap-2 w-full px-5 font-normal">
                    <div className="inline-block">
                        <Interest interestName="Nature"/>
                    </div>
                    <div className="inline-block">
                        <Interest interestName="Sports"/>
                    </div>
                </div>
                <div className="flex gap-1 h-full pl-5">
                    <div className="flex items-center gap-3 w-full">
                        <Image className={`w-1/6 rounded-full`}
                               src="/jonas2.jpg"
                               width={1080}
                               height={1080}
                               alt="Picture of Jonas"
                        />
                        <div className="flex items-end grow">
                            <h1>Jonas Lund</h1>
                        </div>
                    </div>
                    {
                        hasLiked ?
                            <div onClick={() => unlike()}
                                 className="flex cursor-pointer">
                                <Image
                                    src="/map/liked_icon.svg"
                                    width={33}
                                    height={30}
                                    alt="Liked Icon"
                                />
                            </div>
                            :
                            <div onClick={() =>  like()}
                                 className="flex cursor-pointer">
                                <Image
                                    src="/create-activity/favorite_icon.svg"
                                    width={33}
                                    height={30}
                                    alt="Liked Icon"
                                />
                            </div>
                    }
                    <div onClick={() => openLikesAction()}
                        className="flex items-center text-[#FF986A] pr-5
                    cursor-pointer">
                        <h1>{likes}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function LikesDialog({ closeLikesAction, hasLiked }:
                                { closeLikesAction: () => void,
                                hasLiked: boolean}) {
    return (
        <div className="absolute inset-0 bg-black/50
                            flex justify-center items-center">
            <div className="flex flex-col bg-white w-80 h-96">
                <div className="grid grid-cols-5">
                    <div onClick={() => closeLikesAction()}
                         className="p-5 cursor-pointer">
                        <Image
                            src="/arrow.svg"
                            width={42}
                            height={23}
                            alt="Navigation Arrow"
                        />
                    </div>
                    <div className="col-span-3 flex
                                        justify-center items-center text-3xl">
                        <h1>Liked by</h1>
                    </div>
                </div>
                <div className="flex flex-col gap-3 h-full px-5 py-5
                overflow-y-auto">
                    <DialogUser
                        imageSrc="/thomas.jpg"
                        imageWidth={1080}
                        imageHeight={1080}
                        imageAlt="Picture of Thomas Berg"
                        userName="Thomas Berg"
                    />
                    <DialogUser
                        imageSrc="/ingrid.jpg"
                        imageWidth={1080}
                        imageHeight={1080}
                        imageAlt="Picture of Ingrid Johansen"
                        userName="Ingrid Johansen"
                    />
                    <DialogUser
                        imageSrc="/kristine.jpg"
                        imageWidth={1080}
                        imageHeight={1080}
                        imageAlt="Picture of Kristine Nilsen"
                        userName="Kristine Nilsen"
                    />
                    <DialogUser
                        imageSrc="/lars.jpg"
                        imageWidth={1080}
                        imageHeight={1080}
                        imageAlt="Picture of Lars Andersen"
                        userName="Lars Andersen"
                    />
                    <DialogUser
                        imageSrc="/tove.jpg"
                        imageWidth={1048}
                        imageHeight={1048}
                        imageAlt="Picture of Tove Hansen"
                        userName="Tove Hansen"
                    />
                    { hasLiked && (
                        <DialogUser
                            imageSrc="/jonas2.jpg"
                            imageWidth={1080}
                            imageHeight={1080}
                            imageAlt="Picture of Jonas Lund"
                            userName="Jonas Lund"
                        />
                    ) }
                </div>
            </div>
        </div>
    );
}

export function DialogUser({ imageSrc, imageWidth, imageHeight, imageAlt,
                           userName }: { imageSrc: string, imageWidth: number,
    imageHeight: number, imageAlt: string, userName: string}) {
    return (
        <div className="flex items-center gap-3 w-full">
            <Image className={`w-1/6 rounded-full`}
                   src={imageSrc}
                   width={imageWidth}
                   height={imageHeight}
                   alt={imageAlt}
            />
            <div className="flex items-end grow">
                <h1>{userName}</h1>
            </div>
        </div>
    );
}