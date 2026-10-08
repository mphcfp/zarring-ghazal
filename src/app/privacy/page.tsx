import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
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
                                حریم خصوصی
                            </h1>

                            <div className="gold-line mt-5" />
                        </div>

                        <div className="rounded-[2rem] border border-[var(--border)] bg-white p-7 shadow-sm md:p-10">
                            <div className="space-y-10 leading-8 text-[var(--muted)]">
                                <section>
                                    <h2 className="mb-3 text-xl font-black text-[var(--text)]">
                                        مقدمه
                                    </h2>

                                    <p>
                                        حفظ حریم خصوصی کاربران برای مجموعه زرین غزال اهمیت دارد.
                                        این صفحه توضیح می‌دهد که اطلاعاتی که از طریق وب‌سایت در
                                        اختیار مجموعه قرار می‌گیرد چگونه مورد استفاده قرار
                                        می‌گیرد.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="mb-3 text-xl font-black text-[var(--text)]">
                                        اطلاعات تماس
                                    </h2>

                                    <p>
                                        اطلاعاتی مانند نام، شماره تماس و ایمیل که کاربر از طریق
                                        فرم‌های ارتباطی یا روش‌های تماس در اختیار سایت قرار می‌دهد،
                                        صرفاً برای پاسخ‌گویی و پیگیری درخواست مربوط به همان
                                        ارتباط استفاده می‌شود.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="mb-3 text-xl font-black text-[var(--text)]">
                                        امنیت اطلاعات
                                    </h2>

                                    <p>
                                        تلاش می‌شود اطلاعات کاربران در چارچوب امکانات فنی سایت و
                                        سرویس‌های مورد استفاده با رعایت اصول متعارف امنیتی
                                        نگهداری شود.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="mb-3 text-xl font-black text-[var(--text)]">
                                        لینک‌های خارجی
                                    </h2>

                                    <p>
                                        ممکن است وب‌سایت شامل لینک‌هایی به سرویس‌ها یا وب‌سایت‌های
                                        دیگر باشد. مسئولیت نحوه استفاده از اطلاعات در آن سرویس‌ها
                                        بر عهده اپراتور همان سرویس است.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="mb-3 text-xl font-black text-[var(--text)]">
                                        به‌روزرسانی قوانین
                                    </h2>

                                    <p>
                                        این متن ممکن است در آینده با توجه به تغییرات خدمات یا
                                        الزامات سایت به‌روزرسانی شود.
                                    </p>
                                </section>
                            </div>

                            <div className="mt-10 border-t border-[var(--border)] pt-8">
                                <Link
                                    href="/contact"
                                    className="inline-flex rounded-2xl bg-[var(--deep)] px-6 py-3 font-bold text-white transition hover:bg-[var(--gold)] hover:text-[var(--deep)]"
                                >
                                    تماس با ما
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