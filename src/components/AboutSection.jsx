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
            <div className="max-w-7xl mx-auto px-8 relative z-10" ref={textRef}>



                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div className="border-l-2 border-brutal-red pl-8">
                        <h3 className="text-xl md:text-3xl font-black tracking-tighter mb-4 text-brutal-cement">{t('about.visionTitle')}</h3>
                        <p className="font-mono text-brutal-cement/70 leading-relaxed text-xs md:text-sm">
                            {t('about.visionDesc')}
                        </p>
                    </div>

                    <div className="border-l-2 border-brutal-red pl-8">
                        <h3 className="text-xl md:text-3xl font-black tracking-tighter mb-4 text-brutal-cement">{t('about.missionTitle')}</h3>
                        <p className="font-mono text-brutal-cement/70 leading-relaxed text-xs md:text-sm">
                            {t('about.missionDesc')}
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}
