'use client'

type ButtonVariant = 'primary' | 'secondary' | 'outline';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    variant?: ButtonVariant;
    children: React.ReactNode;
}

export default function Button({
    children,
    variant = 'primary',
    className = '',
    ...props
}: ButtonProps) {

    const baseClasses = "px-6 py-2.5 rounded-lg font-bold transition-all duration-200 active:scale-95 flex items-center justify-center gap-2";

    let variantClasses = "";
if (variant === 'primary') variantClasses = "bg-[#800020] hover:bg-[#600018] text-white shadow-sm"; 
if (variant === 'secondary') variantClasses = "bg-gray-100 text-black hover:bg-gray-200 border border-gray-300";
if (variant === 'outline') variantClasses = "border-2 border-black hover:bg-black hover:text-white text-black";
return(
    <button
    className={`${baseClasses} ${variantClasses} ${className}`}
    {...props}
    >
        {children}
    </button>
)

}
