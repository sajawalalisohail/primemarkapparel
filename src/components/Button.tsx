import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  className?: string;
}

export default function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-zinc-950 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-amber-500 text-zinc-950 hover:bg-amber-400 active:bg-amber-600",
    secondary:
      "bg-zinc-800 text-white hover:bg-zinc-700 active:bg-zinc-900 border border-zinc-700",
    outline:
      "bg-transparent text-amber-400 border border-amber-400 hover:bg-amber-400 hover:text-zinc-950",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm rounded-md",
    md: "px-6 py-3 text-base rounded-lg",
    lg: "px-8 py-4 text-lg rounded-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
