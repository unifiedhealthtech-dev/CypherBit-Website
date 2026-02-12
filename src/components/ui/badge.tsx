import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
    "inline-flex items-center rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 backdrop-blur-sm shadow-sm",
    {
        variants: {
            variant: {
                default:
                    "border-blue-200/60 bg-blue-50/80 text-blue-700 hover:bg-blue-100/80 dark:bg-blue-900/40 dark:border-blue-800 dark:text-blue-300",
                secondary:
                    "border-slate-200 bg-slate-100 text-slate-900 hover:bg-slate-200/80 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200",
                destructive:
                    "border-transparent bg-red-500 text-white hover:bg-red-600 dark:bg-red-900 dark:text-red-200",
                outline: "text-slate-950 border-slate-200 bg-transparent dark:text-slate-200 dark:border-slate-800",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> { }

function Badge({ className, variant, ...props }: BadgeProps) {
    return (
        <div className={cn(badgeVariants({ variant }), className)} {...props} />
    )
}

export { Badge, badgeVariants }
