"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { productCategories } from "@/data/products";

const productBrands = [
    {
        slug: "daity",
        name: "دایتی",
        englishName: "DAITY",
        description:
            "مجموعه‌ای از محصولات دایتی را در دسته‌بندی‌های مختلف مشاهده کنید.",
        logo: "/images/brands/daity-logo.png",
    },
    {
        slug: "apada",
        name: "آپادا",
        englishName: "APADA",
        description:
            "مجموعه محصولات لبنی آپادا را در دسته‌بندی‌های مختلف مشاهده کنید.",
        logo: "/images/brands/apada-logo.png",
    },
];

export default function ProductsPage() {
    const [openBrands, setOpenBrands] = useState<Record<string, boolean>>({
        daity: true,
        apada: true,
    });

    const toggleBrand = (brandSlug: string) => {
        setOpenBrands((current) => ({
            ...current,
            [brandSlug]: !current[brandSlug],
        }));
    };

    return (
        <>
            <Navbar />

            <main className="min-h-screen bg-[#faf7ef]">

                {/* =====================================================
                    HERO
                ===================================================== */}

                <section className="relative overflow-hidden bg-[#021d29] py-28">

                    <div className="absolute -right-40 -top-40 h-[450px] w-[450px] rounded-full bg-[#d7a847]/10 blur-[120px]" />

                    <div className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-[#7660c8]/10 blur-[120px]" />

                    <div className="container-main relative z-10">

                        <div className="max-w-3xl">

                            <div className="mb-6 flex items-center gap-3">

                                <span className="h-[2px] w-12 bg-[#d7a847]" />

                                <span className="text-xs font-bold tracking-[0.2em] text-[#d7a847]">
                                    PRODUCTS
                                </span>

                            </div>

                            <h1 className="text-4xl font-black leading-[1.5] text-white sm:text-5xl lg:text-6xl">

                                محصولات

                                <span className="text-[#d7a847]">
                                    {" "}
                                    دایتی و آپادا
                                </span>

                            </h1>

                            <p className="mt-6 max-w-2xl text-base leading-9 text-white/60 sm:text-lg">
                                مجموعه محصولات برندهای دایتی و آپادا را در
                                دسته‌بندی‌های مختلف مشاهده کنید و برای آشنایی
                                بیشتر با هر محصول وارد صفحه اختصاصی آن شوید.
                            </p>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    BRANDS
                ===================================================== */}

                <section className="py-20 sm:py-24">

                    <div className="container-main">

                        {/* SECTION TITLE */}

                        <div className="mb-12">

                            <div className="mb-4 flex items-center gap-3">

                                <span className="h-[2px] w-10 bg-[#d7a847]" />

                                <span className="text-xs font-bold tracking-[0.2em] text-[#d7a847]">
                                    PRODUCT BRANDS
                                </span>

                            </div>

                            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

                                <div>

                                    <h2 className="text-3xl font-black text-[#182449] sm:text-4xl">
                                        برند محصولات
                                    </h2>

                                    <p className="mt-4 max-w-2xl text-sm leading-8 text-[#72778a]">
                                        برند موردنظر خود را انتخاب کنید تا
                                        دسته‌بندی محصولات آن را مشاهده کنید.
                                    </p>

                                </div>

                                <div className="rounded-full border border-[#e8e6ed] bg-white px-5 py-2.5 text-sm font-bold text-[#182449] shadow-sm">
                                    ۲ برند
                                </div>

                            </div>

                        </div>


                        {/* =================================================
                            BRAND GRID
                        ================================================= */}

                        <div className="grid items-start gap-7 lg:grid-cols-2">

                            {productBrands.map((brand) => {

                                const categories =
                                    productCategories.filter(
                                        (category) =>
                                            category.brandSlug ===
                                            brand.slug
                                    );

                                const isOpen =
                                    openBrands[brand.slug];

                                return (
                                    <section
                                        key={brand.slug}
                                        className="overflow-hidden rounded-[28px] border border-[#e8e6ed] bg-white shadow-[0_15px_50px_rgba(16,36,73,0.06)]"
                                    >

                                        {/* =================================================
                                            BRAND HEADER
                                        ================================================= */}

                                        <div className="relative overflow-hidden bg-[#021d29] p-6">

                                            {/* Glow */}

                                            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#d7a847]/10 blur-[80px]" />

                                            <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-[#7660c8]/10 blur-[70px]" />


                                            <div className="relative flex items-center gap-4">

                                                {/* LOGO */}

                                                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white p-3 shadow-lg">

                                                    <Image
                                                        src={brand.logo}
                                                        alt={brand.name}
                                                        width={70}
                                                        height={70}
                                                        className="h-full w-full object-contain"
                                                    />

                                                </div>


                                                {/* BRAND INFO */}

                                                <div className="min-w-0 flex-1">

                                                    <div className="mb-1 flex items-center gap-2">

                                                        <span className="text-[10px] font-bold tracking-[0.2em] text-[#d7a847]">
                                                            {brand.englishName}
                                                        </span>

                                                        <span className="h-1 w-1 rounded-full bg-white/30" />

                                                        <span className="text-[10px] text-white/40">
                                                            {categories.length} دسته
                                                        </span>

                                                    </div>

                                                    <h3 className="text-2xl font-black text-white">
                                                        {brand.name}
                                                    </h3>

                                                    <p className="mt-1 truncate text-xs text-white/50">
                                                        {brand.description}
                                                    </p>

                                                </div>


                                                {/* TOGGLE BUTTON */}

                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        toggleBrand(
                                                            brand.slug
                                                        )
                                                    }
                                                    aria-label={
                                                        isOpen
                                                            ? `بستن محصولات ${brand.name}`
                                                            : `باز کردن محصولات ${brand.name}`
                                                    }
                                                    aria-expanded={
                                                        isOpen
                                                    }
                                                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition duration-300 hover:border-[#d7a847]/50 hover:bg-[#d7a847] hover:text-[#021d29]"
                                                >

                                                    <span
                                                        className={`text-xl transition-transform duration-300 ${
                                                            isOpen
                                                                ? "rotate-180"
                                                                : ""
                                                        }`}
                                                    >
                                                        ↓
                                                    </span>

                                                </button>

                                            </div>

                                        </div>


                                        {/* =================================================
                                            CATEGORIES
                                        ================================================= */}

                                        <div
                                            className={`grid transition-all duration-500 ease-in-out ${
                                                isOpen
                                                    ? "grid-rows-[1fr] opacity-100"
                                                    : "grid-rows-[0fr] opacity-0"
                                            }`}
                                        >

                                            <div className="min-h-0 overflow-hidden">

                                                <div className="p-5 sm:p-6">

                                                    {/* CATEGORY HEADER */}

                                                    <div className="mb-6 flex items-center justify-between">

                                                        <div>

                                                            <div className="mb-2 flex items-center gap-2">

                                                                <span className="h-[2px] w-6 bg-[#d7a847]" />

                                                                <span className="text-[10px] font-bold tracking-[0.15em] text-[#b58a2e]">
                                                                    {brand.englishName} CATEGORIES
                                                                </span>

                                                            </div>

                                                            <h4 className="text-lg font-black text-[#182449]">
                                                                دسته‌بندی محصولات
                                                            </h4>

                                                        </div>


                                                        <Link
                                                            href={`/products/${brand.slug}`}
                                                            className="rounded-full border border-[#e8e6ed] bg-[#faf7ef] px-4 py-2 text-xs font-bold text-[#182449] transition hover:border-[#d7a847] hover:bg-[#d7a847] hover:text-[#021d29]"
                                                        >
                                                            همه محصولات
                                                        </Link>

                                                    </div>


                                                    {/* =================================================
                                                        CATEGORY CARDS
                                                    ================================================= */}

                                                    <div className="grid gap-5 sm:grid-cols-2">

                                                        {categories.map(
                                                            (category) => (
                                                                <Link
                                                                    key={
                                                                        category.id
                                                                    }
                                                                    href={`/products/${brand.slug}/${category.slug}`}
                                                                    className="group overflow-hidden rounded-[24px] border border-[#e8e6ed] bg-white shadow-[0_10px_35px_rgba(16,36,73,0.05)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(16,36,73,0.1)]"
                                                                >

                                                                    {/* IMAGE */}

                                                                    <div className="relative aspect-[4/3] overflow-hidden bg-[#f4f1e8]">

                                                                        <Image
                                                                            src={
                                                                                category.image
                                                                            }
                                                                            alt={
                                                                                category.name
                                                                            }
                                                                            fill
                                                                            sizes="(max-width: 640px) 100vw, 50vw"
                                                                            className="object-cover transition duration-700 group-hover:scale-105"
                                                                        />

                                                                        <div className="absolute inset-0 bg-gradient-to-t from-[#021d29]/70 via-transparent to-transparent opacity-80" />


                                                                        {/* BRAND */}

                                                                        <div className="absolute right-4 top-4 rounded-full border border-white/20 bg-[#021d29]/70 px-3 py-1.5 text-[10px] font-bold text-white backdrop-blur-md">
                                                                            {brand.name}
                                                                        </div>


                                                                        {/* ARROW */}

                                                                        <div className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#d7a847] text-base font-black text-[#021d29] transition duration-300 group-hover:scale-110">
                                                                            ←
                                                                        </div>

                                                                    </div>


                                                                    {/* CONTENT */}

                                                                    <div className="p-5">

                                                                        <h5 className="text-lg font-black text-[#182449] transition group-hover:text-[#b58a2e]">
                                                                            {
                                                                                category.name
                                                                            }
                                                                        </h5>

                                                                        <p className="mt-2 line-clamp-2 text-xs leading-6 text-[#72778a]">
                                                                            {
                                                                                category.description
                                                                            }
                                                                        </p>

                                                                        <div className="mt-5 flex items-center justify-between border-t border-[#eeeeee] pt-4">

                                                                            <span className="text-xs font-bold text-[#182449]">
                                                                                مشاهده محصولات
                                                                            </span>

                                                                            <span className="text-[#d7a847] transition-transform duration-300 group-hover:-translate-x-2">
                                                                                ←
                                                                            </span>

                                                                        </div>

                                                                    </div>

                                                                </Link>
                                                            )
                                                        )}

                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    </section>
                                );
                            })}

                        </div>

                    </div>

                </section>

            </main>

            <Footer />
        </>
    );
}