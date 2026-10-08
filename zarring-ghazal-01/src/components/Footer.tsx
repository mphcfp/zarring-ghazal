import Link from "next/link";

const mainLinks = [
    { label: "خانه", href: "/" },
    { label: "محصولات", href: "/products" },
    { label: "برندها", href: "/brands" },
    { label: "درباره ما", href: "/about" },
];

const usefulLinks = [
    { label: "اخبار", href: "/news" },
    { label: "گالری", href: "/gallery" },
    { label: "همکاری", href: "/cooperation" },
    { label: "تماس با ما", href: "/contact" },
];

export default function Footer() {
    return (
        <footer
            dir="rtl"
            className="relative overflow-hidden border-t border-white/10 bg-[#021d28]"
        >
            {/* Background Glow */}

            <div className="pointer-events-none absolute -right-40 top-0 h-[420px] w-[420px] rounded-full bg-[#d7a847]/10 blur-[120px]" />

            <div className="pointer-events-none absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-[#7660c8]/10 blur-[120px]" />

            <div className="container-main relative">
                {/* Main Footer */}

                <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
                    {/* Brand */}

                    <div>
                        <Link
                            href="/"
                            className="group flex items-center gap-3"
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#d7a847]/30 bg-[#d7a847]/10 text-xl font-black text-[#d7a847] transition duration-300 group-hover:rotate-3 group-hover:bg-[#d7a847] group-hover:text-[#032b3a]">
                                ز
                            </div>

                            <div>
                                <div className="text-base font-black text-white">
                                    زرین غزال
                                </div>

                                <div className="mt-1 text-[9px] font-bold tracking-[0.25em] text-[#d7a847]">
                                    ZARRING GHAZAL
                                </div>
                            </div>
                        </Link>

                        <p className="mt-6 max-w-xs text-sm leading-8 text-white/45">
                            گروه صنعتی زرین غزال با تکیه بر
                            تجربه، کیفیت، فناوری و توسعه پایدار،
                            در مسیر ارائه محصولات باکیفیت حرکت
                            می‌کند.
                        </p>

                        {/* Social */}

                        <div className="mt-7 flex items-center gap-3">
                            <a
                                href="#"
                                aria-label="Instagram"
                                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/60 transition duration-300 hover:-translate-y-1 hover:border-[#d7a847]/40 hover:bg-[#d7a847] hover:text-[#032b3a]"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    className="h-5 w-5"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                >
                                    <rect
                                        x="3"
                                        y="3"
                                        width="18"
                                        height="18"
                                        rx="5"
                                    />

                                    <circle
                                        cx="12"
                                        cy="12"
                                        r="4"
                                    />

                                    <circle
                                        cx="17.5"
                                        cy="6.5"
                                        r="1"
                                        fill="currentColor"
                                        stroke="none"
                                    />
                                </svg>
                            </a>

                            <a
                                href="#"
                                aria-label="Telegram"
                                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/60 transition duration-300 hover:-translate-y-1 hover:border-[#d7a847]/40 hover:bg-[#d7a847] hover:text-[#032b3a]"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    className="h-5 w-5"
                                    fill="currentColor"
                                >
                                    <path d="M21.4 3.6 18.3 20c-.2 1.2-.9 1.5-1.8.9l-5-3.7-2.4 2.3c-.3.3-.5.5-1 .5l.4-5.1 9.3-8.4c.4-.4-.1-.6-.6-.2L5.7 13.7.8 12.2c-1.1-.3-1.1-1.1.2-1.6L20.1 3c.9-.3 1.7.2 1.3.6Z" />
                                </svg>
                            </a>

                            <a
                                href="#"
                                aria-label="LinkedIn"
                                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/60 transition duration-300 hover:-translate-y-1 hover:border-[#d7a847]/40 hover:bg-[#d7a847] hover:text-[#032b3a]"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    className="h-5 w-5"
                                    fill="currentColor"
                                >
                                    <path d="M6.5 8.5H3V21h3.5V8.5ZM4.75 3A2.05 2.05 0 1 0 4.75 7.1 2.05 2.05 0 0 0 4.75 3ZM21 13.85C21 10.08 18.99 8.3 16.3 8.3c-2.18 0-3.15 1.2-3.7 2.04V8.5H9.1V21h3.5v-6.2c0-1.64.31-3.23 2.34-3.23 2 0 2.03 1.88 2.03 3.34V21H21v-7.15Z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Main Links */}

                    <div>
                        <div className="mb-6 flex items-center gap-3">
                            <span className="h-px w-7 bg-[#d7a847]" />

                            <h3 className="text-sm font-black text-white">
                                دسترسی سریع
                            </h3>
                        </div>

                        <ul className="space-y-3">
                            {mainLinks.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="group flex items-center gap-2 text-sm text-white/45 transition hover:text-[#d7a847]"
                                    >
                                        <span className="text-[#d7a847] opacity-0 transition group-hover:opacity-100">
                                            ←
                                        </span>

                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Useful Links */}

                    <div>
                        <div className="mb-6 flex items-center gap-3">
                            <span className="h-px w-7 bg-[#d7a847]" />

                            <h3 className="text-sm font-black text-white">
                                بخش‌های سایت
                            </h3>
                        </div>

                        <ul className="space-y-3">
                            {usefulLinks.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="group flex items-center gap-2 text-sm text-white/45 transition hover:text-[#d7a847]"
                                    >
                                        <span className="text-[#d7a847] opacity-0 transition group-hover:opacity-100">
                                            ←
                                        </span>

                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}

                    <div>
                        <div className="mb-6 flex items-center gap-3">
                            <span className="h-px w-7 bg-[#d7a847]" />

                            <h3 className="text-sm font-black text-white">
                                ارتباط با ما
                            </h3>
                        </div>

                        <div className="space-y-4">
                            <Link
                                href="/contact"
                                className="group block rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition duration-300 hover:border-[#d7a847]/30 hover:bg-white/[0.07]"
                            >
                                <div className="text-xs text-white/35">
                                    ارتباط مستقیم
                                </div>

                                <div className="mt-2 text-sm font-bold text-white group-hover:text-[#d7a847]">
                                    تماس با ما
                                </div>
                            </Link>

                            <Link
                                href="/cooperation"
                                className="group block rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition duration-300 hover:border-[#d7a847]/30 hover:bg-white/[0.07]"
                            >
                                <div className="text-xs text-white/35">
                                    همکاری تجاری
                                </div>

                                <div className="mt-2 text-sm font-bold text-white group-hover:text-[#d7a847]">
                                    درخواست همکاری
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom */}

                <div className="border-t border-white/10 py-6">
                    <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-right">
                        <p className="text-xs text-white/30">
                            © {new Date().getFullYear()} گروه
                            صنعتی زرین غزال. تمامی حقوق محفوظ
                            است.
                        </p>

                        <div className="flex items-center gap-5">
                            <Link
                                href="/privacy"
                                className="text-xs text-white/30 transition hover:text-[#d7a847]"
                            >
                                حریم خصوصی
                            </Link>

                            <Link
                                href="/terms"
                                className="text-xs text-white/30 transition hover:text-[#d7a847]"
                            >
                                قوانین و مقررات
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}