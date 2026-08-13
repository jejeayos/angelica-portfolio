"use client"
import { createContext, useState, useContext, useRef, useEffect} from "react"

type PortfolioContextType = {
  heroVisible: boolean
  setHeroVisible: (value: boolean) => void
  heroRef: React.RefObject<HTMLElement | null>
  isOffDutyOpen: boolean
  setIsOffDutyOpen: (value: boolean) => void
  activeSection: string
}


export const PortfolioContext = createContext<PortfolioContextType | null>(null);

export function PortfolioProvider({ children }: { children: React.ReactNode }) {
  const [heroVisible, setHeroVisible] = useState(true);
  const [isOffDutyOpen, setIsOffDutyOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
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
    const sections = document.querySelectorAll("section[id]")
    
      const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible) {
          const id = visible.target.id
          setActiveSection(id)
          window.history.replaceState(null, "", id === "home" ? "/" : `#${id}`)
        }

      },
      { threshold: 0.3 }
  )

  sections.forEach((section) => observer.observe(section))
  return () => observer.disconnect()
}, [])



  return (
    <PortfolioContext.Provider value={{ heroVisible, setHeroVisible, heroRef, isOffDutyOpen, setIsOffDutyOpen, activeSection }}>
      {children}
    </PortfolioContext.Provider>
  )
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (!context) throw new Error("usePortfolio must be used within a PortfolioProvider");
  return context;
}