import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
}

export default function Section({
  id,
  children,
  className = "",
  fullWidth = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`px-4 sm:px-6 lg:px-8 py-16 md:py-24 ${className}`}
    >
      <div className={fullWidth ? "w-full" : "mx-auto max-w-6xl"}>
        {children}
      </div>
    </section>
  );
}
