import { useTranslation } from 'react-i18next'

export default function ContactImpact() {
    const { t } = useTranslation()
    return (
        <section id="contact" aria-label="İletişim, Destek ve Adres Bilgileri" className="relative min-h-[60vh] flex flex-col items-center justify-center bg-brutal-black text-center border-t border-brutal-cement/20 py-16 px-4">

            <p className="max-w-3xl font-mono text-brutal-cement/60 text-sm md:text-base leading-relaxed mb-8 uppercase tracking-wide">
                {t('contact.desc1')} <span className="text-white">{t('contact.desc2')}</span> {t('contact.desc3')} <span className="text-brutal-red">{t('contact.desc4')}</span> {t('contact.desc5')}
            </p>

            <a
                href="https://wa.me/905070670029"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-brutal-cement hover:text-brutal-red transition-colors duration-300 mb-10 px-4 whitespace-nowrap block"
            >
                {t('contact.btn')}
            </a>

            <address className="flex flex-col md:flex-row gap-10 md:gap-16 font-mono text-sm tracking-widest text-brutal-cement/60 mb-12 not-italic">
                <div className="flex flex-col items-center">
                    <span className="text-brutal-red mb-2 md:mb-4">{t('contact.locTitle')}</span>
                    <span>{t('contact.loc')}</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-brutal-red mb-2 md:mb-4">{t('contact.opTitle')}</span>
                    <a href="tel:+905070670029" className="hover:text-brutal-red transition-colors">📞 0507 067 0029</a>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-brutal-red mb-2 md:mb-4">{t('contact.techTitle')}</span>
                    <a href="tel:+905325951116" aria-label="Teknik Destek Telefon Hattı" className="hover:text-brutal-red transition-colors">📞 0532 595 11 16</a>
                </div>
            </address>

            <div className="w-full max-w-7xl mx-auto border-t border-brutal-cement/10 pt-10 mt-4 flex flex-col items-center justify-center opacity-80">
                <img src="/punto-logo-new.png" alt="Punto Organizasyon Kurumsal Logosu" className="h-12 md:h-16 object-contain mb-6 grayscale hover:grayscale-0 transition-all duration-500" />
                <p className="font-mono text-xs text-brutal-cement/40 tracking-widest">© {new Date().getFullYear()} PUNTO ORGANİZASYON. ALL RIGHTS RESERVED.</p>
            </div>
        </section>
    )
}
