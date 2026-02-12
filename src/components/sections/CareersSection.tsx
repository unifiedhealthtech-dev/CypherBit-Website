import { Home, TrendingUp, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollReveal } from "@/components/ui/ScrollReveal"

const careerCards = [
    {
        id: "career-remote",
        icon: Home,
        title: "Flexible Remote Options",
        desc: "Encouraging learning, experimentation, mentorship, and continuous skill growth.",
        gradient: "from-blue-500 to-cyan-500",
        bgGradient: "from-blue-50 to-cyan-50",
    },
    {
        id: "career-growth",
        icon: TrendingUp,
        title: "Growth-Focused Culture",
        desc: "Open collaboration, shared ownership, and innovation-driven teamwork.",
        gradient: "from-violet-500 to-purple-500",
        bgGradient: "from-violet-50 to-purple-50",
    },
    {
        id: "career-projects",
        icon: Star,
        title: "Meaningful Projects",
        desc: "Build impactful software shaping healthcare and enterprise transformation.",
        gradient: "from-amber-500 to-orange-500",
        bgGradient: "from-amber-50 to-orange-50",
    },
]

export function CareersSection() {
    return (
        <section id="careers" className="relative py-24 md:py-32 overflow-hidden">
            {/* Background decorative wave */}
            <div className="absolute top-0 left-0 right-0 overflow-hidden leading-[0]">
                <svg
                    viewBox="0 0 1440 80"
                    preserveAspectRatio="none"
                    className="w-full h-12"
                >
                    <path
                        d="M0,0 C480,80 960,0 1440,40 L1440,0 L0,0Z"
                        fill="url(#careerWave)"
                    />
                    <defs>
                        <linearGradient id="careerWave" x1="0" y1="0" x2="1440" y2="0">
                            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.06" />
                            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.06" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                {/* Header */}
                <ScrollReveal width="100%" className="text-center mb-16">
                    <div className="flex flex-col items-center">
                        <Badge>Careers</Badge>
                        <h2 className="mt-6 text-3xl md:text-5xl font-bold font-[Outfit] text-slate-900">
                            Join Our Team
                        </h2>
                        <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl mx-auto">
                            We're always looking for passionate developers, designers, and
                            innovators.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {careerCards.map((card, i) => (
                        <ScrollReveal key={card.id} delay={0.2 + (i * 0.15)} width="100%">
                            <Card
                                className="h-full text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group border-0 shadow-lg bg-white"
                                id={card.id}
                            >
                                <CardContent className="p-8">
                                    <div
                                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${card.bgGradient} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                                    >
                                        <card.icon className="w-7 h-7 text-blue-600" />
                                    </div>
                                    <h4 className="text-lg font-bold text-slate-900 mb-3 font-[Outfit]">
                                        {card.title}
                                    </h4>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        {card.desc}
                                    </p>
                                </CardContent>
                            </Card>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
