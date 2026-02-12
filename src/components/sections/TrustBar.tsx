import { motion } from "framer-motion"
import { Bot, Activity, Cloud, Laptop, Smartphone } from "lucide-react"
import { ScrollReveal } from "@/components/ui/ScrollReveal"

const badges = [
    { icon: Bot, label: "AI Solutions" },
    { icon: Activity, label: "Healthcare Platforms" },
    { icon: Cloud, label: "Cloud SaaS" },
    { icon: Laptop, label: "Enterprise Apps" },
    { icon: Smartphone, label: "Mobile Systems" },
]

export function TrustBar() {
    return (
        <section
            id="trust-bar"
            className="relative py-10 bg-gradient-to-r from-slate-50 via-blue-50/40 to-violet-50/30 border-y border-slate-200/50"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center gap-8 text-center">
                    <ScrollReveal width="100%">
                        <p className="text-xl font-bold text-slate-500 max-w-3xl mx-auto">
                            Trusted for building modern <span className="text-blue-600">healthcare</span> and <span className="text-violet-600">enterprise platforms</span>.
                        </p>
                    </ScrollReveal>

                    <div className="flex flex-wrap items-center justify-center gap-3">
                        {badges.map((badge, i) => (
                            <ScrollReveal key={badge.label} delay={i * 0.1} width="fit-content">
                                <motion.span
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200/60 text-xs font-medium text-slate-600 shadow-sm hover:shadow-md hover:border-blue-200/60 hover:text-blue-700 transition-all duration-300 cursor-default"
                                >
                                    <badge.icon className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:text-blue-600" />
                                    {badge.label}
                                </motion.span>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
