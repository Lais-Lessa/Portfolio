import { cn } from "@/app/lib/utils"
import { ButtonHTMLAttributes } from "react"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ children, className, ...props}: ButtonProps) => {
    return (
        <button
        className={cn(
            ' bg-white-silver/90 text-base py-2 px-5 rounded-lg text-slate-900 flex justify-center gap-2 hover:bg-sky-800 hover:brightness-200 transition-all disabled:opacity-50 font-bold hover:text-lg',
            className
        )}
        {...props}>
            {children}
        </button>
    )
}