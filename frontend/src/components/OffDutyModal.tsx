"use client"
import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Mountain, BookOpen, Camera } from "lucide-react"
import { usePortfolio } from "@/context/PortfolioContext"

export default function OffDutyModal() {
  const { isOffDutyOpen, setIsOffDutyOpen } = usePortfolio();

  useEffect(() => {
        if (isOffDutyOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
        }
        return () => {
            document.body.style.overflow = ""
        }
    }, [isOffDutyOpen])


  return (
    <AnimatePresence>
      {isOffDutyOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOffDutyOpen(false)}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[60]"
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full md:w-[580px] bg-surface border-l border-border z-[70] overflow-y-auto"
          >
            <div className="flex flex-col gap-8 p-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-heading text-3xl font-bold text-text-primary">Off Duty</h2>
                  <span className="text-xs font-body text-text-secondary tracking-widest">SYS.STATE = IDLE</span>
                </div>
                <button
                  onClick={() => setIsOffDutyOpen(false)}
                  className="p-2 border border-border rounded text-text-secondary hover:border-aquamarine hover:text-aquamarine transition-colors duration-200"
                  aria-label="Close"
                >
                  <X size={16} />
                </button>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="font-heading text-lg font-bold text-text-primary">About</h3>
                <p className="font-body text-sm text-text-secondary leading-relaxed">
                  I'm a developer based in the Philippines who stumbled into code completely by accident, needed math subjects for engineering, ended up in Computer Science, and honestly? Best accidental decision I've ever made.
                </p>
                <p className="font-body text-sm text-text-secondary leading-relaxed">
                  I stayed because I love the puzzle of it. Debugging a tricky issue, simplifying something overcomplicated, finding a cleaner solution; that's the good stuff. I also care deeply about making things look as good as they work, which is probably why I ended up in frontend before going full stack.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <p className="font-body text-sm text-text-secondary leading-relaxed border-l-2 border-primary pl-4">
                  The code gets committed. The laptop closes. Here's what happens next.
                  Most days you'll find me at the gym or running. When the weather cooperates, I'm out hiking. Mt. Ulap is a personal favorite, worth every step.
                  Medieval/historical series, Marvel, anime. Game of Thrones has my whole heart, except season 8, which we've collectively agreed not to discuss.
                </p>

                <div className="flex flex-col gap-3 p-4 bg-surface-high border border-border rounded-xl">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-body text-text-secondary">LOC: 16.29°N, 120.63°E</span>
                    <Mountain size={14} className="text-text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-text-primary">Mt. Ulap</h3>
                    <p className="text-xs font-body text-text-secondary uppercase tracking-wider">Elevation: 1846m</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="w-full h-1 bg-surface rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: "100%" }} />
                    </div>
                    <span className="text-xs font-body text-text-secondary text-right">Trail completion: 100%</span>
                  </div>
                </div>

                <div className="flex flex-col gap-3 p-4 bg-surface-high border border-border rounded-xl">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-body tracking-widest uppercase text-text-secondary">LORE_ARCHIVE</span>
                    <BookOpen size={14} className="text-text-secondary" />
                  </div>
                  <div className="flex flex-col gap-2">
                    {[
                      { title: "Game of Thrones", sub: "Political syntax analysis." },
                      { title: "Witch Hat Atelier", sub: "Visual magic systems." },
                      { title: "Fullmetal Alchemist", sub: "Equivalent exchange, always." },
                      { title: "Attack on Titan", sub: "Freedom at what cost." },
                    ].map(item => (
                      <div key={item.title} className="flex flex-col border-l-2 border-primary pl-2">
                        <span className="text-xs font-body text-text-primary">{item.title}</span>
                        <span className="text-xs font-body text-text-secondary">{item.sub}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="font-body text-xs text-text-secondary leading-relaxed italic">
                  If you made it this far, we probably have something in common, whether it's the hiking, the anime, or the very strong feelings about GOT season 8. The contact form is right there.
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
