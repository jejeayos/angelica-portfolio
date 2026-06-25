"use client"
import { forwardRef } from "react";
type FileInputProps = {
    id: string
    label: string
    accept?: string
    isRequired?: boolean
}

const FileInput = forwardRef<HTMLInputElement, FileInputProps>(({ id, label, accept, isRequired}, ref) => {

    return (
        <div className="flex flex-col gap-1">
            <label htmlFor={id} className="text-sm font-medium text-text-secondary">{label}</label>
            <input
                ref={ref}
                type="file"
                id={id}
                accept={accept}
                required={isRequired}
                className="w-full text-sm text-text-primary cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-primary file:text-white hover:file:bg-accent"
            />
        </div>
    )
})

FileInput.displayName = "FileInput";
export default FileInput;
