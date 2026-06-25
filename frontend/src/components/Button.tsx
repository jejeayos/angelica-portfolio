import { ReactNode } from "react"

type ButtonProps = {
  href: string
  variant: "primary" | "secondary"
  children: ReactNode
  ariaLabel?: string
  target?: string
  rel?: string
  icon?: ReactNode
}

export default function Button({ href, variant, children, ariaLabel, target, rel, icon } : ButtonProps) {
    const baseStyle = "flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-colors duration-200";
    const variants = {
        primary: "bg-primary text-white hover:bg-accent",
        secondary: "border border-primary text-primary hover:bg-primary hover:text-white"
    }
    return (
        <a href={href} aria-label={ariaLabel} className={`${baseStyle} ${variants[variant]}`} target={target} rel={rel}>
            {icon && <span aria-hidden="true">{icon}</span>}
            {children}
        </a>
    );
}
