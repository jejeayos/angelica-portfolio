export default function Paragraph({ children }: { children: React.ReactNode }) {
    return <p className="text-base text-text-secondary mt-4 max-w-xl text-center leading-relaxed">{children}</p>
}