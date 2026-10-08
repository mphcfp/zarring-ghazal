import Link from "next/link";
import { news } from "@/data/news";

export default function News() {
    return (
        <section className="section-padding relative overflow-hidden bg-[#faf7ef]">
            <div className="pointer-events-none absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-[#7660c8]/10 blur-[120px]" />

            <div className="container-main relative">

                {/* Header */}
                <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                    <div>
                        <div className="mb-5 flex items-center gap-3">
                            <span className="gold-line" />

                            <span className="text-xs font-bold tracking-[0.2em] text-[#d7a847]">
                NEWS & MAGAZINE
              </span>
                        </div>

                        <h2 className="text-3xl font-black text-[#182449] md:text-5xl">
                            اخبار و مقالات
                        </h2>

                        <p className="mt-4 max-w-xl text-sm leading-7 text-[#72778a]">
                            تازه‌ترین اخبار، مطالب آموزشی و مقالات مرتبط با محصولات و
                            سلامت.
                        </p>
                    </div>

                    <Link
                        href="/news"
                        className="group inline-flex w-fit items-center gap-3 rounded-xl border border-[#e8e6ed] bg-white px-5 py-3 text-sm font-bold text-[#032b3a] transition hover:-translate-y-1 hover:border-[#d7a847] hover:shadow-lg"
                    >
                        همه مطالب

                        <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>
                    </Link>
                </div>

                {/* News Grid */}
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
                    {news.map((item) => (
                        <article
                            key={item.id}
                            className="group overflow-hidden rounded-[24px] border border-[#e8e6ed] bg-white transition duration-500 hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(2,29,41,0.1)]"
                        >
                            {/* Image */}
                            <Link
                                href={`/news/${item.slug}`}
                                className="relative block h-[230px] overflow-hidden"
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#021d29]/60 to-transparent" />

                                <span className="absolute right-4 top-4 rounded-full border border-white/20 bg-[#021d29]/60 px-3 py-1.5 text-[10px] font-bold text-white backdrop-blur-md">
                  {item.category}
                </span>
                            </Link>

                            {/* Content */}
                            <div className="p-6">
                                <div className="text-[10px] font-medium text-[#72778a]">
                                    {item.date}
                                </div>

                                <Link href={`/news/${item.slug}`}>
                                    <h3 className="mt-3 text-base font-black leading-7 text-[#182449] transition group-hover:text-[#032b3a]">
                                        {item.title}
                                    </h3>
                                </Link>

                                <p className="mt-3 line-clamp-2 text-xs leading-6 text-[#72778a]">
                                    {item.excerpt}
                                </p>

                                <Link
                                    href={`/news/${item.slug}`}
                                    className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-[#032b3a] transition hover:text-[#d7a847]"
                                >
                                    ادامه مطلب
                                    <span className="transition-transform group-hover:-translate-x-1">
                    ←
                  </span>
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}