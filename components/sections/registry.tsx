"use client";

import { Section } from "@/components/section";
import { Heart } from "lucide-react";
import Image from "next/image";

export function Registry() {
  return (
    <Section
      id="registry"
      className="relative py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden"
    >
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

      {/* Section Header */}
      <div className="relative z-10 text-center mb-8 sm:mb-12 md:mb-16 px-4 sm:px-6">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="h-[1px] w-12 sm:w-16 md:w-24 bg-gradient-to-r from-transparent via-white to-transparent" />
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 uppercase tracking-[0.1em] sm:tracking-[0.12em] elegant-text-shadow" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 700, fontOpticalSizing: 'auto', fontStyle: 'normal', fontVariationSettings: '"wdth" 100' }}>
          Gift Registry
        </h2>
        <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
          <div className="h-[1px] w-12 sm:w-16 md:w-24 bg-gradient-to-r from-transparent via-white to-transparent" />
        </div>
        <p className="text-lg sm:text-xl md:text-2xl font-normal text-white max-w-xl mx-auto leading-relaxed tracking-wide px-2" style={{ fontFamily: '"Inter", sans-serif', fontWeight: 400 }}>
          Your presence is the greatest gift of all
        </p>
      </div>

      {/* Central Card Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-3 sm:px-4 md:px-6">
        <div className="space-y-6 sm:space-y-8 md:space-y-10">
          {/* Main message card */}
          <div className="relative group">
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
              <div className="relative p-4 sm:p-6 md:p-8 lg:p-10">
                <div className="flex flex-col items-center space-y-6 sm:space-y-8">
                  {/* Heart icon */}
                  <div className="relative inline-flex items-center justify-center">
                    <div className="absolute inset-0 bg-[#292E41]/10 rounded-full blur-xl scale-150 animate-pulse"></div>
                    <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-lg border-2 border-[#292E41]/20 bg-white">
                      <Heart className="h-7 w-7 sm:h-8 sm:w-8 text-[#292E41]" fill="#292E41" />
                    </div>
                  </div>

                  {/* Main message */}
                  <div className="text-center space-y-4 sm:space-y-6 max-w-2xl">
                    <p className="text-lg sm:text-xl md:text-2xl font-normal text-[#292E41] leading-relaxed tracking-wide" style={{ fontFamily: '"Inter", sans-serif', fontWeight: 400 }}>
                      Your presence at our celebration is more than enough, and we are truly grateful for you sharing this special moment with us.
                    </p>
                    <p className="text-lg sm:text-xl md:text-2xl font-normal text-[#292E41] leading-relaxed tracking-wide" style={{ fontFamily: '"Inter", sans-serif', fontWeight: 400 }}>
                      However, if you would like to honor us with a gift, we would be deeply appreciative of a monetary contribution for our future together.
                    </p>
                    <p className="text-base sm:text-lg md:text-xl font-normal text-[#292E41]/80 leading-relaxed tracking-wide italic" style={{ fontFamily: '"Inter", sans-serif', fontWeight: 400 }}>
                      Gifts may be given during the celebration.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* GCash QR Code Card */}
          <div className="relative group">
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
              <div className="relative p-4 sm:p-6 md:p-8 lg:p-10">
                <div className="flex flex-col items-center space-y-4 sm:space-y-6">
                  {/* GCash Title */}
                  <div className="text-center">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#292E41] mb-2 sm:mb-3 uppercase tracking-[0.12em]" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 700 }}>
                      GCash
                    </h3>
                    <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                      <div className="h-[1px] w-8 sm:w-10 md:w-14 bg-gradient-to-r from-transparent via-[#292E41] to-[#292E41]" />
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#292E41] rounded-full" />
                      <div className="h-[1px] w-8 sm:w-10 md:w-14 bg-gradient-to-l from-transparent via-[#292E41] to-[#292E41]" />
                    </div>
                  </div>

                  {/* QR Code */}
                  <div className="bg-white p-3 sm:p-4 md:p-5 rounded-xl border border-[#292E41]/20 shadow-lg">
                    <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72">
                      <Image
                        src="/QR/GcashQR.png"
                        alt="GCash QR Code"
                        fill
                        className="object-contain"
                        sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, (max-width: 1024px) 256px, 288px"
                        priority
                      />
                    </div>
                  </div>

                  {/* Instruction text */}
                  <p className="text-sm sm:text-base md:text-lg font-normal text-[#292E41]/80 text-center max-w-md leading-relaxed" style={{ fontFamily: '"Inter", sans-serif', fontWeight: 400 }}>
                    You may scan the QR code above to send your gift via GCash
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
