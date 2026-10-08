"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
    {
        label: "خانه",
        href: "/",
    },
    {
        label: "محصولات",
        href: "/products",
    },
    {
        label: "برندها",
        href: "/brands",
    },
    {
        label: "درباره ما",
        href: "/about",
    },
    {
        label: "اخبار",
        href: "/news",
    },
    {
        label: "گالری",
        href: "/gallery",
    },
    {
        label: "همکاری",
        href: "/cooperation",
    },
    {
        label: "تماس با ما",
        href: "/contact",
    },
];

export default function Navbar() {
    const pathname = usePathname();

    const [mobileOpen, setMobileOpen] =
        useState(false);

    function isActive(href: string) {
        if (href === "/") {
            return pathname === "/";
        }

        return (
            pathname === href ||
            pathname.startsWith(`${href}/`)
        );
    }

    return (
        <header
            dir="rtl"
            className="sticky top-0 z-50 border-b border-white/10 bg-[#021d28]/80 backdrop-blur-2xl"
        >
            <div className="container-main">
                <div className="flex h-20 items-center justify-between">
                    {/* Logo */}

                    <Link
                        href="/"
                        onClick={() =>
                            setMobileOpen(false)
                        }
                        className="group flex items-center gap-3"
                    >
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#d7a847]/30 bg-[#d7a847]/10 text-lg font-black text-[#d7a847] transition duration-300 group-hover:rotate-3 group-hover:bg-[#d7a847] group-hover:text-[#032b3a]">
                            ز
                        </div>

                        <div className="hidden sm:block">
                            <div className="text-sm font-black text-white">
                                زرین غزال
                            </div>

                            <div className="mt-0.5 text-[9px] font-bold tracking-[0.25em] text-[#d7a847]">
                                ZARRING GHAZAL
                            </div>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}

                    <nav className="hidden items-center gap-1 lg:flex">
                        {navItems.map((item) => {
                            const active =
                                isActive(
                                    item.href
                                );

                            return (
                                <Link
                                    key={
                                        item.href
                                    }
                                    href={
                                        item.href
                                    }
                                    className={`relative rounded-xl px-4 py-3 text-sm font-bold transition duration-300 ${
                                        active
                                            ? "bg-[#d7a847]/10 text-[#d7a847]"
                                            : "text-white/60 hover:bg-white/[0.04] hover:text-white"
                                    }`}
                                >
                                    {item.label}

                                    {active && (
                                        <span className="absolute bottom-1 right-1/2 h-0.5 w-5 translate-x-1/2 rounded-full bg-[#d7a847]" />
                                    )}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Desktop Contact Button */}

                    <Link
                        href="/contact"
                        className="hidden items-center gap-2 rounded-xl bg-[#d7a847] px-5 py-3 text-sm font-black text-[#032b3a] transition duration-300 hover:-translate-y-0.5 hover:bg-[#e5bd61] lg:flex"
                    >
                        <span>
                            درخواست همکاری
                        </span>

                        <span>←</span>
                    </Link>

                    {/* Mobile Button */}

                    <button
                        type="button"
                        aria-label={
                            mobileOpen
                                ? "بستن منو"
                                : "باز کردن منو"
                        }
                        aria-expanded={
                            mobileOpen
                        }
                        onClick={() =>
                            setMobileOpen(
                                (current) =>
                                    !current
                            )
                        }
                        className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:border-[#d7a847]/40 hover:text-[#d7a847] lg:hidden"
                    >
                        <span className="relative flex h-5 w-5 flex-col justify-center gap-1.5">
                            <span
                                className={`block h-0.5 w-5 rounded-full bg-current transition duration-300 ${
                                    mobileOpen
                                        ? "translate-y-2 rotate-45"
                                        : ""
                                }`}
                            />

                            <span
                                className={`block h-0.5 w-5 rounded-full bg-current transition duration-300 ${
                                    mobileOpen
                                        ? "opacity-0"
                                        : ""
                                }`}
                            />

                            <span
                                className={`block h-0.5 w-5 rounded-full bg-current transition duration-300 ${
                                    mobileOpen
                                        ? "-translate-y-2 -rotate-45"
                                        : ""
                                }`}
                            />
                        </span>
                    </button>
                </div>

                {/* Mobile Navigation */}

                <div
                    className={`overflow-hidden transition-all duration-300 lg:hidden ${
                        mobileOpen
                            ? "max-h-[600px] pb-5 opacity-100"
                            : "max-h-0 opacity-0"
                    }`}
                >
                    <nav className="border-t border-white/10 pt-4">
                        <div className="grid gap-1">
                            {navItems.map(
                                (item) => {
                                    const active =
                                        isActive(
                                            item.href
                                        );

                                    return (
                                        <Link
                                            key={
                                                item.href
                                            }
                                            href={
                                                item.href
                                            }
                                            onClick={() =>
                                                setMobileOpen(
                                                    false
                                                )
                                            }
                                            className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-bold transition ${
                                                active
                                                    ? "bg-[#d7a847]/10 text-[#d7a847]"
                                                    : "text-white/60 hover:bg-white/[0.04] hover:text-white"
                                            }`}
                                        >
                                            <span>
                                                {
                                                    item.label
                                                }
                                            </span>

                                            <span
                                                className={
                                                    active
                                                        ? "text-[#d7a847]"
                                                        : "text-white/20"
                                                }
                                            >
                                                ←
                                            </span>
                                        </Link>
                                    );
                                }
                            )}

                            <Link
                                href="/contact"
                                onClick={() =>
                                    setMobileOpen(
                                        false
                                    )
                                }
                                className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-[#d7a847] px-5 py-3.5 text-sm font-black text-[#032b3a] transition hover:bg-[#e5bd61]"
                            >
                                <span>
                                    درخواست همکاری
                                </span>

                                <span>
                                    ←
                                </span>
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}