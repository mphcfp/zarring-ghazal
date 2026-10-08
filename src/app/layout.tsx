import type { Metadata } from "next";
import "./globals.css";
import CrispChat from "@/components/chat/CrispChat";
import ChatButton from "@/components/chat/ChatButton";


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
        <html
            lang="fa"
            dir="rtl"
            data-scroll-behavior="smooth"
        >
        <body>
        {children}
        <CrispChat />
        <ChatButton />
        </body>
        </html>
    );
}