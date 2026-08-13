"use client"
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePortfolio } from "@/context/PortfolioContext";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { isOffDutyOpen, setIsOffDutyOpen, activeSection, heroVisible } = usePortfolio()


    const navLinks = (onClick?: () => void, className?: string) => (
        <div className={className}>
            {[
            { href: "#work", label: "Work" },
            { href: "#tech-stack", label: "Tech Stack" },
            { href: "#contact", label: "Contact" },
            ].map(({ href, label }) => {
            const isActive = activeSection === href.replace("#", "")
            return (
                <a
                key={href}
                href={href}
                onClick={onClick}
                className={`font-body text-sm transition-colors duration-200 ${
                    isActive ? "text-aquamarine" : "text-text-secondary hover:text-aquamarine"
                }`}
                >
                {label}
                </a>
            )
            })}
        </div>
    )

    return (
        <nav className="px-8 py-4 flex bg-surface border-b border-border sticky top-0 z-50 justify-between items-center">
            <p className="font-heading text-xl font-bold text-text-primary">Angelica Ayos</p>

            <div className="hidden md:flex gap-8 items-center">
                {navLinks(undefined, "flex flex-row gap-8 items-center")}
            </div>

            <div className="hidden md:flex gap-3 items-center">
                <button
                    onClick={() => setIsOffDutyOpen(true)}
                    className={`group flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm transition-colors duration-200 ${
                        isOffDutyOpen
                        ? "border-aquamarine bg-aquamarine text-background"
                        : "border-border text-text-secondary hover:border-aquamarine hover:bg-aquamarine hover:text-background"
                    }`}
                    >
                    <span className={`w-2 h-2 rounded-full inline-block transition-colors duration-200 ${
                        isOffDutyOpen ? "bg-background" : "bg-primary group-hover:bg-background"
                    }`} />
                    Off Duty
                </button>


                <a
                    href="https://drive.google.com/file/d/1J6rgmaUBRaxIp21saqRWtVY-Ap33WuEN/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-4 py-1.5 rounded text-sm font-medium bg-primary text-background hover:bg-aquamarine transition-all duration-300 ${heroVisible ? "hidden" : ""}`}
                    aria-label="Download Resume"
                >
                    Resume
                </a>
            </div>

            <div className="flex md:hidden">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="border border-border text-text-secondary rounded p-1.5 hover:border-aquamarine hover:text-aquamarine transition-colors duration-200"
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-menu"
                >
                    {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-surface border-b border-border flex flex-col px-8 py-4 gap-4" id="mobile-menu">
                    {navLinks(() => setIsMenuOpen(false), "flex flex-col gap-4")}
                    <div className="flex flex-col gap-3 pt-2 border-t border-border">
                        <button
                            onClick={() => { setIsMenuOpen(false); setIsOffDutyOpen(true) }}
                            className="text-text-secondary text-sm hover:text-aquamarine transition-colors duration-200 text-left"
                        >
                            Off Duty
                        </button>

                        <a
                            href="https://drive.google.com/uc?export=download&id=1jp2Sp7gC4AEas5OuZw7A36w3l3Si7_as"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`px-4 py-1.5 rounded text-sm font-medium bg-primary text-background hover:bg-aquamarine transition-all duration-300 ${
                                heroVisible ? "opacity-0 pointer-events-none" : "opacity-100"
                            }`}
                        >
                            Resume
                        </a>
                    </div>
                </div>
            )}
        </nav>
    )
}
