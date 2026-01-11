"use client"

import { useEffect, useState, useMemo } from "react"
import { motion } from "motion/react"

const desktopImages = [
  "/gallery/couple (1).webp",
  "/gallery/couple (2).webp",
  "/gallery/couple (4).webp",
]

const mobileImages = [
    "/gallery/couple (1).webp",
    "/gallery/couple (2).webp",
    "/gallery/couple (4).webp",
]

export function Celebration() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Detect screen size and update isMobile state
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768) // md breakpoint
    }
    
    // Check on mount
    checkScreenSize()
    
    // Listen for resize events
    window.addEventListener('resize', checkScreenSize)
    
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  // Get the appropriate image array based on screen size
  const backgroundImages = useMemo(() => {
    return isMobile ? mobileImages : desktopImages
  }, [isMobile])

  // Preload images progressively - show first image immediately
  useEffect(() => {
    setImagesLoaded(false)
    setCurrentImageIndex(0)
    
    // Load first image with priority to show it immediately
    const firstImg = new window.Image()
    firstImg.src = backgroundImages[0]
    firstImg.onload = () => {
      setImagesLoaded(true) // Show first image immediately
    }
    
    // Then preload a small lookahead set in background (avoid preloading all)
    setTimeout(() => {
      if (typeof navigator !== 'undefined' && (navigator as any).connection?.saveData) return
      backgroundImages.slice(1, 3).forEach((src) => {
        const img = new window.Image()
        img.decoding = 'async'
        img.loading = 'lazy' as any
        img.src = src
      })
    }, 200)
  }, [backgroundImages])

  useEffect(() => {
    if (!imagesLoaded) return
    
    const imageTimer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length)
    }, 5000)
    return () => clearInterval(imageTimer)
  }, [imagesLoaded, backgroundImages])

  // Preload remaining images after initial set
  useEffect(() => {
    if (!imagesLoaded) return
    
    // Preload all remaining images for smoother transitions
    setTimeout(() => {
      if (typeof navigator !== 'undefined' && (navigator as any).connection?.saveData) return
      backgroundImages.slice(3).forEach((src) => {
        const img = new window.Image()
        img.decoding = 'async'
        img.loading = 'lazy' as any
        img.src = src
      })
    }, 1000)
  }, [imagesLoaded, backgroundImages])

  return (
    <section
      id="celebration"
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Full Height Background Images */}
      {imagesLoaded && backgroundImages.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url('${image}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            willChange: "opacity",
          }}
        />
      ))}

      {/* Content Above - Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-start px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 md:pt-16 lg:pt-20">
        <motion.div
          className="text-center max-w-4xl mx-auto space-y-3 sm:space-y-4 md:space-y-5"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#292E41] max-w-3xl mx-auto leading-tight" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 700 }}>
            We can&apos;t wait to celebrate with you
          </h3>
        </motion.div>
      </div>
    </section>
  )
}