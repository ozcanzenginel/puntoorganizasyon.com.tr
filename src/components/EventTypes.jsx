import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useTranslation } from 'react-i18next'

export default function EventTypes() {
    const { t } = useTranslation()
    const scrollRef = useRef(null)

    // Double the array for seamless marquee feel
    const baseEvents = t('events', { returnObjects: true }) || []
    const events = [...baseEvents, ...baseEvents]

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Continuous Marquee
            gsap.to(scrollRef.current, {
                xPercent: -50,
                repeat: -1,
                duration: 20,
                ease: 'none',
            })
        })
        return () => ctx.revert()
    }, [])

    return (
        <section className="py-16 bg-brutal-red relative border-y border-brutal-black overflow-hidden flex flex-col justify-center">
            <div className="absolute inset-0 bg-brutal-black/20 mix-blend-multiply pointer-events-none"></div>

            <div className="flex whitespace-nowrap" ref={scrollRef}>
                {events.map((evt, i) => (
                    <div key={i} className="flex items-center">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#111] tracking-tight uppercase mx-8 select-none hover:text-white transition-colors duration-300">
                            {evt}
                        </h2>
                        <div className="w-4 h-4 rounded-full bg-[#111] opacity-50"></div>
                    </div>
                ))}
            </div>
        </section>
    )
}
