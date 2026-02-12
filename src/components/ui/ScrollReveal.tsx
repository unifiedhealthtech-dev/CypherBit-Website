import { motion, useInView, useAnimation } from "framer-motion"
import type { Variant } from "framer-motion"
import { useRef, useEffect } from "react"

interface ScrollRevealProps {
    children: React.ReactNode
    width?: "fit-content" | "100%"
    className?: string
    delay?: number
    duration?: number
    threshold?: number
    direction?: "up" | "down" | "left" | "right" | "none"
    distance?: number
}

export function ScrollReveal({
    children,
    width = "fit-content",
    className = "",
    delay = 0,
    duration = 0.5,
    threshold = 0.2, // Trigger when 20% of the element is visible
    direction = "up",
    distance = 50
}: ScrollRevealProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: `0px 0px -${threshold * 100}px 0px` as any })
    const mainControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        }
    }, [isInView, mainControls])

    const getHiddenVariant = (): Variant => {
        switch (direction) {
            case "up": return { opacity: 0, y: distance }
            case "down": return { opacity: 0, y: -distance }
            case "left": return { opacity: 0, x: distance }
            case "right": return { opacity: 0, x: -distance }
            case "none": return { opacity: 0 }
            default: return { opacity: 0, y: distance }
        }
    }

    const getVisibleVariant = (): Variant => {
        switch (direction) {
            case "up":
            case "down": return { opacity: 1, y: 0 }
            case "left":
            case "right": return { opacity: 1, x: 0 }
            case "none": return { opacity: 1 }
            default: return { opacity: 1, y: 0 }
        }
    }

    return (
        <div
            ref={ref}
            style={{
                position: "relative",
                width,
                overflow: "visible"
            }}
            className={className}
        >
            <motion.div
                variants={{
                    hidden: getHiddenVariant(),
                    visible: getVisibleVariant(),
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration, delay, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </div>
    )
}
