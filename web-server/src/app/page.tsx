"use client";

import Link from "next/link";
import { roboto, imprima } from "@/app/ui/fonts";
import { InputFieldText, InputFieldPassword } from "@/app/ui/components";

export default function Home() {
  return (
    <div>
      <main className={`${roboto.className} flex flex-col min-h-screen
      items-center justify-around p-10 gap-3 text-[#050022] text-center`}>
        <div className="flex flex-col gap-20">
          <h1 className={`${imprima.className} text-[#FB4E00]
        text-5xl`}>Social Link</h1>

          <form className="flex flex-col gap-10">
            <InputFieldText inputFieldId="username" inputFieldLabel="USERNAME"
            />
            <InputFieldPassword inputFieldLabel="PASSWORD" />
          </form>

        </div>
        <div className="flex flex-col gap-1 font-bold">
          <Link href={"/home"} className="p-3">
            <button className="text-xl cursor-pointer">LOGIN</button>
          </Link>

          <Link href={"/forgot-password"}>
            <button className="cursor-pointer
            font-extralight">Forgot Password?</button>
          </Link>
        </div>
        <div className="flex gap-1 font-bold">
          <label>Don't have an account?</label>
          <Link href={"/signup"}>
            <button className="cursor-pointer font-extralight">Sign up</button>
          </Link>
        </div>
      </main>
    </div>
  );
}
