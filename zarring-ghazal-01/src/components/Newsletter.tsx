"use client";

import { useState } from "react";

export default function Newsletter() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const value = email.trim();

        if (!value || !value.includes("@")) {
            setStatus("error");
            return;
        }

        setStatus("success");
        setEmail("");
    };

    return (
        <section className="relative overflow-hidden bg-[#032b3a] py-20">
            {/* Background */}
            <div className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-[#d7a847]/10 blur-[100px]" />

            <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-[#7660c8]/10 blur-[100px]" />

            <div className="container-main relative">
                <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.05] p-8 backdrop-blur-xl md:p-12">
                    <div className="grid items-center gap-10 lg:grid-cols-[1fr_500px]">

                        {/* Text */}
                        <div>
                            <div className="mb-5 flex items-center gap-3">
                                <span className="gold-line" />

                                <span className="text-xs font-bold tracking-[0.2em] text-[#d7a847]">
                  STAY CONNECTED
                </span>
                            </div>

                            <h2 className="text-3xl font-black leading-[1.5] text-white md:text-4xl">
                                با ما
                                <span className="text-[#d7a847]"> همراه باشید</span>
                            </h2>

                            <p className="mt-4 max-w-xl text-sm leading-7 text-white/55">
                                برای دریافت آخرین اخبار، معرفی محصولات و مطالب جدید،
                                ایمیل خود را ثبت کنید.
                            </p>
                        </div>

                        {/* Form */}
                        <div>
                            <form
                                onSubmit={handleSubmit}
                                className="flex flex-col gap-3 sm:flex-row"
                            >
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(event) => {
                                        setEmail(event.target.value);
                                        setStatus("idle");
                                    }}
                                    placeholder="ایمیل شما"
                                    className="h-14 min-w-0 flex-1 rounded-xl border border-white/10 bg-white/5 px-5 text-sm text-white outline-none placeholder:text-white/30 transition focus:border-[#d7a847]/60 focus:bg-white/10"
                                />

                                <button
                                    type="submit"
                                    className="h-14 rounded-xl bg-[#d7a847] px-7 text-sm font-black text-[#032b3a] transition hover:bg-[#f0d58a]"
                                >
                                    عضویت
                                </button>
                            </form>

                            {status === "error" && (
                                <p className="mt-3 text-xs text-red-300">
                                    لطفاً یک ایمیل معتبر وارد کنید.
                                </p>
                            )}

                            {status === "success" && (
                                <p className="mt-3 text-xs text-emerald-300">
                                    ایمیل شما با موفقیت ثبت شد.
                                </p>
                            )}

                            <p className="mt-4 text-[10px] leading-5 text-white/30">
                                با ثبت ایمیل، موافقت خود را با دریافت خبرنامه اعلام می‌کنید.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}