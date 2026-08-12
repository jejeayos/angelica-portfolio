import { useState, useEffect } from "react"

export function useTypewriter(text: string, speed: number = 30, delay: number = 0) {
    const [displayed, setDisplayed] = useState("")
    const [done, setDone] = useState(false)

    useEffect(() => {
        let i = 0
        const timeout = setTimeout(() => {
            const interval = setInterval(() => {
                setDisplayed(text.slice(0, i + 1))
                i++
                if (i >= text.length) {
                    clearInterval(interval)
                    setDone(true)
                }
            }, speed)
            return () => clearInterval(interval)
        }, delay)
        return () => clearTimeout(timeout)
    }, [text, speed, delay])

    return { displayed, done }
}
