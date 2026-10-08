import Link from "next/link";
import { products, productCategories } from "@/data/products";

export default function Products() {
    const featuredProducts = products.slice(0, 6);

    return (
        <section className="section-padding relative overflow-hidden bg-[#faf7ef]">
            {/* Decorative background */}
            <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#7660c8]/10 blur-[100px]" />

            <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-[#d7a847]/10 blur-[100px]" />

            <div className="container-main relative">
                {/* Section Header */}
                <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                    <div>
                        <div className="mb-5 flex items-center gap-3">
                            <span className="gold-line" />

                            <span className="text-xs font-bold tracking-[0.2em] text-[#d7a847]">
                                OUR PRODUCTS
                            </span>
                        </div>

                        <h2 className="text-3xl font-black text-[#182449] md:text-5xl">
                            محصولات ما
                        </h2>

                        <p className="mt-4 max-w-xl text-sm leading-7 text-[#72778a]">
                            مجموعه‌ای متنوع از محصولات لبنی با تمرکز بر کیفیت، سلامت و
                            طعم اصیل.
                        </p>
                    </div>

                    <Link
                        href="/products"
                        className="group inline-flex w-fit items-center gap-3 rounded-xl border border-[#032b3a]/10 bg-white px-5 py-3 text-sm font-bold text-[#032b3a] shadow-sm transition hover:-translate-y-1 hover:border-[#d7a847] hover:shadow-lg"
                    >
                        مشاهده همه محصولات

                        <span className="transition-transform duration-300 group-hover:-translate-x-1">
                            ←
                        </span>
                    </Link>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {featuredProducts.map((product, index) => {
                        const category = productCategories.find(
                            (item) =>
                                item.slug === product.categorySlug &&
                                item.brandSlug === product.brandSlug
                        );

                        return (
                            <Link
                                href={`/products/${product.brandSlug}/${product.categorySlug}/${product.slug}`}
                                key={product.id}
                                className="group relative overflow-hidden rounded-[24px] border border-[#e8e6ed] bg-white transition-all duration-500 hover:-translate-y-2 hover:border-[#d7a847]/40 hover:shadow-[0_25px_50px_rgba(2,29,41,0.12)]"
                            >
                                {/* Image */}
                                <div className="relative h-[280px] overflow-hidden bg-[#f2f0eb]">
                                    {product.image ? (
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                                        />
                                    ) : (
                                        <div className="flex h-full items-center justify-center text-sm font-bold text-[#72778a]">
                                            تصویر محصول موجود نیست
                                        </div>
                                    )}

                                    {/* Image overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#021d29]/70 via-transparent to-transparent opacity-70" />

                                    {/* Number */}
                                    <span className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-[#021d29]/50 text-xs font-bold text-white backdrop-blur-md">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    {/* Category */}
                                    {category && (
                                        <span className="absolute bottom-5 right-5 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-bold text-white backdrop-blur-md">
                                            {category.name}
                                        </span>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <h3 className="text-xl font-black text-[#182449] transition-colors group-hover:text-[#032b3a]">
                                                {product.name}
                                            </h3>

                                            <p className="mt-3 line-clamp-2 text-xs leading-6 text-[#72778a]">
                                                {product.description}
                                            </p>
                                        </div>

                                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#032b3a] text-white transition-all duration-300 group-hover:bg-[#d7a847] group-hover:text-[#032b3a]">
                                            ←
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}