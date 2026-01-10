"use client"

import Link from "next/link"
import { useEffect } from "react"

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Hide the global navbar while on /gallery
    const navbar = document.querySelector("nav") as HTMLElement | null
    if (navbar) navbar.style.display = "none"
    return () => {
      if (navbar) navbar.style.display = ""
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#F1D3D3]">
      {/* Simple top bar with only Back link */}
      <div className="sticky top-0 z-50 backdrop-blur-md bg-[#F1D3D3]/95 border-b border-[#292E41]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-12 sm:h-14 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#292E41] font-[family-name:var(--font-crimson)] font-semibold text-sm sm:text-base px-3 sm:px-4 py-1.5 sm:py-2 rounded-sm border border-[#292E41]/30 hover:bg-[#292E41]/10 hover:border-[#292E41] transition-all duration-200"
          >
            ← Back to main page
          </Link>
          <div className="text-xs text-[#292E41]/60 font-[family-name:var(--font-crimson)]">Gallery</div>
        </div>
      </div>
      {children}
    </div>
  )
}






