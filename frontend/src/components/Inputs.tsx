type InputProps = {
    variant: "input" | "textarea"
    type?: string
    label: string
    id: string
    isRequired: boolean
    addedStyle?: string
    onChange?: (e) => void
    value?: string

}

export default function Inputs({variant, type, label, id, isRequired, addedStyle, onChange, value}: InputProps) {
    const defaultStyle = "w-full px-3 py-2 rounded-lg border border-border bg-surface text-text-primary focus:outline-none focus:ring-2 focus:ring-primary"
    
    return (
        <div className="flex flex-col gap-1">
            <label htmlFor={id} className="text-sm font-medium text-text-secondary">{label}</label>
            {variant === "input" && 
                <input 
                    type={type} 
                    id={id} 
                    className={`${defaultStyle} ${addedStyle ?? ""}`} 
                    required={isRequired} 
                    onChange={onChange} 
                    value={value}
                />
            }

            {variant === "textarea" && 
                <textarea 
                    id={id} 
                    className={`${defaultStyle} 
                    ${addedStyle ?? ""}`} 
                    required={isRequired} 
                    onChange={onChange}
                    value={value}
                />
            }
        </div>
    )
}