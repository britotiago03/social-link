"use client";

import Link from "next/link";
import { roboto } from "@/app/ui/fonts";
import { NavBar } from "@/app/ui/components";

export default function ForgotPassword() {

  return (
      <div className="min-h-screen">
        <NavBar returnLink="/" />
        <main className={`${roboto.className} flex flex-col gap-20
        font-bold items-center p-10 gap-3 text-[#050022]
        text-center`}>
          <div className="flex flex-col gap-20">
            <h1 className="text-[#FB4E00] text-3xl">Forgot password?</h1>

            <form className="flex flex-col gap-5">
              <div className="flex flex-col items-start gap-1">
                <label htmlFor="email" className="px-3">
                  EMAIL</label>
                <input id="email" type="email"
                       className="bg-[#D9D9D9] rounded-2xl p-3 w-80
                     inset-shadow-[0px_-5px_4px_rgba(0,0,0,0.25)]"
                />
              </div>
            </form>
          </div>

          <div className="flex flex-col gap-1">
            <Link href="/" className="p-3">
              <button className="text-xl cursor-pointer">
                SEND LOGIN LINK</button>
            </Link>
          </div>
        </main>
      </div>
  );
}
