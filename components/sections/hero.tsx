"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Heart } from "lucide-react"
import { siteConfig } from "@/content/site"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const ceremonyVenue = siteConfig.ceremony.venue
  const ceremonyAddress = siteConfig.ceremony.address
  const receptionVenue = siteConfig.reception.venue
  const receptionAddress = siteConfig.reception.address
  
  // Parse wedding date
  const weddingDate = new Date(siteConfig.ceremony.date)
  const monthNames = ["January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"]
  const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
  const month = monthNames[weddingDate.getMonth()]
  const day = weddingDate.getDate()
  const year = weddingDate.getFullYear()
  const dayOfWeek = dayNames[weddingDate.getDay()]
  const weddingTime = siteConfig.ceremony.time

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Top Left Corner Decoration */}
      <div className="absolute top-0 left-0 z-10 pointer-events-none">
        <Image
          src="/decoration/bottom-left-corner.png"
          alt=""
          width={200}
          height={200}
          className="w-auto h-auto max-w-[150px] sm:max-w-[200px] md:max-w-[250px] scale-y-[-1]"
          priority
        />
      </div>

      {/* Top Right Corner Decoration */}
      <div className="absolute top-0 right-0 z-10 pointer-events-none">
        <Image
          src="/decoration/bottom-left-corner.png"
          alt=""
          width={200}
          height={200}
          className="w-auto h-auto max-w-[150px] sm:max-w-[200px] md:max-w-[250px] scale-x-[-1] scale-y-[-1]"
          priority
        />
      </div>

      {/* Bottom Left Corner Decoration */}
      <div className="absolute bottom-0 left-0 z-10 pointer-events-none">
        <Image
          src="/decoration/bottom-left-corner.png"
          alt=""
          width={200}
          height={200}
          className="w-auto h-auto max-w-[150px] sm:max-w-[200px] md:max-w-[250px]"
          priority
        />
      </div>

      {/* Bottom Right Corner Decoration */}
      <div className="absolute bottom-0 right-0 z-10 pointer-events-none">
        <Image
          src="/decoration/bottom-left-corner.png"
          alt=""
          width={200}
          height={200}
          className="w-auto h-auto max-w-[150px] sm:max-w-[200px] md:max-w-[250px] scale-x-[-1]"
          priority
        />
      </div>

      <div className="relative z-10 w-full container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 flex flex-col items-center justify-center min-h-screen py-16 sm:py-20">
        {/* Elegant Card Container */}
        <div className={`w-full max-w-4xl elegant-card rounded-lg p-8 sm:p-12 md:p-16 lg:p-20 text-center space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10 transition-all duration-1000 ease-out premium-shadow ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ 
          backgroundColor: '#E6DFD2',
          backgroundImage: `
            repeating-linear-gradient(0deg, rgba(0,0,0,0.03) 0px, transparent 1px, transparent 2px, rgba(0,0,0,0.03) 3px),
            repeating-linear-gradient(90deg, rgba(0,0,0,0.03) 0px, transparent 1px, transparent 2px, rgba(0,0,0,0.03) 3px),
            repeating-linear-gradient(45deg, rgba(0,0,0,0.02) 0px, transparent 1px, transparent 4px, rgba(0,0,0,0.02) 5px)
          `,
          backgroundSize: '100% 100%, 100% 100%, 20px 20px',
          filter: 'contrast(1.1) brightness(0.98)'
        }}>
          
          {/* Monogram - Center */}
          <div className="flex justify-center mb-2 sm:mb-4">
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 lg:w-56 lg:h-56">
              <div 
                className="absolute inset-0"
                style={{
                  backgroundColor: '#292E41',
                  maskImage: 'url(/monogram/monogram.png)',
                  maskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  maskPosition: 'center',
                  WebkitMaskImage: 'url(/monogram/monogram.png)',
                  WebkitMaskSize: 'contain',
                  WebkitMaskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'center'
                }}
              />
            </div>
          </div>

          {/* Decorative line with earth tones */}
          <div className="flex items-center justify-center gap-3">
            <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-r from-transparent via-[#292E41] to-transparent" />
          </div>

          {/* Opening Text */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-normal text-[#292E41] tracking-wide px-4" style={{ fontFamily: '"Inter", sans-serif', fontWeight: 400 }}>
            Together with our families, we,
          </p>

          {/* Bride Name */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#292E41] uppercase tracking-[0.12em] sm:tracking-[0.15em] leading-tight px-2 elegant-text-shadow" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 700, fontOpticalSizing: 'auto', fontStyle: 'normal', fontVariationSettings: '"wdth" 100' }}>
            {siteConfig.couple.bride.toUpperCase()}
          </h1>

          {/* And - Script Style with warm gold accent */}
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-ephesis)] text-[#292E41] my-4 sm:my-6 md:my-8">
            and
          </p>

          {/* Groom Name */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#292E41] uppercase tracking-[0.12em] sm:tracking-[0.15em] leading-tight px-2 elegant-text-shadow" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 700, fontOpticalSizing: 'auto', fontStyle: 'normal', fontVariationSettings: '"wdth" 100' }}>
            {siteConfig.couple.groom.toUpperCase()}
          </h1>

          {/* Decorative line with earth tones */}
          <div className="flex items-center justify-center gap-3">
            <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-r from-transparent via-[#292E41] to-transparent" />
          </div>

          {/* Request Text */}
          <p className="text-sm sm:text-base md:text-lg font-normal text-[#292E41] tracking-wide max-w-xl mx-auto px-6 sm:px-8 leading-relaxed" style={{ fontFamily: '"Inter", sans-serif', fontWeight: 400 }}>
            request the honor of your presence as we are unified in marriage before our Lord God.
          </p>

          {/* Date Display with elegant earth tone accents */}
          <div className="space-y-3 pt-4 sm:pt-6 px-4">
            <div className="flex items-center justify-center gap-3 sm:gap-4">
              <div className="h-[1px] w-12 sm:w-16 md:w-20 bg-gradient-to-r from-transparent via-[#292E41] to-[#292E41]" />
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#292E41] tracking-wider" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 700 }}>
                {month}
              </p>
              <div className="h-[1px] w-12 sm:w-16 md:w-20 bg-gradient-to-l from-transparent via-[#292E41] to-[#292E41]" />
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 md:gap-4 text-[#292E41]">
              <span className="text-sm sm:text-base md:text-lg font-bold uppercase tracking-wider text-[#292E41]" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 700 }}>{dayOfWeek}</span>
              <span className="text-7xl sm:text-8xl md:text-9xl font-bold my-2 sm:my-0 elegant-text-shadow text-[#292E41]" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 700 }}>{day}</span>
              <span className="text-sm sm:text-base md:text-lg font-bold uppercase tracking-wider text-[#292E41]" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 700 }}>{weddingTime}</span>
            </div>
            
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#292E41]" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 700 }}>
              {year}
            </p>
          </div>

          {/* Ceremony with warm gold accent */}
          <div className="pt-4 sm:pt-6">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-r from-transparent via-[#292E41] to-transparent" />
            </div>
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-ephesis)] text-[#292E41] px-4">
              Ceremony
            </p>
            <div className="flex items-center justify-center gap-3 mt-3">
              <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-r from-transparent via-[#292E41] to-transparent" />
            </div>
          </div>

          {/* Venue Details */}
          <div className="space-y-4 pb-4 sm:pb-6 px-4">
            <div className="space-y-1.5">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#292E41] uppercase tracking-wider" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 700 }}>
                {ceremonyVenue}
              </p>
              {/* <p className="text-sm sm:text-base md:text-lg font-normal text-[#292E41]/80" style={{ fontFamily: '"Inter", sans-serif', fontWeight: 400 }}>
                {ceremonyAddress}
              </p> */}
            </div>

            {/* <div className="flex items-center justify-center gap-2">
              <span className="h-[1px] w-8 sm:w-12 bg-gradient-to-r from-transparent via-[#292E41]/60 to-transparent" />
              <span className="w-1 h-1 rounded-full bg-[#292E41]/70" />
              <span className="h-[1px] w-8 sm:w-12 bg-gradient-to-r from-transparent via-[#292E41]/60 to-transparent" />
            </div> */}
          </div>

          {/* Reception with warm gold accent */}
          {/* <div className="pt-4 sm:pt-6">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-r from-transparent via-[#292E41] to-transparent" />
            </div>
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-ephesis)] text-[#292E41] px-4">
              Reception
            </p>
            <div className="flex items-center justify-center gap-3 mt-3">
              <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-r from-transparent via-[#292E41] to-transparent" />
            </div>
          </div> */}

      

          {/* Elegant CTA Button with earth tone gradient */}
          <div className="pt-6 sm:pt-8">
            <a
              href="#guest-list"
              className="inline-flex items-center gap-2 sm:gap-3 px-8 sm:px-10 md:px-12 lg:px-14 py-3 sm:py-3.5 md:py-4 lg:py-4.5 font-bold text-sm sm:text-base md:text-lg text-[#E6DFD2] bg-[#292E41] hover:bg-[#292E41]/90 transition-all duration-300 tracking-wider uppercase border-2 border-[#292E41] hover:border-[#292E41]/80 hover:scale-105 hover:shadow-[0_10px_30px_rgba(41,46,65,0.25)] hover:brightness-105 active:scale-100 premium-shadow rounded-sm relative overflow-hidden group"
              style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 700 }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></span>
              <Heart size={16} className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 group-hover:scale-110 transition-transform duration-300 text-[#E6DFD2]" />
              <span className="relative z-10">RSVP</span>
            </a>
          </div>

          {/* Bottom decorative line */}
          <div className="flex items-center justify-center gap-3 pt-6">
            <div className="h-[1px] w-24 sm:w-32 bg-gradient-to-r from-transparent via-[#292E41] to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
