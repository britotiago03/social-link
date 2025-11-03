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

export function TopNavBar({ returnLink }: {returnLink:string }) {
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
            <Link href={"/"}>
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
            <Link href={"/"}>
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

export function ProfilePicture({width}: { width: string }) {
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

export function ProfileName({textSize}: { textSize: string }) {
    return (
        <div className={`flex gap-3 border-b-1 font-bold ${textSize}`}>
            <h1>FIRSTNAME</h1>
            <h1>LASTNAME</h1>
        </div>
    );
}

function Message({ name, unread, hasBorder}:
                            { name: string, unread: boolean,
                            hasBorder: boolean}) {
    let border = "";
    if (hasBorder) {
        border = "border-t-1"
    }

    return (
        <div className={`flex gap-7 px-10 py-4 ${border}`}>
            <div className="relative bg-[#6E0061] p-2 w-1/7
                                rounded-full">
                <Image
                    src="/profile_icon.svg"
                    width={91}
                    height={91}
                    alt="Profile Icon"
                />
                {/* Message Icon */}
                { unread ? (
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
            <Message name="Thomas" unread={false} hasBorder={false} />
            <Message name="Kristine" unread={true} hasBorder={true} />
            <Message name="Lars" unread={true} hasBorder={true} />
            <Message name="Tove" unread={true} hasBorder={true} />
            <Message name="Elias" unread={false} hasBorder={true} />
            <Message name="Peder" unread={false} hasBorder={true} />
            <Message name="Julie" unread={true} hasBorder={true} />
            <Message name="Karoline" unread={true} hasBorder={true} />
        </div>
    );
}

function ChatMessage({ message, isSender, isReplying }:
                                { message: string, isSender: boolean,
                                isReplying: boolean}) {
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