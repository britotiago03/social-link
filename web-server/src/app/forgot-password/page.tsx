import Image from "next/image";
import Link from "next/link";
import { roboto } from "@/app/ui/fonts";

export default function ForgotPassword() {

  return (
      <div>
        <nav className="flex px-5 pt-7">
          <Link className="py-3" href={"/"}>
            <Image src="/arrow.svg"
                   width={42}
                   height={23}
                   alt="Navigation arrow"
            />
          </Link>
        </nav>
        <main className={`${roboto.className} flex flex-col min-h-full gap-20
        overflow-hidden
        items-center justify-around p-10 gap-3 text-[#050022] text-center`}>
          <div className="flex flex-col gap-20">
            <h1 className="text-[#FB4E00] text-3xl"><b>Forgot password?</b></h1>

            <form className="flex flex-col gap-5">
              <div className="flex flex-col items-start gap-1">
                <label htmlFor="email" className="px-3">
                  <b>EMAIL</b></label>
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
                <b>SEND LOGIN LINK</b></button>
            </Link>
          </div>
        </main>
      </div>
  );
}
