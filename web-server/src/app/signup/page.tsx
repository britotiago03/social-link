"use client";

import Link from "next/link";
import { roboto } from "@/app/ui/fonts";
import { InputFieldText, InputFieldPassword, TopNavBar } from "@/app/ui/components";

export default function SignupPage() {
  const start = new Date().getFullYear();
  const end = 1905;
  const years = Array.from({ length: start - end + 1},
      (_, i) => start - i);

  return (
      <div className="min-h-screen">
        <TopNavBar returnLink="/" />
        <main className={`${roboto.className} flex flex-col gap-20
        font-bold
        items-center justify-around p-10 gap-3 text-[#050022] text-center`}>
          <div className="flex flex-col gap-20">
            <h1 className="text-[#FB4E00] text-3xl">Sign up</h1>

            <form className="flex flex-col gap-5">
              <InputFieldText inputFieldId="firstname"
                              inputFieldLabel="FIRST NAME"/>
              <InputFieldText inputFieldId="lastname"
                              inputFieldLabel="LAST NAME"/>
              <InputFieldText inputFieldId="username"
                              inputFieldLabel="USERNAME"/>

              <div className="flex flex-col items-start gap-1">
                <label htmlFor="birthday" className="px-3">
                  BIRTHDAY</label>
                <div className="flex w-80 gap-3 font-normal">
                  <select id="month"
                          className="bg-[#D9D9D9] rounded-2xl p-3 w-1/3
                        inset-shadow-[0px_-5px_4px_rgba(0,0,0,0.25)]">
                    <option value="1">Jan</option>
                    <option value="2">Feb</option>
                    <option value="3">Mar</option>
                    <option value="4">Apr</option>
                    <option value="5">May</option>
                    <option value="6">Jun</option>
                    <option value="7">Jul</option>
                    <option value="8">Aug</option>
                    <option value="9">Sep</option>
                    <option value="10">Oct</option>
                    <option value="11">Nov</option>
                    <option value="12">Dec</option>
                  </select>

                  <select id="day"
                          className="bg-[#D9D9D9] rounded-2xl p-3 w-1/3
                        inset-shadow-[0px_-5px_4px_rgba(0,0,0,0.25)]">
                    {[...Array(31)].map((_, i) => (
                        <option key={i} value={i + 1}>{i + 1}</option>
                    ))}
                  </select>

                  <select id="year"
                          className="bg-[#D9D9D9] rounded-2xl p-3 w-1/3
                        inset-shadow-[0px_-5px_4px_rgba(0,0,0,0.25)]">
                    {years.map((year) => (
                        <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>

              </div>

              <div className="flex flex-col items-start gap-1">
                <label className="px-3">
                  GENDER</label>
                <fieldset className="flex gap-3 w-80 font-normal">
                  <label htmlFor="female"
                         className="flex justify-between gap-3 bg-[#D9D9D9]
                         rounded-2xl p-3
                         inset-shadow-[0px_-5px_4px_rgba(0,0,0,0.25)] w-1/3">Female
                    <input id="female" type="radio" name="gender"/>
                  </label>
                  <label htmlFor="male"
                         className="flex justify-between gap-3 bg-[#D9D9D9]
                         rounded-2xl p-3
                         inset-shadow-[0px_-5px_4px_rgba(0,0,0,0.25)] w-1/3">Male
                    <input id="male" type="radio" name="gender"/>
                  </label>
                  <label htmlFor="other"
                         className="flex justify-between gap-3 bg-[#D9D9D9]
                         rounded-2xl p-3
                         inset-shadow-[0px_-5px_4px_rgba(0,0,0,0.25)] w-1/3">Other
                    <input id="other" type="radio" name="gender"/>
                  </label>

                </fieldset>

              </div>

              <div className="flex flex-col items-start gap-1">
                <label htmlFor="email" className="px-3">
                  EMAIL</label>
                <input id="email" type="email"
                       className="bg-[#D9D9D9] rounded-2xl p-3 w-80
                     inset-shadow-[0px_-5px_4px_rgba(0,0,0,0.25)]"
                />
              </div>

              <InputFieldPassword inputFieldLabel="PASSWORD"/>
            </form>
          </div>

          <div className="flex flex-col gap-1">
            <Link href={"/home"} className="p-3">
              <button className="text-xl cursor-pointer">SIGN UP</button>
            </Link>
          </div>
        </main>
      </div>
  );
}
