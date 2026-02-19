"use client";

import Link from "next/link";
import Image from "next/image";

interface BrandLogoProps {
  variant: "navbar" | "footer";
  /** Only required for navbar variant - indicates if hero section is visible */
  isHeroVisible?: boolean;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export default function BrandLogo({
  variant,
  isHeroVisible = false,
  className = "",
  onClick,
}: BrandLogoProps) {
  const imageProps = {
    alt: "PrimeMark Apparel",
    width: 200,
    height: 50,
  };

  // Footer variant: simple dark/light mode switching
  if (variant === "footer") {
    return (
      <Link href="/" className={className}>
        {/* Light Mode Logo (Dark Text) - newlogod.svg */}
        <Image
          src="/logo/newlogod.svg"
          {...imageProps}
          className="logo-light h-16 w-auto"
        />
        {/* Dark Mode Logo (White Text) - newlogo.svg */}
        <Image
          src="/logo/newlogo.svg"
          {...imageProps}
          className="logo-dark h-16 w-auto"
        />
      </Link>
    );
  }

  // Navbar variant: complex logic with hero state
  // In hero area (light mode on homepage, not scrolled): show white logo
  // Otherwise: follow theme (light mode = dark logo, dark mode = white logo)
  return (
    <Link href="/" onClick={onClick} className={className}>
      {/* Dark Text Logo - Light Mode + NOT in Hero */}
      <Image
        src="/logo/newlogod.svg"
        {...imageProps}
        priority
        className={`h-16 w-auto transition-transform duration-300 ease-out group-hover:scale-[1.02] ${
          isHeroVisible ? "hidden" : "logo-light"
        }`}
      />
      {/* White Text Logo - Dark Mode OR Hero Area */}
      <Image
        src="/logo/newlogo.svg"
        {...imageProps}
        priority
        className={`h-16 w-auto transition-transform duration-300 ease-out group-hover:scale-[1.02] ${
          isHeroVisible ? "block" : "logo-dark"
        }`}
      />
    </Link>
  );
}
