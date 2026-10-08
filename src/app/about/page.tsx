"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const companyStats = [
    {
        value: "۱۳۸۴",
        title: "آغاز تولید بستنی",
        description: "شروع فعالیت تولیدی شرکت در بخش بستنی",
    },
    {
        value: "۱۳۸۷",
        title: "آغاز تولید لبنیات",
        description: "شروع فعالیت کارخانه لبنیات آپادا",
    },
    {
        value: "۳۰۰+",
        title: "تن بستنی در روز",
        description: "ظرفیت تولید روزانه انواع بستنی",
    },
    {
        value: "۵۰۰",
        title: "تن لبنیات در روز",
        description: "ظرفیت تولید روزانه محصولات لبنی",
    },
    {
        value: "۱۷۰۰",
        title: "نفر نیروی شرکت",
        description: "تعداد تقریبی کارکنان مجموعه",
    },
    {
        value: "۷۰,۰۰۰+",
        title: "مترمربع زیربنا",
        description: "زیربنای مجموعه‌های تولیدی",
    },
];

const facilities = [
    {
        number: "01",
        title: "کارخانه بستنی دایتی",
        subtitle: "DAITY ICE CREAM FACTORY",
        image: "/images/about/daity-ice-cream-factory.jpg",
        description:
            "فعالیت تولید بستنی زرین غزال از سال ۱۳۸۴ آغاز شد. کارخانه بستنی با ظرفیت اسمی بیش از ۳۰۰ تن در روز، یکی از بخش‌های اصلی مجموعه زرین غزال است و تولید انواع بستنی را بر عهده دارد.",
        details: [
            "شروع تولید در سال ۱۳۸۴",
            "ظرفیت بیش از ۳۰۰ تن بستنی در روز",
            "استفاده از ماشین‌آلات خریداری‌شده از دانمارک",
            "توسعه واحد تحقیق و توسعه و تولید آزمایشی",
            "توجه به کیفیت مواد اولیه و طعم متناسب با ذائقه ایرانی",
        ],
    },
    {
        number: "02",
        title: "کارخانه لبنیات آپادا",
        subtitle: "APADA DAIRY FACTORY",
        image: "/images/about/apada-dairy-factory.jpg",
        description:
            "کارخانه لبنیات آپادا در سال ۱۳۸۷ به مجموعه زرین غزال اضافه شد. این مجموعه با تمرکز بر تولید محصولات لبنی سالم و بدون مواد نگهدارنده، فرآیند کنترل کیفیت و زنجیره سرد را از دریافت شیر خام تا عرضه محصول دنبال می‌کند.",
        details: [
            "آغاز فعالیت در سال ۱۳۸۷",
            "ظرفیت تولید ۵۰۰ تن لبنیات در روز",
            "تولید شیر، شیر طعم‌دار، دوغ، خامه، پنیر و ماست",
            "کنترل روزانه کیفیت شیر خام",
            "کنترل‌های شیمیایی، میکروبی و آنتی‌بیوتیکی",
            "قرنطینه و آزمایش محصولات پیش از عرضه",
        ],
    },
    {
        number: "03",
        title: "مرکز خیریه همودیالیز حاج رضا ابراهیمی",
        subtitle: "HAJ REZA EBRAHIMI CHARITY CENTER",
        image: "/images/about/haj-reza-ebrahimi-dialysis.jpg",
        description:
            "یکی از بخش‌های مهم مسئولیت اجتماعی مجموعه، مرکز خیریه همودیالیز حاج رضا ابراهیمی است که با هدف ارائه خدمات درمانی و حمایتی به بیماران راه‌اندازی شده است.",
        details: [
            "شروع فعالیت از سال ۱۳۸۶",
            "۴ بخش بزرگسالان و ۱ بخش کودکان",
            "مجموعاً ۸۰ دستگاه همودیالیز",
            "فعالیت در ۳ شیفت روزانه",
            "خدمات تخصصی پزشکی و پرستاری",
            "پشتیبانی و خدمات رفاهی برای بیماران",
        ],
    },
    {
        number: "04",
        title: "سالن چندمنظوره ورزشی غزال",
        subtitle: "GHAZAL MULTIPURPOSE SPORTS HALL",
        image: "/images/about/ghazal-sports-hall.jpg",
        description:
            "سالن چندمنظوره ورزشی غزال با امکانات ورزشی، رفاهی و اداری طراحی شده و امکان میزبانی و فعالیت در رشته‌های مختلف ورزشی را فراهم می‌کند.",
        details: [
            "زمین با مساحت حدود ۴۱,۰۰۰ مترمربع",
            "زیربنای حدود ۳,۷۷۳ مترمربع",
            "سالن اصلی ۴۲ در ۶۶ متر",
            "بیش از ۱۱۰۰ صندلی تماشاگر",
            "امکان فعالیت در حدود ۴۰ رشته ورزشی",
            "پارکینگ با ظرفیت حدود ۳۰۰ خودرو",
        ],
    },
    {
        number: "05",
        title: "مجموعه ورزشی روباز پارسیرنگ",
        subtitle: "PARSIRANG OUTDOOR SPORTS COMPLEX",
        image: "/images/about/parsirang-sports-complex.jpg",
        description:
            "مجموعه ورزشی روباز پارسیرنگ در مجموعه آموزشی و پژوهشی ابوعلی سینا در شهر صدرا قرار دارد و شامل فضاهای ورزشی، فضای سبز و امکانات رفاهی است.",
        details: [
            "مساحت زمین حدود ۱۷۶,۰۰۰ مترمربع",
            "زمین‌های روباز بسکتبال و هندبال",
            "زمین روباز والیبال",
            "دو زمین تنیس",
            "سیستم روشنایی برای استفاده در شب",
            "فضای سبز و محوطه‌سازی گسترده",
        ],
    },
    {
        number: "06",
        title: "پردیس آموزشی و پژوهشی ابوعلی‌سینا",
        subtitle: "ABU ALI SINA EDUCATIONAL CAMPUS",
        image: "/images/about/abuali-sina-campus.jpg",
        description:
            "پردیس آموزشی و پژوهشی ابوعلی‌سینا برای اسکان مهمانان و تیم‌های ورزشی طراحی شده و بخشی از زیرساخت‌های آموزشی، پژوهشی و اجتماعی مجموعه زرین غزال را تشکیل می‌دهد.",
        details: [
            "مساحت زمین حدود ۲,۰۰۰ مترمربع",
            "زیربنای حدود ۱,۳۸۰ مترمربع",
            "۱۳ اتاق خواب با ظرفیت حدود ۳۰ نفر",
            "فضای سبز و محوطه‌سازی",
            "آشپزخانه، رستوران و کافی‌شاپ",
            "فضاهای اداری و خدماتی",
        ],
    },
];

const qualityItems = [
    "نشان استاندارد ملی ایران",
    "ISO 9001",
    "ISO 22000",
    "نشان HACCP",
    "نشان حلال",
    "گواهی تأیید صلاحیت آزمایشگاه همکار",
    "لوح تقدیر کارآفرین نمونه کشور",
    "تندیس رعایت حقوق مصرف‌کنندگان",
    "عنوان تولیدکننده نمونه",
    "عنوان صادرکننده نمونه",
];

export default function AboutPage() {
    const [selectedFacility, setSelectedFacility] = useState<number | null>(
        null
    );

    useEffect(() => {
        document.body.style.overflow =
            selectedFacility !== null ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [selectedFacility]);

    const selected =
        selectedFacility !== null
            ? facilities[selectedFacility]
            : null;

    return (
        <>
            <Navbar />

            <main className="overflow-hidden bg-[#faf7ef]">

                {/* HERO */}
                <section className="relative min-h-[620px] overflow-hidden bg-[#021d29]">
                    <div className="absolute inset-0">
                        <img
                            src="/images/about/daity-ice-cream-factory.jpg"
                            alt="کارخانه بستنی دایتی زرین غزال"
                            className="h-full w-full object-cover opacity-35"
                        />

                        <div className="absolute inset-0 bg-gradient-to-l from-[#021d29] via-[#021d29]/85 to-[#021d29]/45" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#021d29] via-transparent to-transparent" />
                    </div>

                    <div className="container-main relative z-10 flex min-h-[620px] items-center">
                        <div className="max-w-3xl text-white">
                            <div className="mb-6 flex items-center gap-3">
                                <span className="h-[2px] w-12 bg-[#d7a847]" />

                                <span className="text-sm font-bold tracking-[0.18em] text-[#d7a847]">
                  ZARRING GHAZAL
                </span>
                            </div>

                            <h1 className="text-4xl font-black leading-[1.4] sm:text-5xl lg:text-7xl">
                                درباره
                                <span className="text-[#d7a847]"> زرین غزال</span>
                            </h1>

                            <p className="mt-7 max-w-2xl text-base leading-9 text-white/75 sm:text-lg">
                                داستان زرین غزال، داستان توسعه، کیفیت، نوآوری و توجه
                                به سلامت مصرف‌کننده است؛ از تولید بستنی دایتی تا
                                توسعه کارخانه لبنیات آپادا و فعالیت‌های گسترده
                                اجتماعی، آموزشی و ورزشی.
                            </p>

                            <div className="mt-9 flex flex-wrap gap-3">
                                <Link
                                    href="#facilities"
                                    className="rounded-xl bg-[#d7a847] px-7 py-3.5 text-sm font-bold text-[#021d29] transition hover:bg-[#f0d58a]"
                                >
                                    آشنایی با مجموعه
                                </Link>

                                <Link
                                    href="/products"
                                    className="rounded-xl border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white/10"
                                >
                                    مشاهده محصولات
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* INTRO */}
                <section className="section-padding">
                    <div className="container-main">
                        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">

                            <div>
                                <div className="mb-5 flex items-center gap-3">
                                    <span className="h-[2px] w-12 bg-[#d7a847]" />

                                    <span className="text-xs font-bold tracking-[0.2em] text-[#d7a847]">
                    OUR STORY
                  </span>
                                </div>

                                <h2 className="text-3xl font-black leading-[1.7] text-[#182449] sm:text-4xl">
                                    از تولید بستنی تا یک
                                    <span className="text-[#032b3a]">
                    {" "}
                                        مجموعه صنعتی گسترده
                  </span>
                                </h2>

                                <p className="mt-6 text-base leading-9 text-[#72778a]">
                                    شرکت زرین غزال فعالیت خود را در حوزه تولید بستنی
                                    از سال ۱۳۸۴ آغاز کرد و در ادامه با راه‌اندازی
                                    کارخانه لبنیات آپادا در سال ۱۳۸۷، سبد فعالیت‌های
                                    خود را توسعه داد.
                                </p>

                                <p className="mt-4 text-base leading-9 text-[#72778a]">
                                    امروز این مجموعه با ظرفیت بیش از ۳۰۰ تن بستنی و
                                    ۵۰۰ تن محصولات لبنی در روز، در کنار فعالیت‌های
                                    تولیدی، در حوزه‌های اجتماعی، آموزشی و ورزشی نیز
                                    حضور دارد.
                                </p>

                                <div className="mt-8 grid grid-cols-2 gap-4">
                                    <div className="rounded-2xl border border-[#e8e6ed] bg-white p-5 shadow-sm">
                                        <div className="text-3xl font-black text-[#d7a847]">
                                            ۱۰
                                        </div>

                                        <div className="mt-2 text-sm font-bold text-[#182449]">
                                            هکتار مساحت مجموعه
                                        </div>
                                    </div>

                                    <div className="rounded-2xl border border-[#e8e6ed] bg-white p-5 shadow-sm">
                                        <div className="text-3xl font-black text-[#d7a847]">
                                            ۳۰۰۰+
                                        </div>

                                        <div className="mt-2 text-sm font-bold text-[#182449]">
                                            شبکه گسترده توزیع و همکاری
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="overflow-hidden rounded-[32px] shadow-[0_30px_80px_rgba(3,43,58,0.16)]">
                                    <img
                                        src="/images/about/apada-dairy-factory.jpg"
                                        alt="کارخانه لبنیات آپادا"
                                        className="h-[520px] w-full object-cover"
                                    />
                                </div>

                                <div className="absolute -bottom-6 -right-6 rounded-2xl border border-white/30 bg-[#032b3a]/90 p-6 text-white shadow-xl backdrop-blur-xl">
                                    <div className="text-3xl font-black text-[#d7a847]">
                                        ۱۳۸۷
                                    </div>

                                    <div className="mt-1 text-sm text-white/70">
                                        آغاز تولید لبنیات
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* STATS */}
                <section className="bg-[#032b3a] py-20">
                    <div className="container-main">

                        <div className="mb-12 max-w-2xl">
              <span className="text-xs font-bold tracking-[0.2em] text-[#d7a847]">
                ZARRING GHAZAL IN NUMBERS
              </span>

                            <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
                                زرین غزال در یک نگاه
                            </h2>
                        </div>

                        <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
                            {companyStats.map((stat) => (
                                <div
                                    key={stat.title}
                                    className="rounded-[24px] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/[0.08]"
                                >
                                    <div className="text-3xl font-black text-[#d7a847] sm:text-4xl">
                                        {stat.value}
                                    </div>

                                    <h3 className="mt-4 text-base font-bold text-white">
                                        {stat.title}
                                    </h3>

                                    <p className="mt-2 text-sm leading-7 text-white/55">
                                        {stat.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                    </div>
                </section>

                {/* FACILITIES */}
                <section
                    id="facilities"
                    className="section-padding"
                >
                    <div className="container-main">

                        <div className="mb-14 max-w-3xl">
                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-[2px] w-12 bg-[#d7a847]" />

                                <span className="text-xs font-bold tracking-[0.2em] text-[#d7a847]">
                  OUR FACILITIES
                </span>
                            </div>

                            <h2 className="text-3xl font-black leading-[1.6] text-[#182449] sm:text-5xl">
                                بخش‌های مختلف
                                <span className="text-[#032b3a]">
                  {" "}
                                    زرین غزال
                </span>
                            </h2>

                            <p className="mt-5 text-base leading-8 text-[#72778a]">
                                بخشی از فعالیت و زیرساخت‌های مجموعه زرین غزال را در
                                شش تصویر و روایت کوتاه مشاهده کنید.
                            </p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">

                            {facilities.map((facility, index) => (
                                <article
                                    key={facility.number}
                                    className={`group overflow-hidden rounded-[30px] border border-[#e8e6ed] bg-white shadow-[0_20px_60px_rgba(16,36,73,0.07)] ${
                                        index === 0 || index === 1
                                            ? "lg:min-h-[620px]"
                                            : ""
                                    }`}
                                >
                                    <div className="relative h-[360px] overflow-hidden">
                                        <img
                                            src={facility.image}
                                            alt={facility.title}
                                            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-[#021d29]/90 via-[#021d29]/20 to-transparent" />

                                        <div className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-[#021d29]/60 text-sm font-black text-[#d7a847] backdrop-blur-md">
                                            {facility.number}
                                        </div>

                                        <div className="absolute bottom-6 right-6 left-6 text-white">
                                            <div className="text-[10px] font-bold tracking-[0.18em] text-[#d7a847]">
                                                {facility.subtitle}
                                            </div>

                                            <h3 className="mt-2 text-2xl font-black">
                                                {facility.title}
                                            </h3>
                                        </div>
                                    </div>

                                    <div className="p-7">
                                        <p className="text-sm leading-8 text-[#72778a]">
                                            {facility.description}
                                        </p>

                                        <div className="mt-6 grid gap-2">
                                            {facility.details.slice(0, 3).map((detail) => (
                                                <div
                                                    key={detail}
                                                    className="flex items-start gap-3 text-sm text-[#182449]"
                                                >
                                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d7a847]" />

                                                    <span className="leading-7">
                            {detail}
                          </span>
                                                </div>
                                            ))}
                                        </div>

                                        <button
                                            type="button"
                                            onClick={() => setSelectedFacility(index)}
                                            className="mt-6 flex w-full items-center justify-center rounded-xl border border-[#d7a847]/40 bg-[#faf7ef] px-5 py-3 text-sm font-bold text-[#032b3a] transition hover:bg-[#d7a847]"
                                        >
                                            مشاهده جزئیات
                                        </button>
                                    </div>
                                </article>
                            ))}

                        </div>
                    </div>
                </section>

                {/* QUALITY */}
                <section className="bg-white py-20">
                    <div className="container-main">

                        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">

                            <div>
                                <div className="mb-5 flex items-center gap-3">
                                    <span className="h-[2px] w-12 bg-[#d7a847]" />

                                    <span className="text-xs font-bold tracking-[0.2em] text-[#d7a847]">
                    QUALITY & STANDARDS
                  </span>
                                </div>

                                <h2 className="text-3xl font-black leading-[1.6] text-[#182449] sm:text-4xl">
                                    کیفیت و
                                    <span className="text-[#032b3a]">
                    {" "}
                                        استاندارد
                  </span>
                                </h2>

                                <p className="mt-5 text-sm leading-8 text-[#72778a]">
                                    بخشی از استانداردها، گواهی‌ها و عناوینی که در
                                    اطلاعات رسمی مجموعه به آن‌ها اشاره شده است.
                                </p>
                            </div>

                            <div className="grid gap-3 sm:grid-cols-2">
                                {qualityItems.map((item, index) => (
                                    <div
                                        key={item}
                                        className="flex items-center gap-4 rounded-2xl border border-[#e8e6ed] bg-[#faf7ef] p-4"
                                    >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#032b3a] text-xs font-bold text-[#d7a847]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                                        <span className="text-sm font-bold text-[#182449]">
                      {item}
                    </span>
                                    </div>
                                ))}
                            </div>

                        </div>

                    </div>
                </section>

                {/* CTA */}
                <section className="bg-[#021d29] py-20">
                    <div className="container-main">
                        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-8 text-center backdrop-blur-xl sm:p-12">

                            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#d7a847]/10 blur-3xl" />
                            <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-[#7660c8]/10 blur-3xl" />

                            <div className="relative z-10">
                <span className="text-xs font-bold tracking-[0.2em] text-[#d7a847]">
                  ZARRING GHAZAL
                </span>

                                <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">
                                    با محصولات و برندهای ما آشنا شوید
                                </h2>

                                <p className="mx-auto mt-4 max-w-2xl text-sm leading-8 text-white/60">
                                    برای مشاهده محصولات، برندها و اطلاعات بیشتر درباره
                                    فعالیت‌های زرین غزال از بخش‌های مختلف سایت استفاده کنید.
                                </p>

                                <div className="mt-8 flex flex-wrap justify-center gap-3">
                                    <Link
                                        href="/products"
                                        className="rounded-xl bg-[#d7a847] px-7 py-3.5 text-sm font-bold text-[#021d29] transition hover:bg-[#f0d58a]"
                                    >
                                        مشاهده محصولات
                                    </Link>

                                    <Link
                                        href="/contact"
                                        className="rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
                                    >
                                        تماس با ما
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

            </main>

            <Footer />

            {/* MODAL */}
            {selected && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-[#021d29]/80 p-4 backdrop-blur-md"
                    onClick={() => setSelectedFacility(null)}
                >
                    <div
                        className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[30px] bg-[#faf7ef] shadow-2xl"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className="relative h-[300px] overflow-hidden sm:h-[420px]">
                            <img
                                src={selected.image}
                                alt={selected.title}
                                className="h-full w-full object-cover"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-[#021d29]/90 via-transparent to-transparent" />

                            <button
                                type="button"
                                onClick={() => setSelectedFacility(null)}
                                className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-[#021d29]/60 text-xl text-white backdrop-blur-md transition hover:bg-[#d7a847] hover:text-[#021d29]"
                                aria-label="بستن"
                            >
                                ×
                            </button>

                            <div className="absolute bottom-7 right-7 left-7 text-white">
                                <div className="text-xs font-bold tracking-[0.2em] text-[#d7a847]">
                                    {selected.subtitle}
                                </div>

                                <h2 className="mt-2 text-2xl font-black sm:text-4xl">
                                    {selected.title}
                                </h2>
                            </div>
                        </div>

                        <div className="p-7 sm:p-10">

                            <p className="text-base leading-9 text-[#72778a]">
                                {selected.description}
                            </p>

                            <div className="mt-8 grid gap-3 sm:grid-cols-2">
                                {selected.details.map((detail) => (
                                    <div
                                        key={detail}
                                        className="flex items-start gap-3 rounded-2xl border border-[#e8e6ed] bg-white p-4"
                                    >
                                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#d7a847]" />

                                        <span className="text-sm leading-7 text-[#182449]">
                      {detail}
                    </span>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </>
    );
}