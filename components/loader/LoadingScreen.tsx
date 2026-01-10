import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress bar animation over 8 seconds
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1.25; // 100 / 80 intervals (8 seconds * 10 updates per second)
      });
    }, 100);

    // Complete loading after 8 seconds
    const timer = setTimeout(() => {
      setProgress(100);
      setFadeOut(true);
      setTimeout(onComplete, 1000); // Wait for fade out animation
    }, 8000);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[60] flex items-center justify-center overflow-hidden transition-opacity duration-1000 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background with paper texture */}
      <div 
        className="absolute inset-0 bg-[#292E41]"
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

      <div className="relative flex flex-col items-center justify-center px-6">
        {/* Monogram */}
        <div className="relative flex items-center justify-center mb-8">
          <div className="flex flex-col items-center justify-center z-10">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32">
              <Image
                src="/monogram/monogram.png"
                alt="Christian & Lewie Rose Monogram"
                fill
                className="object-contain"
                style={{ filter: 'brightness(0) saturate(100%) invert(77%) sepia(19%) saturate(985%) hue-rotate(301deg) brightness(102%) contrast(87%)' }}
                priority
              />
            </div>
          </div>
        </div>

        {/* Couple Name */}
        <div className="mb-4 text-center">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl text-[#EDABAD] font-serif tracking-wide"
            style={{ fontFamily: '"Cinzel", serif', fontWeight: 600 }}
          >
            Christian & Lewie Rose
          </h2>
        </div>

        {/* Introductory Message */}
        <div className="mb-8 text-center max-w-md">
          <p
            className="text-sm sm:text-base text-[#EDABAD] leading-relaxed"
            style={{ fontFamily: '"Cinzel", serif', fontWeight: 400 }}
          >
            Welcome to our special day. We're so excited to share this moment with you.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-full max-w-xs sm:max-w-sm">
          <div className="h-1 bg-[#EDABAD]/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#EDABAD] rounded-full transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};