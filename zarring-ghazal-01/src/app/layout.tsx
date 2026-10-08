import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "زرین غزال | طعم اصالت، سلامت فردا",
    description:
        "گروه صنعتی زرین غزال؛ تولیدکننده محصولات لبنی با تمرکز بر کیفیت، سلامت و نوآوری.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fa" dir="rtl">
        <body>{children}</body>
        </html>
    );
}