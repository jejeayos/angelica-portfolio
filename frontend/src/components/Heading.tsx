type HeadingProps = {
    variant: "primary" | "secondary"
    children: React.ReactNode
    addedStyle?: string
}

export default function Heading({variant, children, addedStyle} : HeadingProps) {
    const defaultHeadingStyle = "font-heading font-bold! text-text-primary";
    switch (variant) {
        case "primary":
            return <h1 className={`${defaultHeadingStyle} text-5xl ${addedStyle}`}>{children}</h1>;
        case "secondary":
            return <h2 className={`${defaultHeadingStyle} text-4xl ${addedStyle}`}>{children}</h2>;
        default:
            return null;
    }
}