import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import {
    productCategories,
    products,
} from "@/data/products";

type CategoryPageProps = {
    params: Promise<{
        brandSlug: string;
        categorySlug: string;
    }>;
};

const brands = {
    daity: {
        name: "دایتی",
        englishName: "DAITY",
        logo: "/images/brands/daity-logo.png",
    },

    apada: {
        name: "آپادا",
        englishName: "APADA",
        logo: "/images/brands/apada-logo.png",
    },
} as const;

export default async function CategoryPage({
                                               params,
                                           }: CategoryPageProps) {
    const { brandSlug, categorySlug } = await params;

    const brand = brands[brandSlug as keyof typeof brands];

    const category = productCategories.find(
        (item) =>
            item.slug === categorySlug &&
            item.brandSlug === brandSlug
    );

    if (!brand || !category) {
        return (
            <>
                <Navbar />

                <main
                    dir="rtl"
                    className="flex min-h-[70vh] items-center justify-center bg-[#faf7ef]"
                >
                    <div className="text-center">
                        <h1 className="text-3xl font-black text-[#182449]">
                            صفحه پیدا نشد
                        </h1>

                        <p className="mt-4 text-[#72778a]">
                            دسته‌بندی موردنظر وجود ندارد.
                        </p>

                        <Link
                            href="/products"
                            className="mt-8 inline-flex rounded-xl bg-[#d7a847] px-6 py-3 font-bold text-[#021d29]"
                        >
                            بازگشت به محصولات
                        </Link>
                    </div>
                </main>

                <Footer />
            </>
        );
    }

    const categoryProducts = products.filter(
        (product) =>
            product.brandSlug === brandSlug &&
            product.categorySlug === categorySlug
    );

    return (
        <>
            <Navbar />

            <main
                dir="rtl"
                className="min-h-screen bg-[#faf7ef]"
            >
                {/* HERO */}
                <section className="relative overflow-hidden bg-[#021d29] py-24 sm:py-28">
                    <div className="absolute -right-40 -top-40 h-[450px] w-[450px] rounded-full bg-[#d7a847]/10 blur-[120px]" />

                    <div className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-[#7660c8]/10 blur-[120px]" />

                    <div className="container-main relative z-10">

                        {/* BREADCRUMB */}
                        <div className="mb-8 flex flex-wrap items-center gap-2 text-sm text-white/40">
                            <Link
                                href="/products"
                                className="transition hover:text-[#d7a847]"
                            >
                                محصولات
                            </Link>

                            <span>←</span>

                            <Link
                                href={`/products/${brandSlug}`}
                                className="transition hover:text-[#d7a847]"
                            >
                                {brand.name}
                            </Link>

                            <span>←</span>

                            <span className="text-white/70">
                                {category.name}
                            </span>
                        </div>

                        <div className="max-w-4xl">

                            <div className="mb-6 flex items-center gap-3">
                                <span className="h-[2px] w-12 bg-[#d7a847]" />

                                <span className="text-xs font-bold tracking-[0.2em] text-[#d7a847]">
                                    {brand.englishName} / CATEGORY
                                </span>
                            </div>

                            <h1 className="text-4xl font-black leading-[1.5] text-white sm:text-5xl lg:text-6xl">
                                {category.name}
                            </h1>

                            <p className="mt-6 max-w-2xl text-base leading-9 text-white/60 sm:text-lg">
                                {category.description}
                            </p>

                            <div className="mt-8 inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-bold text-white/80 backdrop-blur-md">
                                {categoryProducts.length} محصول
                            </div>

                        </div>
                    </div>
                </section>

                {/* PRODUCTS */}
                <section className="py-20 sm:py-24">
                    <div className="container-main">

                        {categoryProducts.length > 0 ? (
                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                                {categoryProducts.map((product) => (
                                    <Link
                                        key={product.id}
                                        href={`/products/${brandSlug}/${categorySlug}/${product.slug}`}
                                        className="group overflow-hidden rounded-[28px] border border-[#e8e6ed] bg-white shadow-[0_15px_50px_rgba(16,36,73,0.06)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_25px_70px_rgba(16,36,73,0.12)]"
                                    >

                                        {/* IMAGE */}
                                        <div className="relative aspect-square overflow-hidden bg-[#f4f1e8]">

                                            {product.image ? (
                                                <Image
                                                    src={product.image}
                                                    alt={product.name}
                                                    fill
                                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                                                    className="object-contain p-6 transition duration-700 group-hover:scale-105"
                                                />
                                            ) : (
                                                <div className="flex h-full items-center justify-center">
                                                    <div className="text-center">
                                                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#d7a847]/10 text-2xl text-[#d7a847]">
                                                            ✦
                                                        </div>

                                                        <span className="mt-3 block text-xs font-bold text-[#72778a]">
                                                            تصویر محصول
                                                        </span>
                                                    </div>
                                                </div>
                                            )}

                                            <div className="absolute right-4 top-4 rounded-full border border-white/20 bg-[#021d29]/80 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-md">
                                                {brand.name}
                                            </div>
                                        </div>

                                        {/* CONTENT */}
                                        <div className="p-6">

                                            <h2 className="text-lg font-black text-[#182449] transition group-hover:text-[#b58a2e]">
                                                {product.name}
                                            </h2>

                                            <p className="mt-3 line-clamp-2 text-sm leading-7 text-[#72778a]">
                                                {product.description}
                                            </p>

                                            {/* META */}
                                            <div className="mt-5 flex flex-wrap gap-2">

                                                {product.weight && (
                                                    <span className="rounded-full bg-[#f6f3eb] px-3 py-1.5 text-xs font-bold text-[#182449]">
                                                        {product.weight}
                                                    </span>
                                                )}

                                                {product.cartonCount && (
                                                    <span className="rounded-full bg-[#f6f3eb] px-3 py-1.5 text-xs font-bold text-[#182449]">
                                                        {product.cartonCount} عدد
                                                    </span>
                                                )}

                                            </div>

                                            {/* FOOTER */}
                                            <div className="mt-6 flex items-center justify-between border-t border-[#eeeeee] pt-5">

                                                <span className="text-sm font-bold text-[#182449]">
                                                    مشاهده محصول
                                                </span>

                                                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#d7a847] font-black text-[#021d29] transition duration-300 group-hover:-translate-x-1">
                                                    ←
                                                </span>

                                            </div>

                                        </div>

                                    </Link>
                                ))}

                            </div>
                        ) : (
                            <div className="rounded-[28px] border border-[#e8e6ed] bg-white px-6 py-20 text-center shadow-[0_15px_50px_rgba(16,36,73,0.06)]">

                                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#d7a847]/10 text-2xl text-[#d7a847]">
                                    !
                                </div>

                                <h2 className="mt-6 text-2xl font-black text-[#182449]">
                                    محصولی در این دسته وجود ندارد
                                </h2>

                                <p className="mx-auto mt-3 max-w-xl text-sm leading-8 text-[#72778a]">
                                    محصولات این دسته هنوز به فهرست محصولات
                                    اضافه نشده‌اند.
                                </p>

                            </div>
                        )}

                    </div>
                </section>

            </main>

            <Footer />
        </>
    );
}