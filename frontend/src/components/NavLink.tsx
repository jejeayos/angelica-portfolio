type NavLinkProps = {
  href: string
  children: React.ReactNode
  ariaLabel?: string
  onClick?: () => void
}

export default function NavLink({ href, children, ariaLabel, onClick } : NavLinkProps) {
    const baseStyle = "text-text-secondary hover:text-primary transition-colors duration-200";
    return (
        <a href={href} aria-label={ariaLabel} onClick={onClick} className={baseStyle}>
            {children}
        </a>
    );
}
