import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FloatingIcons } from "@/components/ui/FloatingIcons"

export function HeroSection() {
    const scrollToSection = (href: string) => {
        const el = document.querySelector(href)
        if (el) el.scrollIntoView({ behavior: "smooth" })
    }

    const title = "Building Intelligent Software & Scalable Apps for the "

    return (
        <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-violet-50/40">
            {/* Animated background shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-blue-400/15 to-violet-400/15 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{ scale: [1.2, 1, 1.2], rotate: [0, -90, 0] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-48 -left-48 w-[500px] h-[500px] bg-gradient-to-tr from-violet-400/10 to-blue-400/10 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/3 right-1/4 w-72 h-72 bg-gradient-to-br from-blue-300/10 to-indigo-300/10 rounded-full blur-2xl"
                />
                {/* Floating orbs */}
                <motion.div
                    animate={{ y: [0, -40, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 left-1/6 w-4 h-4 bg-blue-400/40 rounded-full"
                />
                <motion.div
                    animate={{ y: [0, 30, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute top-2/3 right-1/5 w-3 h-3 bg-violet-400/40 rounded-full"
                />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-100/40 via-transparent to-transparent pointer-events-none" />

                {/* Floating Blobs */}
                <motion.div
                    animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-20 left-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl pointer-events-none"
                />
                <motion.div
                    animate={{ y: [0, 20, 0], opacity: [0.2, 0.5, 0.2], scale: [1, 1.2, 1] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-20 right-10 w-80 h-80 bg-violet-400/10 rounded-full blur-3xl pointer-events-none"
                />
            </div>

            <FloatingIcons />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col items-center">
                <div className="max-w-4xl text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-medium mb-6 hover:bg-blue-100 transition-colors cursor-default"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        Waitlist Early Access
                    </motion.div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-[Outfit] leading-[1.1] tracking-tight text-slate-900">
                        <motion.span
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: { staggerChildren: 0.03 }
                                }
                            }}
                        >
                            {title.split("").map((char, index) => (
                                <motion.span
                                    key={index}
                                    variants={{
                                        hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
                                        visible: { opacity: 1, y: 0, filter: "blur(0px)" }
                                    }}
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </motion.span>
                        <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-blue-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">
                            Digital Future
                        </span>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mt-7 text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto"
                    >
                        At Cypherbit, we transform ideas into powerful digital products —
                        from concept to code, we design secure, scalable software platforms
                        that help businesses grow faster and operate smarter.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Button
                            size="lg"
                            onClick={() => scrollToSection("#projects")}
                            className="group"
                            id="hero-cta-primary"
                        >
                            See Our Work
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                        <Button
                            variant="ghost"
                            size="lg"
                            onClick={() => scrollToSection("#contact")}
                            id="hero-cta-secondary"
                        >
                            Contact Team
                        </Button>
                    </motion.div>
                </div>


            </div>

        </section>
    )
}


