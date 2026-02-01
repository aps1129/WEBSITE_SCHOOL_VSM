"use client";

import Image from "next/image";

interface LogoProps {
  className?: string;
  textWhite?: boolean;
}

export default function Logo({ className = "", textWhite = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo Image */}
      <div className="w-11 h-11 relative flex-shrink-0">
        <Image
          src="/Photos/Logo.jpg"
          alt="VSM School Logo"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* School Name */}
      <span className={`text-xl font-bold ${textWhite ? 'text-white' : 'text-[#1e3a5f]'}`}>
        VSM School
      </span>
    </div>
  );
}
