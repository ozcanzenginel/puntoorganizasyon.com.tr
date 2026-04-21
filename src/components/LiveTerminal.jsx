import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function LiveTerminal() {
    const scrollRef = useRef(null)

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.to(scrollRef.current, {
                y: -500,
                ease: 'none',
                scrollTrigger: {
                    trigger: scrollRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1.5
                }
            })
        })

        return () => ctx.revert()
    }, [])

    const logs = Array.from({ length: 50 }).map((_, i) => {
        const actions = ["[DEPLOY] Main Stage Assembly", "[SYNC] FOH Control Active", "[LOAD] LED Panels Online", "[VERIFY] Safety Protocol Confirmed", "[RUNNING] Live Event Stable"]
        return `${new Date().toISOString().split('T')[1].slice(0, 12)} ${actions[i % actions.length]}`
    })

    return (
        <section className="bg-brutal-black py-24 border-t border-brutal-cement/20 relative overflow-hidden h-[400px]">
            <div className="absolute inset-0 bg-gradient-to-b from-brutal-black via-transparent to-brutal-black z-10 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 relative opacity-50">
                <div ref={scrollRef} className="font-mono text-xs md:text-sm tracking-widest text-[#EBEBEB]/70 whitespace-pre-line leading-loose">
                    {logs.join('\n')}
                </div>
            </div>
        </section>
    )
}
