"use client"
import { createContext, useState, useContext, useRef, useEffect} from "react"

type PortfolioContextType = {
  heroVisible: boolean
  setHeroVisible: (value: boolean) => void
  isDarkMode: boolean
  setIsDarkMode: (value: boolean) => void
  heroRef: React.RefObject<HTMLElement | null>
}

export const PortfolioContext = createContext<PortfolioContextType | null>(null);

export function PortfolioProvider({ children }: { children: React.ReactNode }) {
  const [heroVisible, setHeroVisible] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    if (!heroRef.current) return
    const observer = new IntersectionObserver(
        ([entry]) => setHeroVisible(entry.isIntersecting),
        { threshold: 0 }
    )
    observer.observe(heroRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode])


  return (
    <PortfolioContext.Provider value={{ heroVisible, setHeroVisible, isDarkMode, setIsDarkMode, heroRef }}>
      {children}
    </PortfolioContext.Provider>
  )
}

export function usePortfolio() {
    const context = useContext(PortfolioContext);
    if (!context) throw new Error("usePortfolio must be used within a PortfolioProvider");
    return context;
}