import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, Instagram, Linkedin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ScrollReveal } from "@/components/ui/ScrollReveal"

// Re-creating the ContactSection component
const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: "hr@cypherbit.in",
        href: "mailto:hr@cypherbit.in",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+91 8919216351",
        href: "tel:+918919216351",
    },
    {
        icon: MapPin,
        label: "Address",
        value: "Nalgonda,Telangana 508001",
        href: "#",
    },
]

export function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1500))

        setIsSubmitting(false)
        setIsSubmitted(true)
        setFormData({ name: "", email: "", message: "" })

        setTimeout(() => setIsSubmitted(false), 3000)
    }

    return (
        <section
            id="contact"
            className="relative py-24 md:py-32 bg-gradient-to-b from-white via-blue-50/20 to-white overflow-hidden dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
        >
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-blue-400/5 to-violet-400/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                {/* Header */}
                <ScrollReveal width="100%" className="text-center mb-16">
                    <div className="flex flex-col items-center">
                        <Badge variant="outline" className="dark:text-blue-400 dark:border-blue-400/30">Contact Us</Badge>
                        <h2 className="mt-6 text-3xl md:text-5xl font-bold font-[Outfit] text-slate-900 dark:text-white leading-tight">
                            Let's Build Something{" "}
                            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                                Amazing Together
                            </span>
                        </h2>
                        <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl mx-auto">
                            Let's talk about your next digital project. We'd love to help bring
                            your ideas to life.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Contact Content */}
                <div className="flex flex-col gap-16 items-center">
                    {/* Contact Info */}
                    <ScrollReveal width="100%" direction="up">
                        <div className="flex flex-col items-center gap-10">
                            <div className="grid md:grid-cols-3 gap-8 w-full max-w-5xl">
                                {contactInfo.map((item) => (
                                    <div
                                        key={item.label}
                                        className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl hover:bg-white/50 dark:hover:bg-white/5 transition-all duration-300 group"
                                    >
                                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-50 to-violet-50 dark:from-slate-800 dark:to-slate-800 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-blue-100/50 dark:border-slate-700">
                                            <item.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                        </div>
                                        <div>
                                            <label className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-2 block">
                                                {item.label}
                                            </label>
                                            {item.href !== "#" ? (
                                                <a
                                                    href={item.href}
                                                    className="text-base text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                                                >
                                                    {item.value}
                                                </a>
                                            ) : (
                                                <span className="text-base text-slate-600 dark:text-slate-400">
                                                    {item.value}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Social links */}
                            <div className="flex gap-4 justify-center">
                                <a
                                    href="#"
                                    id="social-instagram"
                                    aria-label="Instagram"
                                    className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-gradient-to-br hover:from-pink-500 hover:to-violet-500 hover:text-white text-slate-500 dark:text-slate-400 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/20"
                                >
                                    <Instagram className="w-5 h-5" />
                                </a>
                                <a
                                    href="#"
                                    id="social-linkedin"
                                    aria-label="LinkedIn"
                                    className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-500 hover:text-white text-slate-500 dark:text-slate-400 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
                                >
                                    <Linkedin className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Contact Form */}
                    <ScrollReveal width="100%" direction="up" delay={0.2} className="w-full max-w-2xl">
                        <form
                            onSubmit={handleSubmit}
                            id="contact-form"
                            className="bg-white/80 dark:bg-slate-900/50 backdrop-blur-sm rounded-3xl border border-slate-200/60 dark:border-slate-800 p-8 md:p-12 shadow-2xl shadow-slate-900/5 space-y-6"
                        >
                            <div className="grid md:grid-cols-2 gap-6">
                                <Input
                                    type="text"
                                    placeholder="Your Name"
                                    required
                                    autoComplete="name"
                                    id="form-name"
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData((p) => ({ ...p, name: e.target.value }))
                                    }
                                    className="dark:bg-slate-950 dark:border-slate-800"
                                />
                                <Input
                                    type="email"
                                    placeholder="Email Address"
                                    required
                                    autoComplete="email"
                                    id="form-email"
                                    value={formData.email}
                                    onChange={(e) =>
                                        setFormData((p) => ({ ...p, email: e.target.value }))
                                    }
                                    className="dark:bg-slate-950 dark:border-slate-800"
                                />
                            </div>
                            <Textarea
                                placeholder="Message"
                                rows={5}
                                required
                                id="form-message"
                                value={formData.message}
                                onChange={(e) =>
                                    setFormData((p) => ({ ...p, message: e.target.value }))
                                }
                                className="dark:bg-slate-950 dark:border-slate-800"
                            />
                            <Button
                                type="submit"
                                size="full"
                                id="form-submit"
                                disabled={isSubmitting}
                                className="relative h-12 text-base"
                            >
                                {isSubmitting ? (
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{
                                            duration: 1,
                                            repeat: Infinity,
                                            ease: "linear",
                                        }}
                                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                                    />
                                ) : isSubmitted ? (
                                    <motion.span
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="text-white"
                                    >
                                        ✓ Message Sent!
                                    </motion.span>
                                ) : (
                                    <>
                                        <span>Send Message</span>
                                        <Send className="w-4 h-4" />
                                    </>
                                )}
                            </Button>
                        </form>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    )
}
