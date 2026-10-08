import Image from "next/image";
import Link from "next/link";

const features = [
    {
        number: "01",
        title: "کیفیت تضمین‌شده",
        description: "کنترل دقیق کیفیت از مواد اولیه تا محصول نهایی",
        icon: "✓",
    },
    {
        number: "02",
        title: "استانداردهای بین‌المللی",
        description: "تولید مطابق استانداردهای ISO و HACCP",
        icon: "◈",
    },
    {
        number: "03",
        title: "توزیع سراسری",
        description: "دسترسی آسان به محصولات در سراسر کشور",
        icon: "⌁",
    },
    {
        number: "04",
        title: "تولید مدرن",
        description: "استفاده از فناوری‌های روز در فرآیند تولید",
        icon: "✦",
    },
];

const brands = [
    {
        name: "دایتی",
        englishName: "DAITY",
        logo: "/images/brands/daity-logo.png",
        href: "/brands#daity",
    },
    {
        name: "آپادا",
        englishName: "APADA",
        logo: "/images/brands/apada-logo.png",
        href: "/brands#apada",
    },
    {

        name: "زرین غزال",
        englishName: "ZARRING GHAZAL",
        logo: "/images/brands/crown-logo.png",
        href: "/brands#zarring-ghazal",

    },
];

export default function Features() {
    return (
        <section className="relative z-20 -mt-1 px-4">
            <div className="mx-auto max-w-[1180px]">
                <div className="overflow-hidden rounded-[28px] border border-[#e8e6ed] bg-white shadow-[0_25px_70px_rgba(2,29,41,0.15)]">
                    <div className="grid lg:grid-cols-[1fr_300px]">

                        {/* Features */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                            {features.map((feature, index) => (
                                <div
                                    key={feature.number}
                                    className={`group relative p-7 transition duration-300 hover:bg-[#faf7ef] ${
                                        index !== features.length - 1
                                            ? "border-b border-[#e8e6ed] sm:border-l lg:border-b-0"
                                            : ""
                                    }`}
                                >
                                    <div className="mb-5 flex items-center justify-between">
                                        <span className="text-xs font-bold tracking-widest text-[#d7a847]">
                                            {feature.number}
                                        </span>

                                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#032b3a] text-lg text-[#d7a847] transition duration-300 group-hover:bg-[#d7a847] group-hover:text-[#032b3a]">
                                            {feature.icon}
                                        </div>
                                    </div>

                                    <h3 className="text-base font-extrabold text-[#182449]">
                                        {feature.title}
                                    </h3>

                                    <p className="mt-3 text-xs leading-6 text-[#72778a]">
                                        {feature.description}
                                    </p>

                                    <div className="absolute bottom-0 right-0 h-[2px] w-0 bg-[#d7a847] transition-all duration-500 group-hover:w-full" />
                                </div>
                            ))}
                        </div>

                        {/* Brands */}
                        <div className="flex flex-col justify-center bg-[#032b3a] p-7 text-white">
                            <span className="text-[11px] font-medium tracking-[0.2em] text-[#d7a847]">
                                OUR BRANDS
                            </span>

                            <h2 className="mt-2 text-xl font-black">
                                برندهای زرین غزال
                            </h2>

                            <p className="mt-3 text-xs leading-6 text-white/55">
                                مجموعه‌ای از برندهای معتبر برای ارائه محصولات متنوع
                                و باکیفیت.
                            </p>

                            <div className="mt-6 grid grid-cols-1 gap-3">
                                {brands.map((brand) => (
                                    <Link
                                        key={brand.name}
                                        href={brand.href}
                                        className="group flex min-h-[72px] items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 transition duration-300 hover:border-[#d7a847]/50 hover:bg-white/10"
                                    >
                                        {/* Logo */}
                                        <div className="flex h-12 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white p-2">
                                            {brand.logo ? (
                                                <Image
                                                    src={brand.logo}
                                                    alt={`لوگو ${brand.name}`}
                                                    width={120}
                                                    height={60}
                                                    className="h-full w-full object-contain"
                                                />
                                            ) : (
                                                <span className="text-center text-[10px] font-black text-[#032b3a]">
                                                    ز
                                                </span>
                                            )}
                                        </div>

                                        {/* Name */}
                                        <div className="min-w-0">
                                            <div className="text-sm font-black text-white transition group-hover:text-[#d7a847]">
                                                {brand.name}
                                            </div>

                                            <div className="mt-1 text-[9px] tracking-[0.18em] text-white/40">
                                                {brand.englishName}
                                            </div>
                                        </div>

                                        <span className="mr-auto text-sm text-[#d7a847] transition-transform duration-300 group-hover:-translate-x-1">
                                            ←
                                        </span>
                                    </Link>
                                ))}
                            </div>

                            <Link
                                href="/brands"
                                className="mt-5 text-xs font-bold text-[#d7a847] transition hover:text-[#f0d58a]"
                            >
                                مشاهده همه برندها ←
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}