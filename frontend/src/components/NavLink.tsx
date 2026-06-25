type NavLinkProps = {
  href: string
  children: React.ReactNode
  ariaLabel?: string
}

export default function NavLink({ href, children, ariaLabel } : NavLinkProps) {
    const baseStyle = "text-text-secondary hover:text-primary transition-colors duration-200";
    return (
        <a href={href} aria-label={ariaLabel} className={baseStyle}>
            {children}
        </a>
    );
}