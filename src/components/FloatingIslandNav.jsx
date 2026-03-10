import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function FloatingIslandNav() {
    const { t, i18n } = useTranslation()
    const navRef = useRef(null)

    useEffect(() => {
        let ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: document.body,
                start: 'top top',
                end: '+=500',
                onUpdate: (self) => {
                    const progress = self.progress
                    gsap.to(navRef.current, {
                        width: gsap.utils.interpolate('100%', '80%', progress),
                        paddingTop: gsap.utils.interpolate('1rem', '0.5rem', progress),
                        paddingBottom: gsap.utils.interpolate('1rem', '0.5rem', progress),
                        backgroundColor: `rgba(17, 17, 17, ${gsap.utils.interpolate(0.7, 0.95, progress)})`,
                        ease: 'power3.out',
                        duration: 0.3,
                        overwrite: 'auto'
                    })
                }
            })
        })

        return () => ctx.revert()
    }, [])

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
    }

    const langs = ['tr', 'en', 'de', 'ku']

    return (
        <div className="fixed top-2 md:top-4 left-0 right-0 z-40 flex justify-center pointer-events-none px-4 md:px-8">
            <nav
                ref={navRef}
                className="w-full max-w-7xl backdrop-blur-3xl px-4 md:px-8 py-3 rounded-none border border-brutal-cement/10 flex justify-between items-center pointer-events-auto"
            >
                <div className="flex items-center gap-4">
                    <Link to="/">
                        <img src="/punto-logo-new.png" alt="Punto Logo" className="h-8 md:h-10 lg:h-12 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-transform duration-300 hover:scale-105" onError={(e) => e.currentTarget.style.display = 'none'} />
                    </Link>
                </div>

                <div className="flex gap-4 md:gap-8 text-xs font-bold tracking-widest uppercase items-center">
                    <Link to="/" className="hover:text-brutal-red transition-colors duration-300 hidden md:block">{t('nav.systems')}</Link>
                    <Link to="/gallery" className="hover:text-brutal-red transition-colors duration-300 hidden md:block">{t('nav.projects')}</Link>
                    <a href="/#contact" className="hover:text-brutal-red transition-colors duration-300 hidden md:block">{t('nav.contact')}</a>

                    <div className="flex gap-2 border-l border-brutal-cement/20 pl-4 md:pl-8">
                        {langs.map(l => (
                            <button
                                key={l}
                                onClick={() => changeLanguage(l)}
                                className={`transition-colors duration-300 ${i18n.language.startsWith(l) ? 'text-brutal-red font-black border-b border-brutal-red' : 'text-brutal-cement hover:text-white'}`}
                            >
                                {l.toUpperCase()}
                            </button>
                        ))}
                    </div>
                </div>
            </nav>
        </div>
    )
}
