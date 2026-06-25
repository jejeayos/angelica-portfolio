"use client"
import Heading from "./Heading";
import Inputs from "./Inputs";
import FileInput from "./FileInput";
import { useState, useRef, ChangeEvent } from "react";
import axios from "axios";
import { API_URL } from "@/constants";
import { Mail, Phone } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
    const fileRef = useRef<HTMLInputElement>(null);
    const [formData, setFormData] = useState({
       name: "",
       email: "",
       subject: "",
       message: "" 
    });

    const [status, setStatus] = useState("idle");

    const handleChange = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setFormData({...formData, [evt.target.id]: evt.target.value});

    const handleSubmit = async(evt) => {
        evt.preventDefault();
        setStatus("loading");
        try {
            const data = new FormData();
            data.append("name", formData.name);
            data.append("email", formData.email);
            data.append("subject", formData.subject);
            data.append("message", formData.message);

            if (fileRef.current?.files?.[0]) {
                data.append("attachment", fileRef.current.files[0]);
            }

            await axios.post(`${API_URL}/api/contact`, data);
            setStatus("success");
            setFormData({ name: "", email: "", subject: "", message: "" })
            if (fileRef.current) fileRef.current.value = ""
        } catch {
            setStatus("error");
        }
    }

    return (
        <section id="contact" className="min-h-screen flex flex-col items-center justify-center px-6">
            <Heading variant="secondary" addedStyle="mb-3 text-center w-full">Contact</Heading>
            <div className="flex gap-5 w-full max-w-5xl">
                <div className="w-72 flex flex-col gap-6 self-start">
                    <div>
                        <p className="flex flex-row gap-1 text-sm font-medium text-text-secondary uppercase tracking-wide">
                            <Mail size={16} className="text-text-secondary" aria-hidden="true"/>Email
                        </p>
                        <span className="text-text-primary">jejeayos@gmail.com</span>
                    </div>
                    <div>
                        <p className="flex flex-row gap-1 text-sm font-medium text-text-secondary uppercase tracking-wide">
                            <Phone size={16} className="text-text-secondary" aria-hidden="true"/>Phone
                        </p>
                        <span className="text-text-primary">(+63)927 300 4112</span>
                    </div>
                    <div className="flex flex-row gap-3">
                        <a 
                            className="text-primary font-medium hover:underline"
                            href="https://www.linkedin.com/in/angelica-ayos/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label="visit linkedin profile">
                                 <FaLinkedin size={20} aria-hidden="true" />
                        </a>

                        <a 
                            className="text-primary font-medium hover:underline" 
                            href="https://github.com/jejeayos" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label="visit github profile">
                                 <FaGithub size={20} aria-hidden="true" />
                        </a>
                    </div>
                </div>
                
                <div className="contact-form flex-1">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <Inputs variant="input" label="Name" id="name" type="text" isRequired={true} onChange={handleChange} value={formData.name}/>
                        <Inputs variant="input" label="Email" id="email" type="email" isRequired={true} onChange={handleChange} value={formData.email}/>
                        <Inputs variant="input" label="Subject" id="subject" type="text" isRequired={true} onChange={handleChange} value={formData.subject}/>
                        <Inputs variant="textarea" label="Message" id="message" isRequired={true} onChange={handleChange} value={formData.message}/>
                        <FileInput ref={fileRef} id="attachment" label="Attachment" accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"/>
                        <button 
                            className="px-6 py-3 rounded-lg text-sm font-semibold transition-colors duration-200 bg-primary text-white hover:bg-accent" 
                            type="submit"
                        >Send Message</button>
                        {status === "success" && (
                            <div className="p-3 rounded-lg bg-green-100 border border-green-300 text-green-700 text-sm font-medium">
                                Message sent! I'll get back to you soon.
                            </div>
                        )}
                        {status === "error" && (
                            <div className="p-3 rounded-lg bg-red-100 border border-red-300 text-red-700 text-sm font-medium">
                                Something went wrong. Please try again.
                            </div>
                        )}
                        {status === "loading" && (
                            <div className="p-3 rounded-lg bg-surface border border-border text-text-secondary text-sm font-medium">
                                Sending...
                            </div>
                        )}

                    </form>
                </div>
            </div>
        </section>
    )
}