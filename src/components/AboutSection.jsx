import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useTranslation } from 'react-i18next'

export default function AboutSection() {
    const { t } = useTranslation()
    const sectionRef = useRef(null)
    const textRef = useRef(null)

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo(textRef.current.children,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 70%',
                    }
                }
            )
        }, sectionRef)
        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} id="about" aria-label="Hakkımızda" className="py-16 md:py-20 bg-brutal-black border-y border-brutal-cement/20 relative">
            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10" ref={textRef}>

                {/* HAKKIMIZDA (About Us) Section */}
                <div className="mb-16 md:mb-24 text-center md:text-left max-w-4xl mx-auto md:mx-0">
                    <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6 text-white uppercase">{t('about.title')}</h2>
                    <div className="font-mono text-brutal-cement/80 leading-relaxed text-sm md:text-base space-y-4">
                        <p>{t('about.desc1')}</p>
                        <p>{t('about.desc2')}</p>
                        <p>{t('about.desc3')}</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                    <div className="border-l-2 border-brutal-red pl-6 md:pl-8">
                        <h3 className="text-xl md:text-3xl font-black tracking-tighter mb-4 text-brutal-cement uppercase">{t('about.visionTitle')}</h3>
                        <div className="font-mono text-brutal-cement/70 leading-relaxed text-xs md:text-sm space-y-3">
                            <p>{t('about.visionDesc1')}</p>
                            <p>{t('about.visionDesc2')}</p>
                        </div>
                    </div>

                    <div className="border-l-2 border-brutal-red pl-6 md:pl-8">
                        <h3 className="text-xl md:text-3xl font-black tracking-tighter mb-4 text-brutal-cement uppercase">{t('about.missionTitle')}</h3>
                        <div className="font-mono text-brutal-cement/70 leading-relaxed text-xs md:text-sm space-y-3">
                            <p>{t('about.missionDesc1')}</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
