"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
    products,
    productCategories,
} from "@/data/products";

export default function ContactForm() {
    const searchParams = useSearchParams();

    const productSlug = searchParams.get("product");

    const selectedProduct = products.find(
        (item) => item.slug === productSlug
    );

    const selectedCategory = selectedProduct
        ? productCategories.find(
            (category) =>
                category.slug === selectedProduct.categorySlug &&
                category.brandSlug === selectedProduct.brandSlug
        )
        : undefined;

    const productName =
        selectedProduct?.name ??
        productSlug ??
        "";

    const productBrand =
        selectedProduct?.brandName ??
        "";

    const productCategory =
        selectedCategory?.name ??
        "";

    const productWeight =
        selectedProduct?.weight ??
        "";

    const productCartonCount =
        selectedProduct?.cartonCount ??
        "";

    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        subject: productName
            ? `درخواست اطلاعات محصول: ${productName}`
            : "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const [status, setStatus] = useState<{
        type: "success" | "error" | "";
        message: string;
    }>({
        type: "",
        message: "",
    });

    function handleChange(
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement
        >
    ) {
        const { name, value } = e.target;

        setForm((current) => ({
            ...current,
            [name]: value,
        }));
    }

    async function handleSubmit(
        e: FormEvent<HTMLFormElement>
    ) {
        e.preventDefault();

        if (loading) return;

        setLoading(true);

        setStatus({
            type: "",
            message: "",
        });

        try {
            const response = await fetch(
                selectedProduct
                    ? "/api/product-request"
                    : "/api/contact",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                    },

                    body: JSON.stringify(
                        selectedProduct
                            ? {
                                firstName: form.name,
                                phone: form.phone,
                                email: form.email,

                                productName:
                                selectedProduct.name,

                                brandName:
                                selectedProduct.brandName,

                                categoryName:
                                    selectedCategory?.name ?? "",

                                weight:
                                    selectedProduct.weight ?? "",

                                cartonCount:
                                    selectedProduct.cartonCount ?? "",

                                message: form.message,
                            }
                            : {
                                firstName: form.name,
                                lastName: "",
                                phone: form.phone,
                                email: form.email,

                                subject:
                                    form.subject.trim() ||
                                    "پیام از وب‌سایت زرین غزال",

                                message: form.message,
                            }
                    ),
                }
            );

            const data = await response.json();

            if (!response.ok || !data.success) {
                throw new Error(
                    data.message ||
                    "ارسال پیام انجام نشد."
                );
            }

            setStatus({
                type: "success",

                message: selectedProduct
                    ? "درخواست اطلاعات محصول با موفقیت ارسال شد. کارشناسان ما در اولین فرصت با شما تماس خواهند گرفت."
                    : "پیام شما با موفقیت ارسال شد.",
            });

            setForm({
                name: "",
                phone: "",
                email: "",

                subject: selectedProduct
                    ? `درخواست اطلاعات محصول: ${selectedProduct.name}`
                    : "",

                message: "",
            });
        } catch (error) {
            console.error(
                "Contact form error:",
                error
            );

            setStatus({
                type: "error",

                message:
                    error instanceof Error
                        ? error.message
                        : "ارسال درخواست انجام نشد. لطفاً دوباره تلاش کنید.",
            });
        } finally {
            setLoading(false);
        }
    }

    return (
        <main
            dir="rtl"
            className="min-h-screen bg-[#021d28] text-white"
        >
            {/* Navbar */}

            <nav className="border-b border-white/10 bg-[#021d28]/90 backdrop-blur-xl">
                <div className="container-main flex h-20 items-center justify-between">
                    <Link
                        href="/"
                        className="text-xl font-black text-white transition hover:text-[#d7a847]"
                    >
                        زرین غزال
                    </Link>

                    <div className="flex items-center gap-3">
                        <Link
                            href="/"
                            className="hidden rounded-xl px-4 py-3 text-sm font-bold text-white/60 transition hover:text-[#d7a847] md:block"
                        >
                            خانه
                        </Link>

                        <Link
                            href="/products"
                            className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-bold text-white transition hover:border-[#d7a847]/40 hover:bg-[#d7a847] hover:text-[#032b3a]"
                        >
                            محصولات
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero */}

            <section className="relative overflow-hidden border-b border-white/10">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -right-32 -top-32 h-[450px] w-[450px] rounded-full bg-[#d7a847]/10 blur-[120px]" />

                    <div className="absolute -bottom-32 -left-32 h-[450px] w-[450px] rounded-full bg-[#7660c8]/10 blur-[120px]" />
                </div>

                <div className="container-main relative py-20 md:py-28">
                    <div className="max-w-3xl">
                        <div className="mb-5 flex items-center gap-3">
                            <span className="gold-line" />

                            <span className="text-xs font-bold tracking-[0.2em] text-[#d7a847]">
                                CONTACT US
                            </span>
                        </div>

                        <h1 className="text-4xl font-black md:text-6xl">
                            تماس با ما
                        </h1>

                        <p className="mt-6 max-w-2xl text-sm leading-8 text-white/50 md:text-base">
                            برای دریافت اطلاعات بیشتر
                            درباره محصولات، همکاری یا
                            هرگونه پرسش، فرم زیر را
                            تکمیل کنید.
                        </p>

                        {selectedProduct && (
                            <div className="mt-8 inline-flex flex-wrap items-center gap-3 rounded-2xl border border-[#d7a847]/20 bg-[#d7a847]/10 px-5 py-4">
                                <span className="text-xs text-[#d7a847]">
                                    محصول انتخاب‌شده:
                                </span>

                                <strong className="text-sm text-white">
                                    {selectedProduct.name}
                                </strong>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Main */}

            <section className="py-20 md:py-28">
                <div className="container-main">
                    <div className="grid gap-8 lg:grid-cols-[1fr_380px]">

                        {/* Form */}

                        <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl md:p-10">
                            <div className="mb-10">
                                <div className="mb-4 flex items-center gap-3">
                                    <span className="h-px w-8 bg-[#d7a847]" />

                                    <span className="text-xs font-bold tracking-[0.15em] text-[#d7a847]">
                                        {selectedProduct
                                            ? "PRODUCT REQUEST"
                                            : "MESSAGE"}
                                    </span>
                                </div>

                                <h2 className="text-2xl font-black md:text-3xl">
                                    {selectedProduct
                                        ? "درخواست اطلاعات محصول"
                                        : "ارسال پیام"}
                                </h2>

                                <p className="mt-3 text-sm leading-7 text-white/40">
                                    اطلاعات خود را
                                    وارد کنید تا
                                    درخواست شما
                                    برای کارشناسان
                                    ارسال شود.
                                </p>
                            </div>

                            <form
                                onSubmit={handleSubmit}
                                className="space-y-6"
                            >
                                {/* Name + Phone */}

                                <div className="grid gap-5 md:grid-cols-2">
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="mb-2 block text-sm font-bold text-white/70"
                                        >
                                            نام و نام خانوادگی
                                        </label>

                                        <input
                                            id="name"
                                            type="text"
                                            name="name"
                                            value={form.name}
                                            onChange={handleChange}
                                            required
                                            autoComplete="name"
                                            placeholder="نام شما"
                                            className="w-full rounded-2xl border border-white/10 bg-black/10 px-5 py-4 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-[#d7a847]/50 focus:bg-white/[0.06]"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="phone"
                                            className="mb-2 block text-sm font-bold text-white/70"
                                        >
                                            شماره تماس
                                        </label>

                                        <input
                                            id="phone"
                                            type="tel"
                                            name="phone"
                                            value={form.phone}
                                            onChange={handleChange}
                                            required
                                            autoComplete="tel"
                                            placeholder="09xxxxxxxxx"
                                            className="w-full rounded-2xl border border-white/10 bg-black/10 px-5 py-4 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-[#d7a847]/50 focus:bg-white/[0.06]"
                                        />
                                    </div>
                                </div>

                                {/* Email */}

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="mb-2 block text-sm font-bold text-white/70"
                                    >
                                        ایمیل
                                    </label>

                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        autoComplete="email"
                                        placeholder="example@email.com"
                                        className="w-full rounded-2xl border border-white/10 bg-black/10 px-5 py-4 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-[#d7a847]/50 focus:bg-white/[0.06]"
                                    />
                                </div>

                                {/* Subject */}

                                <div>
                                    <label
                                        htmlFor="subject"
                                        className="mb-2 block text-sm font-bold text-white/70"
                                    >
                                        موضوع
                                    </label>

                                    <input
                                        id="subject"
                                        type="text"
                                        name="subject"
                                        value={form.subject}
                                        onChange={handleChange}
                                        required
                                        placeholder="موضوع پیام"
                                        className="w-full rounded-2xl border border-white/10 bg-black/10 px-5 py-4 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-[#d7a847]/50 focus:bg-white/[0.06]"
                                    />
                                </div>

                                {/* Message */}

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="mb-2 block text-sm font-bold text-white/70"
                                    >
                                        پیام
                                    </label>

                                    <textarea
                                        id="message"
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        required
                                        rows={7}
                                        placeholder={
                                            selectedProduct
                                                ? `درباره ${selectedProduct.name} چه اطلاعاتی نیاز دارید؟`
                                                : "پیام خود را بنویسید..."
                                        }
                                        className="w-full resize-none rounded-2xl border border-white/10 bg-black/10 px-5 py-4 text-sm leading-7 text-white outline-none transition placeholder:text-white/20 focus:border-[#d7a847]/50 focus:bg-white/[0.06]"
                                    />
                                </div>

                                {/* Status */}

                                {status.message && (
                                    <div
                                        className={`rounded-2xl border px-5 py-4 text-sm leading-7 ${
                                            status.type === "success"
                                                ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-300"
                                                : "border-red-400/20 bg-red-400/10 text-red-300"
                                        }`}
                                    >
                                        {status.message}
                                    </div>
                                )}

                                {/* Submit */}

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-[#d7a847] px-7 py-4 text-sm font-black text-[#032b3a] transition hover:-translate-y-1 hover:bg-[#e5bd61] disabled:cursor-not-allowed disabled:opacity-50"
                                >
                                    {loading ? (
                                        <>
                                            <span className="h-5 w-5 animate-spin rounded-full border-2 border-[#032b3a]/30 border-t-[#032b3a]" />

                                            <span>
                                                در حال ارسال...
                                            </span>
                                        </>
                                    ) : (
                                        <>
                                            <span>
                                                {selectedProduct
                                                    ? "ارسال درخواست اطلاعات"
                                                    : "ارسال پیام"}
                                            </span>

                                            <span className="transition-transform duration-300 group-hover:-translate-x-1">
                                                ←
                                            </span>
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>

                        {/* Sidebar */}

                        <aside className="space-y-5">

                            {selectedProduct && (
                                <div className="rounded-[28px] border border-[#d7a847]/20 bg-[#d7a847]/[0.06] p-7">
                                    <span className="text-xs font-bold tracking-[0.15em] text-[#d7a847]">
                                        SELECTED PRODUCT
                                    </span>

                                    <h3 className="mt-4 text-2xl font-black">
                                        {selectedProduct.name}
                                    </h3>

                                    <div className="mt-6 space-y-3">

                                        <div className="flex items-center justify-between border-b border-white/10 pb-3">
                                            <span className="text-xs text-white/30">
                                                برند
                                            </span>

                                            <span className="text-sm font-bold text-white">
                                                {productBrand}
                                            </span>
                                        </div>

                                        <div className="flex items-center justify-between border-b border-white/10 pb-3">
                                            <span className="text-xs text-white/30">
                                                دسته‌بندی
                                            </span>

                                            <span className="text-sm font-bold text-white">
                                                {productCategory}
                                            </span>
                                        </div>

                                        <div className="flex items-center justify-between border-b border-white/10 pb-3">
                                            <span className="text-xs text-white/30">
                                                وزن
                                            </span>

                                            <span className="text-sm font-bold text-white">
                                                {productWeight || "-"}
                                            </span>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <span className="text-xs text-white/30">
                                                تعداد در کارتن
                                            </span>

                                            <span className="text-sm font-bold text-white">
                                                {productCartonCount || "-"}
                                            </span>
                                        </div>

                                    </div>
                                </div>
                            )}

                            <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl">
                                <span className="text-xs font-bold tracking-[0.2em] text-[#d7a847]">
                                    ZARRING GHAZAL
                                </span>

                                <h3 className="mt-5 text-2xl font-black">
                                    در ارتباط باشیم
                                </h3>

                                <p className="mt-4 text-sm leading-8 text-white/40">
                                    برای دریافت اطلاعات
                                    محصولات و خدمات
                                    مجموعه زرین غزال،
                                    درخواست خود را
                                    برای ما ارسال کنید.
                                </p>
                            </div>

                            <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-7">
                                <span className="text-xs font-bold text-white/30">
                                    QUICK ACCESS
                                </span>

                                <div className="mt-5 space-y-3">

                                    <Link
                                        href="/products"
                                        className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm font-bold text-white/70 transition hover:border-[#d7a847]/30 hover:bg-white/[0.06] hover:text-[#d7a847]"
                                    >
                                        <span>
                                            مشاهده محصولات
                                        </span>

                                        <span>
                                            ←
                                        </span>
                                    </Link>

                                    <Link
                                        href="/brands"
                                        className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm font-bold text-white/70 transition hover:border-[#d7a847]/30 hover:bg-white/[0.06] hover:text-[#d7a847]"
                                    >
                                        <span>
                                            مشاهده برندها
                                        </span>

                                        <span>
                                            ←
                                        </span>
                                    </Link>

                                    <Link
                                        href="/about"
                                        className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm font-bold text-white/70 transition hover:border-[#d7a847]/30 hover:bg-white/[0.06] hover:text-[#d7a847]"
                                    >
                                        <span>
                                            درباره ما
                                        </span>

                                        <span>
                                            ←
                                        </span>
                                    </Link>

                                </div>
                            </div>

                        </aside>
                    </div>
                </div>
            </section>

            {/* Footer */}

            <footer className="border-t border-white/10 bg-[#011720] py-8">
                <div className="container-main flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-right">

                    <div>
                        <div className="text-sm font-black text-white">
                            زرین غزال
                        </div>

                        <div className="mt-1 text-xs text-white/30">
                            کیفیت، نوآوری و تجربه
                        </div>
                    </div>

                    <div className="text-xs text-white/30">
                        © {new Date().getFullYear()} زرین غزال — تمامی حقوق محفوظ است.
                    </div>

                </div>
            </footer>
        </main>
    );
}