import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function FloatingIslandNav() {
    const { t, i18n } = useTranslation()
    const navRef = useRef(null)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
                className="w-full max-w-7xl backdrop-blur-3xl px-4 md:px-8 py-3 rounded-none border border-brutal-cement/10 flex flex-col md:flex-row md:justify-between md:items-center pointer-events-auto"
            >
                <div className="flex justify-between items-center w-full md:w-auto">
                    <Link to="/">
                        <img src="/punto-logo-new.png" alt="Punto Logo" className="h-8 md:h-10 lg:h-12 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-transform duration-300 hover:scale-105" onError={(e) => e.currentTarget.style.display = 'none'} />
                    </Link>
                    <button 
                        className="md:hidden text-white hover:text-brutal-red transition-colors p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            {isMobileMenuOpen ? (
                                <>
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </>
                            ) : (
                                <>
                                    <line x1="3" y1="12" x2="21" y2="12"></line>
                                    <line x1="3" y1="6" x2="21" y2="6"></line>
                                    <line x1="3" y1="18" x2="21" y2="18"></line>
                                </>
                            )}
                        </svg>
                    </button>
                </div>

                <div className={`${isMobileMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row gap-4 md:gap-8 text-xs font-bold tracking-widest uppercase items-center mt-4 md:mt-0`}>
                    <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brutal-red transition-colors duration-300 w-full md:w-auto text-center py-2 md:py-0 border-b md:border-b-0 border-brutal-cement/10">{t('nav.home')}</Link>
                    <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brutal-red transition-colors duration-300 w-full md:w-auto text-center py-2 md:py-0 border-b md:border-b-0 border-brutal-cement/10">{t('nav.systems')}</Link>
                    <Link to="/gallery" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brutal-red transition-colors duration-300 w-full md:w-auto text-center py-2 md:py-0 border-b md:border-b-0 border-brutal-cement/10">{t('nav.projects')}</Link>
                    <a 
                        href="/#contact" 
                        onClick={(e) => {
                            setIsMobileMenuOpen(false);
                            if (window.location.pathname === '/') {
                                e.preventDefault();
                                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                        className="hover:text-brutal-red transition-colors duration-300 w-full md:w-auto text-center py-2 md:py-0 border-b md:border-b-0 border-brutal-cement/10"
                    >
                        {t('nav.contact')}
                    </a>

                    <div className="flex gap-4 border-t md:border-t-0 md:border-l border-brutal-cement/20 pt-4 md:pt-0 pl-0 md:pl-8 justify-center w-full md:w-auto pb-2 md:pb-0">
                        {langs.map(l => (
                            <button
                                key={l}
                                onClick={() => {
                                    changeLanguage(l);
                                    setIsMobileMenuOpen(false);
                                }}
                                className={`transition-colors duration-300 ${i18n.language?.startsWith(l) ? 'text-brutal-red font-black border-b border-brutal-red' : 'text-brutal-cement hover:text-white'}`}
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
