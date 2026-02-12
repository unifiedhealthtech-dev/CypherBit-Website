import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollReveal } from "@/components/ui/ScrollReveal"

export function WhySection() {
    const scrollToSection = (href: string) => {
        const el = document.querySelector(href)
        if (el) el.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <section
            id="why-cypherbit"
            className="relative py-24 md:py-32 overflow-hidden"
        >
            {/* Background glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-400/8 to-violet-400/8 rounded-full blur-3xl" />
            </div>

            <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
                <div className="flex flex-col items-center">
                    <ScrollReveal>
                        <Badge>Why Choose Cypherbit</Badge>
                    </ScrollReveal>

                    <ScrollReveal delay={0.1}>
                        <h2 className="mt-6 text-3xl md:text-5xl font-bold font-[Outfit] leading-tight text-slate-900">
                            Empowering Businesses Through{" "}
                            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                                Intelligent Software Solutions
                            </span>
                        </h2>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2} width="100%">
                        <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
                            At Cypherbit, we build reliable, high-performance software and
                            mobile platforms that empower organizations to scale confidently.
                            Our team blends innovation, engineering precision, and user-focused
                            design to deliver real-world impact.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={0.3} className="mt-9">
                        <Button
                            onClick={() => scrollToSection("#projects")}
                            id="why-cta"
                        >
                            View More
                            <ArrowRight className="w-4 h-4" />
                        </Button>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    )
}
