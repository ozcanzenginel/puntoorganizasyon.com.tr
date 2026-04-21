import { useEffect } from 'react'
import gsap from 'gsap'
import { useTranslation } from 'react-i18next'

export default function ServicesDetail() {
    const { t } = useTranslation()

    const services = [
        {
            title: t('services.audioTitle'),
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18V5l12-2v13"></path>
                    <circle cx="6" cy="18" r="3"></circle>
                    <circle cx="18" cy="16" r="3"></circle>
                </svg>
            ),
            items: [
                t('services.audio1'),
                t('services.audio2'),
                t('services.audio3'),
                t('services.audio4'),
                t('services.audio5')
            ]
        },
        {
            title: t('services.lightTitle'),
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.9 1.3 1.5 1.5 2.5"></path>
                    <path d="M9 18h6"></path>
                    <path d="M10 22h4"></path>
                </svg>
            ),
            items: [
                t('services.light1'),
                t('services.light2'),
                t('services.light3'),
                t('services.light4')
            ]
        },
        {
            title: t('services.stageTitle'),
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="9" width="16" height="10" rx="2" ry="2"></rect>
                    <path d="M12 9V2"></path>
                    <path d="m8 5 4-3 4 3"></path>
                </svg>
            ),
            items: [
                t('services.stage1'),
                t('services.stage2'),
                t('services.stage3'),
                t('services.stage4')
            ]
        }
    ]

    useEffect(() => {
        const cards = document.querySelectorAll('.service-detail-card')
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect()
                const x = e.clientX - rect.left - rect.width / 2
                const y = e.clientY - rect.top - rect.height / 2

                gsap.to(card.querySelector('.card-inner'), {
                    x: x * 0.05,
                    y: y * 0.05,
                    duration: 0.5,
                    ease: 'power3.out'
                })
            })

            card.addEventListener('mouseleave', () => {
                gsap.to(card.querySelector('.card-inner'), {
                    x: 0,
                    y: 0,
                    duration: 0.5,
                    ease: 'power3.out'
                })
            })
        })
    }, [])

    return (
        <section className="py-16 md:py-20 bg-[#111] relative overflow-hidden border-b border-brutal-cement/20" aria-labelledby="services-heading">
            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {services.map((service, idx) => (
                        <article
                            key={idx}
                            className="service-detail-card group relative bg-[#1A1A1A] border border-brutal-cement/10 p-8 hover:border-brutal-red/50 transition-colors duration-300 h-full flex flex-col shadow-sm"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-brutal-red transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>

                            <div className="card-inner flex flex-col h-full z-10 relative">
                                <div className="text-brutal-cement mb-6 opacity-80 group-hover:opacity-100 group-hover:text-brutal-red transition-all duration-300 pointer-events-none">{service.icon}</div>
                                <h3 className="text-lg md:text-xl font-bold tracking-tight text-white mb-6 pr-4 leading-tight pointer-events-none">
                                    {service.title}
                                </h3>

                                <ul className="flex-grow flex flex-col gap-4 pointer-events-none mb-8">
                                    {service.items.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="text-brutal-red font-mono mt-1" aria-hidden="true">]</span>
                                            <span className="font-mono text-sm text-brutal-cement/80 group-hover:text-brutal-cement transition-colors">{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href="tel:+905070670029"
                                    className="mt-auto inline-flex items-center gap-2 font-mono text-xs font-bold tracking-widest text-brutal-red hover:text-white transition-colors duration-300 group/btn"
                                >
                                    <span className="border-b border-brutal-red/30 group-hover/btn:border-white pb-1">{t('contact.btn')}</span>
                                    <span className="text-lg">→</span>
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
