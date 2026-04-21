import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useTranslation } from 'react-i18next'

export default function FeaturesList() {
    const { t } = useTranslation()
    const containerRef = useRef(null)

    const features = [
        t('features.f1'),
        t('features.f2'),
        t('features.f3'),
        t('features.f4'),
        t('features.f5'),
        t('features.f6')
    ]

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo('.feature-item',
                { opacity: 0, x: -50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 80%'
                    }
                }
            )
        }, containerRef)
        return () => ctx.revert()
    }, [])

    return (
        <section className="py-12 md:py-16 bg-brutal-black relative border-b border-brutal-cement/20" ref={containerRef} aria-labelledby="features-heading">
            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 flex flex-col items-center">

                <ul className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
                    {features.map((feature, idx) => (
                        <li key={idx} className="feature-item flex items-start gap-4 p-6 bg-[#1A1A1A] shadow-sm border border-brutal-cement/10 hover:border-brutal-red/40 transition-colors">
                            <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-brutal-red/10 border border-brutal-red/30" aria-hidden="true">
                                <span className="text-brutal-red font-bold text-lg leading-none mt-1">✓</span>
                            </div>
                            <span className="font-mono text-brutal-cement/90 text-sm xl:text-base leading-snug uppercase tracking-wide">
                                {feature}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
