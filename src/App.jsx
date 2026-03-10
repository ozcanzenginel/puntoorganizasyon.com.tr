import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import FloatingIslandNav from './components/FloatingIslandNav'
import Home from './pages/Home'
import GalleryPage from './pages/Gallery'

function App() {
    // Global Click Glitch Effect
    useEffect(() => {
        const handleClick = () => {
            document.documentElement.style.filter = 'invert(100%) hue-rotate(90deg)'
            setTimeout(() => {
                document.documentElement.style.filter = 'none'
            }, 120) // 120ms shock
        }
        window.addEventListener('click', handleClick)
        return () => window.removeEventListener('click', handleClick)
    }, [])

    return (
        <Router>
            <div className="bg-brutal-black min-h-screen text-brutal-cement selection:bg-brutal-red selection:text-white font-sans overflow-hidden">
                <FloatingIslandNav />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/gallery" element={<GalleryPage />} />
                </Routes>

                {/* Floating WhatsApp Quick Contact Button */}
                <a
                    href="https://wa.me/905070670029"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.5)] hover:scale-110 transition-transform duration-300 group"
                    aria-label="WhatsApp ile İletişime Geçin"
                >
                    <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-30"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="white" stroke="none">
                        <path d="M12.01 2.01c-5.52 0-9.99 4.47-9.99 9.99 0 1.95.55 3.77 1.5 5.31L2 22l4.82-1.46c1.51.89 3.28 1.41 5.17 1.41 5.51 0 10-4.47 10-9.94 0-5.52-4.49-10-10-10zm0 18.06c-1.66 0-3.21-.44-4.57-1.2l-.33-.18-3.13.95.96-3.08-.21-.34c-.81-1.39-1.28-3.01-1.28-4.73 0-4.53 3.69-8.22 8.22-8.22 4.54 0 8.23 3.69 8.23 8.22s-3.69 8.21-8.23 8.21zm4.56-5.87c-.25-.13-1.48-.73-1.71-.82-.23-.08-.39-.13-.56.12-.17.26-.64.82-.79 1-.15.17-.3.19-.55.06-1.55-.78-2.61-1.52-3.61-2.91-.16-.21.05-.2.29-.68.12-.24.06-.45-.06-.69-.13-.25-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.86.84-.86 2.05s.89 2.37 1.01 2.54c.12.17 1.73 2.64 4.19 3.7 2.05.88 2.69.95 3.32.88.63-.08 2.03-.83 2.32-1.63.29-.8.29-1.49.2-1.63-.09-.15-.31-.24-.56-.37z" />
                    </svg>
                </a>
            </div>
        </Router>
    )
}

export default App
