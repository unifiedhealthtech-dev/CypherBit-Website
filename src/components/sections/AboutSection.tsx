import { Target, Eye } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollReveal } from "@/components/ui/ScrollReveal"

const mvCards = [
    {
        id: "mission-card",
        icon: Target,
        title: "Our Mission",
        desc: "To empower businesses with intelligent digital tools that improve productivity, engagement, and sustainable growth.",
        gradient: "from-blue-500 to-violet-500",
        bgGradient: "from-blue-50 to-violet-50",
    },
    {
        id: "vision-card",
        icon: Eye,
        title: "Our Vision",
        desc: "To become a global leader in IT innovation, building technology that inspires progress and transforms industries.",
        gradient: "from-violet-500 to-pink-500",
        bgGradient: "from-violet-50 to-pink-50",
    },
]

export function AboutSection() {
    return (
        <section
            id="about"
            className="relative py-24 md:py-32 bg-gradient-to-b from-blue-50/30 via-white to-violet-50/20"
        >
            {/* Wave Top */}
            <div className="absolute top-0 left-0 right-0 overflow-hidden leading-[0] rotate-180">
                <svg
                    viewBox="0 0 1440 120"
                    preserveAspectRatio="none"
                    className="w-full h-16 md:h-24"
                >
                    <path
                        d="M0,40 C360,120 720,0 1080,60 C1260,90 1380,50 1440,40 L1440,120 L0,120Z"
                        fill="url(#aboutWave1)"
                    />
                    <defs>
                        <linearGradient id="aboutWave1" x1="0" y1="0" x2="1440" y2="0">
                            <stop offset="0%" stopColor="#EEF2FF" />
                            <stop offset="50%" stopColor="#E0E7FF" />
                            <stop offset="100%" stopColor="#EDE9FE" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
                {/* Header */}
                <ScrollReveal width="100%" className="text-center mb-16">
                    <div className="flex flex-col items-center">
                        <Badge>About Us</Badge>
                        <h2 className="mt-6 text-3xl md:text-5xl font-bold font-[Outfit] text-slate-900">
                            Our Story
                        </h2>
                        <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
                            Cypherbit was founded with a simple mission — to create technology
                            that solves real-world problems. From startups to enterprises, we
                            transform ideas into scalable digital products through smart
                            engineering, modern design, and long-term innovation.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Mission & Vision Cards */}
                <div className="grid md:grid-cols-2 gap-8">
                    {mvCards.map((card, i) => (
                        <ScrollReveal key={card.id} delay={0.2 + (i * 0.15)} width="100%">
                            <Card
                                className="h-full hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group border-0 shadow-lg bg-white"
                                id={card.id}
                            >
                                <CardContent className="p-8">
                                    <div
                                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${card.bgGradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                                    >
                                        <card.icon className="w-7 h-7 text-blue-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3 font-[Outfit]">
                                        {card.title}
                                    </h3>
                                    <p className="text-slate-500 leading-relaxed">{card.desc}</p>
                                </CardContent>
                            </Card>
                        </ScrollReveal>
                    ))}
                </div>
            </div>

            {/* Wave Bottom */}
            <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0]">
                <svg
                    viewBox="0 0 1440 120"
                    preserveAspectRatio="none"
                    className="w-full h-16 md:h-24"
                >
                    <path
                        d="M0,80 C360,0 720,120 1080,60 C1260,30 1380,70 1440,80 L1440,120 L0,120Z"
                        fill="url(#aboutWave2)"
                    />
                    <defs>
                        <linearGradient id="aboutWave2" x1="0" y1="0" x2="1440" y2="0">
                            <stop offset="0%" stopColor="#EEF2FF" />
                            <stop offset="50%" stopColor="#E0E7FF" />
                            <stop offset="100%" stopColor="#EDE9FE" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </section>
    )
}
