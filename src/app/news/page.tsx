import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { news } from "@/data/news";

export default function NewsPage() {
    return (
        <>
            <Navbar />

            <main className="bg-[#faf7ef] pt-20">

                {/* Hero */}
                <section className="relative overflow-hidden bg-[#032b3a] py-24">
                    <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#d7a847]/10 blur-3xl" />
                    <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#7660c8]/15 blur-3xl" />

                    <div className="container-main relative text-center">
            <span className="text-sm font-bold text-[#d7a847]">
              مجله زرین غزال
            </span>

                        <h1 className="mt-4 text-4xl font-black text-white sm:text-5xl lg:text-6xl">
                            اخبار و مقالات
                        </h1>

                        <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-white/65 sm:text-base">
                            تازه‌ترین مطالب، اخبار و محتوای مرتبط با محصولات و
                            فعالیت‌های زرین غزال.
                        </p>
                    </div>
                </section>

                {/* News */}
                <section className="section-padding">
                    <div className="container-main">

                        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                            <div>
                <span className="text-sm font-bold text-[#d7a847]">
                  آخرین مطالب
                </span>

                                <h2 className="mt-2 text-3xl font-black text-[#032b3a] sm:text-4xl">
                                    مقالات و اخبار
                                </h2>
                            </div>

                            <Link
                                href="/"
                                className="text-sm font-bold text-[#7660c8] transition hover:text-[#032b3a]"
                            >
                                بازگشت به خانه ←
                            </Link>
                        </div>

                        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
                            {news.map((item, index) => (
                                <article
                                    key={item.id}
                                    className={`group overflow-hidden rounded-[30px] border border-[#e8e6ed] bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                                        index === 0 ? "lg:col-span-2" : ""
                                    }`}
                                >
                                    <Link href={`/news/${item.slug}`}>
                                        <div
                                            className={`relative overflow-hidden ${
                                                index === 0
                                                    ? "h-[360px]"
                                                    : "h-[250px]"
                                            }`}
                                        >
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                                            />

                                            <div className="absolute inset-0 bg-gradient-to-t from-[#032b3a]/70 via-transparent to-transparent" />

                                            <span className="absolute right-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-[#032b3a] shadow-lg backdrop-blur">
                        {item.category}
                      </span>

                                            <span className="absolute bottom-5 left-5 text-xs text-white/80">
                        {item.date}
                      </span>
                                        </div>

                                        <div className="p-6">
                                            <h2
                                                className={`font-black leading-8 text-[#032b3a] ${
                                                    index === 0
                                                        ? "text-2xl sm:text-3xl"
                                                        : "text-xl"
                                                }`}
                                            >
                                                {item.title}
                                            </h2>

                                            <p className="mt-3 text-sm leading-7 text-[#72778a]">
                                                {item.excerpt}
                                            </p>

                                            <div className="mt-6 flex items-center justify-between border-t border-[#eee] pt-5">
                        <span className="text-sm font-bold text-[#7660c8]">
                          ادامه مطلب
                        </span>

                                                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#032b3a] text-white transition group-hover:bg-[#d7a847] group-hover:text-[#032b3a]">
                          ←
                        </span>
                                            </div>
                                        </div>
                                    </Link>
                                </article>
                            ))}
                        </div>

                    </div>
                </section>

                {/* CTA */}
                <section className="pb-24">
                    <div className="container-main">
                        <div className="relative overflow-hidden rounded-[36px] bg-[#032b3a] px-7 py-14 text-center sm:px-12">
                            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#d7a847]/10 blur-3xl" />

                            <div className="relative">
                <span className="text-sm font-bold text-[#d7a847]">
                  زرین غزال
                </span>

                                <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-black text-white sm:text-4xl">
                                    با محصولات و فعالیت‌های ما بیشتر آشنا شوید
                                </h2>

                                <p className="mx-auto mt-5 max-w-xl text-sm leading-8 text-white/60">
                                    برای آشنایی بیشتر با مجموعه، محصولات و برندهای زرین
                                    غزال از بخش‌های مختلف سایت دیدن کنید.
                                </p>

                                <Link
                                    href="/about"
                                    className="mt-8 inline-flex rounded-xl bg-[#d7a847] px-7 py-3.5 text-sm font-black text-[#032b3a] transition hover:bg-[#f0d58a]"
                                >
                                    درباره زرین غزال
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