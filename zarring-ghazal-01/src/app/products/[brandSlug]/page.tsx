import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { brands } from "@/data/brands";
import { productCategories } from "@/data/products";

type BrandPageProps = {
    params: Promise<{
        brandSlug: string;
    }>;
};

const brandLogos: Record<string, string> = {
    daity: "/images/brands/daity-logo.png",
    apada: "/images/brands/apada-logo.png",
    "zarring-ghazal": "/images/brands/crown-logo.png",
};

export default async function BrandPage({ params }: BrandPageProps) {
    const { brandSlug } = await params;

    const brand = brands.find((item) => item.slug === brandSlug);

    if (!brand) {
        notFound();
    }

    const categories = productCategories.filter(
        (category) => category.brandSlug === brand.slug
    );

    const logo = brandLogos[brand.slug];

    return (
        <main
            dir="rtl"
            className="min-h-screen bg-[#050816] px-6 py-32 text-white"
        >
            <div className="mx-auto max-w-7xl">

                {/* Header */}
                <div className="mb-14 text-center">

                    {logo && (
                        <div className="mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl">
                            <Image
                                src={logo}
                                alt={brand.name}
                                width={100}
                                height={100}
                                className="h-full w-full object-contain"
                            />
                        </div>
                    )}

                    <span className="text-sm font-medium tracking-[0.25em] text-amber-400">
                        {brand.englishName}
                    </span>

                    <h1 className="mt-3 text-4xl font-black md:text-5xl">
                        محصولات {brand.name}
                    </h1>

                    <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/60">
                        {brand.description}
                    </p>
                </div>

                {/* Categories */}
                {categories.length === 0 ? (
                    <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-12 text-center backdrop-blur-xl">
                        <h2 className="text-2xl font-bold">
                            دسته‌بندی‌ای برای این برند پیدا نشد
                        </h2>

                        <p className="mt-4 text-white/50">
                            هنوز محصولی برای این برند ثبت نشده است.
                        </p>

                        <Link
                            href="/products"
                            className="mt-8 inline-flex rounded-2xl bg-amber-400 px-6 py-3 text-sm font-bold text-black transition hover:bg-amber-300"
                        >
                            بازگشت به محصولات
                        </Link>
                    </div>
                ) : (
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {categories.map((category) => (
                            <Link
                                key={category.id}
                                href={`/products/${brand.slug}/${category.slug}`}
                                className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-amber-400/30 hover:bg-white/[0.07]"
                            >
                                <div className="relative aspect-[4/3] overflow-hidden bg-white/[0.03]">
                                    <Image
                                        src={category.image}
                                        alt={category.name}
                                        fill
                                        className="object-contain p-8 transition duration-500 group-hover:scale-105"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                </div>

                                <div className="p-6">
                                    <h2 className="text-xl font-bold transition group-hover:text-amber-400">
                                        {category.name}
                                    </h2>

                                    <p className="mt-3 text-sm leading-7 text-white/50">
                                        {category.description}
                                    </p>

                                    <div className="mt-6 flex items-center justify-between">
                                        <span className="text-sm font-medium text-amber-400">
                                            مشاهده محصولات
                                        </span>

                                        <span className="text-lg text-white/40 transition group-hover:-translate-x-1 group-hover:text-amber-400">
                                            ←
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}

                {/* Back */}
                <div className="mt-12 text-center">
                    <Link
                        href="/products"
                        className="inline-flex rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-3 text-sm text-white/70 transition hover:bg-white/[0.08] hover:text-white"
                    >
                        ← بازگشت به همه محصولات
                    </Link>
                </div>
            </div>
        </main>
    );
}