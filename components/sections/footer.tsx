"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import {
  Instagram,
  Twitter,
  Facebook,
  MapPin,
  Calendar,
  Clock,
  Heart,
  Music2,
} from "lucide-react";
import { siteConfig } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  const quotes = [
    "In every love story, there's a moment when two hearts become one, and ours is just beginning.",
    "Two souls, one heart—forever entwined in the journey of love and faith together.",
    "Love is not about finding the perfect person, but learning to see an imperfect person perfectly.",
  ];

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false);
      }, 3000);
      return () => clearTimeout(pauseTimeout);
    }

    if (isDeleting) {
      if (displayedText.length > 0) {
        const deleteTimeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 30);
        return () => clearTimeout(deleteTimeout);
      } else {
        setIsDeleting(false);
        setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
      }
    } else {
      const currentQuote = quotes[currentQuoteIndex];
      if (displayedText.length < currentQuote.length) {
        const typeTimeout = setTimeout(() => {
          setDisplayedText(currentQuote.slice(0, displayedText.length + 1));
        }, 50);
        return () => clearTimeout(typeTimeout);
      } else {
        setIsPaused(true);
        setIsDeleting(true);
      }
    }
  }, [displayedText, isDeleting, isPaused, currentQuoteIndex, quotes]);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const staggerChildren = {
    animate: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const nav = [
    { label: "Home", href: "#home" },
    { label: "Countdown", href: "#countdown" },
    { label: "Messages", href: "#messages" },
    { label: "Details", href: "#details" },
    { label: "Entourage", href: "#entourage" },
    { label: "Sponsors", href: "#sponsors" },
    { label: "RSVP", href: "#guest-list" },
    { label: "Registry", href: "#registry" },
    { label: "FAQ", href: "#faq" },
    { label: "Snap & Share", href: "#snap-share" },
  ] as const;

  return (
    <footer className="relative z-20 mt-16 overflow-hidden">
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
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-16">
        {/* Wedding date presentation */}
        <motion.div
          className="flex justify-center px-4 mb-16"
          variants={fadeInUp}
        >
          <div className="max-w-2xl w-full">
            {/* Save The Date Header */}
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              {/* Monogram */}
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32">
                  <div 
                    className="absolute inset-0 drop-shadow-lg"
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

              {/* Top decorative line */}
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-r from-transparent via-[#292E41] to-transparent" />
              </div>

              {/* Save The Date text */}
              <p className="text-base sm:text-lg md:text-xl font-bold text-[#292E41] uppercase tracking-[0.25em] sm:tracking-[0.3em] mb-4 sm:mb-6" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 700 }}>
                Save The Date
              </p>

              {/* Bottom decorative line */}
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-r from-transparent via-[#292E41] to-transparent" />
              </div>
            </div>

            {/* Date Section - Elegant Layout */}
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              {/* Month - Elegant script style */}
              <div className="mb-4 sm:mb-5 md:mb-6">
                <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-[family-name:var(--font-ephesis)] text-[#292E41] leading-none drop-shadow-lg font-semibold">
                  {new Date(siteConfig.wedding.date).toLocaleDateString('en-US', { month: 'long' })}
                </p>
              </div>

              {/* Day and Year - Horizontal layout with divider */}
              <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
                {/* Day - Large and bold focal point */}
                <p className="text-8xl sm:text-9xl md:text-[10rem] lg:text-[12rem] xl:text-[14rem] font-bold text-[#292E41] leading-none drop-shadow-lg" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 700 }}>
                  {new Date(siteConfig.wedding.date).getDate()}
                </p>

                {/* Vertical divider */}
                <div className="h-16 sm:h-20 md:h-24 lg:h-28 w-px bg-gradient-to-b from-transparent via-[#292E41] to-transparent" />

                {/* Year - Elegant and refined */}
                <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#292E41] leading-none drop-shadow-sm" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>
                  {new Date(siteConfig.wedding.date).getFullYear()}
                </p>
              </div>

              {/* Day of Week */}
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[#292E41] mb-6 sm:mb-8 tracking-wider" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 700 }}>
                {siteConfig.ceremony.day}
              </p>
            </div>

            {/* Time Section */}
            <div className="text-center">
              {/* Top decorative line */}
              <div className="flex items-center justify-center gap-3 mb-4 sm:mb-5">
                <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-r from-transparent via-[#292E41] to-transparent" />
              </div>

              {/* Time with elegant styling */}
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#292E41] tracking-wider mb-4 sm:mb-5" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 700 }}>
                {siteConfig.wedding.time}
              </p>

              {/* Bottom decorative line */}
              <div className="flex items-center justify-center gap-3">
                <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-r from-transparent via-[#292E41] to-transparent" />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-4 gap-10 mb-12"
          variants={staggerChildren}
          initial="initial"
          animate="animate"
        >
          {/* Couple Info */}
          <motion.div className="lg:col-span-2" variants={fadeInUp}>
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0">
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
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#292E41] uppercase tracking-[0.15em] sm:tracking-[0.2em]" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 700 }}>
                  Christian & Lewie Rose
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 font-normal text-[#292E41]" style={{ fontFamily: '"Inter", sans-serif', fontWeight: 400 }}>
                  <Calendar className="w-5 h-5 text-[#292E41]" />
                  <span className="text-lg sm:text-xl">{siteConfig.wedding.date} • {siteConfig.ceremony.day}</span>
                </div>
                <div className="flex items-center gap-3 font-normal text-[#292E41]" style={{ fontFamily: '"Inter", sans-serif', fontWeight: 400 }}>
                  <MapPin className="w-5 h-5 text-[#292E41]" />
                  <span className="text-base sm:text-lg">{siteConfig.ceremony.venue}, {siteConfig.ceremony.address}</span>
                </div>
              </div>
            </div>

            <motion.div
              className="backdrop-blur-md rounded-2xl p-6 border border-[#292E41]/30 shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ 
                backgroundColor: '#E6DFD2',
                backgroundImage: `
                  repeating-linear-gradient(0deg, rgba(0,0,0,0.03) 0px, transparent 1px, transparent 2px, rgba(0,0,0,0.03) 3px),
                  repeating-linear-gradient(90deg, rgba(0,0,0,0.03) 0px, transparent 1px, transparent 2px, rgba(0,0,0,0.03) 3px),
                  repeating-linear-gradient(45deg, rgba(0,0,0,0.02) 0px, transparent 1px, transparent 4px, rgba(0,0,0,0.02) 5px)
                `,
                backgroundSize: '100% 100%, 100% 100%, 20px 20px',
                filter: 'contrast(1.1) brightness(0.98)'
              }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <blockquote className="text-[#292E41] font-normal italic text-lg sm:text-xl leading-relaxed min-h-[80px]" style={{ fontFamily: '"Inter", sans-serif', fontWeight: 400 }}>
                "{displayedText}
                <span className="inline-block w-0.5 h-6 bg-gradient-to-b from-[#292E41] to-[#292E41] ml-1 animate-pulse">
                  |
                </span>
                "
              </blockquote>
              <div className="flex items-center gap-2 mt-4">
                <div className="w-2 h-2 bg-gradient-to-br from-[#292E41] to-[#292E41] rounded-full shadow-sm" />
                <div className="w-2 h-2 bg-gradient-to-br from-[#292E41] to-[#292E41] rounded-full shadow-sm" />
                <div className="w-2 h-2 bg-gradient-to-br from-[#292E41] to-[#292E41] rounded-full shadow-sm" />
              </div>
            </motion.div>
          </motion.div>

          {/* Event Details quick tiles */}
          <motion.div className="space-y-6" variants={fadeInUp}>
            <motion.div
              className="backdrop-blur-md rounded-2xl p-6 border border-[#292E41]/30 hover:border-[#292E41]/60 shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ 
                backgroundColor: '#E6DFD2',
                backgroundImage: `
                  repeating-linear-gradient(0deg, rgba(0,0,0,0.03) 0px, transparent 1px, transparent 2px, rgba(0,0,0,0.03) 3px),
                  repeating-linear-gradient(90deg, rgba(0,0,0,0.03) 0px, transparent 1px, transparent 2px, rgba(0,0,0,0.03) 3px),
                  repeating-linear-gradient(45deg, rgba(0,0,0,0.02) 0px, transparent 1px, transparent 4px, rgba(0,0,0,0.02) 5px)
                `,
                backgroundSize: '100% 100%, 100% 100%, 20px 20px',
                filter: 'contrast(1.1) brightness(0.98)'
              }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#292E41] rounded-full flex items-center justify-center shadow-md">
                  <Clock className="w-5 h-5 text-[#E6DFD2]" />
                </div>
                <h4 className="font-bold text-xl sm:text-2xl text-[#292E41]" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 700 }}>
                  Ceremony
                </h4>
              </div>
              <div className="space-y-3 font-normal text-[#292E41] text-base sm:text-lg" style={{ fontFamily: '"Inter", sans-serif', fontWeight: 400 }}>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-[#292E41]" />
                  <span>{siteConfig.ceremony.venue}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#292E41]" />
                  <span>{siteConfig.wedding.time}</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="backdrop-blur-md rounded-2xl p-6 border border-[#292E41]/30 hover:border-[#292E41]/60 shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ 
                backgroundColor: '#E6DFD2',
                backgroundImage: `
                  repeating-linear-gradient(0deg, rgba(0,0,0,0.03) 0px, transparent 1px, transparent 2px, rgba(0,0,0,0.03) 3px),
                  repeating-linear-gradient(90deg, rgba(0,0,0,0.03) 0px, transparent 1px, transparent 2px, rgba(0,0,0,0.03) 3px),
                  repeating-linear-gradient(45deg, rgba(0,0,0,0.02) 0px, transparent 1px, transparent 4px, rgba(0,0,0,0.02) 5px)
                `,
                backgroundSize: '100% 100%, 100% 100%, 20px 20px',
                filter: 'contrast(1.1) brightness(0.98)'
              }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#292E41] rounded-full flex items-center justify-center shadow-md">
                  <Heart className="w-5 h-5 text-[#E6DFD2]" />
                </div>
                <h4 className="font-bold text-xl sm:text-2xl text-[#292E41]" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 700 }}>
                  Reception
                </h4>
              </div>
              <div className="space-y-3 font-normal text-[#292E41] text-base sm:text-lg" style={{ fontFamily: '"Inter", sans-serif', fontWeight: 400 }}>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-[#292E41]" />
                  <span>{siteConfig.reception.venue}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#292E41]" />
                  <span>{siteConfig.reception.time}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact + Quick Links */}
          <motion.div className="space-y-8" variants={fadeInUp}>
            <div>
              <h4 className="font-bold text-xl sm:text-2xl mb-6 flex items-center gap-3 text-[#292E41]" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 700 }}>
                <div className="w-2 h-8 bg-gradient-to-b from-[#292E41] to-[#292E41] rounded-full" /> Follow
                Us
              </h4>
              <div className="flex items-center gap-3 flex-wrap">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-11 w-11 rounded-full border border-[#292E41]/30 hover:border-[#292E41]/60 transition-all hover:scale-110 shadow-md hover:shadow-lg"
                  style={{ backgroundColor: '#E6DFD2' }}
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-[#292E41]" />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-11 w-11 rounded-full border border-[#292E41]/30 hover:border-[#292E41]/60 transition-all hover:scale-110 shadow-md hover:shadow-lg"
                  style={{ backgroundColor: '#E6DFD2' }}
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-[#292E41]" />
                </a>
                <a
                  href="https://www.tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-11 w-11 rounded-full border border-[#292E41]/30 hover:border-[#292E41]/60 transition-all hover:scale-110 shadow-md hover:shadow-lg"
                  style={{ backgroundColor: '#E6DFD2' }}
                  aria-label="TikTok"
                >
                  <Music2 className="w-5 h-5 text-[#292E41]" />
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-11 w-11 rounded-full border border-[#292E41]/30 hover:border-[#292E41]/60 transition-all hover:scale-110 shadow-md hover:shadow-lg"
                  style={{ backgroundColor: '#E6DFD2' }}
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5 text-[#292E41]" />
                </a>
              </div>
            </div>

            <div>
              <h5 className="font-bold text-lg sm:text-xl mb-4 text-[#292E41]" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 700 }}>
                Quick Links
              </h5>
              <div className="space-y-2">
                {nav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block text-[#292E41] font-normal hover:text-[#292E41]/80 transition-colors duration-200 text-base sm:text-lg hover:pl-2"
                    style={{ fontFamily: '"Inter", sans-serif', fontWeight: 400 }}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Row */}
        <motion.div
          className="border-t border-[#292E41]/40 pt-8"
          variants={fadeInUp}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-[#292E41] text-base sm:text-lg font-bold" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 700 }}>
                © {year} Christian & Lewie Rose. All rights reserved.
              </p>
              <p className="text-[#292E41] text-base sm:text-lg mt-1 font-normal" style={{ fontFamily: '"Inter", sans-serif', fontWeight: 400 }}>
                Made with 💕 for our special day
              </p>
            </div>

            <div className="text-center md:text-right space-y-1">
              <p className="text-[#292E41] text-sm sm:text-base font-normal" style={{ fontFamily: '"Inter", sans-serif', fontWeight: 400 }}>
                Developed by{" "}
                <a
                  href="https://lance28-beep.github.io/portfolio-website/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#292E41] hover:text-[#292E41]/80 transition-colors duration-200 underline decoration-[#292E41]/40 hover:decoration-[#292E41]/70 font-bold"
                  style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 700 }}
                >
                  Lance Valle
                </a>
              </p>
              <p className="text-[#292E41] text-sm sm:text-base font-normal" style={{ fontFamily: '"Inter", sans-serif', fontWeight: 400 }}>
                Want a website like this? Visit{" "}
                <a
                  href="https://www.facebook.com/WeddingInvitationNaga"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#292E41] hover:text-[#292E41]/80 transition-colors duration-200 underline decoration-[#292E41]/40 hover:decoration-[#292E41]/70 font-bold"
                  style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 700 }}
                >
                  Wedding Invitation Naga
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
