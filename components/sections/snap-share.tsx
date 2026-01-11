"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import {
  Instagram,
  Facebook,
  Twitter,
  Share2,
  Copy,
  Check,
  Download,
  Camera,
} from "lucide-react";
import { Section } from "@/components/section";
import { QRCodeCanvas } from "qrcode.react";

export function SnapShare() {
  const [copiedHashtag, setCopiedHashtag] = useState(false);
  const [copiedDriveLink, setCopiedDriveLink] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const websiteUrl =
    typeof window !== "undefined"
      ? window.location.href
      : "https://example.com";
  const driveLink =
    "https://drive.google.com/drive/folders/1pCzx0DEgXb9E8m1DaZ25iHj4604UjV8-?usp=sharing";
  const hashtags = [
    "#ChristianAndLewieRose",
    "#ChristianAndLewieRoseWedding",
    "#ChristianAndLewieRose2026"
  ];  
  const shareText = `Join us in celebrating Christian & Lewie Rose's special day! Check out their wedding website: ${websiteUrl} ${hashtags.join(" ")} 💕`;

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const checkMobile = () => setIsMobile(window.innerWidth < 640);

    checkMobile();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedHashtag(true);
      setTimeout(() => setCopiedHashtag(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const copyDriveLink = async () => {
    try {
      await navigator.clipboard.writeText(driveLink);
      setCopiedDriveLink(true);
      setTimeout(() => setCopiedDriveLink(false), 2000);
    } catch (err) {
      console.error("Failed to copy Drive link: ", err);
    }
  };

  const shareOnSocial = (
    platform: "instagram" | "facebook" | "twitter" | "tiktok",
  ) => {
    const encodedUrl = encodeURIComponent(websiteUrl);
    const encodedText = encodeURIComponent(shareText);

    const urls: Record<string, string> = {
      instagram: `https://www.instagram.com/`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodedText}`,
      tiktok: `https://www.tiktok.com/`,
    };

    const target = urls[platform];
    if (target) {
      window.open(target, "_blank", "width=600,height=400");
    }
  };

  const downloadQRCode = () => {
    const canvas = document.getElementById(
      "snapshare-qr",
    ) as HTMLCanvasElement | null;
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = "wedding-qr.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  const downloadDriveQRCode = () => {
    const canvas = document.getElementById(
      "drive-qr",
    ) as HTMLCanvasElement | null;
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = "wedding-drive-qr.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  const openDrive = () => {
    window.open(driveLink, "_blank", "noopener,noreferrer");
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <Section
      id="snap-share"
      className="relative py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden"
    >
      <div className="relative z-10 max-w-5xl mx-auto px-3 sm:px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-6 sm:mb-10 md:mb-12 px-3 sm:px-4 md:px-6"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-[1px] w-12 sm:w-16 md:w-24 bg-gradient-to-r from-transparent via-white to-transparent" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 uppercase tracking-[0.1em] sm:tracking-[0.12em] elegant-text-shadow" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 700, fontOpticalSizing: 'auto', fontStyle: 'normal', fontVariationSettings: '"wdth" 100' }}>
            Snap & Share
          </h2>
          <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
            <div className="h-[1px] w-12 sm:w-16 md:w-24 bg-gradient-to-r from-transparent via-white to-transparent" />
          </div>
          <p className="text-lg sm:text-xl md:text-2xl font-normal text-white max-w-xl mx-auto leading-relaxed tracking-wide px-2" style={{ fontFamily: '"Inter", sans-serif', fontWeight: 400 }}>
            Help us capture and share the magic of our special day
          </p>
        </motion.div>

        {/* Central Card Container */}
        <div className="relative z-10">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8"
            variants={staggerChildren}
            initial="initial"
            animate="animate"
          >
            {/* Left Column: Hashtags + Drive Upload */}
            <motion.div
              className="space-y-4 sm:space-y-6 md:space-y-8"
              variants={fadeInUp}
            >
              {/* Hashtags Card */}
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
                  {/* Card content */}
                  <div className="relative p-4 sm:p-6 md:p-8 lg:p-10">
                    <div className="text-center space-y-4 sm:space-y-5 md:space-y-6">
                      {/* Camera Icon */}
                      <div className="relative inline-flex items-center justify-center">
                        <div className="absolute inset-0 bg-[#292E41]/10 rounded-full blur-xl scale-150 animate-pulse"></div>
                        <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#292E41] rounded-full flex items-center justify-center shadow-lg">
                          <Camera className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-[#F1D3D3]" />
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#292E41] mb-2 sm:mb-3" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 700 }}>
                          Official Hashtags
                        </h3>
                        <p className="text-sm sm:text-base md:text-lg font-normal text-[#292E41]/70 mb-4 sm:mb-5 md:mb-6" style={{ fontFamily: '"Inter", sans-serif', fontWeight: 400 }}>
                          Tag your photos and videos with our hashtags to share your
                          memories
                        </p>
                      </div>

                      {/* Hashtags */}
                      <div className="space-y-3 sm:space-y-4">
                        {hashtags.map((hashtag) => (
                          <div
                            key={hashtag}
                            className="flex items-center justify-center gap-2.5 sm:gap-3 px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 md:py-4 rounded-lg sm:rounded-xl border border-[#292E41]/20 hover:border-[#292E41]/40 transition-all duration-300 hover:shadow-md bg-gradient-to-br from-white/30 via-white/20 to-white"
                          >
                            <span className="text-sm sm:text-base md:text-lg font-bold text-[#292E41] break-all sm:break-normal tracking-wide" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 700 }}>
                              {hashtag}
                            </span>
                            <button
                              onClick={() => copyToClipboard(hashtag)}
                              className="p-1.5 sm:p-2 rounded-full hover:bg-[#292E41]/10 transition-colors duration-200 shadow-sm flex-shrink-0 border border-[#292E41]/20 bg-white/40"
                              title="Copy hashtag"
                            >
                              {copiedHashtag ? (
                                <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-green-600" />
                              ) : (
                                <Copy className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-[#292E41]" />
                              )}
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Drive Upload Card */}
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
                  {/* Card content */}
                  <div className="relative p-4 sm:p-6 md:p-8 lg:p-10">
                    <div className="text-center space-y-4 sm:space-y-5 md:space-y-6">
                      <div>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#292E41] mb-2 sm:mb-3" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 700 }}>
                          Upload Your Photos & Videos
                        </h3>
                        <p className="text-sm sm:text-base md:text-lg font-normal text-[#292E41]/70" style={{ fontFamily: '"Inter", sans-serif', fontWeight: 400 }}>
                          Help us capture our special day! Scan the QR or use the actions below to drop your clips into our shared Drive.
                        </p>
                      </div>

                      <div className="flex flex-col items-center gap-3 sm:gap-4">
                        <div className="inline-flex flex-col items-center p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl border border-[#292E41]/20 bg-gradient-to-br from-white/30 via-white/20 to-white">
                          <div className="mb-3 sm:mb-4 p-2 sm:p-3 rounded-lg sm:rounded-xl bg-white shadow-md border border-[#292E41]/20">
                            <QRCodeCanvas
                              id="drive-qr"
                              value={driveLink}
                              size={isMobile ? 112 : 160}
                              includeMargin
                              className="bg-white"
                              fgColor="#292E41"
                            />
                          </div>
                          <p className="text-xs sm:text-sm md:text-base font-normal text-[#292E41]/70" style={{ fontFamily: '"Inter", sans-serif', fontWeight: 400 }}>
                            📱 Scan with your camera app
                          </p>
                        </div>

                        <div className="w-full flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4">
                          <button
                            onClick={copyDriveLink}
                            className="flex-1 inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 border-2 border-[#292E41]/30 hover:border-[#292E41]/50 rounded-lg text-sm sm:text-base md:text-lg font-bold text-[#292E41] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] bg-white/40 hover:bg-white/60"
                            style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 700 }}
                          >
                            {copiedDriveLink ? (
                              <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-green-600" />
                            ) : (
                              <Copy className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                            )}
                            <span>{copiedDriveLink ? "Copied!" : "Copy Link"}</span>
                          </button>

                          <button
                            onClick={downloadDriveQRCode}
                            className="flex-1 inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 bg-[#292E41] hover:bg-[#292E41]/90 rounded-lg text-sm sm:text-base md:text-lg font-bold text-[#E6DFD2] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg"
                            style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 700 }}
                          >
                            <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                            <span>Download QR</span>
                          </button>

                          <button
                            onClick={openDrive}
                            className="flex-1 inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 bg-[#292E41] hover:bg-[#292E41]/90 rounded-lg text-sm sm:text-base md:text-lg font-bold text-[#E6DFD2] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg"
                            style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 700 }}
                          >
                            <Share2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                            <span>Open Drive</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </motion.div>

            {/* QR Code & Social Media */}
            <motion.div className="space-y-4 sm:space-y-6 md:space-y-8" variants={fadeInUp}>
              {/* QR Code Card */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-br from-[#292E41]/20 to-[#292E41]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />

                <div className="relative backdrop-blur-sm rounded-xl sm:rounded-2xl border-2 border-[#292E41]/30 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-[#292E41]/50 overflow-hidden text-center" style={{ 
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
                    <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#292E41] mb-4 sm:mb-5 md:mb-6" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 700 }}>
                      Share Our Website
                    </h4>

                    <div className="inline-flex flex-col items-center p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl border border-[#292E41]/20 mb-3 sm:mb-4 bg-gradient-to-br from-white/30 via-white/20 to-white">
                      <div className="mb-3 sm:mb-4 p-2 sm:p-3 rounded-lg sm:rounded-xl bg-white shadow-md border border-[#292E41]/20">
                        <QRCodeCanvas
                          id="snapshare-qr"
                          value={websiteUrl}
                          size={isMobile ? 112 : 160}
                          includeMargin
                          className="bg-white"
                          fgColor="#292E41"
                        />
                      </div>
                      <button
                        onClick={downloadQRCode}
                        className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 bg-[#292E41] hover:bg-[#292E41]/90 text-[#E6DFD2] rounded-lg transition-all duration-200 shadow-md hover:shadow-lg text-sm sm:text-base md:text-lg font-bold"
                        style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 700 }}
                      >
                        <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E6DFD2]" />
                        <span>Download QR Code</span>
                      </button>
                    </div>

                    <p className="text-xs sm:text-sm md:text-base font-normal text-[#292E41]/70" style={{ fontFamily: '"Inter", sans-serif', fontWeight: 400 }}>
                      Scan with any camera app to visit our website
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media Card */}
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
                  {/* Card content */}
                  <div className="relative p-4 sm:p-6 md:p-8 lg:p-10">
                    <h5 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#292E41] mb-4 sm:mb-5 md:mb-6 text-center" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 700 }}>
                      Share on Social Media
                    </h5>

                    <div className="grid grid-cols-2 gap-2.5 sm:gap-3 md:gap-4">
                      <button
                        onClick={() => shareOnSocial("instagram")}
                        className="group flex items-center justify-center gap-1.5 sm:gap-2 bg-gradient-to-br from-pink-500 via-purple-500 to-pink-600 text-white px-2.5 sm:px-3 md:px-4 py-2.5 sm:py-3 md:py-4 rounded-lg hover:scale-105 transition-all duration-200 shadow-md hover:shadow-xl"
                      >
                        <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform text-white" />
                        <span className="font-[family-name:var(--font-crimson)] font-semibold text-[10px] sm:text-xs md:text-sm">
                          Instagram
                        </span>
                      </button>

                      <button
                        onClick={() => shareOnSocial("facebook")}
                        className="group flex items-center justify-center gap-1.5 sm:gap-2 bg-gradient-to-br from-blue-500 to-blue-700 text-white px-2.5 sm:px-3 md:px-4 py-2.5 sm:py-3 md:py-4 rounded-lg hover:scale-105 transition-all duration-200 shadow-md hover:shadow-xl"
                      >
                        <Facebook className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform text-white" />
                        <span className="font-[family-name:var(--font-crimson)] font-semibold text-[10px] sm:text-xs md:text-sm">
                          Facebook
                        </span>
                      </button>

                      <button
                        onClick={() => shareOnSocial("tiktok")}
                        className="group flex items-center justify-center gap-1.5 sm:gap-2 bg-gradient-to-br from-black via-gray-800 to-black text-white px-2.5 sm:px-3 md:px-4 py-2.5 sm:py-3 md:py-4 rounded-lg hover:scale-105 transition-all duration-200 shadow-md hover:shadow-xl"
                      >
                        <Share2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform text-white" />
                        <span className="font-[family-name:var(--font-crimson)] font-semibold text-[10px] sm:text-xs md:text-sm">
                          TikTok
                        </span>
                      </button>

                      <button
                        onClick={() => shareOnSocial("twitter")}
                        className="group flex items-center justify-center gap-1.5 sm:gap-2 bg-gradient-to-br from-sky-400 to-blue-500 text-white px-2.5 sm:px-3 md:px-4 py-2.5 sm:py-3 md:py-4 rounded-lg hover:scale-105 transition-all duration-200 shadow-md hover:shadow-xl"
                      >
                        <Twitter className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform text-white" />
                        <span className="font-[family-name:var(--font-crimson)] font-semibold text-[10px] sm:text-xs md:text-sm">
                          Twitter
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Closing Message */}
          <motion.div
            className="text-center mt-8 sm:mt-12 md:mt-16"
            variants={fadeInUp}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-[#292E41]/20 to-[#292E41]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />

              <div className="relative backdrop-blur-sm rounded-xl sm:rounded-2xl border-2 border-[#292E41]/30 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-[#292E41]/50 overflow-hidden" style={{ backgroundColor: '#F1D3D3' }}>
                {/* Card content */}
                <div className="relative p-4 sm:p-6 md:p-8 lg:p-10">
                  <p className="text-sm sm:text-base md:text-lg font-[family-name:var(--font-crimson)] text-[#292E41] leading-relaxed mb-4 sm:mb-5 md:mb-6">
                    We are so excited to celebrate our love with you! See you on our
                    special day!
                  </p>

                  {/* Decorative Line */}
                  <div className="flex items-center justify-center gap-2.5 sm:gap-3 md:gap-4 my-4 sm:my-5 md:my-6">
                    <div className="h-px w-10 sm:w-12 md:w-16 bg-[#292E41]/50" />
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#292E41]/60 rounded-full" />
                    <div className="h-px w-10 sm:w-12 md:w-16 bg-[#292E41]/50" />
                  </div>

                  <div className="text-center">
                    <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl font-[family-name:var(--font-crimson)] text-[#292E41] font-semibold">
                      – Christian & Lewie Rose –
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
