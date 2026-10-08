import { Suspense } from "react";
import ContactForm from "./ContactForm";

function ContactLoading() {
    return (
        <main
            dir="rtl"
            className="min-h-screen bg-[#021d28] text-white"
        >
            <div className="flex min-h-screen items-center justify-center">
                <div className="flex flex-col items-center gap-5">
                    <span className="h-10 w-10 animate-spin rounded-full border-2 border-white/20 border-t-[#d7a847]" />

                    <span className="text-sm text-white/50">
                        در حال بارگذاری...
                    </span>
                </div>
            </div>
        </main>
    );
}

export default function ContactPage() {
    return (
        <Suspense fallback={<ContactLoading />}>
            <ContactForm />
        </Suspense>
    );
}