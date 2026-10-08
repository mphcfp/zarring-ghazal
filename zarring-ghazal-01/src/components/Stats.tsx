const stats = [
    {
        value: "40+",
        label: "سال تجربه",
        description: "تجربه در صنعت",
    },
    {
        value: "500+",
        label: "محصول متنوع",
        description: "محصول و فرآورده",
    },
    {
        value: "ISO",
        label: "استانداردهای بین‌المللی",
        description: "کنترل و تضمین کیفیت",
    },
    {
        value: "500+",
        label: "نیروی متخصص",
        description: "همراه خانواده زرین غزال",
    },
];

export default function Stats() {
    return (
        <section className="relative overflow-hidden bg-[#021d29] py-20">
            {/* Background */}
            <div className="pointer-events-none absolute inset-0 opacity-30">
                <div className="absolute right-[10%] top-0 h-64 w-64 rounded-full bg-[#d7a847]/10 blur-[100px]" />

                <div className="absolute bottom-0 left-[10%] h-64 w-64 rounded-full bg-[#7660c8]/10 blur-[100px]" />
            </div>

            <div className="container-main relative">
                <div className="grid grid-cols-1 overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat, index) => (
                        <div
                            key={stat.label}
                            className={`group relative p-8 text-center transition duration-300 hover:bg-white/[0.05] ${
                                index !== stats.length - 1
                                    ? "border-b border-white/10 sm:border-l lg:border-b-0"
                                    : ""
                            }`}
                        >
                            <div className="text-4xl font-black text-[#d7a847] md:text-5xl">
                                {stat.value}
                            </div>

                            <h3 className="mt-4 text-base font-bold text-white">
                                {stat.label}
                            </h3>

                            <p className="mt-2 text-xs text-white/40">
                                {stat.description}
                            </p>

                            <div className="absolute bottom-0 right-1/2 h-[2px] w-0 translate-x-1/2 bg-[#d7a847] transition-all duration-500 group-hover:w-16" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}