"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
const galleryItems = [
    {
        id: 1,
        image: "/images/about/abuali-sina-campus.jpg",
        title: "کارخانه زرین غزال",
        category: "کارخانه",
        size: "large",
    },
    {
        id: 2,
        image: "/images/products/apada/cheese/category.png",
        title: "محصولات لبنی",
        category: "محصولات",
        size: "normal",
    },
    {
        id: 3,
        image: "/images/products/apada/milk/category.png",
        title: "محصولات تازه",
        category: "تولید",
        size: "normal",
    },
    {
        id: 4,
        image: "/images/products/daity/ice-pop/ana.png",
        title: "تنوع محصولات",
        category: "محصولات",
        size: "normal",
    },
    {
        id: 5,
        image: "/images/products/apada/cream/category.png",
        title: "دسر و خامه",
        category: "محصولات",
        size: "normal",
    },
];
export default function Gallery() {
    const [selected, setSelected] = useState<number | null>(null);

    const selectedIndex =
        selected !== null
            ? galleryItems.findIndex((item) => item.id === selected)
            : -1;

    const selectedItem =
        selectedIndex >= 0 ? galleryItems[selectedIndex] : null;

    const closeLightbox = () => {
        setSelected(null);
    };

    const nextImage = () => {
        if (selectedIndex === -1) return;

        const nextIndex =
            selectedIndex === galleryItems.length - 1
                ? 0
                : selectedIndex + 1;

        setSelected(galleryItems[nextIndex].id);
    };

    const previousImage = () => {
        if (selectedIndex === -1) return;

        const previousIndex =
            selectedIndex === 0
                ? galleryItems.length - 1
                : selectedIndex - 1;

        setSelected(galleryItems[previousIndex].id);
    };

    useEffect(() => {
        if (selected === null) return;

        const handleKeyboard = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                closeLightbox();
            }

            if (event.key === "ArrowLeft") {
                nextImage();
            }

            if (event.key === "ArrowRight") {
                previousImage();
            }
        };

        document.addEventListener("keydown", handleKeyboard);

        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleKeyboard);
            document.body.style.overflow = "";
        };
    }, [selected, selectedIndex]);

    return (
        <>
            <section className="section-padding relative overflow-hidden bg-white">
                <div className="container-main">

                    {/* Header */}
                    <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                        <div>
                            <div className="mb-5 flex items-center gap-3">
                                <span className="gold-line" />

                                <span className="text-xs font-bold tracking-[0.2em] text-[#d7a847]">
                  OUR GALLERY
                </span>
                            </div>

                            <h2 className="text-3xl font-black text-[#182449] md:text-5xl">
                                گالری زرین غزال
                            </h2>

                            <p className="mt-4 max-w-xl text-sm leading-7 text-[#72778a]">
                                نگاهی نزدیک‌تر به کارخانه، محصولات و مسیر تولید زرین غزال.
                            </p>
                        </div>

                        <Link
                            href="/gallery"
                            className="group inline-flex w-fit items-center gap-3 rounded-xl border border-[#e8e6ed] bg-[#faf7ef] px-5 py-3 text-sm font-bold text-[#032b3a] transition hover:-translate-y-1 hover:border-[#d7a847] hover:shadow-lg"
                        >
                            مشاهده گالری کامل

                            <span className="transition-transform duration-300 group-hover:-translate-x-1">
                ←
              </span>
                        </Link>
                    </div>

                    {/* Gallery Grid */}
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">

                        {galleryItems.map((item, index) => (
                            <button
                                key={item.id}
                                type="button"
                                onClick={() => setSelected(item.id)}
                                className={`group relative overflow-hidden rounded-[24px] text-right ${
                                    index === 0
                                        ? "h-[420px] md:col-span-2 md:row-span-2"
                                        : "h-[200px]"
                                }`}
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#021d29]/90 via-[#021d29]/10 to-transparent opacity-80 transition duration-300 group-hover:opacity-100" />

                                {/* Zoom */}
                                <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white opacity-0 backdrop-blur-md transition duration-300 group-hover:opacity-100">
                                    +
                                </div>

                                {/* Content */}
                                <div className="absolute bottom-5 right-5 left-5">
                  <span className="text-[10px] font-bold text-[#d7a847]">
                    {item.category}
                  </span>

                                    <h3 className="mt-1 text-base font-black text-white">
                                        {item.title}
                                    </h3>
                                </div>
                            </button>
                        ))}

                    </div>
                </div>
            </section>

            {/* Lightbox */}
            {selectedItem && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
                    onClick={closeLightbox}
                >
                    <div
                        className="relative w-full max-w-5xl"
                        onClick={(event) => event.stopPropagation()}
                    >
                        {/* Close */}
                        <button
                            type="button"
                            onClick={closeLightbox}
                            aria-label="بستن"
                            className="absolute -top-14 left-0 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-[#d7a847] hover:text-[#021d29]"
                        >
                            ✕
                        </button>

                        {/* Image */}
                        <div className="relative overflow-hidden rounded-[24px] bg-[#021d29]">
                            <img
                                src={selectedItem.image}
                                alt={selectedItem.title}
                                className="max-h-[75vh] w-full object-contain"
                            />

                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <span className="text-xs font-bold text-[#d7a847]">
                  {selectedItem.category}
                </span>

                                <h3 className="mt-1 text-xl font-black text-white">
                                    {selectedItem.title}
                                </h3>
                            </div>
                        </div>

                        {/* Previous */}
                        <button
                            type="button"
                            onClick={previousImage}
                            aria-label="تصویر قبلی"
                            className="absolute right-[-10px] top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xl text-white backdrop-blur-md transition hover:bg-[#d7a847] hover:text-[#021d29] md:right-[-60px]"
                        >
                            →
                        </button>

                        {/* Next */}
                        <button
                            type="button"
                            onClick={nextImage}
                            aria-label="تصویر بعدی"
                            className="absolute left-[-10px] top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xl text-white backdrop-blur-md transition hover:bg-[#d7a847] hover:text-[#021d29] md:left-[-60px]"
                        >
                            ←
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}