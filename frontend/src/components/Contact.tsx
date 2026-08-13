"use client"
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Camera, BookOpen, Mountain } from "lucide-react";
import Image from "next/image";

export default function Contact() {
    const [form, setForm] = useState({ name: "", subject: "", message: "" })
    const [file, setFile] = useState<File | null>(null)
    const [fileError, setFileError] = useState<string | null>(null)
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
    const [carouselImages, setCarouselImages] = useState<string[]>([])

    useEffect(() => {
        fetch("/api/carousel")
            .then(res => res.json())
            .then(setCarouselImages)
            .catch(err => console.error("Carousel fetch failed:", err));
    }, [])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus("loading")
        try {
            const formData = new FormData()
            formData.append("name", form.name)
            formData.append("subject", form.subject)
            formData.append("message", form.message)
            if (file) formData.append("attachment", file)
            await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`, formData)
            setStatus("success")
            setForm({ name: "", subject: "", message: "" })
            setFile(null)
            setFileError(null)
        } catch {
            setStatus("error")
        }
    }

    return (
        <section id="contact" className="px-8 md:px-16 py-24">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">

                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col gap-8"
                >
                    <div>
                        <h2 className="font-heading text-5xl font-bold text-text-primary leading-tight">
                            Initialize<br />Connection
                        </h2>
                        <p className="font-body text-sm text-text-secondary mt-3">
                            Secure terminal established. Awaiting payload.
                        </p>
                    </div>

                    <div className="bg-surface border border-border rounded-xl overflow-hidden">
                        <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
                            <span className="w-3 h-3 rounded-full bg-red-500" />
                            <span className="w-3 h-3 rounded-full bg-yellow-500" />
                            <span className="w-3 h-3 rounded-full bg-green-500" />
                            <span className="ml-3 text-xs font-body text-text-secondary">sys_comm_link.sh</span>
                        </div>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-5 p-6">
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-body text-primary tracking-widest">
                                    {">"} IDENTIFIER (NAME) <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={form.name}
                                    onChange={e => setForm({ ...form, name: e.target.value })}
                                    placeholder="Juana Dela Cruz"
                                    className="px-4 py-2.5 bg-background border border-border rounded text-sm font-body text-text-primary placeholder:text-outline focus:outline-none focus:border-aquamarine transition-colors duration-200"
                                />
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-body text-primary tracking-widest">
                                    {">"} TOPIC_THREAD <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={form.subject}
                                    onChange={e => setForm({ ...form, subject: e.target.value })}
                                    placeholder="Project Inquiry / Collaboration"
                                    className="px-4 py-2.5 bg-background border border-border rounded text-sm font-body text-text-primary placeholder:text-outline focus:outline-none focus:border-aquamarine transition-colors duration-200"
                                />
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-body text-primary tracking-widest">
                                    {">"} PAYLOAD (MESSAGE) <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    required
                                    rows={5}
                                    value={form.message}
                                    onChange={e => setForm({ ...form, message: e.target.value })}
                                    placeholder="Enter transmission data here..."
                                    className="px-4 py-2.5 bg-background border border-border rounded text-sm font-body text-text-primary placeholder:text-outline focus:outline-none focus:border-aquamarine transition-colors duration-200 resize-none"
                                />
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-body text-primary tracking-widest">
                                    {">"} ATTACHMENT <span className="text-text-secondary ml-1">(optional)</span>
                                </label>
                                <input
                                    type="file"
                                    accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                                    onChange={e => {
                                        const selected = e.target.files?.[0] ?? null
                                        if (selected && selected.size > 5 * 1024 * 1024) {
                                            setFile(null)
                                            setFileError("File exceeds 5MB limit.")
                                            e.target.value = ""
                                            return
                                        }
                                        setFile(selected)
                                        setFileError(null)
                                    }}
                                    className="text-xs font-body text-text-secondary file:mr-4 file:py-2 file:px-3 file:rounded file:border file:border-border file:bg-background file:text-text-secondary file:text-xs hover:file:border-aquamarine hover:file:text-aquamarine file:transition-colors file:duration-200 file:cursor-pointer"
                                />
                                {fileError && (
                                    <span className="text-xs font-body text-red-400">{fileError}</span>
                                )}
                                {!fileError && file && (
                                    <span className="text-xs font-body text-text-secondary">{file.name}</span>
                                )}
                            </div>

                            <button
                                type="submit"
                                disabled={status === "loading"}
                                className="self-end px-6 py-2.5 bg-primary text-background text-sm font-body font-medium rounded hover:bg-aquamarine transition-colors duration-200 disabled:opacity-50"
                            >
                                {status === "loading" ? "[ TRANSMITTING... ]" : "[ EXECUTE_SEND ]"}
                            </button>

                            {status === "success" && (
                                <p className="text-xs font-body text-green-400">Transmission successful. I'll be in touch.</p>
                            )}
                            {status === "error" && (
                                <p className="text-xs font-body text-red-400">Transmission failed. Try again or email directly.</p>
                            )}
                        </form>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col gap-6 h-full"
                >
                    <div className="flex items-center justify-between">
                        <h2 className="font-heading text-3xl font-bold text-text-primary">Off Duty</h2>
                        <span className="text-xs font-body text-text-secondary tracking-widest">SYS.STATE = IDLE</span>
                    </div>

                    <div className="relative rounded-xl overflow-hidden flex-1 min-h-48">
                        <motion.div
                            className="flex h-full"
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        >
                            {carouselImages.length > 0 && [...carouselImages, ...carouselImages].map((src, i) => (
                                <div key={i} className="shrink-0 h-full relative" style={{ width: "50%" }}>
                                    <Image src={src} alt="" fill className="object-cover" sizes="50vw" />
                                </div>
                            ))}
                        </motion.div>

                        <div
                            className="absolute inset-0"
                            style={{ background: "linear-gradient(to top, rgba(27,17,19,0.9) 0%, transparent 60%)" }}
                        />
                        <div className="absolute top-4 left-4">
                            <span className="px-2 py-1 text-xs font-body tracking-widest uppercase bg-background/60 backdrop-blur-sm border border-border text-text-secondary rounded">
                                LENS_STUDY
                            </span>
                        </div>
                        <Camera size={16} className="absolute top-4 right-4 text-text-secondary" />
                        <div className="absolute bottom-4 left-4 right-4">
                            <h3 className="font-heading text-xl font-bold text-text-primary">Quiet Beaches & Urban Wanders</h3>
                            <p className="font-body text-xs text-text-secondary mt-1 leading-relaxed">
                                No crowds, just good water and zero notifications. Documenting the in-between moments.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-3 p-4 bg-surface border border-border rounded-xl">
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-body text-text-secondary">LOC: 16.29°N, 120.63°E</span>
                                <Mountain size={14} className="text-text-secondary" />
                            </div>
                            <div>
                                <h3 className="font-heading text-lg font-bold text-text-primary">Mt. Ulap</h3>
                                <p className="text-xs font-body text-text-secondary uppercase tracking-wider">Elevation: 1846m</p>
                            </div>
                            <div className="flex flex-col gap-1">
                                <div className="w-full h-1 bg-surface-high rounded-full overflow-hidden">
                                    <div className="h-full bg-primary rounded-full" style={{ width: "100%" }} />
                                </div>
                                <span className="text-xs font-body text-text-secondary text-right">Trail completion: 100%</span>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 p-4 bg-surface border border-border rounded-xl">
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-body tracking-widest uppercase text-text-secondary">LORE_ARCHIVE</span>
                                <BookOpen size={14} className="text-text-secondary" />
                            </div>
                            <div className="flex flex-col gap-2">
                                {[
                                    { title: "Game of Thrones", sub: "Political syntax analysis." },
                                    { title: "Witch Hat Atelier", sub: "Visual magic systems." },
                                    { title: "Fullmetal Alchemist", sub: "Equivalent exchange, always." },
                                ].map(item => (
                                    <div key={item.title} className="flex flex-col border-l-2 border-primary pl-2">
                                        <span className="text-xs font-body text-text-primary">{item.title}</span>
                                        <span className="text-xs font-body text-text-secondary">{item.sub}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    )
}
