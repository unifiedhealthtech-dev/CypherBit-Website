import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import logoDark from "@/assets/logo-dark.png"

const navLinks = [
    { label: "Projects", href: "#projects" },
    { label: "About Us", href: "#about" },
    { label: "Careers", href: "#careers" },
]

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileOpen, setIsMobileOpen] = useState(false)
    const [activeSection, setActiveSection] = useState("")

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)

            // Update active section
            const sections = navLinks.map(link => link.href.substring(1))
            sections.push("contact")

            const current = sections.find(section => {
                const element = document.getElementById(section)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    return rect.top <= 100 && rect.bottom >= 100
                }
                return false
            })

            setActiveSection(current || "")
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    useEffect(() => {
        if (isMobileOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
        }
    }, [isMobileOpen])

    const scrollToSection = (href: string) => {
        setIsMobileOpen(false)
        const el = document.querySelector(href)
        if (el) {
            el.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <motion.nav
            id="navbar"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                isScrolled
                    ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-slate-900/5 border-b border-slate-200/50"
                    : "bg-transparent"
            )}
        >
            <div className="w-full px-6 lg:px-12">
                <div className="flex items-center justify-between h-18">
                    {/* Logo */}
                    <a
                        href="https://www.cypherbit.in/"
                        className="flex items-center gap-2.5 group"
                        id="nav-logo"
                    >
                        <img
                            src={logoDark}
                            alt="Cypherbit Logo"
                            className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Button
                                key={link.label}
                                variant={activeSection === link.href.substring(1) ? "default" : "ghost"}
                                onClick={() => scrollToSection(link.href)}
                                className={cn(
                                    "px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg cursor-pointer",
                                    activeSection === link.href.substring(1)
                                        ? "shadow-md shadow-blue-500/20"
                                        : "text-slate-600 hover:text-slate-900 border-transparent bg-transparent hover:bg-slate-100/60"
                                )}
                            >
                                {link.label}
                            </Button>
                        ))}
                        <Button
                            size="sm"
                            variant={activeSection === "contact" ? "default" : "outline"}
                            onClick={() => scrollToSection("#contact")}
                            className={cn(
                                "ml-3 transition-all duration-300",
                                activeSection === "contact"
                                    ? "shadow-md shadow-blue-500/20"
                                    : "border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300"
                            )}
                            id="nav-contact-btn"
                        >
                            Contact Us
                        </Button>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsMobileOpen(!isMobileOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
                        id="mobile-toggle"
                        aria-label="Toggle navigation"
                    >
                        {isMobileOpen ? (
                            <X className="w-6 h-6 text-slate-700" />
                        ) : (
                            <Menu className="w-6 h-6 text-slate-700" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-200/50"
                    >
                        <div className="px-6 py-6 space-y-3">
                            {navLinks.map((link, i) => (
                                <motion.button
                                    key={link.label}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    onClick={() => scrollToSection(link.href)}
                                    className={cn(
                                        "block w-full text-left px-4 py-3 text-base font-medium rounded-xl transition-colors cursor-pointer",
                                        activeSection === link.href.substring(1)
                                            ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-500/25"
                                            : "text-slate-700 hover:text-blue-600 hover:bg-blue-50/50"
                                    )}
                                >
                                    {link.label}
                                </motion.button>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <Button
                                    size="full"
                                    variant={activeSection === "contact" ? "default" : "outline"}
                                    onClick={() => scrollToSection("#contact")}
                                    className="mt-2"
                                >
                                    Contact Us
                                </Button>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}
