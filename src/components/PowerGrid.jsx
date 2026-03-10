import { useTranslation } from 'react-i18next'

export default function PowerGrid() {
    const { t } = useTranslation()

    const stats = [
        { value: '20+', label: t('stats.years'), sub: t('stats.yearsSub') },
        { value: '500+', label: t('stats.orgs'), sub: t('stats.orgsSub') },
        { value: '%100', label: t('stats.delivery'), sub: t('stats.deliverySub') },
    ]

    return (
        <section className="relative w-full bg-brutal-black border-y border-brutal-cement/20 py-12 md:py-16" aria-label="İstatistikler">
            {/* Brutalist Grid Background */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-20">
                <div className="w-full h-full" style={{
                    backgroundImage: 'linear-gradient(rgba(235, 235, 235, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(235, 235, 235, 0.1) 1px, transparent 1px)',
                    backgroundSize: '50px 50px'
                }}></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-8">
                <div className="grid grid-cols-1 xl:grid-cols-5 gap-8 xl:gap-12 items-stretch">
                    {/* Left Side: Stats */}
                    <div className="xl:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-px bg-brutal-cement/20 brutal-border border border-brutal-cement/20">
                        {stats.map((stat, i) => (
                            <div key={i} className="bg-brutal-black p-6 md:p-8 flex flex-col justify-center items-start group hover:bg-brutal-red/5 transition-colors duration-500">
                                <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-brutal-red mb-2 transition-transform duration-300 group-hover:scale-110 origin-left">
                                    {stat.value}
                                </h3>
                                <h4 className="text-base md:text-lg font-bold tracking-tight mb-2 text-white">
                                    {stat.label}
                                </h4>
                                <p className="font-mono text-xs md:text-sm tracking-widest text-brutal-cement/60">
                                    {stat.sub}
                                </p>
                            </div>
                        ))}
                    </div>
                    {/* Right Side: Image */}
                    <div className="xl:col-span-2 relative group overflow-hidden border border-brutal-cement/20 min-h-[300px]">
                        <img
                            src="/gallery/punto-organizasyon-etkinlik-sahne-ses-isik-sistemleri-kiralama-izmir-24.jpeg"
                            alt="Punto Organizasyon dev konser ve festival sahne kurulumundan bir kesit"
                            className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                        />
                        <div className="absolute inset-0 border border-brutal-red opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
