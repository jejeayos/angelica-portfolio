"use client"
import { useState } from "react";
import { Menu, X } from "lucide-react"
import NavLink from "./NavLink";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = (onClick?: () => void, className?: string) => (
        <div className={className}>
            <NavLink href="#work" onClick={onClick}>Work</NavLink>
            <NavLink href="#tech-stack" onClick={onClick}>Tech Stack</NavLink>
            <NavLink href="#about" onClick={onClick}>About</NavLink>
            <NavLink href="#contact" onClick={onClick}>Contact</NavLink>
        </div>
    )

    return (
        <nav className="px-8 py-4 flex bg-surface border-b border-border sticky top-0 z-50 justify-between items-center relative">
            <p className="font-heading text-xl font-bold text-text-primary">Angelica Ayos</p>

            <div className="hidden md:flex gap-8 items-center">
                {navLinks(undefined, "flex flex-row gap-8 items-center")}
            </div>

            <div className="hidden md:flex gap-3 items-center">
                <a
                    href="#off-duty"
                    className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-border text-text-secondary text-sm hover:border-primary hover:text-primary transition-colors duration-200"
                >
                    <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
                    Off Duty
                </a>
                <a
                    href="https://drive.google.com/file/d/1J6rgmaUBRaxIp21saqRWtVY-Ap33WuEN/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-1.5 rounded text-sm font-medium bg-primary text-background hover:bg-primary-container transition-colors duration-200"
                    aria-label="Download Resume"
                >
                    Resume
                </a>
            </div>

            <div className="flex md:hidden">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="border border-border text-text-secondary rounded p-1.5 hover:border-primary hover:text-primary transition-colors duration-200"
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
                        <a href="#off-duty" onClick={() => setIsMenuOpen(false)} className="text-text-secondary text-sm hover:text-primary transition-colors duration-200">Off Duty</a>
                        <a
                            href="https://drive.google.com/uc?export=download&id=1jp2Sp7gC4AEas5OuZw7A36w3l3Si7_as"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 rounded text-sm font-medium bg-primary text-background text-center hover:bg-primary-container transition-colors duration-200"
                        >
                            Resume
                        </a>
                    </div>
                </div>
            )}
        </nav>
    )
}
