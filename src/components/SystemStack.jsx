import { useEffect } from 'react'
import gsap from 'gsap'
import { useTranslation } from 'react-i18next'

export default function SystemStack() {
    const { t } = useTranslation()

    const cards = [
        { title: t('systemStack.c1'), icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22V2"></path><path d="M4 12H2"></path><path d="M4 7H2"></path><path d="M4 17H2"></path><path d="M14 22V2"></path><path d="M14 12h-2"></path><path d="M14 7h-2"></path><path d="M14 17h-2"></path></svg> },
        { title: t('systemStack.c2'), icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><path d="M8 21h8"></path><path d="M12 17v4"></path></svg> },
        { title: t('systemStack.c3'), icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m2 2 20 20"></path><path d="M22 2 2 22"></path></svg> },
        { title: t('systemStack.c4'), icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg> },
        { title: t('systemStack.c5'), icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> }
    ]

    useEffect(() => {
        // Add magnetic hover to cards
        const cardElements = document.querySelectorAll('.stack-card')
        cardElements.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect()
                const x = e.clientX - rect.left - rect.width / 2
                const y = e.clientY - rect.top - rect.height / 2

                gsap.to(card.querySelector('.card-content'), {
                    x: x * 0.15,
                    y: y * 0.15,
                    duration: 0.5,
                    ease: 'power3.out'
                })
            })

            card.addEventListener('mouseleave', () => {
                gsap.to(card.querySelector('.card-content'), {
                    x: 0,
                    y: 0,
                    duration: 0.5,
                    ease: 'power3.out'
                })
            })
        })
    }, [])

    return (
        <section className="py-32 bg-brutal-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-8 relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-16 text-brutal-cement tracking-tight">
                    {t('systemStack.title1')} <span className="text-brutal-red">{t('systemStack.title2')}</span>
                </h2>

                <div className="flex flex-col gap-4">
                    {cards.map((card, i) => (
                        <div
                            key={i}
                            className="stack-card group relative bg-[#1A1A1A] border border-brutal-cement/10 p-8 cursor-pointer overflow-hidden transition-all duration-300 hover:border-brutal-red/50 hover:shadow-[0_0_30px_rgba(229,62,62,0.1)] hover:shadow-brutal-red/20"
                        >
                            <div className="absolute inset-0 bg-brutal-red/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                            <div className="card-content relative z-10 flex items-center justify-between pointer-events-none">
                                <div className="flex items-center gap-6">
                                    <div className="text-brutal-cement opacity-50 group-hover:opacity-100 group-hover:text-white transition-all duration-300">
                                        {card.icon}
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-brutal-cement group-hover:text-white transition-colors duration-300">
                                        {card.title}
                                    </h3>
                                </div>
                                <span className="font-mono text-sm text-brutal-red opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
                                    {t('systemStack.init')}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
