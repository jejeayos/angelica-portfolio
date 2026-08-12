"use client"
import { motion } from "framer-motion"

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute rounded-full"
        style={{
            width: "65vw",
            height: "65vw",
            top: "-25%",
            left: "5%",
            background: "radial-gradient(circle, rgba(255, 177, 195, 0.35), transparent 70%)",
            filter: "blur(55px)",
            border: "1px solid rgba(255, 177, 195, 0.2)",
            boxShadow: "0 0 60px rgba(255, 177, 195, 0.15), inset 0 0 60px rgba(255, 177, 195, 0.08)",

        }}
        animate={{ x: ["0%", "30%", "-20%", "10%", "0%"], y: ["0%", "20%", "10%", "-10%", "0%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute rounded-full"
        style={{
            width: "55vw",
            height: "55vw",
            bottom: "-20%",
            right: "0%",
            background: "radial-gradient(circle, rgba(189, 194, 253, 0.30), transparent 70%)",
            filter: "blur(55px)",
            border: "1px solid rgba(189, 194, 253, 0.2)",
            boxShadow: "0 0 60px rgba(189, 194, 253, 0.12), inset 0 0 60px rgba(189, 194, 253, 0.06)",
        }}
        animate={{ x: ["0%", "-25%", "15%", "-10%", "0%"], y: ["0%", "-15%", "10%", "20%", "0%"] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute rounded-full"
        style={{
            width: "35vw",
            height: "35vw",
            top: "35%",
            left: "25%",
            background: "radial-gradient(circle, rgba(64, 224, 200, 0.12), transparent 65%)",
            filter: "blur(35px)",
            border: "1px solid rgba(64, 224, 200, 0.20)",
            boxShadow: "0 0 40px rgba(64, 224, 200, 0.12), inset 0 0 40px rgba(64, 224, 200, 0.06)",
        }}
        animate={{ x: ["0%", "10%", "-12%", "5%", "0%"], y: ["0%", "-10%", "8%", "-3%", "0%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 5 }}
      />
    </div>
  )
}
