"use client"
import { Sun, Moon } from "lucide-react"
import NavLink from "./NavLink";
import { usePortfolio } from "@/context/PortfolioContext"

export default function Navbar() {
    const { heroVisible, isDarkMode, setIsDarkMode } = usePortfolio();

    return (
        <nav className={`px-8 py-4 flex ${!heroVisible ? 'bg-surface shadow-md' : 'bg-transparent'} sticky top-0 z-50 justify-between items-center`}>
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
            
            <div className="flex gap-4 justify-end items-center"> 
                <NavLink href="#about">About</NavLink>
                <NavLink href="#experience">Experience</NavLink>
                <NavLink href="#skills">Skills</NavLink>
                <NavLink href="#contact">Contact</NavLink>
                <NavLink href="#off-duty">Off Duty</NavLink>
                <button 
                    onClick={() => setIsDarkMode(!isDarkMode)} 
                    className="border border-primary text-primary rounded-lg p-1.5 hover:bg-primary hover:text-white cursor-pointer transition-colors duration-200"
                    aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                >
                    {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
            </div>
        </nav>
    )
}