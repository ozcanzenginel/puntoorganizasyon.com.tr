import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useTranslation } from 'react-i18next'

export default function HeroArea() {
    const { t } = useTranslation()
    const heroRef = useRef(null)
    const bgRef = useRef(null)
    const title1Ref = useRef(null)
    const title2Ref = useRef(null)

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Intro Animation (Swapped delays so big title comes first)
            gsap.fromTo(title2Ref.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.5, ease: 'power4.out', delay: 0.2 }
            )
            gsap.fromTo(title1Ref.current.children,
                { scale: 0.9, opacity: 0 },
                { scale: 1, opacity: 1, duration: 1, stagger: 0.1, ease: 'power4.out', delay: 0.6 }
            )

            // Scroll Animation
            ScrollTrigger.create({
                trigger: heroRef.current,
                start: 'top top',
                end: 'bottom top',
                scrub: true,
                animation: gsap.timeline()
                    .to(bgRef.current, {
                        scale: 1.05
                    }, 0)
                    .to(title2Ref.current, {
                        letterSpacing: '-0.08em',
                        fontWeight: 900,
                        y: -50,
                        opacity: 0,
                        color: '#E53E3E'
                    }, 0)
            })
        }, heroRef)

        return () => ctx.revert()
    }, [])

    return (
        <section className="w-full bg-brutal-black pt-[100px] md:pt-[130px] pb-10 px-4 md:px-8 border-b border-brutal-cement/20">
            <div ref={heroRef} className="relative w-full h-[50vh] md:h-[60vh] max-w-7xl mx-auto rounded-none flex flex-col items-center justify-center overflow-hidden border border-brutal-cement/10 shadow-2xl">
            {/* Static Background Image */}
            <div
                ref={bgRef}
                className="absolute inset-0 z-0 bg-cover bg-center"
                aria-label="Punto Organizasyon dev sahne ve konser sistemleri arka plan"
                role="img"
                style={{
                    backgroundImage: 'url("/hero/1.jpg")',
                    transform: 'scale(1)'
                }}
            >
                {/* Overlay reduced for better clarity while keeping text readable */}
                <div className="absolute inset-0 bg-brutal-black/20 z-10"></div>
            </div>

            {/* Dynamic Spotlight / Glowing Orbs Removed - causing blur perception */}

            <div className="relative z-10 flex flex-col items-center text-center px-4 w-full">
                <h1
                    ref={title2Ref}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] leading-none font-black tracking-tight text-brutal-cement transition-all w-full mb-4 md:mb-6"
                    style={{ textShadow: '0 4px 12px rgba(0,0,0,0.5)' }}
                >
                    {t('hero.title1')}<br />{t('hero.title2')}
                </h1>
                <h2
                    ref={title1Ref}
                    className="text-xs md:text-sm lg:text-base font-mono font-bold tracking-widest text-brutal-cement uppercase bg-brutal-black/30 backdrop-blur-sm py-2 px-4 inline-block mb-10"
                >
                    <span className="inline-block mx-1 md:mx-4">{t('hero.audio')}</span>
                    <span className="inline-block mx-1 md:mx-4 text-brutal-red opacity-80">•</span>
                    <span className="inline-block mx-1 md:mx-4">{t('hero.light')}</span>
                    <span className="inline-block mx-1 md:mx-4 text-brutal-red opacity-80">•</span>
                    <span className="inline-block mx-1 md:mx-4">{t('hero.stage')}</span>
                    <span className="inline-block mx-1 md:mx-4 text-brutal-red opacity-80">•</span>
                    <span className="inline-block mx-1 md:mx-4">{t('hero.visual')}</span>
                </h2>

            </div>
            </div>
        </section>
    )
}
