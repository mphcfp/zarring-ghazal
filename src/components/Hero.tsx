"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
    {
        image: "/images/hero/daity-factory.jpg",
        eyebrow: "گروه صنعتی زرین غزال",
        title: "تجربه‌ای ماندگار",
        highlight: "با طعم دایتی",
        description:
            "تولید محصولات بستنی با تکیه بر تجربه، فناوری و توجه مستمر به کیفیت.",
        button: "مشاهده محصولات",
        href: "/products/daity",
    },
    {
        image: "/images/hero/apada-factory.jpg",
        eyebrow: "کارخانه لبنیات آپادا",
        title: "سلامت از",
        highlight: "مزرعه تا سفره",
        description:
            "تولید محصولات لبنی با تمرکز بر کیفیت مواد اولیه، کنترل کیفیت و زنجیره سرد.",
        button: "مشاهده محصولات",
        href: "/products/apada",
    },
    {
        image: "/images/hero/ceo.jpg",
        eyebrow: "شرکت زرین غزال",
        title: "تجربه، کیفیت و",
        highlight: "نگاه به آینده",
        description:
            "زرین غزال؛ مجموعه‌ای متکی بر تجربه، نوآوری، کیفیت و توسعه پایدار.",
        button: "درباره شرکت",
        href: "/about",
    },
];

export default function Hero() {
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((current) => (current + 1) % slides.length);
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setActiveSlide((current) => (current + 1) % slides.length);
    };

    const previousSlide = () => {
        setActiveSlide(
            (current) => (current - 1 + slides.length) % slides.length
        );
    };

    const slide = slides[activeSlide];

    return (
        <section className="relative min-h-[720px] overflow-hidden bg-[#021d29]">
            {/* Background */}
            {slides.map((item, index) => (
                <div
                    key={item.image}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                        index === activeSlide
                            ? "opacity-100"
                            : "pointer-events-none opacity-0"
                    }`}
                >
                    <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-[#021d29]/55" />

                    <div className="absolute inset-0 bg-gradient-to-l from-[#021d29] via-[#021d29]/65 to-transparent" />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#021d29] via-transparent to-[#021d29]/30" />
                </div>
            ))}

            {/* Content */}
            <div className="container-main relative z-10 flex min-h-[720px] items-center">
                <div className="max-w-3xl text-white">
                    <div className="mb-6 flex items-center gap-3">
                        <span className="h-[2px] w-12 bg-[#d7a847]" />

                        <span className="text-sm font-bold text-[#f0d58a]">
                            {slide.eyebrow}
                        </span>
                    </div>

                    <h1 className="text-5xl font-black leading-[1.25] sm:text-6xl lg:text-7xl">
                        {slide.title}

                        <span className="mt-2 block text-[#d7a847]">
                            {slide.highlight}
                        </span>
                    </h1>

                    <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
                        {slide.description}
                    </p>

                    <div className="mt-9 flex flex-wrap gap-4">
                        <Link
                            href={slide.href}
                            className="group flex items-center gap-3 rounded-2xl bg-[#d7a847] px-7 py-4 font-bold text-[#021d29] transition duration-300 hover:-translate-y-1 hover:bg-[#f0d58a]"
                        >
                            {slide.button}

                            <span className="transition-transform duration-300 group-hover:-translate-x-1">
                                ←
                            </span>
                        </Link>

                        <Link
                            href="/contact"
                            className="rounded-2xl border border-white/20 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/20"
                        >
                            تماس با ما
                        </Link>
                    </div>

                    {/* Counter */}
                    <div className="mt-14 flex items-center gap-4">
                        <span className="font-bold text-[#d7a847]">
                            {String(activeSlide + 1).padStart(2, "0")}
                        </span>

                        <div className="h-[2px] w-24 bg-white/20">
                            <div
                                className="h-full bg-[#d7a847] transition-all duration-500"
                                style={{
                                    width: `${
                                        ((activeSlide + 1) / slides.length) * 100
                                    }%`,
                                }}
                            />
                        </div>

                        <span className="text-white/40">
                            {String(slides.length).padStart(2, "0")}
                        </span>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <div className="absolute bottom-10 left-0 right-0 z-20">
                <div className="container-main flex items-center justify-between">
                    {/* Dots */}
                    <div className="flex items-center gap-2">
                        {slides.map((item, index) => (
                            <button
                                key={item.image}
                                type="button"
                                aria-label={`اسلاید ${index + 1}`}
                                onClick={() => setActiveSlide(index)}
                                className={`h-2 rounded-full transition-all duration-300 ${
                                    index === activeSlide
                                        ? "w-10 bg-[#d7a847]"
                                        : "w-2 bg-white/40 hover:bg-white/70"
                                }`}
                            />
                        ))}
                    </div>

                    {/* Arrows */}
                    <div className="flex gap-3">
                        <button
                            type="button"
                            onClick={previousSlide}
                            aria-label="اسلاید قبلی"
                            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-xl text-white backdrop-blur-md transition hover:border-[#d7a847] hover:bg-[#d7a847] hover:text-[#021d29]"
                        >
                            →
                        </button>

                        <button
                            type="button"
                            onClick={nextSlide}
                            aria-label="اسلاید بعدی"
                            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-xl text-white backdrop-blur-md transition hover:border-[#d7a847] hover:bg-[#d7a847] hover:text-[#021d29]"
                        >
                            ←
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}