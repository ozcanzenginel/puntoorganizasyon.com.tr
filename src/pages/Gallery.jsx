import { useEffect } from 'react'
import GallerySection from '../components/GallerySection'

export default function GalleryPage() {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <main className="pt-24 min-h-screen">
            <GallerySection />
        </main>
    )
}
