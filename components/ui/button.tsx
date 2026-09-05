import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "paper"
  size?: "sm" | "md" | "lg" | "xl"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const variants = {
      primary: "bg-[#141413] text-[#FFFCF5] hover:bg-[#232320] shadow-[0_1px_2px_rgba(0,0,0,0.08),0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_2px_8px_rgba(0,0,0,0.12),0_8px_24px_rgba(0,0,0,0.12)]",
      secondary: "bg-[#F5F3EF] text-[#141413] border border-[#E8E6E1] hover:bg-white hover:border-[#D6D3CD]",
      ghost: "bg-transparent text-[#575551] hover:text-[#141413] hover:bg-[#F5F3EF]",
      paper: "bg-[#FFFCF5] text-[#141413] border border-[#E8E6E1] shadow-paper hover:shadow-paper-lg",
    }
    const sizes = {
      sm: "h-8 px-3 text-[13px] rounded-full",
      md: "h-10 px-5 text-[14px] rounded-full",
      lg: "h-12 px-7 text-[15px] rounded-full",
      xl: "h-[52px] px-8 text-[16px] rounded-full",
    }
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-medium tracking-[-0.01em] transition-all duration-200 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"
export { Button }
