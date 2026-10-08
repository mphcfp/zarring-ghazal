import Image from "next/image";
import Link from "next/link";

import { brands } from "@/data/brands";
import { products } from "@/data/products";

type ProductPageProps = {
    params: Promise<{
        brandSlug: string;
        categorySlug: string;
        productSlug: string;
    }>;
};

export default async function ProductPage({
                                              params,
                                          }: ProductPageProps) {
    const { brandSlug, categorySlug, productSlug } = await params;

    const brand = brands.find(
        (item) => item.slug === brandSlug
    );

    const product = products.find(
        (item) =>
            item.brandSlug === brandSlug &&
            item.categorySlug === categorySlug &&
            item.slug === productSlug
    );

    if (!brand || !product) {
        return (
            <main
                dir="rtl"
                className="min-h-screen bg-[#050816] px-6 py-32 text-white"
            >
                <div className="mx-auto max-w-4xl text-center">
                    <h1 className="text-3xl font-bold">
                        محصول پیدا نشد
                    </h1>

                    <p className="mt-4 text-white/60">
                        محصول موردنظر وجود ندارد یا آدرس آن اشتباه است.
                    </p>

                    <Link
                        href={`/products/${brandSlug}/${categorySlug}`}
                        className="mt-8 inline-flex rounded-2xl border border-white/10 bg-white/10 px-6 py-3 text-sm font-medium transition hover:bg-white/15"
                    >
                        بازگشت به محصولات
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main
            dir="rtl"
            className="min-h-screen bg-[#050816] px-6 py-32 text-white"
        >
            <div className="mx-auto max-w-6xl">

                {/* Back */}
                <Link
                    href={`/products/${brandSlug}/${categorySlug}`}
                    className="mb-8 inline-flex text-sm text-white/60 transition hover:text-white"
                >
                    ← بازگشت به دسته‌بندی
                </Link>

                {/* Product */}
                <section className="grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] backdrop-blur-xl lg:grid-cols-2">

                    {/* Product Image */}
                    <div className="relative flex min-h-[420px] items-center justify-center border-b border-white/10 bg-white/[0.02] p-8 lg:border-b-0 lg:border-l">
                        <div className="relative h-[380px] w-full">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-contain"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                priority
                            />
                        </div>
                    </div>

                    {/* Product Information */}
                    <div className="flex flex-col justify-center p-8 lg:p-12">

                        {/* Brand */}
                        <span className="mb-4 text-sm font-medium text-amber-400">
                            {brand.name}
                        </span>

                        {/* Product Name */}
                        <h1 className="text-4xl font-black tracking-tight">
                            {product.name}
                        </h1>

                        {/* Description */}
                        <p className="mt-6 text-lg leading-9 text-white/65">
                            {product.description}
                        </p>

                        {/* Specifications */}
                        <div className="mt-10 grid grid-cols-2 gap-4">

                            {product.weight && (
                                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                                    <span className="block text-xs text-white/40">
                                        وزن
                                    </span>

                                    <strong className="mt-2 block text-lg">
                                        {product.weight}
                                    </strong>
                                </div>
                            )}

                            {product.cartonCount && (
                                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                                    <span className="block text-xs text-white/40">
                                        تعداد در کارتن
                                    </span>

                                    <strong className="mt-2 block text-lg">
                                        {product.cartonCount}
                                    </strong>
                                </div>
                            )}

                            {product.packageType && (
                                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                                    <span className="block text-xs text-white/40">
                                        نوع بسته‌بندی
                                    </span>

                                    <strong className="mt-2 block text-lg">
                                        {product.packageType === "carton"
                                            ? "کارتن"
                                            : "جعبه"}
                                    </strong>
                                </div>
                            )}

                        </div>

                        {/* Actions */}
                        <div className="mt-10 flex flex-wrap gap-3">

                            {/* Product Request */}
                            <Link
                                href={`/contact?product=${product.slug}`}
                                className="inline-flex items-center justify-center rounded-2xl bg-amber-400 px-7 py-3.5 text-sm font-black text-black shadow-[0_10px_35px_rgba(251,191,36,0.15)] transition duration-300 hover:-translate-y-1 hover:bg-amber-300"
                            >
                                درخواست این محصول
                            </Link>

                            {/* Category */}
                            <Link
                                href={`/products/${brandSlug}/${categorySlug}`}
                                className="rounded-2xl border border-white/10 bg-white/10 px-6 py-3.5 text-sm font-medium transition hover:bg-white/15"
                            >
                                محصولات این دسته
                            </Link>

                            {/* All Products */}
                            <Link
                                href="/products"
                                className="rounded-2xl border border-white/10 px-6 py-3.5 text-sm font-medium text-white/70 transition hover:bg-white/10 hover:text-white"
                            >
                                همه محصولات
                            </Link>

                        </div>

                        {/* Request Hint */}
                        <div className="mt-6 rounded-2xl border border-amber-400/10 bg-amber-400/[0.04] px-5 py-4">
                            <p className="text-sm leading-7 text-white/50">
                                برای ثبت درخواست یا دریافت اطلاعات بیشتر درباره این محصول،
                                روی «درخواست این محصول» کلیک کنید.
                            </p>
                        </div>

                    </div>
                </section>
            </div>
        </main>
    );
}