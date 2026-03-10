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

    const orb1Ref = useRef(null)
    const orb2Ref = useRef(null)
    const orb3Ref = useRef(null)

    const heroImages = [
        '/hero/1.jpg',
        '/hero/2.jpg',
        '/hero/3.jpg',
        '/hero/4.jpg',
        '/hero/5.jpg'
    ]
    const [currentImg, setCurrentImg] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImg(prev => (prev + 1) % heroImages.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [])

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

            // Dynamic Glowing Orbs Animation (Spotlight effect)
            const moveOrb = (orb, xRange, yRange, dur) => {
                gsap.to(orb, {
                    x: `random(-${xRange}, ${xRange})`,
                    y: `random(-${yRange}, ${yRange})`,
                    duration: `random(${dur - 2}, ${dur + 2})`,
                    repeat: -1,
                    yoyo: true,
                    ease: 'sine.inOut',
                    onComplete: () => moveOrb(orb, xRange, yRange, dur) // Keep generating new random paths
                })
            }

            if (orb1Ref.current) moveOrb(orb1Ref.current, 200, 150, 8)
            if (orb2Ref.current) moveOrb(orb2Ref.current, 150, 200, 10)
            if (orb3Ref.current) moveOrb(orb3Ref.current, 300, 100, 12)

            // Scroll Animation
            ScrollTrigger.create({
                trigger: heroRef.current,
                start: 'top top',
                end: 'bottom top',
                scrub: true,
                animation: gsap.timeline()
                    .to(bgRef.current, {
                        filter: 'blur(0px) grayscale(0%)', // goes to full color/focus
                        scale: 1.05
                    }, 0)
                    .to(title2Ref.current, {
                        letterSpacing: '-0.08em',
                        fontWeight: 900,
                        y: -50,
                        opacity: 0,
                        color: '#E53E3E'
                    }, 0)
                    .to([orb1Ref.current, orb2Ref.current, orb3Ref.current], {
                        opacity: 0,
                        scale: 0.5,
                        duration: 1
                    }, 0)
            })
        }, heroRef)

        return () => ctx.revert()
    }, [])

    return (
        <section className="w-full bg-brutal-black pt-[100px] md:pt-[130px] pb-10 px-4 md:px-8 border-b border-brutal-cement/20">
            <div ref={heroRef} className="relative w-full h-[50vh] md:h-[60vh] max-w-7xl mx-auto rounded-none flex flex-col items-center justify-center overflow-hidden border border-brutal-cement/10 shadow-2xl">
            {/* Background Stage Image Slider */}
            <div
                ref={bgRef}
                className="absolute inset-0 z-0"
                aria-label="Punto Organizasyon dev sahne ve konser sistemleri arka plan kayan görselleri"
                role="img"
                style={{
                    filter: 'blur(10px) grayscale(100%)', // Starts blurred and black/white
                    transform: 'scale(1.1)'
                }}
            >
                {heroImages.map((img, i) => (
                    <div
                        key={img}
                        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${i === currentImg ? 'opacity-100' : 'opacity-0'}`}
                        style={{ backgroundImage: `url("${img}")` }}
                    />
                ))}
                <div className="absolute inset-0 bg-brutal-black/60 mix-blend-multiply z-10"></div>
            </div>

            {/* Dynamic Spotlight / Glowing Orbs */}
            <div className="absolute inset-0 z-[2] overflow-hidden pointer-events-none opacity-60 mix-blend-screen">
                <div ref={orb1Ref} className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-brutal-red/30 rounded-full blur-[100px] md:blur-[150px] transform -translate-x-1/2 -translate-y-1/2"></div>
                <div ref={orb2Ref} className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-brutal-cement/10 rounded-full blur-[100px] md:blur-[150px] transform translate-x-1/2 translate-y-1/2"></div>
                <div ref={orb3Ref} className="absolute top-1/2 left-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-brutal-red/20 rounded-full blur-[120px] md:blur-[180px] transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center px-4 w-full">
                <h1
                    ref={title2Ref}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] leading-none font-black tracking-tight text-brutal-cement transition-all w-full mb-4 md:mb-6"
                >
                    {t('hero.title1')}<br />{t('hero.title2')}
                </h1>
                <h2
                    ref={title1Ref}
                    className="text-xs md:text-sm lg:text-base font-mono font-bold tracking-widest text-brutal-cement uppercase"
                >
                    <span className="inline-block mx-1 md:mx-4">{t('hero.audio')}</span>
                    <span className="inline-block mx-1 md:mx-4 text-brutal-red opacity-50">•</span>
                    <span className="inline-block mx-1 md:mx-4">{t('hero.light')}</span>
                    <span className="inline-block mx-1 md:mx-4 text-brutal-red opacity-50">•</span>
                    <span className="inline-block mx-1 md:mx-4">{t('hero.stage')}</span>
                    <span className="inline-block mx-1 md:mx-4 text-brutal-red opacity-50">•</span>
                    <span className="inline-block mx-1 md:mx-4">{t('hero.visual')}</span>
                </h2>
            </div>
            
            {/* Slider Navigation Dots */}
            <div className="absolute bottom-6 md:bottom-8 z-20 flex gap-3">
                {heroImages.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentImg(idx)}
                        className={`h-2 rounded-full transition-all duration-300 focus:outline-none ${idx === currentImg ? 'w-8 bg-brutal-red' : 'w-2 bg-brutal-cement/50 hover:bg-brutal-cement'}`}
                        aria-label={`Slayt ${idx + 1}`}
                    />
                ))}
            </div>
            </div>
        </section>
    )
}
