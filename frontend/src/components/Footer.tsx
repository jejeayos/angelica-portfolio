import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Mail, ArrowUp } from "lucide-react";
import { usePortfolio } from "@/context/PortfolioContext";

export default function Footer() {
    const { heroVisible } = usePortfolio();
    
    return (
        <footer className="fixed bottom-0 left-0 right-0 z-50 px-8 md:px-16 py-4 border-t border-border bg-surface">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex flex-col gap-1">
                    <p className="font-heading text-sm font-bold text-text-primary">Angelica Ayos</p>
                    <p className="font-body text-xs text-text-secondary">© 2026 Angelica Ayos. Built with precision.</p>
                </div>
                <div className="flex items-center gap-5">
                    <a href="https://github.com/jejeayos" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-text-secondary hover:text-aquamarine transition-colors duration-200">
                        <FaGithub size={18} />
                    </a>
                    <a href="https://www.linkedin.com/in/angelica-ayos" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-text-secondary hover:text-aquamarine transition-colors duration-200">
                        <FaLinkedin size={18} />
                    </a>
                    <a href="https://www.instagram.com/jejeayos" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-text-secondary hover:text-aquamarine transition-colors duration-200">
                        <FaInstagram size={18} />
                    </a>
                    <a href="mailto:jejeayos@gmail.com" aria-label="Email" className="text-text-secondary hover:text-aquamarine transition-colors duration-200">
                        <Mail size={18} />
                    </a>

                    {!heroVisible && 
                        <a href="#home" aria-label="Back to top" className="text-text-secondary hover:text-aquamarine transition-colors duration-200">
                            <ArrowUp size={18} />
                        </a>
                    }
                </div>
            </div>
        </footer>
    )
}
