"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const galleryItems = [
    {
        id: 1,
        title: "کارخانه بستنی دایتی",
        category: "تولید",
        description:
            "بخش تولید بستنی زرین غزال با ظرفیت بیش از ۳۰۰ تن در روز.",
        image: "/images/about/daity-ice-cream-factory.jpg",
    },
    {
        id: 2,
        title: "کارخانه لبنیات آپادا",
        category: "تولید",
        description:
            "کارخانه لبنیات آپادا با ظرفیت تولید ۵۰۰ تن محصولات لبنی در روز.",
        image: "/images/about/apada-dairy-factory.jpg",
    },
    {
        id: 3,
        title: "مرکز خیریه همودیالیز حاج رضا ابراهیمی",
        category: "مسئولیت اجتماعی",
        description:
            "یکی از زیرساخت‌های مهم اجتماعی مجموعه زرین غزال.",
        image: "/images/about/haj-reza-ebrahimi-dialysis.jpg",
    },
    {
        id: 4,
        title: "سالن چندمنظوره ورزشی غزال",
        category: "ورزش",
        description:
            "مجموعه ورزشی چندمنظوره غزال با امکانات گسترده ورزشی.",
        image: "/images/about/ghazal-sports-hall.jpg",
    },
    {
        id: 5,
        title: "مجموعه ورزشی روباز پارسیرنگ",
        category: "ورزش",
        description:
            "مجموعه ورزشی روباز پارسیرنگ در مجموعه ابوعلی‌سینا.",
        image: "/images/about/parsirang-sports-complex.jpg",
    },
    {
        id: 6,
        title: "پردیس آموزشی و پژوهشی ابوعلی‌سینا",
        category: "آموزش",
        description:
            "پردیس آموزشی و پژوهشی برای میزبانی و فعالیت‌های آموزشی و ورزشی.",
        image: "/images/about/abuali-sina-campus.jpg",
    },
];

export default function GalleryPage() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(
        null
    );

    const selected =
        selectedIndex !== null
            ? galleryItems[selectedIndex]
            : null;

    function closeLightbox() {
        setSelectedIndex(null);
    }

    function showPrevious() {
        if (selectedIndex === null) return;

        setSelectedIndex(
            selectedIndex === 0
                ? galleryItems.length - 1
                : selectedIndex - 1
        );
    }

    function showNext() {
        if (selectedIndex === null) return;

        setSelectedIndex(
            selectedIndex === galleryItems.length - 1
                ? 0
                : selectedIndex + 1
        );
    }

    useEffect(() => {
        if (selectedIndex === null) {
            document.body.style.overflow = "";
            return;
        }

        document.body.style.overflow = "hidden";

        function handleKeyboard(event: KeyboardEvent) {
            if (event.key === "Escape") {
                closeLightbox();
            }

            if (event.key === "ArrowRight") {
                showPrevious();
            }

            if (event.key === "ArrowLeft") {
                showNext();
            }
        }

        window.addEventListener("keydown", handleKeyboard);

        return () => {
            window.removeEventListener("keydown", handleKeyboard);
            document.body.style.overflow = "";
        };
    }, [selectedIndex]);

    return (
        <>
            <Navbar />

            <main className="overflow-hidden bg-[#faf7ef]">

                {/* HERO */}
                <section className="relative overflow-hidden bg-[#021d29] py-28">
                    <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#d7a847]/10 blur-3xl" />
                    <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#7660c8]/10 blur-3xl" />

                    <div className="container-main relative z-10">
                        <div className="max-w-3xl text-white">

                            <div className="mb-6 flex items-center gap-3">
                                <span className="h-[2px] w-12 bg-[#d7a847]" />

                                <span className="text-xs font-bold tracking-[0.2em] text-[#d7a847]">
                  GALLERY
                </span>
                            </div>

                            <h1 className="text-4xl font-black leading-[1.5] sm:text-5xl lg:text-6xl">
                                گالری
                                <span className="text-[#d7a847]">
                  {" "}
                                    زرین غزال
                </span>
                            </h1>

                            <p className="mt-6 max-w-2xl text-base leading-9 text-white/65 sm:text-lg">
                                نگاهی تصویری به بخشی از کارخانه‌ها، زیرساخت‌ها،
                                مجموعه‌های ورزشی و فعالیت‌های اجتماعی زرین غزال.
                            </p>

                        </div>
                    </div>
                </section>

                {/* GALLERY */}
                <section className="section-padding">
                    <div className="container-main">

                        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">

                            <div>
                                <div className="mb-4 flex items-center gap-3">
                                    <span className="h-[2px] w-10 bg-[#d7a847]" />

                                    <span className="text-xs font-bold tracking-[0.2em] text-[#d7a847]">
                    VISUAL ARCHIVE
                  </span>
                                </div>

                                <h2 className="text-3xl font-black text-[#182449] sm:text-4xl">
                                    تصاویر مجموعه
                                </h2>
                            </div>

                            <div className="text-sm text-[#72778a]">
                                {galleryItems.length} تصویر
                            </div>

                        </div>

                        {/* GRID */}
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

                            {galleryItems.map((item, index) => (
                                <button
                                    key={item.id}
                                    type="button"
                                    onClick={() => setSelectedIndex(index)}
                                    className={`group relative overflow-hidden rounded-[28px] bg-[#032b3a] text-right shadow-[0_20px_60px_rgba(16,36,73,0.08)] ${
                                        index === 0
                                            ? "sm:col-span-2 lg:row-span-2"
                                            : ""
                                    }`}
                                >

                                    <div
                                        className={`relative ${
                                            index === 0
                                                ? "h-[520px] sm:h-[620px]"
                                                : "h-[360px]"
                                        }`}
                                    >
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-[#021d29]/95 via-[#021d29]/20 to-transparent opacity-80 transition duration-500 group-hover:opacity-95" />

                                        {/* NUMBER */}
                                        <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-[#021d29]/60 text-xs font-black text-[#d7a847] backdrop-blur-md">
                                            {String(item.id).padStart(2, "0")}
                                        </div>

                                        {/* CATEGORY */}
                                        <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-bold text-white backdrop-blur-md">
                                            {item.category}
                                        </div>

                                        {/* CONTENT */}
                                        <div className="absolute bottom-0 right-0 left-0 p-6">

                                            <div className="flex items-end justify-between gap-5">

                                                <div>
                                                    <h3
                                                        className={`font-black text-white ${
                                                            index === 0
                                                                ? "text-2xl sm:text-3xl"
                                                                : "text-xl"
                                                        }`}
                                                    >
                                                        {item.title}
                                                    </h3>

                                                    <p className="mt-2 max-w-xl text-xs leading-7 text-white/65 sm:text-sm">
                                                        {item.description}
                                                    </p>
                                                </div>

                                                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#d7a847] text-lg font-bold text-[#021d29] transition duration-300 group-hover:-translate-x-1">
                          ↗
                        </span>

                                            </div>

                                        </div>

                                    </div>
                                </button>
                            ))}

                        </div>

                    </div>
                </section>

                {/* CTA */}
                <section className="bg-[#032b3a] py-20">
                    <div className="container-main">

                        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-8 text-center backdrop-blur-xl sm:p-12">

                            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#d7a847]/10 blur-3xl" />
                            <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-[#7660c8]/10 blur-3xl" />

                            <div className="relative z-10">

                <span className="text-xs font-bold tracking-[0.2em] text-[#d7a847]">
                  ZARRING GHAZAL
                </span>

                                <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">
                                    با محصولات زرین غزال آشنا شوید
                                </h2>

                                <p className="mx-auto mt-4 max-w-2xl text-sm leading-8 text-white/60">
                                    برای مشاهده محصولات و برندهای مجموعه می‌توانید
                                    وارد کاتالوگ محصولات شوید.
                                </p>

                                <Link
                                    href="/products"
                                    className="mt-8 inline-flex rounded-xl bg-[#d7a847] px-8 py-4 text-sm font-black text-[#021d29] transition hover:bg-[#f0d58a]"
                                >
                                    مشاهده محصولات
                                </Link>

                            </div>
                        </div>

                    </div>
                </section>

            </main>

            {/* LIGHTBOX */}
            {selected && selectedIndex !== null && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-[#021d29]/90 p-4 backdrop-blur-md"
                    onClick={closeLightbox}
                >

                    <div
                        className="relative flex h-full max-h-[900px] w-full max-w-7xl flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[#021d29]"
                        onClick={(event) => event.stopPropagation()}
                    >

                        {/* TOP BAR */}
                        <div className="absolute right-0 left-0 top-0 z-20 flex items-center justify-between p-5">

                            <div className="rounded-full border border-white/10 bg-[#021d29]/60 px-4 py-2 text-xs font-bold text-white/70 backdrop-blur-md">
                                {selectedIndex + 1} / {galleryItems.length}
                            </div>

                            <button
                                type="button"
                                onClick={closeLightbox}
                                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#021d29]/60 text-2xl text-white backdrop-blur-md transition hover:bg-[#d7a847] hover:text-[#021d29]"
                                aria-label="بستن"
                            >
                                ×
                            </button>

                        </div>

                        {/* IMAGE */}
                        <div className="relative flex min-h-0 flex-1 items-center justify-center p-4 sm:p-10">

                            <img
                                src={selected.image}
                                alt={selected.title}
                                className="max-h-full max-w-full rounded-2xl object-contain"
                            />

                            {/* PREVIOUS */}
                            <button
                                type="button"
                                onClick={showPrevious}
                                className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#021d29]/70 text-xl text-white backdrop-blur-md transition hover:bg-[#d7a847] hover:text-[#021d29] sm:right-8"
                                aria-label="تصویر قبلی"
                            >
                                →
                            </button>

                            {/* NEXT */}
                            <button
                                type="button"
                                onClick={showNext}
                                className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#021d29]/70 text-xl text-white backdrop-blur-md transition hover:bg-[#d7a847] hover:text-[#021d29] sm:left-8"
                                aria-label="تصویر بعدی"
                            >
                                ←
                            </button>

                        </div>

                        {/* INFO */}
                        <div className="border-t border-white/10 bg-[#021d29] p-5 sm:p-7">

                            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

                                <div>
                                    <div className="text-[11px] font-bold tracking-[0.18em] text-[#d7a847]">
                                        {selected.category}
                                    </div>

                                    <h2 className="mt-1 text-xl font-black text-white sm:text-2xl">
                                        {selected.title}
                                    </h2>
                                </div>

                                <p className="max-w-xl text-xs leading-7 text-white/50 sm:text-sm">
                                    {selected.description}
                                </p>

                            </div>

                        </div>

                    </div>
                </div>
            )}

            <Footer />
        </>
    );
}