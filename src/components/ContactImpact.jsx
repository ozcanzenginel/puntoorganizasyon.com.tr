import { useTranslation } from 'react-i18next'

export default function ContactImpact() {
    const { t } = useTranslation()
    return (
        <section id="contact" aria-label="İletişim, Destek ve Adres Bilgileri" className="relative min-h-[60vh] flex flex-col items-center justify-center bg-brutal-black text-center border-t border-brutal-cement/20 py-16 px-4">

            <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 px-4">
                <div className="text-left space-y-8">
                    <p className="font-mono text-brutal-cement/60 text-sm md:text-base leading-relaxed uppercase tracking-wide">
                        {t('contact.desc1')} <span className="text-white">{t('contact.desc2')}</span> {t('contact.desc3')} <span className="text-brutal-red">{t('contact.desc4')}</span> {t('contact.desc5')}
                    </p>

                    <a
                        href="tel:+905070670029"
                        className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-brutal-cement hover:text-brutal-red transition-colors duration-300 block border-b border-brutal-cement/10 pb-4"
                    >
                        {t('contact.btn')}
                    </a>

                    <address className="flex flex-col gap-8 font-mono text-sm tracking-widest text-brutal-cement/60 not-italic">
                        <div className="flex flex-col">
                            <span className="text-brutal-red mb-2">{t('contact.locTitle')}</span>
                            <span className="text-white mb-4">{t('contact.loc')}</span>
                            <a 
                                href="https://www.google.com/maps/dir/?api=1&destination=Yenigün+Mahallesi+222/47+Sokak+No:10/A+Buca+İzmir" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-brutal-black font-black text-xs tracking-widest uppercase hover:bg-brutal-red hover:text-white transition-all duration-300 w-fit"
                                style={{ clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)' }}
                            >
                                🗺️ {t('contact.directions')}
                            </a>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div className="flex flex-col">
                                <span className="text-brutal-red mb-2">{t('contact.opTitle')}</span>
                                <a href="tel:+905070670029" className="hover:text-brutal-red transition-colors text-white">📞 0507 067 0029</a>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-brutal-red mb-2">{t('contact.techTitle')}</span>
                                <a href="tel:+905325951116" aria-label="Teknik Destek Telefon Hattı" className="hover:text-brutal-red transition-colors text-white">📞 0532 595 11 16</a>
                            </div>
                        </div>
                    </address>
                </div>

                <div className="w-full h-[400px] bg-brutal-cement/5 border border-brutal-cement/10 relative group overflow-hidden">
                    <iframe
                        title="Google Maps Location"
                        src="https://maps.google.com/maps?q=Yenigun%20Mahallesi%2C%20222%2F47%20Sokak%2C%20No%3A10%2FA%20Buca%20Izmir&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        className="w-full h-full grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 pointer-events-auto"
                        frameBorder="0"
                        scrolling="no"
                        marginHeight="0"
                        marginWidth="0"
                    ></iframe>
                    <div className="absolute inset-0 pointer-events-none border-4 border-brutal-black/20 ring-1 ring-white/10 ring-inset"></div>
                </div>
            </div>

            <div className="w-full max-w-7xl mx-auto border-t border-brutal-cement/10 pt-10 mt-4 flex flex-col items-center justify-center opacity-80">
                <img src="/punto-logo-new.png" alt="Punto Organizasyon Kurumsal Logosu" className="h-12 md:h-16 object-contain mb-6 grayscale hover:grayscale-0 transition-all duration-500" />
                <p className="font-mono text-xs text-brutal-cement/40 tracking-widest">© {new Date().getFullYear()} PUNTO ORGANİZASYON. ALL RIGHTS RESERVED.</p>
            </div>
        </section>
    )
}
