import Link from "next/link";
import { notFound } from "next/navigation";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { news } from "@/data/news";

type NewsDetailsPageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export default async function NewsDetailsPage({
                                                  params,
                                              }: NewsDetailsPageProps) {
    const { slug } = await params;

    const article = news.find((item) => item.slug === slug);

    if (!article) {
        notFound();
    }

    return (
        <>
            <Navbar />

            <main className="min-h-screen bg-[var(--cream)] pt-28">
                {/* Hero */}
                <section className="container-main pb-12">
                    <div className="mx-auto max-w-5xl">
                        <Link
                            href="/news"
                            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[var(--muted)] transition hover:text-[var(--gold)]"
                        >
                            <span>→</span>
                            بازگشت به اخبار
                        </Link>

                        <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-[var(--navy)] px-4 py-2 text-xs font-bold text-white">
                {article.category}
              </span>

                            <span className="text-sm text-[var(--muted)]">
                {article.date}
              </span>

                            <span className="text-sm text-[var(--muted)]">
                {article.time}
              </span>
                        </div>

                        <h1 className="max-w-4xl text-3xl font-black leading-[1.5] text-[var(--navy)] md:text-5xl">
                            {article.title}
                        </h1>

                        <div className="mt-8 overflow-hidden rounded-[32px] border border-black/5 bg-white shadow-[0_25px_80px_rgba(3,43,58,0.12)]">
                            <img
                                src={article.image}
                                alt={article.title}
                                className="h-auto max-h-[620px] w-full object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* Article */}
                <section className="container-main pb-24">
                    <div className="mx-auto max-w-4xl">
                        <article className="rounded-[32px] border border-black/5 bg-white p-6 shadow-[0_20px_70px_rgba(3,43,58,0.08)] md:p-10">
                            <div className="mb-8 h-1 w-16 rounded-full bg-[var(--gold)]" />

                            <p className="text-lg leading-9 text-[var(--text)] md:text-xl md:leading-10">
                                {article.content}
                            </p>

                            {/* Gallery */}
                            {article.gallery.length > 0 && (
                                <div className="mt-12">
                                    <h2 className="mb-6 text-2xl font-black text-[var(--navy)]">
                                        تصاویر خبر
                                    </h2>

                                    <div className="grid gap-5 md:grid-cols-2">
                                        {article.gallery.map((image, index) => (
                                            <div
                                                key={image}
                                                className="group overflow-hidden rounded-3xl border border-black/5 bg-[var(--cream)]"
                                            >
                                                <img
                                                    src={image}
                                                    alt={`${article.title} - تصویر ${index + 1}`}
                                                    className="h-full min-h-[260px] w-full object-cover transition duration-500 group-hover:scale-105"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                        </article>
                    </div>
                </section>

                {/* Back CTA */}
                <section className="container-main pb-24">
                    <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-5 rounded-[32px] bg-[var(--navy)] p-8 text-white md:flex-row md:p-10">
                        <div>
                            <p className="mb-2 text-sm font-bold text-[var(--gold-light)]">
                                زرین غزال
                            </p>

                            <h2 className="text-2xl font-black">
                                خبرهای بیشتر زرین غزال
                            </h2>
                        </div>

                        <Link
                            href="/news"
                            className="rounded-2xl bg-[var(--gold)] px-7 py-3 font-bold text-[var(--deep)] transition hover:-translate-y-1"
                        >
                            مشاهده همه اخبار
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}