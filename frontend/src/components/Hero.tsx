"use client"
import { usePortfolio } from "@/context/PortfolioContext";
import Button from "@/components/Button";
import Paragraph from "./Paragraph";
import Heading from "./Heading";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FileDown } from "lucide-react";


export default function Hero() {
  const { heroRef } = usePortfolio()
  return (
    <section ref={heroRef} className="min-h-screen flex flex-col items-center justify-center px-6">
        <Heading variant="primary">
            Angelica Ayos
        </Heading>
        <p className="text-xl text-text-secondary mt-2">
            Full Stack Developer
        </p>
        <p className="text-lg italic font-heading font-semibold text-primary mt-6">
            Frontend depth. Full stack range. Always leveling up.
        </p>
        <Paragraph>
            I'm a Full Stack Developer with 5+ years building accessible, performant web applications. I care about clean architecture, mentoring junior developers, and shipping things that actually work, across the entire stack.
        </Paragraph>
        <div className="flex gap-4 mt-8"> 
            <Button 
                href="https://github.com/jejeayos" 
                target="_blank" 
                rel="noopener noreferrer" 
                variant="primary"
                icon={<FaGithub size={16} />}
                >
                    View My Work
            </Button>

            <Button 
                href="https://www.linkedin.com/in/angelica-ayos/" 
                target="_blank" 
                rel="noopener noreferrer" 
                variant="secondary"
                icon={<FaLinkedin size={16} />}
                >
                    Let's Connect
            </Button>

            <Button 
                href="https://drive.google.com/uc?export=download&id=1jp2Sp7gC4AEas5OuZw7A36w3l3Si7_as" 
                variant="secondary" 
                target="_blank" 
                rel="noopener noreferrer"
                icon={<FileDown size={16} />}
                >
                    Download CV
            </Button>
        </div>
    </section>
  )
}
