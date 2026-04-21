import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { useTranslation } from 'react-i18next'

const images = Array.from({ length: 13 }, (_, i) => `/gallery/punto-organizasyon-etkinlik-sahne-ses-isik-sistemleri-kiralama-izmir-${i + 1}.jpeg`)
const videos = Array.from({ length: 10 }, (_, i) => `/gallery/punto-organizasyon-sahne-kurulum-konser-ses-sistemi-led-ekran-${i + 1}.mp4`)

export default function GallerySection() {
    const { t } = useTranslation()
    const containerRef = useRef(null)
    const [selectedMedia, setSelectedMedia] = useState(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.gallery-item', {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power3.out',
                delay: 0.2
            })
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={containerRef} className="py-24 px-4 md:px-8 bg-brutal-black min-h-screen border-t border-brutal-cement/20 relative">
            {/* Header */}
            <div className="mb-12">
                <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-none mb-4 text-white">
                    {t('gallery.title1')} <span className="text-brutal-red">{t('gallery.title2')}</span>
                </h2>
                <p className="text-brutal-cement/70 font-mono text-xs md:text-sm max-w-xl">
                    {t('gallery.desc')}
                </p>
            </div>

            {/* Small Boxes Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 md:gap-4">
                {/* Render Images */}
                {images.map((src, idx) => (
                    <div 
                        key={`img-${idx}`} 
                        className="gallery-item relative group overflow-hidden bg-brutal-cement/10 cursor-pointer shadow-sm hover:shadow-md transition-shadow aspect-square"
                        onClick={() => setSelectedMedia({ type: 'image', src })}
                    >
                        <img
                            src={src}
                            alt={`Punto Organizasyon Etkinlik Sahne Ses Işık Kiralama ${idx + 1}`}
                            loading="lazy"
                            className="w-full h-full object-cover grayscale-0 opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-out"
                        />
                        <div className="absolute inset-0 bg-brutal-red/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none mix-blend-multiply"></div>
                    </div>
                ))}

                {/* Render Videos */}
                {videos.map((src, idx) => (
                    <div 
                        key={`vid-${idx}`} 
                        className="gallery-item relative group overflow-hidden bg-brutal-cement/10 cursor-pointer shadow-sm hover:shadow-md transition-shadow aspect-square"
                        onClick={() => setSelectedMedia({ type: 'video', src })}
                    >
                        <video
                            src={src}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover grayscale-0 opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-out"
                            aria-label={`Punto Organizasyon Sahne Kurulum Konser Ses Sistemi LED ${idx + 1}`}
                        />
                        <div className="absolute inset-0 bg-brutal-red/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none mix-blend-multiply"></div>
                        {/* Play Indicator UI */}
                        <div className="absolute top-2 right-2 bg-brutal-red text-white text-[9px] md:text-[10px] font-mono px-2 py-1 tracking-widest opacity-80 group-hover:opacity-100 shadow-sm">REC</div>
                    </div>
                ))}
            </div>

            {/* End Line */}
            <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-brutal-red to-transparent opacity-30"></div>

            {/* Lightbox / Popup */}
            {selectedMedia && (
                <div 
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
                    onClick={() => setSelectedMedia(null)}
                >
                    <button 
                        className="absolute top-6 right-6 md:top-10 md:right-10 text-white hover:text-brutal-red transition-colors text-4xl p-2 z-[101]"
                        onClick={() => setSelectedMedia(null)}
                        aria-label="Kapat"
                    >
                        &times;
                    </button>
                    
                    <div 
                        className="relative max-w-6xl w-[90vw] h-[80vh] flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {selectedMedia.type === 'image' ? (
                            <img 
                                src={selectedMedia.src} 
                                alt="Büyük Görünüm" 
                                className="max-w-full max-h-full object-contain drop-shadow-2xl rounded-sm"
                            />
                        ) : (
                            <video 
                                src={selectedMedia.src} 
                                autoPlay 
                                controls 
                                className="max-w-full max-h-full drop-shadow-2xl rounded-sm"
                            />
                        )}
                    </div>
                </div>
            )}
        </section>
    )
}
