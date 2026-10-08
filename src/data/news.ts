export type NewsItem = {
    id: number;
    slug: string;
    title: string;
    category: string;
    date: string;
    time: string;

    // عکس اصلی که در کارت خبر نمایش داده می‌شود
    image: string;

    // تمام عکس‌های داخل صفحه جزئیات خبر
    gallery: string[];

    excerpt: string;
    content: string;

    officialUrl: string;
};

export const news: NewsItem[] = [
    {
        id: 1,
        slug: "exporter-1403",
        title: "صادر کننده نمونه 1403",
        category: "افتخارات",
        date: "1403/12/19",
        time: "13:04:09",
        image: "/images/news/exporter-1403.jpg",
        gallery: ["/images/news/exporter-1403.jpg"],
        excerpt:
            "در همایش روز ملی استاندارد، شرکت زرین غزال بار دیگر مفتخر به دریافت عنوان صادر کننده نمونه در سال ۱۴۰۳ گردید.",
        content:
            "در همایش روز ملی استاندارد، شرکت زرین غزال بار دیگر مفتخر به دریافت عنوان صادر کننده نمونه در سال ۱۴۰۳ گردید. این مهم با تلاش شبانه‌روزی تمامی همکارانمان در خانواده بزرگ زرین غزال میسر شده است.",
        officialUrl:
            "https://zarringhazal.com/fa/posts/10022/%D8%B5%D8%A7%D8%AF%D8%B1-%DA%A9%D9%86%D9%86%D8%AF%D9%87-%D9%86%D9%85%D9%88%D9%86%D9%87-1403",
    },

    {
        id: 2,
        slug: "worthy-unit-1403",
        title: "کسب عنوان واحد شایسته تقدیر 1403",
        category: "افتخارات",
        date: "1403/09/17",
        time: "13:26:41",
        image: "/images/news/worthy-unit-1403.jpg",
        gallery: [
            "/images/news/worthy-unit-1403-2.jpg",
            "/images/news/worthy-unit-1403-3.jpg",
            "/images/news/worthy-unit-1403-4.jpg",
        ],
        excerpt:
            "شرکت زرین غزال (دایتی و آپادا) برای چندمین سال پی‌درپی مفتخر به دریافت عنوان واحد تولیدی شایسته تقدیر گردید.",
        content:
            "در همایشی که در روز بیست و هفتم مهر ماه به مناسبت روز جهانی استاندارد برگزار شد، شرکت زرین غزال (دایتی و آپادا) برای چندمین سال پی‌درپی مفتخر به دریافت عنوان واحد تولیدی شایسته تقدیر گردید.",
        officialUrl:
            "https://zarringhazal.com/fa/posts/10021/%DA%A9%D8%B3%D8%A8-%D8%B9%D9%86%D9%88%D8%A7%D9%86-%D9%88%D8%A7%D8%AD%D8%AF-%D8%B4%D8%A7%DB%8C%D8%B3%D8%AA%D9%87-%D8%AA%D9%82%D8%AF%DB%8C%D8%B1-1403",
    },

    {
        id: 3,
        slug: "worthy-unit-1402",
        title: "کسب عنوان واحد شایسته تقدیر 1402",
        category: "افتخارات",
        date: "1402/07/29",
        time: "15:07:40",
        image: "/images/news/worthy-unit-1402.jpg",
        gallery: [
            "/images/news/worthy-unit-1402-2.jpg",
            "/images/news/worthy-unit-1402-3.jpg",
            "/images/news/worthy-unit-1402-4.jpg",
            "/images/news/worthy-unit-1402-5.jpg",
        ],
        excerpt:
            "شرکت زرین غزال (دایتی و آپادا) همچون سال‌های پیشین مفتخر به دریافت عنوان واحد تولیدی شایسته تقدیر گردید.",
        content:
            "در همایشی به مناسبت روز جهانی استاندارد، شرکت زرین غزال (دایتی و آپادا) همچون سال‌های پیشین مفتخر به دریافت عنوان واحد تولیدی شایسته تقدیر گردید. همچنین مدیران شرکت زرین غزال نیز موفق به دریافت عنوان مدیر کنترل کیفی نمونه استانی شدند و برگ زرین دیگری به افتخارات شرکت افزودند.",
        officialUrl:
            "https://zarringhazal.com/fa/posts/10020/%DA%A9%D8%B3%D8%A8-%D8%B9%D9%86%D9%88%D8%A7%D9%86-%D9%88%D8%A7%D8%AD%D8%AF-%D8%B4%D8%A7%DB%8C%D8%B3%D8%AA%D9%87-%D8%AA%D9%82%D8%AF%DB%8C%D8%B1-1402",
    },

    {
        id: 4,
        slug: "food-industry-unit-1402",
        title: "واحد نمونه صنایع غذایی 1402",
        category: "افتخارات",
        date: "1402/04/21",
        time: "09:54:08",
        image: "/images/news/food-industry-unit-1402.jpg",
        gallery: ["/images/news/food-industry-unit-1402.jpg"],
        excerpt:
            "شرکت زرین غزال (برند دایتی و آپادا) موفق به کسب عنوان واحد نمونه صنایع غذایی در سال ۱۴۰۲ گردید.",
        content:
            "در همایشی که به مناسبت روز جهانی ایمنی غذا در تاریخ ۲۱ تیر ماه ۱۴۰۲ در شیراز برگزار شد، شرکت زرین غزال (برند دایتی و آپادا) موفق به کسب عنوان واحد نمونه صنایع غذایی گردید.",
        officialUrl:
            "https://zarringhazal.com/fa/posts/10018/%D9%88%D8%A7%D8%AD%D8%AF-%D9%86%D9%85%D9%88%D9%86%D9%87-%D8%B5%D9%86%D8%A7%DB%8C%DB%8C-1402",
    },

    {
        id: 5,
        slug: "top-distribution-unit",
        title: "کسب عنوان واحد برتر پخش",
        category: "افتخارات",
        date: "1402/07/05",
        time: "08:27:31",
        image: "/images/news/top-distribution-unit.jpg",
        gallery: [
            "/images/news/top-distribution-unit-2.jpg",
            "/images/news/top-distribution-unit-3.jpg",
        ],
        excerpt:
            "شرکت زرین غزال (دایتی) مفتخر به دریافت لوح تقدیر واحد برتر صنعت پخش جنوب کشور گردید.",
        content:
            "در چهارمین سمینار تخصصی صنعت پخش جنوب کشور که در پنجم مهر ماه ۱۴۰۲ برگزار شد، شرکت زرین غزال (دایتی) مفتخر به دریافت لوح تقدیر واحد برتر صنعت پخش جنوب کشور گردید. امید است به یاری خداوند متعال و همراهی کما فی السابق خانواده بزرگ زرین غزال بتوانیم موجب خشنودی شما عزیزان گردیم.",
        officialUrl:
            "https://zarringhazal.com/fa/posts/10019/%D9%83%D8%B3%D8%A8-%D8%B9%D9%86%D9%88%D8%A7%D9%86-%D9%88%D8%A7%D8%AD%D8%AF-%D8%A8%D8%B1%D8%AA%D8%B1-%D9%BE%D8%AE%D8%B4",
    },
];