import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FadeIn } from './FadeIn';

interface HeroProps {
  onOpen: () => void;
  visible: boolean;
}

export const Hero: React.FC<HeroProps> = ({ onOpen, visible }) => {
  // Desktop images
  const desktopImages = [
    '/gallery/couple (1).webp',
    '/gallery/couple (2).webp',
    '/gallery/couple (4).webp',
    '/gallery/couple (5).webp',
    '/gallery/couple (7).webp',
    '/gallery/couple (8).webp',
  ];

  // Mobile images
  const mobileImages = [
    '/gallery/couple (3).webp',
    '/gallery/couple (6).webp',
    '/gallery/couple (9).webp',
    '/gallery/couple (10).webp',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile vs desktop
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Cycle through images
  useEffect(() => {
    if (!visible) return;

    const images = isMobile ? mobileImages : desktopImages;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [visible, isMobile]);

  const images = isMobile ? mobileImages : desktopImages;

  return (
    <div className={`fixed inset-0 z-[60] flex items-center justify-center overflow-hidden transition-all duration-1000 ${visible ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
      {/* Background Images with Smooth Transition */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {images.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={src}
              alt=""
              fill
              className="object-cover"
              priority={index === 0}
              quality={90}
              sizes="100vw"
            />
          </div>
        ))}

        {/* Soft overlay tint */}
        <div className="absolute inset-0 bg-[#EDABAD]/55 pointer-events-none" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center p-6 w-full max-w-md mx-auto h-full">
        
        {/* Top Logo/Monogram */}
        <FadeIn show={visible} delay={300} className="mb-auto mt-8">
          <div className="w-20 h-24 border border-[#292E41]/40 rounded-[2rem] flex items-center justify-center backdrop-blur-sm bg-[#E6DFD2]">
            <div className="relative w-14 h-14">
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
        </FadeIn>

        <div className="flex-1" />

        <div className="flex flex-col items-center justify-end w-full gap-4 pb-14 sm:pb-16 md:pb-20">
          <FadeIn show={visible} delay={600}>
            <h2
              className="text-6xl md:text-8xl transform -rotate-6 drop-shadow-lg opacity-95 text-[#292E41]"
              style={{
                fontFamily: '"Great Vibes", cursive',
                fontWeight: 400,
                textShadow: '0 4px 14px rgba(0,0,0,0.25)',
              }}
            >
              You are
            </h2>
          </FadeIn>
          
          <FadeIn show={visible} delay={900}>
            <h1
              className="text-5xl md:text-7xl font-bold tracking-wider uppercase drop-shadow-[0_8px_20px_rgba(0,0,0,0.3)] text-[#292E41]"
              style={{
                fontFamily: '"Cinzel", serif',
                fontWeight: 700,
              }}
            >
              Invited!
            </h1>
          </FadeIn>

          <FadeIn show={visible} delay={1500}>
            <button 
              onClick={onOpen}
              className="group relative px-10 py-4 bg-[#E6DFD2] text-[#292E41] font-serif text-sm tracking-[0.2em] uppercase transition-all duration-500 hover:bg-[#E6DFD2]/90 shadow-lg hover:shadow-xl hover:-translate-y-1 active:translate-y-0 rounded-sm overflow-hidden"
            >
              <span
                className="relative z-10 text-[#292E41]"
                style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400, fontOpticalSizing: 'auto', fontStyle: 'normal', fontVariationSettings: '"wdth" 100' }}
              >
                Open Invitation
              </span>
              {/* Button sheen effect */}
              <div className="absolute top-0 left-[-100%] w-full h-full bg-white/10 skew-x-12 group-hover:animate-[shimmer_1s_infinite]" />
            </button>
          </FadeIn>
        </div>

        {/* Bottom Spacer */}
        <div className="h-4" />
      </div>
    </div>
  );
};