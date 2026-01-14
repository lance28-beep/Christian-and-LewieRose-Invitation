"use client"

import React from "react"
import { useEffect, useMemo, useState } from "react"
import { Section } from "@/components/section"
import { Loader2, Users } from "lucide-react"
import Image from "next/image"

interface PrincipalSponsor {
  MalePrincipalSponsor: string
  FemalePrincipalSponsor: string
}

interface EntourageMember {
  Name: string
  RoleCategory: string
  RoleTitle: string
  Email: string
}

export function PrincipalSponsors() {
  // Helper component for elegant section titles
  const SectionTitle = ({
    children,
    align = "center",
    className = "",
  }: {
    children: React.ReactNode
    align?: "left" | "center" | "right"
    className?: string
  }) => {
    const textAlign =
      align === "right" ? "text-right" : align === "left" ? "text-left" : "text-center"
    return (
      <h3 className={`text-sm sm:text-base md:text-lg lg:text-xl font-bold uppercase text-[#292E41] mb-2 sm:mb-3 md:mb-4 tracking-[0.1em] sm:tracking-[0.12em] ${textAlign} ${className}`} style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 700 }}>
        {children}
      </h3>
    )
  }

  // Helper component for name items with alignment
  const NameItem = ({ name, align = "center" }: { name: string, align?: "left" | "center" | "right" }) => {
    const containerAlign =
      align === "right" ? "items-end" : align === "left" ? "items-start" : "items-center"
    const textAlign =
      align === "right" ? "text-right" : align === "left" ? "text-left" : "text-center"
    return (
      <div className={`flex flex-col ${containerAlign} justify-center py-0.5 sm:py-1 md:py-1.5 w-full`}>
        <p className={`text-[#292E41] text-sm sm:text-base md:text-lg font-normal leading-tight sm:leading-snug break-words ${textAlign}`} style={{ fontFamily: '"Inter", sans-serif', fontWeight: 400 }}>{name}</p>
      </div>
    )
  }

  // Remote data state
  const [sponsors, setSponsors] = useState<PrincipalSponsor[]>([])
  const [entourage, setEntourage] = useState<EntourageMember[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchSponsors = async () => {
    try {
      const res = await fetch("/api/principal-sponsor", { cache: "no-store" })
      if (!res.ok) throw new Error("Failed to load principal sponsors")
      const data: PrincipalSponsor[] = await res.json()
      setSponsors(data)
    } catch (e: any) {
      console.error(e)
      setError(e?.message || "Failed to load principal sponsors")
    }
  }

  const fetchEntourage = async () => {
    try {
      const res = await fetch("/api/entourage", { cache: "no-store" })
      if (!res.ok) throw new Error("Failed to load entourage")
      const data: EntourageMember[] = await res.json()
      setEntourage(data)
    } catch (e: any) {
      console.error("Failed to load entourage:", e)
    }
  }

  useEffect(() => {
    setIsLoading(true)
    Promise.all([fetchSponsors(), fetchEntourage()]).finally(() => {
      setIsLoading(false)
    })

    // Set up auto-refresh listener for dashboard updates
    const handleSponsorsUpdate = () => {
      setTimeout(() => {
        fetchSponsors()
      }, 1000)
    }

    const handleEntourageUpdate = () => {
      setTimeout(() => {
        fetchEntourage()
      }, 1000)
    }

    window.addEventListener("sponsorsUpdated", handleSponsorsUpdate)
    window.addEventListener("entourageUpdated", handleEntourageUpdate)

    return () => {
      window.removeEventListener("sponsorsUpdated", handleSponsorsUpdate)
      window.removeEventListener("entourageUpdated", handleEntourageUpdate)
    }
  }, [])

  // Keep sponsors as pairs to ensure alignment
  const sponsorPairs = useMemo(() => 
    sponsors.filter(s => s.MalePrincipalSponsor || s.FemalePrincipalSponsor),
    [sponsors]
  )

  // Filter Secondary Sponsors from entourage
  const secondarySponsors = useMemo(() => {
    return entourage.filter(
      (member) => 
        member.RoleCategory === "Secondary Sponsor" || 
        member.RoleCategory === "Secondary Sponsors"
    )
  }, [entourage])

  return (
    <Section
      id="sponsors"
      className="relative py-16 sm:py-20 md:py-24 lg:py-28"
    >
      {/* Bottom Left Corner Decoration */}
      <div className="absolute bottom-0 left-0 z-10 pointer-events-none">
        <Image
          src="/decoration/left-bottom-corner.png"
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
          src="/decoration/left-bottom-corner.png"
          alt=""
          width={200}
          height={200}
          className="w-auto h-auto max-w-[100px] sm:max-w-[120px] md:max-w-[150px] scale-x-[-1]"
          priority
        />
      </div>

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

      {/* Header */}
      <div className="relative z-10 text-center mb-8 sm:mb-12 md:mb-16 px-4 sm:px-6">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="h-[1px] w-12 sm:w-16 md:w-24 bg-gradient-to-r from-transparent via-[#292E41] to-transparent" />
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#292E41] mb-4 sm:mb-6 uppercase tracking-[0.1em] sm:tracking-[0.12em] elegant-text-shadow" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 700, fontOpticalSizing: 'auto', fontStyle: 'normal', fontVariationSettings: '"wdth" 100' }}>
          Principal Sponsors
        </h2>
        <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
          <div className="h-[1px] w-12 sm:w-16 md:w-24 bg-gradient-to-r from-transparent via-[#292E41] to-transparent" />
        </div>
        <p className="text-lg sm:text-xl md:text-2xl font-normal text-[#292E41]/80 max-w-xl mx-auto leading-relaxed tracking-wide px-2" style={{ fontFamily: '"Inter", sans-serif', fontWeight: 400 }}>
          Our Beloved Godparents
        </p>
      </div>

      {/* Central Card Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-3 sm:px-4 md:px-6">
        {/* Main card with elegant styling */}
        <div className="relative group">
          {/* Subtle glow on hover */}
          <div className="absolute -inset-1 bg-gradient-to-br from-[#292E41]/20 to-[#292E41]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />
          
          <div className="relative backdrop-blur-sm rounded-xl sm:rounded-2xl border-2 border-[#292E41]/30 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-[#292E41]/50 overflow-hidden" style={{ 
            backgroundColor: '#E6DFD2',
            backgroundImage: `
              repeating-linear-gradient(0deg, rgba(0,0,0,0.03) 0px, transparent 1px, transparent 2px, rgba(0,0,0,0.03) 3px),
              repeating-linear-gradient(90deg, rgba(0,0,0,0.03) 0px, transparent 1px, transparent 2px, rgba(0,0,0,0.03) 3px),
              repeating-linear-gradient(45deg, rgba(0,0,0,0.02) 0px, transparent 1px, transparent 4px, rgba(0,0,0,0.02) 5px)
            `,
            backgroundSize: '100% 100%, 100% 100%, 20px 20px',
            filter: 'contrast(1.1) brightness(0.98)'
          }}>
            {/* Card content */}
            <div className="relative p-4 sm:p-6 md:p-8 lg:p-10">
              {isLoading ? (
                <div className="flex items-center justify-center py-12 sm:py-16 md:py-24">
                  <div className="flex flex-col items-center gap-3 sm:gap-4">
                    <Loader2 className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 animate-spin text-[#292E41]" />
                    <span className="text-[#292E41]/70 text-sm sm:text-base md:text-lg" style={{ fontFamily: '"Inter", sans-serif', fontWeight: 400 }}>
                      Loading sponsors...
                    </span>
                  </div>
                </div>
              ) : error ? (
                <div className="flex items-center justify-center py-12 sm:py-16 md:py-24">
                  <div className="text-center">
                    <p className="text-red-600 text-sm sm:text-base md:text-lg mb-3 sm:mb-4" style={{ fontFamily: '"Inter", sans-serif', fontWeight: 400 }}>{error}</p>
                    <button
                      onClick={fetchSponsors}
                      className="text-[#292E41] hover:text-[#292E41]/70 underline transition-colors duration-300 text-sm sm:text-base"
                      style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 700 }}
                    >
                      Try again
                    </button>
                  </div>
                </div>
              ) : sponsorPairs.length === 0 && secondarySponsors.length === 0 ? (
                <div className="text-center py-12 sm:py-16 md:py-24">
                  <Users className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 text-[#292E41]/30 mx-auto mb-3 sm:mb-4" />
                  <p className="text-[#292E41]/70 text-sm sm:text-base md:text-lg" style={{ fontFamily: '"Inter", sans-serif', fontWeight: 400 }}>
                    No sponsors yet
                  </p>
                </div>
              ) : (
                <>
                  {sponsorPairs.length > 0 && (
                  <div className="mb-3 sm:mb-5 md:mb-7 lg:mb-9">
                    <div className="grid grid-cols-1 min-[350px]:grid-cols-2 gap-x-1.5 sm:gap-x-2 md:gap-x-3 mb-2 sm:mb-2.5 md:mb-3.5">
                      <SectionTitle align="right" className="pr-2 sm:pr-3 md:pr-4">Male Principal Sponsors</SectionTitle>
                      <SectionTitle align="left" className="pl-2 sm:pl-3 md:pl-4">Female Principal Sponsors</SectionTitle>
                    </div>
                    <div className="grid grid-cols-1 min-[350px]:grid-cols-2 gap-x-1.5 sm:gap-x-2 md:gap-x-3 gap-y-1 sm:gap-y-1.5 md:gap-y-2 items-stretch">
                      {sponsorPairs.map((pair, idx) => (
                        <React.Fragment key={`sponsor-pair-${idx}`}>
                          <div key={`male-${idx}-${pair.MalePrincipalSponsor || 'empty'}`} className="px-2 sm:px-3 md:px-4">
                            {pair.MalePrincipalSponsor ? (
                              <NameItem name={pair.MalePrincipalSponsor} align="right" />
                            ) : (
                              <div className="py-0.5 sm:py-1 md:py-1.5" />
                            )}
                          </div>
                          <div key={`female-${idx}-${pair.FemalePrincipalSponsor || 'empty'}`} className="px-2 sm:px-3 md:px-4">
                            {pair.FemalePrincipalSponsor ? (
                              <NameItem name={pair.FemalePrincipalSponsor} align="left" />
                            ) : (
                              <div className="py-0.5 sm:py-1 md:py-1.5" />
                            )}
                          </div>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                  )}

                  {/* Honored Guests Section */}
                  {secondarySponsors.length > 0 && (
                    <>
                      <div className="flex items-center justify-center gap-3 sm:gap-4 py-4 sm:py-5 mb-6 sm:mb-7 md:mb-9">
                        <div className="h-px w-12 sm:w-16 md:w-20 bg-[#292E41]/40" />
                        <div className="w-1.5 h-1.5 bg-[#292E41]/50 rounded-full" />
                        <div className="h-px w-12 sm:w-16 md:w-20 bg-[#292E41]/40" />
                      </div>
                      <div className="mb-3 sm:mb-5 md:mb-7 lg:mb-9">
                        <SectionTitle align="center">Honored Guests</SectionTitle>
                        <div className="grid grid-cols-1 min-[350px]:grid-cols-2 gap-x-1.5 sm:gap-x-2 md:gap-x-3 gap-y-1 sm:gap-y-1.5 md:gap-y-2 max-w-2xl mx-auto">
                          {(() => {
                            const half = Math.ceil(secondarySponsors.length / 2)
                            const left = secondarySponsors.slice(0, half)
                            const right = secondarySponsors.slice(half)
                            const maxLen = Math.max(left.length, right.length)
                            const rows = []
                            for (let i = 0; i < maxLen; i++) {
                              const l = left[i]
                              const r = right[i]
                              rows.push(
                                <React.Fragment key={`secondary-row-${i}`}>
                                  <div
                                    key={`secondary-cell-left-${i}`}
                                    className="px-2 sm:px-3 md:px-4"
                                  >
                                    {l ? (
                                      <NameItem name={l.Name} align="right" />
                                    ) : (
                                      <div className="py-0.5 sm:py-1 md:py-1.5" />
                                    )}
                                  </div>
                                  <div
                                    key={`secondary-cell-right-${i}`}
                                    className="px-2 sm:px-3 md:px-4"
                                  >
                                    {r ? (
                                      <NameItem name={r.Name} align="left" />
                                    ) : (
                                      <div className="py-0.5 sm:py-1 md:py-1.5" />
                                    )}
                                  </div>
                                </React.Fragment>
                              )
                            }
                            return rows
                          })()}
                        </div>
                      </div>
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
