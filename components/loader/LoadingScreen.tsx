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
      {/* Top Left Corner Decoration */}
      <div className="absolute top-0 left-0 z-10 pointer-events-none">
        <Image
          src="/decoration/bottom-left-corner.png"
          alt=""
          width={200}
          height={200}
          className="w-auto h-auto max-w-[100px] sm:max-w-[120px] md:max-w-[150px] scale-y-[-1]"
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
          className="w-auto h-auto max-w-[100px] sm:max-w-[120px] md:max-w-[150px] scale-x-[-1] scale-y-[-1]"
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
        className="absolute inset-0 bg-[#E6DFD2]"
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
        </div>

        {/* Couple Name */}
        <div className="mb-4 text-center">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#292E41] font-bold uppercase tracking-wide"
            style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 700, fontOpticalSizing: 'auto', fontStyle: 'normal', fontVariationSettings: '"wdth" 100' }}
          >
            Christian & Lewie Rose
          </h2>
        </div>

        {/* Introductory Message */}
        <div className="mb-8 text-center max-w-md">
          <p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#292E41] leading-relaxed"
            style={{ fontFamily: '"Inter", sans-serif', fontWeight: 400 }}
          >
            Welcome to our special day. We're so excited to share this moment with you.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-full max-w-xs sm:max-w-sm">
          <div className="h-1 bg-[#292E41]/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#292E41] rounded-full transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};