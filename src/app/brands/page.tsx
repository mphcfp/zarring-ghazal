import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { brands } from "@/data/brands";

const brandDetails = {
    daity: {
        title: "دایتی",
        english: "DAITY",
        image: "/images/yogurt.jpg",
        logo: "/images/brands/daity-logo.png",
        description:
            "برند دایتی با تمرکز بر تولید محصولات بستنی و دسر، بخشی از خانواده بزرگ زرین غزال است.",
        features: [
            "تولید محصولات بستنی",
            "تکیه بر فناوری و تجربه تولید",
            "تنوع محصولات",
            "توزیع گسترده",
        ],
    },

    apada: {
        title: "آپادا",
        english: "APADA",
        image: "/images/cheese.jpg",
        logo: "/images/brands/apada-logo.png",
        description:
            "آپادا برند محصولات لبنی گروه صنعتی زرین غزال است که با تمرکز بر کیفیت، سلامت و زنجیره سرد فعالیت می‌کند.",
        features: [
            "انواع محصولات لبنی",
            "کنترل کیفیت مواد اولیه",
            "رعایت زنجیره سرد",
            "توجه به سلامت مصرف‌کننده",
        ],
    },

    "zarring-ghazal": {
        title: "زرین غزال",
        english: "ZARRING GHAZAL",
        image: "/images/cream.jpg",
        logo: "/images/brands/crown-logo.png",
        description:
            "زرین غزال مجموعه‌ای صنعتی با تکیه بر تجربه، فناوری، کیفیت و توسعه در حوزه محصولات غذایی و لبنی است.",
        features: [
            "تجربه گسترده صنعتی",
            "تولید مدرن",
            "کنترل کیفیت",
            "توسعه و نوآوری",
        ],
    },
} as const;

export default function BrandsPage() {
    return (
        <>
            <Navbar />

            <main className="bg-[var(--cream)]">

                {/* Hero */}
                <section className="relative overflow-hidden bg-[var(--deep)] px-4 pb-24 pt-40 text-white">
                    <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-[var(--gold)]/10 blur-3xl" />
                    <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />

                    <div className="container-main relative z-10">
                        <div className="max-w-3xl">
                            <div className="mb-6 flex items-center gap-3">
                                <span className="h-[2px] w-12 bg-[var(--gold)]" />

                                <span className="text-sm font-bold text-[var(--gold-light)]">
                                    OUR BRANDS
                                </span>
                            </div>

                            <h1 className="text-4xl font-black leading-[1.4] sm:text-5xl lg:text-6xl">
                                برندهای
                                <span className="block text-[var(--gold)]">
                                    زرین غزال
                                </span>
                            </h1>

                            <p className="mt-6 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
                                آشنایی با برندهای گروه صنعتی زرین غزال و مجموعه محصولاتی
                                که با تمرکز بر کیفیت، سلامت و نوآوری تولید می‌شوند.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Brands */}
                <section className="px-4 py-24">
                    <div className="container-main">
                        <div className="grid gap-8 lg:grid-cols-3">
                            {brands.map((brand) => {
                                const detail =
                                    brandDetails[
                                        brand.slug as keyof typeof brandDetails
                                        ];

                                if (!detail) {
                                    return null;
                                }

                                return (
                                    <article
                                        key={brand.id}
                                        id={brand.slug}
                                        className="group scroll-mt-32 overflow-hidden rounded-[28px] border border-[#e8e6ed] bg-white shadow-[0_20px_60px_rgba(2,29,41,0.08)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(2,29,41,0.15)]"
                                    >
                                        {/* Image */}
                                        <div className="relative h-72 overflow-hidden">
                                            <img
                                                src={detail.image}
                                                alt={detail.title}
                                                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                                            />

                                            <div className="absolute inset-0 bg-gradient-to-t from-[#021d29]/80 via-transparent to-transparent" />

                                            {/* Logo */}
                                            <div className="absolute right-5 top-5 flex h-20 w-28 items-center justify-center overflow-hidden rounded-2xl border border-white/20 bg-white/95 p-3 shadow-xl backdrop-blur-md">
                                                <Image
                                                    src={detail.logo}
                                                    alt={`لوگوی ${detail.title}`}
                                                    width={180}
                                                    height={100}
                                                    className="h-full w-full object-contain"
                                                />
                                            </div>

                                            {/* English Name */}
                                            <div className="absolute bottom-5 right-5">
                                                <span className="rounded-full border border-white/20 bg-[#021d29]/70 px-4 py-2 text-xs font-bold text-[var(--gold-light)] backdrop-blur-md">
                                                    {detail.english}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-7">
                                            <div className="flex items-center justify-between gap-4">
                                                <h2 className="text-2xl font-black text-[var(--text)]">
                                                    {detail.title}
                                                </h2>

                                                <div className="h-[2px] w-10 shrink-0 rounded-full bg-[var(--gold)]" />
                                            </div>

                                            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                                                {detail.description}
                                            </p>

                                            <div className="mt-6 space-y-3">
                                                {detail.features.map((feature) => (
                                                    <div
                                                        key={feature}
                                                        className="flex items-center gap-3 text-sm text-[var(--text)]"
                                                    >
                                                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--gold)]/10 text-sm font-bold text-[var(--gold)]">
                                                            ✓
                                                        </span>

                                                        <span>{feature}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            <Link
                                                href={`/products?brand=${brand.slug}`}
                                                className="mt-7 flex items-center justify-center rounded-2xl bg-[var(--deep)] px-5 py-4 text-sm font-bold text-white transition hover:bg-[var(--gold)] hover:text-[var(--deep)]"
                                            >
                                                مشاهده محصولات {detail.title}

                                                <span className="mr-2">
                                                    ←
                                                </span>
                                            </Link>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="px-4 pb-24">
                    <div className="container-main">
                        <div className="overflow-hidden rounded-[32px] bg-[var(--deep)] p-8 text-white sm:p-12">
                            <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">

                                <div>
                                    <span className="text-sm font-bold text-[var(--gold)]">
                                        محصولات زرین غزال
                                    </span>

                                    <h2 className="mt-3 text-3xl font-black">
                                        محصولات متنوع را مشاهده کنید
                                    </h2>

                                    <p className="mt-3 max-w-2xl text-sm leading-7 text-white/60">
                                        مجموعه محصولات دایتی و آپادا را مشاهده کنید.
                                    </p>
                                </div>

                                <Link
                                    href="/products"
                                    className="shrink-0 rounded-2xl bg-[var(--gold)] px-7 py-4 font-bold text-[var(--deep)] transition hover:bg-[var(--gold-light)]"
                                >
                                    مشاهده محصولات ←
                                </Link>

                            </div>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </>
    );
}