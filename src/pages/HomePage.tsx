import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { HeroSection } from "@/components/sections/HeroSection"
import { TrustBar } from "@/components/sections/TrustBar"
import { WhySection } from "@/components/sections/WhySection"
import { ProjectsSection } from "@/components/sections/ProjectsSection"
import { AboutSection } from "@/components/sections/AboutSection"
import { CareersSection } from "@/components/sections/CareersSection"
import { ContactSection } from "@/components/sections/ContactSection"

export function HomePage() {
    return (
        <>
            <Navbar />
            <main>
                <HeroSection />
                <TrustBar />
                <WhySection />
                <ProjectsSection />
                <AboutSection />
                <CareersSection />
                <ContactSection />
            </main>
            <Footer />
        </>
    )
}
