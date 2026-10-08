import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsPage() {
    return (
        <>
            <Navbar />

            <main className="bg-[var(--cream)] pt-32 pb-20">
                <div className="container-main">
                    <div className="mx-auto max-w-4xl">
                        <div className="mb-10">
              <span className="text-sm font-bold text-[var(--gold)]">
                قوانین سایت
              </span>

                            <h1 className="mt-3 text-4xl font-black text-[var(--text)] md:text-5xl">
                                شرایط استفاده
                            </h1>

                            <div className="gold-line mt-5" />
                        </div>

                        <div className="rounded-[2rem] border border-[var(--border)] bg-white p-7 shadow-sm md:p-10">
                            <div className="space-y-10 leading-8 text-[var(--muted)]">
                                <section>
                                    <h2 className="mb-3 text-xl font-black text-[var(--text)]">
                                        استفاده از وب‌سایت
                                    </h2>

                                    <p>
                                        استفاده از محتوای این وب‌سایت به معنای پذیرش شرایط و
                                        مقررات مربوط به استفاده از خدمات و محتوای سایت است.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="mb-3 text-xl font-black text-[var(--text)]">
                                        محتوای سایت
                                    </h2>

                                    <p>
                                        اطلاعات، تصاویر، متن‌ها و سایر محتوای منتشرشده در سایت
                                        برای معرفی مجموعه، محصولات، برندها و خدمات ارائه می‌شوند.
                                        استفاده مجدد از محتوای اختصاصی سایت باید با رعایت حقوق
                                        مربوط به آن انجام شود.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="mb-3 text-xl font-black text-[var(--text)]">
                                        اطلاعات محصولات
                                    </h2>

                                    <p>
                                        اطلاعات مربوط به محصولات ممکن است در طول زمان به‌روزرسانی
                                        شود. برای دریافت اطلاعات دقیق‌تر درباره محصولات می‌توانید
                                        از طریق راه‌های ارتباطی رسمی مجموعه با ما در تماس باشید.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="mb-3 text-xl font-black text-[var(--text)]">
                                        لینک‌ها و خدمات دیگر
                                    </h2>

                                    <p>
                                        سایت ممکن است برای دسترسی راحت‌تر کاربران به منابع مختلف،
                                        لینک‌هایی به صفحات یا سرویس‌های دیگر ارائه کند. استفاده از
                                        این سرویس‌ها تابع قوانین همان سرویس خواهد بود.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="mb-3 text-xl font-black text-[var(--text)]">
                                        تغییر شرایط
                                    </h2>

                                    <p>
                                        شرایط استفاده از سایت ممکن است در آینده متناسب با تغییرات
                                        خدمات و امکانات وب‌سایت اصلاح یا به‌روزرسانی شود.
                                    </p>
                                </section>
                            </div>

                            <div className="mt-10 border-t border-[var(--border)] pt-8">
                                <Link
                                    href="/contact"
                                    className="inline-flex rounded-2xl bg-[var(--deep)] px-6 py-3 font-bold text-white transition hover:bg-[var(--gold)] hover:text-[var(--deep)]"
                                >
                                    ارتباط با مجموعه
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}