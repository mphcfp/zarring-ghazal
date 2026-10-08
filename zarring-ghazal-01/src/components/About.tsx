"use client";

import { useState } from "react";
import Link from "next/link";

export default function About() {
    const [videoOpen, setVideoOpen] = useState(false);

    return (
        <>
            <section className="section-padding relative overflow-hidden bg-[#faf7ef]">
                {/* Background glow */}
                <div className="pointer-events-none absolute -right-40 top-20 h-[400px] w-[400px] rounded-full bg-[#7660c8]/10 blur-[120px]" />

                <div className="container-main relative grid items-center gap-14 lg:grid-cols-2">

                    {/* Image */}
                    <div className="relative">
                        <div className="group relative h-[500px] overflow-hidden rounded-[32px]">
                            <img
                                src="/images/factory.jpg"
                                alt="کارخانه زرین غزال"
                                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-[#021d29]/80 via-transparent to-transparent" />

                            {/* Experience Card */}
                            <div className="absolute bottom-6 right-6 rounded-2xl border border-white/15 bg-[#021d29]/70 p-5 text-white backdrop-blur-xl">
                                <div className="text-3xl font-black text-[#d7a847]">
                                    40+
                                </div>

                                <div className="mt-1 text-xs text-white/60">
                                    سال تجربه
                                </div>
                            </div>

                            {/* Video */}
                            <button
                                type="button"
                                onClick={() => setVideoOpen(true)}
                                className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur-md transition duration-300 hover:scale-110 hover:bg-[#d7a847] hover:text-[#021d29]"
                                aria-label="پخش فیلم کارخانه"
                            >
                <span className="mr-[-4px] text-xl">
                  ▶
                </span>
                            </button>

                            <div className="absolute bottom-6 left-6 text-xs font-medium text-white/70">
                                فیلم کارخانه زرین غزال
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div>
                        <div className="mb-5 flex items-center gap-3">
                            <span className="gold-line" />

                            <span className="text-xs font-bold tracking-[0.2em] text-[#d7a847]">
                ABOUT ZARRING GHAZAL
              </span>
                        </div>

                        <h2 className="text-3xl font-black leading-[1.5] text-[#182449] md:text-5xl">
                            از مزرعه
                            <br />
                            <span className="text-[#032b3a]">تا سفره شما</span>
                        </h2>

                        <p className="mt-7 text-sm leading-8 text-[#72778a]">
                            زرین غزال با بیش از چهار دهه تجربه، تلاش می‌کند محصولاتی با
                            کیفیت و متناسب با نیاز خانواده‌ها تولید کند. ما از انتخاب
                            مواد اولیه تا فرآیند تولید و توزیع، کیفیت را در تمام مراحل
                            جدی می‌گیریم.
                        </p>

                        <p className="mt-4 text-sm leading-8 text-[#72778a]">
                            استفاده از فناوری‌های مدرن، استانداردهای بین‌المللی و نیروی
                            متخصص، بخشی از مسیر ما برای ارائه محصولی مطمئن و باکیفیت است.
                        </p>

                        {/* Features */}
                        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                            {[
                                "مواد اولیه باکیفیت",
                                "کنترل کیفیت مستمر",
                                "فناوری تولید مدرن",
                                "استانداردهای بین‌المللی",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-3 rounded-xl border border-[#e8e6ed] bg-white px-4 py-3"
                                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#032b3a] text-xs text-[#d7a847]">
                    ✓
                  </span>

                                    <span className="text-xs font-bold text-[#182449]">
                    {item}
                  </span>
                                </div>
                            ))}
                        </div>

                        <Link
                            href="/about"
                            className="mt-9 inline-flex items-center gap-3 rounded-xl bg-[#032b3a] px-7 py-3.5 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#d7a847] hover:text-[#032b3a]"
                        >
                            بیشتر درباره ما

                            <span>←</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Video Modal */}
            {videoOpen && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-5 backdrop-blur-md"
                    onClick={() => setVideoOpen(false)}
                >
                    <div
                        className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-[#021d29] shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            type="button"
                            onClick={() => setVideoOpen(false)}
                            className="absolute left-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white transition hover:bg-[#d7a847] hover:text-[#021d29]"
                            aria-label="بستن"
                        >
                            ✕
                        </button>

                        <div className="flex aspect-video items-center justify-center">
                            <div className="px-6 text-center">
                                <div className="text-4xl text-[#d7a847]">
                                    ▶
                                </div>

                                <h3 className="mt-5 text-xl font-black text-white">
                                    فیلم کارخانه زرین غزال
                                </h3>

                                <p className="mt-3 text-sm text-white/50">
                                    فایل ویدئوی کارخانه را بعداً در این قسمت قرار می‌دهیم.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}