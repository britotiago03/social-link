import Link from "next/link";
import { roboto, imprima } from "@/app/ui/fonts";

export default function Home() {
  return (
    <div>
      <main className={`${roboto.className} flex flex-col min-h-screen
      items-center justify-around p-10 gap-3 text-[#050022] text-center`}>
        <div className="flex flex-col gap-20">
          <h1 className={`${imprima.className} text-[#FB4E00]
        text-5xl`}>Social Link</h1>

          <form className="flex flex-col gap-10">
            <div className="flex flex-col items-start gap-1">
              <label htmlFor="username" className="px-3"><b>USERNAME</b></label>
              <input id="username" type="text"
                     className="bg-[#D9D9D9] rounded-2xl p-3 w-64
                     inset-shadow-[0px_-5px_4px_rgba(0,0,0,0.25)]"
              />
            </div>

            <div className="flex flex-col items-start gap-1">
              <label htmlFor="password" className="px-3"><b>PASSWORD</b></label>
              <input id="password" type="password"
                     className="bg-[#D9D9D9] rounded-2xl p-3 w-64
                     inset-shadow-[0px_-5px_4px_rgba(0,0,0,0.25)]"
              />
            </div>
          </form>

        </div>
        <div className="flex flex-col gap-1">
          <Link href="/">
            <button className="text-xl cursor-pointer"><b>LOGIN</b></button>
          </Link>

          <Link href="/">
            <button className="cursor-pointer
            font-extralight">Forgot Password?</button>
          </Link>
        </div>
        <div className="flex gap-1">
          <label><b>Don't have an account?</b></label>
          <button className="cursor-pointer font-extralight">Sign up</button>
        </div>
      </main>
    </div>
  );
}
