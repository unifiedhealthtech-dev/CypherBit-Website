import { motion } from "framer-motion"
import { Separator } from "@/components/ui/separator"
import logoLight from "@/assets/logo-light.png"

const footerLinks = {
    company: [
        { label: "About Us", href: "#about" },
        { label: "Projects", href: "#projects" },
        { label: "Services", href: "#" },
        { label: "Blog", href: "#" },
    ],
    resources: [
        { label: "Career", href: "#careers" },
        { label: "Team", href: "#" },
        { label: "Privacy Policy", href: "#" },
        { label: "Terms & Conditions", href: "#" },
    ],
}

export function Footer() {
    const scrollToSection = (href: string) => {
        if (href.startsWith("#")) {
            const el = document.querySelector(href)
            if (el) el.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <footer id="footer" className="relative bg-[#050816] text-white overflow-hidden">
            {/* Glow effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-blue-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                {/* Big statement */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="pt-20 pb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-[Outfit] leading-tight">
                        Building Intelligent Software &
                        <br />
                        Scalable Apps for the{" "}
                        <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                            Digital Future
                        </span>
                    </h2>
                </motion.div>

                <Separator className="bg-slate-800" />

                {/* Footer grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 py-16">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <a href="https://www.cypherbit.in/" className="flex items-center gap-2.5 mb-5 block w-fit">
                            <img
                                src={logoLight}
                                alt="Cypherbit Logo"
                                className="h-10 w-auto object-contain"
                            />
                        </a>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                            At Cypherbit, we transform ideas into powerful digital platforms —
                            crafting seamless software experiences that drive innovation and
                            business growth.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
                            Company
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.label}>
                                    <button
                                        onClick={() => scrollToSection(link.href)}
                                        className="text-slate-400 hover:text-white text-sm transition-colors duration-200 cursor-pointer"
                                    >
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
                            Resources
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.resources.map((link) => (
                                <li key={link.label}>
                                    <button
                                        onClick={() => scrollToSection(link.href)}
                                        className="text-slate-400 hover:text-white text-sm transition-colors duration-200 cursor-pointer"
                                    >
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <Separator className="bg-slate-800" />

                {/* Bottom bar */}
                <div className="py-8 text-center">
                    <p className="text-slate-500 text-sm">
                        Copyright © 2025 Cypherbit Technologies. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
