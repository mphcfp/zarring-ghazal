"use client";

import { FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import {
    products,
    productCategories,
} from "@/data/products";

type ProductsCatalogProps = {
    initialSearch?: string;
    initialBrand?: string;
};

const brands = [
    {
        slug: "all",
        name: "همه برندها",
    },
    {
        slug: "daity",
        name: "دایتی",
    },
    {
        slug: "apada",
        name: "آپادا",
    },
    {
        slug: "zarring-ghazal",
        name: "زرین غزال",
    },
];

function normalizeText(value: string) {
    return value
        .trim()
        .toLowerCase()
        .replace(/ي/g, "ی")
        .replace(/ى/g, "ی")
        .replace(/ك/g, "ک")
        .replace(/ة/g, "ه")
        .replace(/\u200c/g, " ")
        .replace(/\s+/g, " ");
}

export default function ProductsCatalog({
                                            initialSearch = "",
                                            initialBrand = "all",
                                        }: ProductsCatalogProps) {
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();

    const currentSearch =
        searchParams.get("search") ?? initialSearch;

    const currentBrand =
        searchParams.get("brand") ?? initialBrand;

    const safeBrand =
        brands.some((brand) => brand.slug === currentBrand)
            ? currentBrand
            : "all";

    const [searchInput, setSearchInput] =
        useState(currentSearch);

    const [selectedCategory, setSelectedCategory] =
        useState("all");

    /*
     * دسته‌بندی‌ها مستقیماً از دیتای اصلی ساخته می‌شوند
     */
    const categories = useMemo(() => {
        const uniqueCategories = new Map<
            string,
            {
                value: string;
                label: string;
            }
        >();

        for (const category of productCategories) {
            if (!uniqueCategories.has(category.slug)) {
                uniqueCategories.set(category.slug, {
                    value: category.slug,
                    label: category.name,
                });
            }
        }

        return [
            {
                value: "all",
                label: "همه محصولات",
            },
            ...Array.from(uniqueCategories.values()),
        ];
    }, []);

    /*
     * ساخت URL جدید
     */
    function updateUrl(
        searchValue: string,
        brandValue: string
    ) {
        const params = new URLSearchParams();

        const cleanSearch = searchValue.trim();

        if (cleanSearch) {
            params.set("search", cleanSearch);
        }

        if (brandValue && brandValue !== "all") {
            params.set("brand", brandValue);
        }

        const queryString = params.toString();

        router.push(
            queryString
                ? `${pathname}?${queryString}`
                : pathname
        );
    }

    /*
     * Search
     */
    function handleSearchSubmit(
        event: FormEvent<HTMLFormElement>
    ) {
        event.preventDefault();

        updateUrl(
            searchInput,
            safeBrand
        );
    }

    /*
     * Brand
     */
    function handleBrandChange(
        brandSlug: string
    ) {
        updateUrl(
            currentSearch,
            brandSlug
        );
    }

    /*
     * Category
     */
    function handleCategoryChange(
        category: string
    ) {
        setSelectedCategory(category);
    }

    /*
     * Clear everything
     */
    function clearFilters() {
        setSearchInput("");
        setSelectedCategory("all");

        router.push(pathname);
    }

    /*
     * Filter products
     */
    const filteredProducts = useMemo(() => {
        const search = normalizeText(currentSearch);

        return products.filter((product) => {
            const category = productCategories.find(
                (item) =>
                    item.slug === product.categorySlug &&
                    item.brandSlug === product.brandSlug
            );

            const categoryName =
                category?.name ?? "";

            /*
             * SEARCH
             */
            const matchesSearch =
                search.length === 0 ||
                normalizeText(product.name).includes(search) ||
                normalizeText(categoryName).includes(search) ||
                normalizeText(product.brandName).includes(search) ||
                normalizeText(product.description).includes(search);

            /*
             * CATEGORY
             */
            const matchesCategory =
                selectedCategory === "all" ||
                product.categorySlug === selectedCategory;

            /*
             * BRAND
             */
            const matchesBrand =
                safeBrand === "all" ||
                product.brandSlug === safeBrand;

            return (
                matchesSearch &&
                matchesCategory &&
                matchesBrand
            );
        });
    }, [
        currentSearch,
        safeBrand,
        selectedCategory,
    ]);

    const hasActiveFilters =
        currentSearch.trim() !== "" ||
        safeBrand !== "all" ||
        selectedCategory !== "all";

    return (
        <section className="min-h-screen bg-[#faf7ef] py-14 md:py-20">
            <div className="container-main">
                {/* HEADER */}

                <div className="mb-10 text-center">
                    <span className="text-xs font-bold tracking-[0.25em] text-[#d7a847] md:text-sm">
                        ZARRING GHAZAL
                    </span>

                    <h1 className="mt-3 text-3xl font-black text-[#032b3a] md:text-5xl">
                        محصولات زرین غزال
                    </h1>

                    <div className="mx-auto mt-5 h-[3px] w-14 rounded-full bg-[#d7a847]" />

                    <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-[#72778a] md:text-base">
                        مجموعه‌ای از محصولات متنوع با تمرکز بر کیفیت،
                        تنوع و تجربه بهتر برای مصرف‌کنندگان.
                    </p>
                </div>

                {/* SEARCH */}

                <form
                    onSubmit={handleSearchSubmit}
                    className="mx-auto mb-8 max-w-4xl"
                >
                    <div className="flex flex-col gap-3 rounded-[26px] border border-[#e8e6ed] bg-white p-3 shadow-[0_15px_50px_rgba(16,36,73,0.07)] sm:flex-row">
                        <div className="flex min-w-0 flex-1 items-center rounded-2xl bg-[#faf7ef] px-4">
                            <span className="ml-3 text-xl text-[#d7a847]">
                                ⌕
                            </span>

                            <input
                                type="text"
                                value={searchInput}
                                onChange={(event) =>
                                    setSearchInput(event.target.value)
                                }
                                placeholder="جستجو در محصولات..."
                                className="w-full min-w-0 bg-transparent py-4 text-sm text-[#182449] outline-none placeholder:text-[#72778a]"
                            />
                        </div>

                        <button
                            type="submit"
                            className="rounded-2xl bg-[#032b3a] px-8 py-4 text-sm font-bold text-white transition duration-300 hover:bg-[#06465d]"
                        >
                            جستجو
                        </button>
                    </div>
                </form>

                {/* FILTERS */}

                <div className="mb-10 grid gap-4 lg:grid-cols-2">
                    {/* Categories */}

                    <div className="rounded-[22px] border border-[#e8e6ed] bg-white p-2 shadow-sm">
                        <div className="mb-2 px-3 pt-2 text-xs font-bold text-[#72778a]">
                            دسته‌بندی محصولات
                        </div>

                        <div className="flex flex-wrap gap-2 pb-1">
                            {categories.map((category) => {
                                const isActive =
                                    selectedCategory === category.value;

                                return (
                                    <button
                                        key={category.value}
                                        type="button"
                                        onClick={() =>
                                            handleCategoryChange(
                                                category.value
                                            )
                                        }
                                        className={`shrink-0 rounded-xl px-4 py-3 text-sm font-bold transition ${
                                            isActive
                                                ? "bg-[#032b3a] text-white"
                                                : "text-[#72778a] hover:bg-[#faf7ef] hover:text-[#032b3a]"
                                        }`}
                                    >
                                        {category.label}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Brands */}

                    <div className="rounded-[22px] border border-[#e8e6ed] bg-white p-3 shadow-sm">
                        <div className="mb-3 px-3 pt-2 text-xs font-bold text-[#72778a]">
                            برند محصولات
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {brands.map((brand) => {
                                const isActive =
                                    safeBrand === brand.slug;

                                return (
                                    <button
                                        key={brand.slug}
                                        type="button"
                                        onClick={() =>
                                            handleBrandChange(
                                                brand.slug
                                            )
                                        }
                                        className={`rounded-xl px-5 py-3 text-sm font-bold transition duration-300 ${
                                            isActive
                                                ? "bg-[#d7a847] text-[#021d29] shadow-sm"
                                                : "bg-[#faf7ef] text-[#72778a] hover:bg-[#032b3a] hover:text-white"
                                        }`}
                                    >
                                        {brand.name}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* RESULT INFO */}

                <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="text-sm text-[#72778a]">
                        <span>
                            تعداد محصولات:
                        </span>

                        <strong className="mr-2 text-[#032b3a]">
                            {filteredProducts.length}
                        </strong>
                    </div>

                    {hasActiveFilters && (
                        <button
                            type="button"
                            onClick={clearFilters}
                            className="w-fit text-sm font-bold text-[#7660c8] transition hover:text-[#032b3a]"
                        >
                            حذف همه فیلترها ×
                        </button>
                    )}
                </div>

                {/* PRODUCTS */}

                {filteredProducts.length > 0 ? (
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {filteredProducts.map((product) => {
                            const productHref =
                                `/products/${product.brandSlug}/${product.categorySlug}/${product.slug}`;

                            const category =
                                productCategories.find(
                                    (item) =>
                                        item.slug === product.categorySlug &&
                                        item.brandSlug === product.brandSlug
                                );

                            return (
                                <article
                                    key={product.id}
                                    className="group overflow-hidden rounded-[28px] border border-[#e8e6ed] bg-white shadow-[0_15px_45px_rgba(16,36,73,0.06)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(16,36,73,0.12)]"
                                >
                                    {/* Image */}

                                    <Link
                                        href={productHref}
                                        className="relative block h-64 overflow-hidden bg-[#f4f1e9]"
                                    >
                                        {product.image ? (
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                                            />
                                        ) : (
                                            <div className="flex h-full items-center justify-center text-sm font-bold text-[#72778a]">
                                                تصویر محصول موجود نیست
                                            </div>
                                        )}

                                        <div className="absolute inset-0 bg-gradient-to-t from-[#021d29]/35 via-transparent to-transparent" />
                                    </Link>

                                    {/* Content */}

                                    <div className="p-6">
                                        {/* Category */}

                                        <div className="mb-4">
                                            {category && (
                                                <span className="rounded-full bg-[#faf7ef] px-3 py-1 text-xs font-bold text-[#72778a]">
                                                    {category.name}
                                                </span>
                                            )}
                                        </div>

                                        {/* Name */}

                                        <Link
                                            href={productHref}
                                            className="block"
                                        >
                                            <h2 className="text-xl font-black text-[#182449] transition hover:text-[#032b3a]">
                                                {product.name}
                                            </h2>
                                        </Link>

                                        {/* Description */}

                                        <p className="mt-3 min-h-[56px] text-sm leading-7 text-[#72778a]">
                                            {product.description}
                                        </p>

                                        {/* Bottom */}

                                        <div className="mt-6 flex items-center justify-between border-t border-[#e8e6ed] pt-5">
                                            <span className="text-xs font-bold text-[#72778a]">
                                                مشاهده جزئیات
                                            </span>

                                            <Link
                                                href={productHref}
                                                aria-label={`مشاهده ${product.name}`}
                                                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#032b3a] text-lg text-[#d7a847] transition duration-300 hover:-translate-x-1 hover:bg-[#d7a847] hover:text-[#032b3a]"
                                            >
                                                ←
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                ) : (
                    /* EMPTY */
                    <div className="rounded-[30px] border border-dashed border-[#d8d4ca] bg-white px-6 py-20 text-center">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#faf7ef] text-2xl text-[#d7a847]">
                            ⌕
                        </div>

                        <h2 className="mt-5 text-2xl font-black text-[#032b3a]">
                            محصولی پیدا نشد
                        </h2>

                        <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-[#72778a]">
                            عبارت جستجو یا فیلترهای انتخاب‌شده
                            نتیجه‌ای نداشتند.
                        </p>

                        <button
                            type="button"
                            onClick={clearFilters}
                            className="mt-6 rounded-xl bg-[#032b3a] px-7 py-3 text-sm font-bold text-white transition hover:bg-[#06465d]"
                        >
                            نمایش همه محصولات
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}