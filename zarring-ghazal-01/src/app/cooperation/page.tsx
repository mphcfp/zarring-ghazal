import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const downloads = [
    {
        title: "کاتالوگ محصولات دایتی",
        description: "مشاهده و دریافت کاتالوگ محصولات برند دایتی.",
        file: "/downloads/dayti-catalog.pdf",
        icon: "📘",
    },
    {
        title: "کاتالوگ محصولات آپادا",
        description: "مشاهده و دریافت کاتالوگ محصولات برند آپادا.",
        file: "/downloads/apada-catalog.pdf",
        icon: "📗",
    },
];

export default function CooperationPage() {
    return (
        <>
            <Navbar />

            <main className="overflow-hidden">
                {/* Hero */}
                <section className="relative bg-[var(--deep)] pb-24 pt-36 text-white">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(215,168,71,0.16),transparent_35%),radial-gradient(circle_at_80%_70%,rgba(118,96,200,0.18),transparent_35%)]" />

                    <div className="container-main relative">
                        <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[var(--gold-light)] backdrop-blur">
                            همکاری با زرین غزال
                        </span>

                        <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
                            مسیرهای جدید برای
                            <span className="text-[var(--gold)]"> همکاری</span>
                        </h1>

                        <p className="mt-6 max-w-2xl text-base leading-8 text-white/65 md:text-lg">
                            برای دریافت اطلاعات، کاتالوگ‌ها و فایل‌های مرتبط با همکاری،
                            می‌توانید فایل‌های موردنظر خود را از این بخش دریافت کنید.
                        </p>
                    </div>
                </section>

                {/* Downloads */}
                <section className="section-padding bg-[var(--cream)]">
                    <div className="container-main">
                        <div className="mb-12 text-center">
                            <span className="text-sm font-bold text-[var(--gold)]">
                                فایل‌ها و کاتالوگ‌ها
                            </span>

                            <h2 className="mt-3 text-3xl font-black text-[var(--text)] md:text-4xl">
                                دریافت فایل‌های موردنیاز
                            </h2>

                            <div className="gold-line mx-auto mt-5" />

                            <p className="mx-auto mt-5 max-w-2xl leading-8 text-[var(--muted)]">
                                فایل موردنظر خود را انتخاب کنید تا بتوانید آن را دریافت و
                                مشاهده کنید.
                            </p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {downloads.map((item) => (
                                <div
                                    key={item.title}
                                    className="group rounded-[2rem] border border-[var(--border)] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                                >
                                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--deep)] text-2xl transition group-hover:bg-[var(--gold)]">
                                        {item.icon}
                                    </div>

                                    <h3 className="mt-6 text-xl font-black text-[var(--text)]">
                                        {item.title}
                                    </h3>

                                    <p className="mt-4 min-h-[80px] text-sm leading-7 text-[var(--muted)]">
                                        {item.description}
                                    </p>

                                    <a
                                        href={item.file}
                                        download
                                        className="mt-6 flex items-center justify-center gap-2 rounded-2xl bg-[var(--deep)] px-5 py-4 font-bold text-white transition hover:bg-[var(--gold)] hover:text-[var(--deep)]"
                                    >
                                        <span>دانلود فایل</span>
                                        <span>↓</span>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Cooperation CTA */}
                <section className="bg-white py-16">
                    <div className="container-main">
                        <div className="relative overflow-hidden rounded-[2rem] bg-[var(--deep)] p-8 text-white md:p-12">
                            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[var(--gold)]/10 blur-3xl" />

                            <div className="relative flex flex-col items-center justify-between gap-8 md:flex-row">
                                <div>
                                    <span className="text-sm font-bold text-[var(--gold-light)]">
                                        ارتباط مستقیم
                                    </span>

                                    <h2 className="mt-3 text-2xl font-black md:text-4xl">
                                        برای همکاری با ما تماس بگیرید
                                    </h2>

                                    <p className="mt-4 max-w-2xl leading-8 text-white/60">
                                        اگر درباره همکاری، محصولات یا خدمات مجموعه سؤال دارید،
                                        می‌توانید مستقیماً با ما در ارتباط باشید.
                                    </p>
                                </div>

                                <Link
                                    href="/contact"
                                    className="shrink-0 rounded-2xl bg-[var(--gold)] px-7 py-4 font-bold text-[var(--deep)] transition hover:bg-[var(--gold-light)]"
                                >
                                    تماس با ما
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