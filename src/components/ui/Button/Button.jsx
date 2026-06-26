import Link from "next/link";
import { cn } from "@/lib/utils";

const variants={
    primary:'bg-[var(--accent)] text-[var(--text)] hover:-translate-y-0.5 hover:shadow-lg',
    secondary:'border border-[var(--text)] text-[var(--text)] hover:bg-black hover:text-white',
    ghost:'text-[var(--text)] hover:bg-black/5'
}
const sizes={
    sm:'px-4 py-2 text-sm',
    md:'px-5 py-3 text-base',
    lg:'px-7 py-4 text-base'
}
const baseStyles =
"inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2";
export default function Button({
    children, href, external=false, variant='primary',size='md' , className="",...props
}){
 const classes = cn(
     baseStyles,
    variants[variant],
    sizes[size],
    className
 )

if(href){
    if(external){
        return(
            <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={classes}
            >
                {children}
            </a>
        );
    }
    return(
        <Link href={href} className={classes}>{children}</Link>
    );
}
return(
    <button className={classes} {...props}>{children}</button>
)

}