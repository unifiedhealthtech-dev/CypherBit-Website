import { motion } from "framer-motion"
import {
    ExternalLink,
    UserPlus,
    FileText,
    Activity,
    LayoutGrid,
    Package,
    ShoppingCart,
    Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import pharmazenLogo from "@/assets/pharmazen-logo.png"
import { ScrollReveal } from "@/components/ui/ScrollReveal"

const MotionCard = motion.create(Card)

const upcomingProjects = [
    {
        id: "upcoming-doctor",
        icon: UserPlus,
        title: "Doctor Application",
        desc: "Comprehensive digital practice management for modern healthcare providers.",
        gradient: "from-emerald-500 to-teal-500",
        bgGradient: "from-emerald-50 to-teal-50",
    },
    {
        id: "upcoming-ehr",
        icon: FileText,
        title: "Electronic Health Records (EHR)",
        desc: "Secure, interoperable health records platform for seamless patient data management.",
        gradient: "from-blue-500 to-cyan-500",
        bgGradient: "from-blue-50 to-cyan-50",
    },
    {
        id: "upcoming-diagnostics",
        icon: Activity,
        title: "Diagnostics Centre Software",
        desc: "End-to-end lab management with automated reports and real-time result tracking.",
        gradient: "from-violet-500 to-purple-500",
        bgGradient: "from-violet-50 to-purple-50",
    },
]

export function ProjectsSection() {
    return (
        <section
            id="projects"
            className="relative py-24 md:py-32 bg-gradient-to-b from-white via-slate-50/50 to-white"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <ScrollReveal width="100%" className="text-center mb-16">
                    <div className="flex flex-col items-center">
                        <Badge>Featured Projects</Badge>
                        <h2 className="mt-6 text-3xl md:text-5xl font-bold font-[Outfit] text-slate-900">
                            Our Work Speaks for Itself
                        </h2>
                    </div>
                </ScrollReveal>

                {/* PharmaZen Featured Card */}
                <ScrollReveal width="100%" delay={0.2} direction="up">
                    <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl overflow-hidden border border-slate-700/50">
                        {/* Decorative glow */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-teal-500/10 to-transparent rounded-full blur-3xl" />

                        <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12 relative z-10">
                            {/* Content */}
                            <div className="flex flex-col justify-center">
                                <div className="flex items-center gap-3 mb-6">
                                    <img
                                        src={pharmazenLogo}
                                        alt="PharmaZen Logo"
                                        className="h-12 w-auto object-contain"
                                    />
                                </div>

                                <h3 className="text-2xl md:text-3xl font-bold text-white font-[Outfit] mb-4">
                                    Healthcare Retail & Distributor Platform
                                </h3>
                                <p className="text-slate-400 leading-relaxed mb-8">
                                    A powerful digital ecosystem designed to streamline pharmacy
                                    operations, inventory tracking, compliance workflows, and
                                    intelligent analytics — enabling businesses to operate with
                                    clarity and efficiency.
                                </p>

                                <div className="flex flex-wrap gap-3">
                                    <Button size="sm" id="pharmazen-visit" asChild>
                                        <a href="https://www.pharmazen.pro/" target="_blank" rel="noopener noreferrer">
                                            <span>Visit Site</span>
                                            <ExternalLink className="w-3.5 h-3.5" />
                                        </a>
                                    </Button>

                                </div>
                            </div>

                            {/* Mockup */}
                            <div className="flex items-center justify-center">
                                <PharmaZenMockup />
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Wave separator */}
                <div className="my-16 overflow-hidden">
                    <svg
                        viewBox="0 0 1440 60"
                        preserveAspectRatio="none"
                        className="w-full h-10"
                    >
                        <path
                            d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,25 1440,30"
                            stroke="url(#waveSep)"
                            strokeWidth="1"
                            fill="none"
                        />
                        <defs>
                            <linearGradient id="waveSep" x1="0" y1="0" x2="1440" y2="0">
                                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
                                <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.3" />
                                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.2" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                {/* Upcoming Projects */}
                <div>
                    <ScrollReveal width="100%" delay={0.3}>
                        <h4 className="text-center text-sm font-semibold text-slate-500 uppercase tracking-widest mb-10">
                            Upcoming Projects
                        </h4>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-3 gap-6">
                        {upcomingProjects.map((project, i) => (
                            <ScrollReveal key={project.id} delay={0.4 + (i * 0.15)} width="100%">
                                <MotionCard
                                    className="h-full group cursor-pointer border-0 shadow-md"
                                    id={project.id}
                                    whileHover={{
                                        y: -8,
                                        boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
                                    }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                >
                                    <CardContent className="p-7">
                                        <div
                                            className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.bgGradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                                        >
                                            <project.icon
                                                className={`w-6 h-6 bg-gradient-to-r ${project.gradient} bg-clip-text`}
                                                style={{
                                                    stroke: `url(#grad-${project.id})`,
                                                }}
                                            />
                                            <svg width="0" height="0">
                                                <defs>
                                                    <linearGradient id={`grad-${project.id}`}>
                                                        <stop offset="0%" stopColor="#3B82F6" />
                                                        <stop offset="100%" stopColor="#8B5CF6" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </div>
                                        <h5 className="text-lg font-bold text-slate-900 mb-2 font-[Outfit]">
                                            {project.title}
                                        </h5>
                                        <p className="text-sm text-slate-500 leading-relaxed">
                                            {project.desc}
                                        </p>
                                    </CardContent>
                                </MotionCard>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

function PharmaZenMockup() {
    return (
        <motion.div
            whileHover={{ scale: 1.05, rotateY: 5 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-md perspective-1000"
        >
            <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700 shadow-2xl shadow-black/50">
                {/* Browser Top Bar */}
                <div className="flex items-center gap-2 px-4 py-3 bg-slate-800 border-b border-slate-700">
                    <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    </div>
                    <div className="ml-4 px-3 py-1 bg-slate-900/50 rounded-md border border-slate-700/50 flex items-center gap-2 w-full max-w-[200px]">
                        <div className="w-3 h-3 rounded-full border border-slate-600" />
                    </div>
                </div>

                {/* Dashboard Layout */}
                <div className="flex h-64 bg-slate-900">
                    {/* Sidebar */}
                    <div className="w-14 bg-slate-800/50 border-r border-slate-700/50 flex flex-col items-center py-4 gap-5">
                        <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center mb-2 shadow-lg shadow-teal-500/10">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 3.5V12H3.5" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M20.5 12H12V20.5" stroke="#14B8A6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="p-1.5 bg-teal-500/10 rounded-md text-teal-400">
                            <LayoutGrid size={18} />
                        </div>
                        <div className="p-1.5 hover:bg-slate-700/50 rounded-md text-slate-500 transition-colors">
                            <Package size={18} />
                        </div>
                        <div className="p-1.5 hover:bg-slate-700/50 rounded-md text-slate-500 transition-colors">
                            <ShoppingCart size={18} />
                        </div>
                        <div className="p-1.5 hover:bg-slate-700/50 rounded-md text-slate-500 transition-colors">
                            <Users size={18} />
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 p-5 space-y-5 overflow-hidden">
                        {/* Header Stats */}
                        <div className="grid grid-cols-3 gap-3">
                            {[
                                { label: "Today's Sales", val: "₹12.5k", color: "emerald" },
                                { label: "Orders", val: "1,240", color: "blue" },
                                { label: "Stock", val: "85%", color: "amber" },
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-slate-800/40 rounded-lg p-2 border border-slate-700/30"
                                >
                                    <div className="text-[10px] text-slate-400 mb-1">{stat.label}</div>
                                    <div className={`text-sm font-bold text-${stat.color}-400`}>{stat.val}</div>
                                    <div className={`w-full h-1 mt-2 rounded-full bg-slate-700/50 overflow-hidden`}>
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "70%" }}
                                            transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                                            className={`h-full bg-${stat.color}-500`}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Main Graph Area */}
                        <div className="flex gap-4 h-28">
                            {/* Analytics Graph */}
                            <div className="flex-2 w-2/3 bg-slate-800/30 rounded-xl border border-slate-700/30 p-3 relative overflow-hidden group">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-[10px] text-slate-400 font-semibold">Sales Analysis</span>
                                    <span className="text-[9px] text-teal-400 bg-teal-400/10 px-1.5 py-0.5 rounded">+12.5%</span>
                                </div>
                                <div className="absolute inset-x-0 bottom-0 top-6 flex items-end px-2 pb-2 gap-1">
                                    {[35, 60, 45, 70, 50, 80, 65, 85].map((h, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ height: 0 }}
                                            whileInView={{ height: `${h}%` }}
                                            transition={{ duration: 0.6, delay: i * 0.05 }}
                                            className="flex-1 bg-gradient-to-t from-teal-500/80 to-emerald-400/80 rounded-t-sm hover:opacity-100 opacity-70 transition-opacity"
                                        />
                                    ))}
                                </div>
                                {/* Hover Effect Line */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer" />
                            </div>

                            {/* Side Panel: Pie Chart */}
                            <div className="flex-1 w-1/3 bg-slate-800/30 rounded-xl border border-slate-700/30 p-2 flex flex-col items-center justify-center relative">
                                <span className="absolute top-2 left-2 text-[8px] text-slate-500 font-medium">Stock</span>
                                <div className="relative w-16 h-16 rounded-full"
                                    style={{
                                        background: `conic-gradient(
                                            #14B8A6 0deg 270deg, 
                                            #334155 270deg 360deg
                                        )`
                                    }}
                                >
                                    <div className="absolute inset-2.5 bg-slate-900 rounded-full flex items-center justify-center">
                                        <span className="text-[9px] text-teal-400 font-bold">75%</span>
                                    </div>
                                </div>
                                <div className="flex gap-2 mt-2">
                                    <div className="flex items-center gap-1">
                                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                                        <span className="text-[8px] text-slate-500">In Stock</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div >
    )
}
