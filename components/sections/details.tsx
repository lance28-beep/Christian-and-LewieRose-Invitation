"use client"

import { Section } from "@/components/section"
import { Shirt, Copy, Check, Navigation, MapPin, Phone } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import { QRCodeSVG } from "qrcode.react"
import { siteConfig } from "@/content/site"

export function Details() {
  const [copiedItems, setCopiedItems] = useState<Set<string>>(new Set())

  const copyToClipboard = async (text: string, itemId: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedItems(prev => new Set(prev).add(itemId))
      setTimeout(() => {
        setCopiedItems(prev => {
          const newSet = new Set(prev)
          newSet.delete(itemId)
          return newSet
        })
      }, 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  // Ceremony venue information
  const ceremonyVenueName = siteConfig.ceremony.venue
  const ceremonyVenueDetail = siteConfig.ceremony.venueDetail
  const ceremonyAddress = siteConfig.ceremony.address
  const ceremonyVenue = `${ceremonyVenueName}`
  const ceremonyMapsLink = `https://maps.google.com/?q=${encodeURIComponent(ceremonyVenue)}`
  const ceremonyTime = siteConfig.ceremony.time
  const ceremonyDay = siteConfig.ceremony.day
  const ceremonyDate = new Date(siteConfig.ceremony.date)
  const monthNames = ["January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"]
  const ceremonyMonth = monthNames[ceremonyDate.getMonth()]
  const ceremonyDayNum = ceremonyDate.getDate()
  const ceremonyYear = ceremonyDate.getFullYear()

  // Reception venue information
  const receptionVenueName = siteConfig.reception.venue
  const receptionVenueDetail = siteConfig.reception.venueDetail
  const receptionAddress = siteConfig.reception.address
  const receptionVenue = `${receptionVenueName}`
  const receptionMapsLink = `https://maps.google.com/?q=${encodeURIComponent(receptionVenue)}`

  const openInMaps = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer')
  }


  return (
    <Section id="details" className="relative py-16 sm:py-20 md:py-24 lg:py-28">
      {/* Background matching countdown section */}
      <div 
        className="absolute inset-0 bg-[#E6DFD2] backdrop-blur-sm pointer-events-none" 
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, rgba(0,0,0,0.03) 0px, transparent 1px, transparent 2px, rgba(0,0,0,0.03) 3px),
            repeating-linear-gradient(90deg, rgba(0,0,0,0.03) 0px, transparent 1px, transparent 2px, rgba(0,0,0,0.03) 3px),
            repeating-linear-gradient(45deg, rgba(0,0,0,0.02) 0px, transparent 1px, transparent 4px, rgba(0,0,0,0.02) 5px)
          `,
          backgroundSize: '100% 100%, 100% 100%, 20px 20px',
          filter: 'contrast(1.1) brightness(0.98)',
        }}
      />

      {/* Bottom Left Corner Decoration */}
      <div className="absolute bottom-0 left-0 z-10 pointer-events-none">
        <Image
          src="/decoration/bottom-left-corner.png"
          alt=""
          width={200}
          height={200}
          className="w-auto h-auto max-w-[100px] sm:max-w-[120px] md:max-w-[150px]"
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
          className="w-auto h-auto max-w-[100px] sm:max-w-[120px] md:max-w-[150px] scale-x-[-1]"
          priority
        />
      </div>

      {/* Header */}
      <div className="relative z-10 text-center mb-8 sm:mb-12 md:mb-16 px-4 sm:px-6">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="h-[1px] w-12 sm:w-16 md:w-24 bg-gradient-to-r from-transparent via-[#292E41] to-transparent" />
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#292E41] mb-4 sm:mb-6 uppercase tracking-[0.1em] sm:tracking-[0.12em] elegant-text-shadow" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 700 }}>
          Event Details
        </h2>
        <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
          <div className="h-[1px] w-12 sm:w-16 md:w-24 bg-gradient-to-r from-transparent via-[#292E41] to-transparent" />
        </div>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-[#292E41]/80 max-w-xl mx-auto leading-relaxed tracking-wide px-2" style={{ fontFamily: '"Inter", sans-serif', fontWeight: 400 }}>
          Everything you need to know about our special day
        </p>
      </div>

      {/* Venue and Event Information */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 mb-8 sm:mb-12 md:mb-16 space-y-6 sm:space-y-10 md:space-y-14">
        
        {/* Ceremony Card */}
        <div className="relative group">
          {/* Subtle glow on hover */}
          <div className="absolute -inset-1 bg-gradient-to-br from-[#292E41]/20 to-[#292E41]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />
          
          {/* Main card */}
          <div className="relative elegant-card rounded-xl sm:rounded-2xl overflow-hidden border border-[#292E41]/30 premium-shadow hover:border-[#292E41]/50 transition-all duration-300" style={{ backgroundColor: '#E6DFD2' }}>
            {/* Venue Image */}
            <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 overflow-hidden">
              <Image
                src="/Details/Lokal ng Brookside.jpg"
                alt={ceremonyVenueName}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1280px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              {/* Venue name overlay */}
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 md:bottom-6 md:left-6 right-3 sm:right-4 md:right-6">
                <p className="text-base sm:text-lg md:text-xl font-[family-name:var(--font-ephesis)] text-white mb-1 sm:mb-2 drop-shadow-lg">
                  Ceremony
                </p>
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-0.5 sm:mb-1 drop-shadow-lg uppercase tracking-[0.1em] leading-tight" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 700 }}>
                  {ceremonyVenueName}
                </h3>
                <p className="text-sm sm:text-base md:text-lg font-normal text-white/95 drop-shadow-md tracking-wide" style={{ fontFamily: '"Inter", sans-serif', fontWeight: 400 }}>
                  {ceremonyVenueDetail}
                </p>
              </div>
            </div>

            {/* Event Details Content */}
            <div className="p-3 sm:p-5 md:p-7 lg:p-9" style={{ backgroundColor: '#E6DFD2' }}>
              {/* Date Section */}
              <div className="text-center mb-5 sm:mb-8 md:mb-10">
                {/* Day name */}
                <p className="text-xs sm:text-sm md:text-base font-bold text-[#292E41] uppercase tracking-[0.2em] mb-2 sm:mb-3" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 700 }}>
                  {ceremonyDay}
                </p>
                
                {/* Month - Script style */}
                <div className="mb-2 sm:mb-4">
                  <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-ephesis)] text-[#292E41] leading-none">
                    {ceremonyMonth}
                  </p>
                </div>
                
                {/* Day and Year */}
                <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 md:mb-7">
                  <p className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#292E41] leading-none elegant-text-shadow" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 700 }}>
                    {ceremonyDayNum}
                  </p>
                  <div className="h-10 sm:h-12 md:h-16 lg:h-20 w-[2px] bg-gradient-to-b from-[#292E41] via-[#292E41] to-[#292E41]" />
                  <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-[#292E41] leading-none" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>
                    {ceremonyYear}
                  </p>
                </div>

                {/* Decorative line */}
                <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="h-[1px] w-8 sm:w-10 md:w-14 bg-gradient-to-r from-transparent via-[#292E41] to-[#292E41]" />
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#292E41] rounded-full" />
                  <div className="h-[1px] w-8 sm:w-10 md:w-14 bg-gradient-to-l from-transparent via-[#292E41] to-[#292E41]" />
                </div>

                {/* Time */}
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#292E41] tracking-wide mb-4 sm:mb-6" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 700 }}>
                  {ceremonyTime}
                </p>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-[#292E41] tracking-wide" style={{ fontFamily: '"Inter", sans-serif', fontWeight: 400 }}>
                  Ceremony
                </p>
              </div>

              {/* Location Details */}
              <div className="bg-gradient-to-br from-white/40 to-white rounded-xl p-3 sm:p-4 md:p-5 mb-4 sm:mb-6 border border-[#292E41]/20">
                <div className="flex items-start gap-2 sm:gap-3 md:gap-4">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#292E41] mt-0.5 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm sm:text-base md:text-lg font-bold text-[#292E41] mb-1.5 sm:mb-2 uppercase tracking-wide" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 700 }}>
                      Location
                    </p>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl font-normal text-[#292E41] leading-relaxed" style={{ fontFamily: '"Inter", sans-serif', fontWeight: 400 }}>
                      {ceremonyVenueName}
                    </p>
                    {ceremonyVenueDetail && (
                      <p className="text-xs sm:text-sm md:text-base font-normal text-[#292E41]/70 leading-relaxed mt-1" style={{ fontFamily: '"Inter", sans-serif', fontWeight: 400 }}>
                        {ceremonyVenueDetail}
                      </p>
                    )}
                    <p className="text-xs sm:text-sm md:text-base font-normal text-[#292E41]/70 leading-relaxed" style={{ fontFamily: '"Inter", sans-serif', fontWeight: 400 }}>
                      {ceremonyAddress}
                    </p>
                  </div>
                  {/* QR Code for Ceremony - Right side */}
                  <div className="flex flex-col items-center gap-1.5 sm:gap-2 flex-shrink-0">
                    <div className="bg-white p-1.5 sm:p-2 md:p-2.5 rounded-lg border border-[#292E41]/20 shadow-sm">
                      <QRCodeSVG
                        value={ceremonyMapsLink}
                        size={80}
                        level="M"
                        includeMargin={false}
                        fgColor="#292E41"
                        bgColor="#FFFFFF"
                      />
                    </div>
                    <p className="text-[10px] sm:text-xs md:text-sm font-normal text-[#292E41]/60 italic text-center max-w-[80px]" style={{ fontFamily: '"Inter", sans-serif', fontWeight: 400 }}>
                      Scan for directions
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4">
                <button
                  onClick={() => openInMaps(ceremonyMapsLink)}
                  className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 md:py-3 bg-[#292E41] hover:bg-[#292E41]/90 text-[#E6DFD2] rounded-lg font-bold text-sm sm:text-base md:text-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] premium-shadow"
                  style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 700 }}
                  aria-label="Get directions to ceremony venue"
                >
                  <Navigation className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 flex-shrink-0" />
                  <span>Get Directions</span>
                </button>
                <button
                  onClick={() => copyToClipboard(ceremonyVenue, 'ceremony')}
                  className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 md:py-3 bg-white border-2 border-[#292E41]/30 hover:border-[#292E41]/50 hover:bg-[#E6DFD2]/50 text-[#292E41] rounded-lg font-bold text-sm sm:text-base md:text-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                  style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 700 }}
                  aria-label="Copy ceremony venue address"
                >
                  {copiedItems.has('ceremony') ? (
                    <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 flex-shrink-0 text-[#292E41]" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 flex-shrink-0 text-[#292E41]" />
                  )}
                  <span>{copiedItems.has('ceremony') ? 'Copied!' : 'Copy Address'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Reception Card */}
        <div className="relative group">
          {/* Subtle glow on hover */}
          <div className="absolute -inset-1 bg-gradient-to-br from-[#292E41]/20 to-[#292E41]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />
          
          {/* Main card */}
          <div className="relative elegant-card rounded-xl sm:rounded-2xl overflow-hidden border border-[#292E41]/30 premium-shadow hover:border-[#292E41]/50 transition-all duration-300" style={{ backgroundColor: '#E6DFD2' }}>
            {/* Venue Image */}
            <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 overflow-hidden">
              <Image
                src="/Details/Lokal ng Brookside & Kubo Grill.jpg"
                alt={receptionVenueName}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1280px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              {/* Venue name overlay */}
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 md:bottom-6 md:left-6 right-3 sm:right-4 md:right-6">
                <p className="text-base sm:text-lg md:text-xl font-[family-name:var(--font-ephesis)] text-white mb-1 sm:mb-2 drop-shadow-lg">
                  Reception
                </p>
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-0.5 sm:mb-1 drop-shadow-lg uppercase tracking-[0.1em] leading-tight" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 700 }}>
                  {receptionVenueName}
                </h3>
                <p className="text-sm sm:text-base md:text-lg font-normal text-white/95 drop-shadow-md tracking-wide" style={{ fontFamily: '"Inter", sans-serif', fontWeight: 400 }}>
                  {receptionVenueDetail}
                </p>
              </div>
            </div>

            {/* Event Details Content */}
            <div className="p-3 sm:p-5 md:p-7 lg:p-9" style={{ backgroundColor: '#E6DFD2' }}>
              {/* Reception Info Section */}
              <div className="text-center mb-5 sm:mb-8 md:mb-10">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-[#292E41] tracking-wide mb-4 sm:mb-6" style={{ fontFamily: '"Inter", sans-serif', fontWeight: 400 }}>
                  Follow after the ceremony
                </p>
              </div>

              {/* Location Details */}
              <div className="bg-gradient-to-br from-white/40 to-white rounded-xl p-3 sm:p-4 md:p-5 mb-4 sm:mb-6 border border-[#292E41]/20">
                <div className="flex items-start gap-2 sm:gap-3 md:gap-4">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#292E41] mt-0.5 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm sm:text-base md:text-lg font-bold text-[#292E41] mb-1.5 sm:mb-2 uppercase tracking-wide" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 700 }}>
                      Location
                    </p>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl font-normal text-[#292E41] leading-relaxed" style={{ fontFamily: '"Inter", sans-serif', fontWeight: 400 }}>
                      {receptionVenueName}
                    </p>
                    {receptionVenueDetail && (
                      <p className="text-xs sm:text-sm md:text-base font-normal text-[#292E41]/70 leading-relaxed mt-1" style={{ fontFamily: '"Inter", sans-serif', fontWeight: 400 }}>
                        {receptionVenueDetail}
                      </p>
                    )}
                    <p className="text-xs sm:text-sm md:text-base font-normal text-[#292E41]/70 leading-relaxed" style={{ fontFamily: '"Inter", sans-serif', fontWeight: 400 }}>
                      {receptionAddress}
                    </p>
                  </div>
                  {/* QR Code for Reception - Right side */}
                  <div className="flex flex-col items-center gap-1.5 sm:gap-2 flex-shrink-0">
                    <div className="bg-white p-1.5 sm:p-2 md:p-2.5 rounded-lg border border-[#292E41]/20 shadow-sm">
                      <QRCodeSVG
                        value={receptionMapsLink}
                        size={80}
                        level="M"
                        includeMargin={false}
                        fgColor="#292E41"
                        bgColor="#FFFFFF"
                      />
                    </div>
                    <p className="text-[10px] sm:text-xs md:text-sm font-normal text-[#292E41]/60 italic text-center max-w-[80px]" style={{ fontFamily: '"Inter", sans-serif', fontWeight: 400 }}>
                      Scan for directions
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4">
                <button
                  onClick={() => openInMaps(receptionMapsLink)}
                  className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 md:py-3 bg-[#292E41] hover:bg-[#292E41]/90 text-[#E6DFD2] rounded-lg font-bold text-sm sm:text-base md:text-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] premium-shadow"
                  style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 700 }}
                  aria-label="Get directions to reception venue"
                >
                  <Navigation className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 flex-shrink-0" />
                  <span>Get Directions</span>
                </button>
                <button
                  onClick={() => copyToClipboard(receptionVenue, 'reception')}
                  className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 md:py-3 bg-white border-2 border-[#292E41]/30 hover:border-[#292E41]/50 hover:bg-[#E6DFD2]/50 text-[#292E41] rounded-lg font-bold text-sm sm:text-base md:text-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                  style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 700 }}
                  aria-label="Copy reception venue address"
                >
                  {copiedItems.has('reception') ? (
                    <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 flex-shrink-0 text-[#292E41]" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 flex-shrink-0 text-[#292E41]" />
                  )}
                  <span>{copiedItems.has('reception') ? 'Copied!' : 'Copy Address'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Attire Information */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-[1px] w-12 sm:w-16 md:w-24 bg-gradient-to-r from-transparent via-[#292E41] to-transparent" />
          </div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#292E41] mb-4 sm:mb-6 uppercase tracking-[0.1em] sm:tracking-[0.12em] elegant-text-shadow" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 700 }}>
            Attire & Color Palette
          </h3>
          <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
            <div className="h-[1px] w-12 sm:w-16 md:w-24 bg-gradient-to-r from-transparent via-[#292E41] to-transparent" />
          </div>
        </div>

        {/* Color Palette Section */}
        <div className="relative group mb-8 sm:mb-10 md:mb-12">
          <div className="relative backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-7 md:p-9 border-2 border-[#292E41]/30 shadow-lg hover:shadow-xl transition-all duration-300" style={{ backgroundColor: '#E6DFD2' }}>
            <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#292E41] mb-4 sm:mb-6 uppercase tracking-[0.12em] text-center" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 700 }}>
              Attire Guidelines
            </h4>
            <p className="text-lg sm:text-xl md:text-2xl font-normal text-[#292E41] leading-relaxed text-center mb-6 sm:mb-8" style={{ fontFamily: '"Inter", sans-serif', fontWeight: 400 }}>
              LADIES: LIGHT PINK | GENTLEMEN: NAVY BLUE
            </p>
            <div className="flex justify-center gap-3 sm:gap-4 flex-wrap">
              <div className="flex flex-col items-center gap-2 sm:gap-2.5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full shadow-lg border-2 border-white bg-[#000080] hover:scale-110 hover:shadow-xl transition-all duration-300" />
                <span className="text-sm sm:text-base font-normal text-[#292E41]" style={{ fontFamily: '"Inter", sans-serif', fontWeight: 400 }}>Navy Blue</span>
              </div>
              <div className="flex flex-col items-center gap-2 sm:gap-2.5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full shadow-lg border-2 border-white bg-[#292E41] hover:scale-110 hover:shadow-xl transition-all duration-300" />
                <span className="text-sm sm:text-base font-normal text-[#292E41]" style={{ fontFamily: '"Inter", sans-serif', fontWeight: 400 }}>Slate Blue</span>
              </div>
              <div className="flex flex-col items-center gap-2 sm:gap-2.5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full shadow-lg border-2 border-white bg-[#DE697B] hover:scale-110 hover:shadow-xl transition-all duration-300" />
                <span className="text-sm sm:text-base font-normal text-[#292E41]" style={{ fontFamily: '"Inter", sans-serif', fontWeight: 400 }}>Dusty Rose</span>
              </div>
              <div className="flex flex-col items-center gap-2 sm:gap-2.5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full shadow-lg border-2 border-white bg-[#EDABAD] hover:scale-110 hover:shadow-xl transition-all duration-300" />
                <span className="text-sm sm:text-base font-normal text-[#292E41]" style={{ fontFamily: '"Inter", sans-serif', fontWeight: 400 }}>Soft Pink</span>
              </div>
              <div className="flex flex-col items-center gap-2 sm:gap-2.5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full shadow-lg border-2 border-white bg-[#F1D3D3] hover:scale-110 hover:shadow-xl transition-all duration-300" />
                <span className="text-sm sm:text-base font-normal text-[#292E41]" style={{ fontFamily: '"Inter", sans-serif', fontWeight: 400 }}>Blush</span>
              </div>
            </div>
          </div>
        </div>

        {/* Important Reminders Section */}
        <div className="relative group mt-10 sm:mt-14 md:mt-16">
          <div className="absolute -inset-1 bg-gradient-to-br from-[#292E41]/15 to-[#292E41]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />
          
          <div className="relative backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-7 md:p-9 border-2 border-[#292E41]/30 shadow-lg hover:shadow-xl transition-all duration-300" style={{ backgroundColor: '#E6DFD2' }}>
            <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#292E41] mb-6 sm:mb-7 md:mb-8 uppercase tracking-[0.12em] text-center" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 700 }}>
              Important Reminders
            </h4>
            
            {/* Reminders List */}
            <div className="space-y-5 sm:space-y-6 md:space-y-7">
              {/* Attendance Limited */}
              <div className="bg-gradient-to-br from-white/30 via-white/20 to-white rounded-xl p-5 sm:p-6 md:p-7 border border-[#292E41]/20">
                <p className="text-base sm:text-lg md:text-xl font-normal text-[#292E41] leading-relaxed" style={{ fontFamily: '"Inter", sans-serif', fontWeight: 400 }}>
                  <span className="font-bold" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 700 }}>Invitation Only:</span> As we celebrate this moment with our closest loved ones, we kindly ask that attendance be limited to those named on the invitation.
                </p>
              </div>

              {/* No Boxed Gifts */}
              <div className="bg-gradient-to-br from-white/30 via-white/20 to-white rounded-xl p-5 sm:p-6 md:p-7 border border-[#292E41]/20">
                <p className="text-base sm:text-lg md:text-xl font-normal text-[#292E41] leading-relaxed" style={{ fontFamily: '"Inter", sans-serif', fontWeight: 400 }}>
                  <span className="font-bold" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 700 }}>Gift Policy:</span> We prefer monetary gift for future use. Gift will be given during the celebration.
                </p>
              </div>

              {/* Adults Only */}
              <div className="bg-gradient-to-br from-white/30 via-white/20 to-white rounded-xl p-5 sm:p-6 md:p-7 border border-[#292E41]/20">
                <p className="text-base sm:text-lg md:text-xl font-normal text-[#292E41] leading-relaxed" style={{ fontFamily: '"Inter", sans-serif', fontWeight: 400 }}>
                  <span className="font-bold" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 700 }}>Adults-Only Event:</span> We love your little ones, but to keep the celebration intimate, we kindly request an adults-only event. (Children in our family and the entourage are the exception)
                </p>
              </div>

              {/* No Photos */}
              <div className="bg-gradient-to-br from-white/30 via-white/20 to-white rounded-xl p-5 sm:p-6 md:p-7 border border-[#292E41]/20">
                <p className="text-base sm:text-lg md:text-xl font-normal text-[#292E41] leading-relaxed" style={{ fontFamily: '"Inter", sans-serif', fontWeight: 400 }}>
                  <span className="font-bold" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 700 }}>Photo Policy:</span> We'd love for everyone to be fully present. Please avoid posting photos during the celebration or ahead of time—our photographers will take care of the memories.
                </p>
              </div>

              {/* RSVP Contact */}
              <div className="bg-gradient-to-br from-white/30 via-white/20 to-white rounded-xl p-5 sm:p-6 md:p-7 border border-[#292E41]/20">
                <p className="text-base sm:text-lg md:text-xl font-normal text-[#292E41] leading-relaxed mb-3 sm:mb-4" style={{ fontFamily: '"Inter", sans-serif', fontWeight: 400 }}>
                  <span className="font-bold" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 700 }}>RSVP Contact:</span> Please reach out to Christian & Lewie Rose
                </p>
                <div className="flex flex-col gap-2 sm:gap-3">
                  <a
                    href="tel:+639109879292"
                    className="flex items-center gap-2 sm:gap-3 text-base sm:text-lg md:text-xl text-[#292E41] hover:text-[#292E41]/80 transition-colors duration-200 group"
                    style={{ fontFamily: '"Inter", sans-serif', fontWeight: 400 }}
                  >
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-[#292E41] group-hover:text-[#292E41]/80 transition-colors duration-200 flex-shrink-0" />
                    <span className="font-bold" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 700 }}>Lewie:</span>
                    <span>09109879292</span>
                  </a>
                  <a
                    href="tel:+639101667132"
                    className="flex items-center gap-2 sm:gap-3 text-base sm:text-lg md:text-xl text-[#292E41] hover:text-[#292E41]/80 transition-colors duration-200 group"
                    style={{ fontFamily: '"Inter", sans-serif', fontWeight: 400 }}
                  >
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-[#292E41] group-hover:text-[#292E41]/80 transition-colors duration-200 flex-shrink-0" />
                    <span className="font-bold" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 700 }}>Christian:</span>
                    <span>09101667132</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Thank You Note */}
            <div className="mt-7 sm:mt-8 md:mt-9 pt-6 sm:pt-7 md:pt-8 border-t border-[#292E41]/20">
              <p className="text-base sm:text-lg md:text-xl font-normal text-[#292E41] text-center leading-relaxed italic" style={{ fontFamily: '"Inter", sans-serif', fontWeight: 400 }}>
                Thank you for your understanding and cooperation. We look forward to celebrating with you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

