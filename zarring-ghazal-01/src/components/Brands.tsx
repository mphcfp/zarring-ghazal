import Image from "next/image";
import Link from "next/link";
import { brands } from "@/data/brands";

const brandLogos: Record<string, string> = {
    daity: "/images/brands/daity-logo.png",
    apada: "/images/brands/apada-logo.png",
    "zarring-ghazal": "/images/brands/crown-logo.png",
};

export default function Brands() {
    return (
        <section className="relative overflow-hidden bg-[#032b3a] py-24">
            {/* Decorative lights */}
            <div className="pointer-events-none absolute -right-40 top-0 h-[400px] w-[400px] rounded-full bg-[#d7a847]/10 blur-[120px]" />

            <div className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#7660c8]/10 blur-[120px]" />

            <div className="container-main relative">
                {/* Header */}
                <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                    <div>
                        <div className="mb-5 flex items-center gap-3">
                            <span className="gold-line" />

                            <span className="text-xs font-bold tracking-[0.2em] text-[#d7a847]">
                                OUR BRANDS
                            </span>
                        </div>

                        <h2 className="text-3xl font-black text-white md:text-5xl">
                            برندهای ما
                        </h2>

                        <p className="mt-4 max-w-xl text-sm leading-7 text-white/55">
                            مجموعه‌ای از برندهای معتبر که هر کدام با هویت و محصولات
                            منحصربه‌فرد خود بخشی از خانواده زرین غزال هستند.
                        </p>
                    </div>

                    <Link
                        href="/brands"
                        className="group inline-flex w-fit items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-bold text-white backdrop-blur-md transition hover:-translate-y-1 hover:border-[#d7a847]/50 hover:bg-[#d7a847] hover:text-[#032b3a]"
                    >
                        مشاهده برندها

                        <span className="transition-transform group-hover:-translate-x-1">
                            ←
                        </span>
                    </Link>
                </div>

                {/* Brands */}
                <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                    {brands.map((brand, index) => {
                        const logo = brandLogos[brand.slug];

                        return (
                            <Link
                                href={`/products/${brand.slug}`}
                                key={brand.id}
                                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-md transition duration-500 hover:-translate-y-2 hover:border-[#d7a847]/40 hover:bg-white/[0.08]"
                            >
                                {/* Number */}
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-bold tracking-[0.2em] text-[#d7a847]">
                                        0{index + 1}
                                    </span>

                                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d7a847]/30 text-[#d7a847] transition duration-300 group-hover:bg-[#d7a847] group-hover:text-[#032b3a]">
                                        ↗
                                    </div>
                                </div>

                                {/* Logo */}
                                <div className="mt-10 flex h-24 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/95 p-4 shadow-lg">
                                    {logo ? (
                                        <Image
                                            src={logo}
                                            alt={`لوگوی ${brand.name}`}
                                            width={220}
                                            height={110}
                                            className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                                        />
                                    ) : (
                                        <span className="text-2xl font-black tracking-wider text-[#032b3a]">
                                            {brand.englishName}
                                        </span>
                                    )}
                                </div>

                                {/* Text */}
                                <h3 className="mt-7 text-xl font-black text-white transition duration-300 group-hover:text-[#d7a847]">
                                    {brand.name}
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-white/50">
                                    {brand.description}
                                </p>

                                <div className="mt-7 flex items-center gap-2 text-xs font-bold text-[#d7a847]">
                                    مشاهده محصولات

                                    <span className="transition-transform duration-300 group-hover:-translate-x-1">
                                        ←
                                    </span>
                                </div>

                                {/* Bottom line */}
                                <div className="absolute bottom-0 right-0 h-[2px] w-0 bg-[#d7a847] transition-all duration-500 group-hover:w-full" />
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}