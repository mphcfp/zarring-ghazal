export type Brand = {
    id: number;
    slug: string;
    name: string;
    englishName: string;
    description: string;
};

export const brands: Brand[] = [
    {
        id: 1,
        slug: "daity",
        name: "دایتی",
        englishName: "DAITY",
        description:
            "برندی شناخته‌شده با مجموعه‌ای متنوع از محصولات بستنی و دسر.",
    },
    {
        id: 2,
        slug: "apada",
        name: "آپادا",
        englishName: "APADA",
        description:
            "برندی در حوزه محصولات لبنی با تمرکز بر کیفیت، سلامت و زنجیره سرد.",
    },
    {
        id: 3,
        slug: "zarring-ghazal",
        name: "زرین غزال",
        englishName: "ZARRING GHAZAL",
        description:
            "گروه صنعتی زرین غزال با تکیه بر تجربه، فناوری، کیفیت و توسعه پایدار.",
    },
];