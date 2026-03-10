import HeroArea from '../components/HeroArea'
import PowerGrid from '../components/PowerGrid'
import ContactImpact from '../components/ContactImpact'
import AboutSection from '../components/AboutSection'
import ServicesDetail from '../components/ServicesDetail'
import FeaturesList from '../components/FeaturesList'

export default function Home() {
    return (
        <main>
            <HeroArea />
            <PowerGrid />
            <AboutSection />
            <ServicesDetail />
            <FeaturesList />
            <ContactImpact />
        </main>
    )
}
