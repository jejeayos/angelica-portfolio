"use client"
import { useState } from "react";
import { Sun, Moon, Menu, X} from "lucide-react"
import NavLink from "./NavLink";
import { usePortfolio } from "@/context/PortfolioContext"

export default function Navbar() {
    const { heroVisible, isDarkMode, setIsDarkMode } = usePortfolio();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const darkModeButton = (
        <button 
            onClick={() => setIsDarkMode(!isDarkMode)} 
            className="border border-primary text-primary rounded-lg p-2.5 hover:bg-primary hover:text-white cursor-pointer transition-colors duration-200"
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
    );

    const menuLinks = (onClick? : () => void, className?: string) => {
        return (
            <div className={className}>
                <NavLink href="#about" onClick={onClick}>About</NavLink>
                <NavLink href="#experience" onClick={onClick}>Experience</NavLink>
                <NavLink href="#skills" onClick={onClick}>Skills</NavLink>
                <NavLink href="#contact" onClick={onClick}>Contact</NavLink>
                <NavLink href="#off-duty" onClick={onClick}>Off Duty</NavLink>
            </div>
        );
    }

    return (
        <nav className={`px-8 py-4 flex bg-surface shadow-md sticky top-0 z-50 justify-between items-center ${!heroVisible ? 'lg:bg-surface lg:shadow-md' : 'lg:bg-transparent lg:shadow-none'}`}>
            <div className="flex flex-col">
                {heroVisible ? (
                    <p className="font-heading text-2xl font-bold! text-text-primary">A.A</p>
                    ) : (
                    <>
                        <p className="font-heading text-2xl font-bold! text-text-primary">Angelica Ayos</p>
                        <p className="text-sm text-text-secondary mt-2">Full Stack Developer</p>
                    </>
                )}
            </div>
            
            <div className="hidden md:flex gap-4"> 
                {menuLinks(undefined, "flex flex-row gap-4 items-center")}
                {darkModeButton}
            </div>

            <div className="flex md:hidden gap-2 items-center">
                {darkModeButton}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="border border-primary text-primary rounded-lg p-2.5 hover:bg-primary hover:text-white cursor-pointer transition-colors duration-200"
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                >
                    {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
                
            </div>

            {isMenuOpen && 
                <div className="absolute top-full left-0 w-full bg-surface flex flex-col px-8 py-4 gap-4">
                    {menuLinks(() => setIsMenuOpen(false), "flex flex-col gap-4")}
                </div>
            }
        </nav>
    )
}