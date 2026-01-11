"use client"
import Image from "next/image"
import { Section } from "@/components/section"
import { siteConfig } from "@/content/site"
import Stack from "@/components/stack"
import { motion } from "motion/react"


export function Narrative() {
  return (
    <Section id="narrative" className="relative py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden">
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

      {/* Background with paper texture */}
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title - Matching countdown section style */}
        <motion.div 
          className="text-center mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-[1px] w-12 sm:w-16 md:w-24 bg-gradient-to-r from-transparent via-[#292E41] to-transparent" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#292E41] mb-4 sm:mb-6 uppercase tracking-[0.1em] sm:tracking-[0.12em] elegant-text-shadow" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 700, fontOpticalSizing: 'auto', fontStyle: 'normal', fontVariationSettings: '"wdth" 100' }}>
            Our Love Story
          </h2>
          <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
            <div className="h-[1px] w-12 sm:w-16 md:w-24 bg-gradient-to-r from-transparent via-[#292E41] to-transparent" />
          </div>
        </motion.div>

        {/* Main Content - Centered Layout */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-16 items-center lg:items-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Left Spacer */}
          <div className="hidden lg:block"></div>

          {/* Interactive Stack Component - Center */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Enhanced glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#292E41]/20 via-[#292E41]/10 to-transparent rounded-full blur-3xl -z-10 w-full h-full max-w-sm animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-[#292E41]/15 via-transparent to-transparent rounded-full blur-2xl -z-10 w-full h-full max-w-sm"></div>

              <Stack
                randomRotation={true}
                sensitivity={180}
                sendToBackOnClick={false}
                cardDimensions={{ width: 280, height: 320 }}
                cardsData={[
                  { id: 1, img: "/gallery/couple (2).webp" },
                  { id: 2, img: "/gallery/couple (5).webp" },
                  { id: 3, img: "/gallery/couple (8).webp" },
                  { id: 4, img: "/gallery/couple (4).webp" },
                ]}
                animationConfig={{ stiffness: 260, damping: 20 }}
              />

              <motion.p 
                className="text-center text-base sm:text-lg md:text-xl font-normal text-[#292E41]/80 mt-8 tracking-wide"
                style={{ fontFamily: '"Inter", sans-serif', fontWeight: 400 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
              >
                ✨ Drag to explore our moments ✨
              </motion.p>
            </div>
          </div>

          {/* Right Spacer */}
          <div className="hidden lg:block"></div>
        </motion.div>

        {/* Story Text - Full Width Below */}
        <motion.div 
          className="mt-16 md:mt-28 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="space-y-6 md:space-y-10">
            {siteConfig.narrative.split("\n\n").map((paragraph, index) => (
              <motion.div 
                key={index} 
                className="relative"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                {/* First paragraph with drop cap */}
                {index === 0 ? (
                  <p className="text-base sm:text-lg md:text-xl font-normal leading-relaxed text-[#292E41] text-pretty pl-3 md:pl-6" style={{ fontFamily: '"Inter", sans-serif', fontWeight: 400 }}>
                    <span className="float-left text-5xl md:text-8xl lg:text-9xl font-bold text-[#292E41] leading-none mr-2 mt-1 drop-shadow-md" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 700 }}>
                      {paragraph.charAt(0)}
                    </span>
                    {paragraph.slice(1)}
                  </p>
                ) : (
                  <p className="text-base sm:text-lg md:text-xl font-normal leading-relaxed text-[#292E41] text-pretty pl-3 md:pl-6" style={{ fontFamily: '"Inter", sans-serif', fontWeight: 400 }}>
                    {paragraph}
                  </p>
                )}
              </motion.div>
            ))}
          </div>

          {/* Divider and CTA */}
          <motion.div 
            className="mt-16 md:mt-24 lg:mt-28 space-y-8 md:space-y-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Decorative divider */}
            <div className="flex items-center justify-center gap-2">
              <div className="h-[1px] w-12 sm:w-16 md:w-24 bg-gradient-to-r from-transparent via-[#292E41] to-transparent" />
            </div>

            {/* CTA Button - Matching countdown style */}
            <div className="flex justify-center">
              <motion.a
                href="#guest-list"
                className="inline-flex items-center gap-2 sm:gap-3 px-8 sm:px-10 md:px-12 lg:px-14 py-3 sm:py-3.5 md:py-4 lg:py-4.5 font-bold text-sm sm:text-base md:text-lg text-[#292E41] bg-white hover:bg-[#292E41] hover:text-[#E6DFD2] transition-all duration-300 tracking-wider uppercase border-2 border-[#292E41] hover:border-[#292E41]/80 hover:scale-105 hover:shadow-[0_10px_30px_rgba(41,46,65,0.25)] hover:brightness-105 active:scale-100 premium-shadow rounded-sm relative overflow-hidden group"
                style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 700 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></span>
                <span className="relative z-10">Join Our Celebration</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </Section>
  )
}
