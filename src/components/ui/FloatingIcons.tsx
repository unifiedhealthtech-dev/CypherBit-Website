import { motion } from "framer-motion"
import {
    Code,
    Cpu,
    Database,
    Globe,
    Server,
    Cloud,
    Shield,
    Zap,
    Smartphone,
    Layers,
    Layout,
    Terminal
} from "lucide-react"

// Define a list of icons with their properties
const icons = [
    { Icon: Code, color: "text-blue-500", size: 48, x: "10%", y: "20%", delay: 0 },
    { Icon: Terminal, color: "text-slate-600", size: 36, x: "50%", y: "10%", delay: 1.5 }, // Top centerish
    { Icon: Cpu, color: "text-violet-500", size: 32, x: "85%", y: "15%", delay: 1 },
    { Icon: Database, color: "text-indigo-500", size: 40, x: "15%", y: "80%", delay: 2 },
    { Icon: Globe, color: "text-sky-500", size: 36, x: "80%", y: "75%", delay: 1.5 },
    { Icon: Cloud, color: "text-blue-400", size: 28, x: "20%", y: "50%", delay: 0.5 },
    { Icon: Shield, color: "text-violet-400", size: 44, x: "75%", y: "30%", delay: 2.5 },
    { Icon: Zap, color: "text-amber-400", size: 32, x: "45%", y: "90%", delay: 3 }, // Bottom center
    { Icon: Layers, color: "text-emerald-400", size: 38, x: "5%", y: "40%", delay: 1.2 },
    { Icon: Layout, color: "text-pink-400", size: 30, x: "90%", y: "60%", delay: 2.2 },
    { Icon: Server, color: "text-cyan-600", size: 42, x: "10%", y: "10%", delay: 0.8 },
    { Icon: Smartphone, color: "text-fuchsia-500", size: 34, x: "92%", y: "25%", delay: 1.8 }
]

export function FloatingIcons() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
            {icons.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                        opacity: [0.1, 0.3, 0.1],
                        scale: [1, 1.1, 1],
                        y: [0, -15, 0],
                        x: [0, 10, 0],
                        rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                        duration: 5 + (index % 5),
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: item.delay
                    }}
                    style={{
                        position: 'absolute',
                        left: item.x,
                        top: item.y
                    }}
                    className={`absolute ${item.color} drop-shadow-sm`}
                >
                    <item.Icon size={item.size} strokeWidth={1.5} />
                </motion.div>
            ))}
        </div>
    )
}
