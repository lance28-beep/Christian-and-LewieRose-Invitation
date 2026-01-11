"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Heart, MessageCircle, Sparkles } from "lucide-react"
import { useState, useEffect } from "react"

interface Message {
  timestamp: string
  name: string
  message: string
}

interface MessageWallDisplayProps {
  messages: Message[]
  loading: boolean
}

export default function MessageWallDisplay({ messages, loading }: MessageWallDisplayProps) {
  const [visibleMessages, setVisibleMessages] = useState<Message[]>([])
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (messages.length > 0) {
      setIsAnimating(true)
      // Stagger the animation of messages
      const timer = setTimeout(() => {
        setVisibleMessages(messages)
        setIsAnimating(false)
      }, 100)
      return () => clearTimeout(timer)
    } else {
      setVisibleMessages([])
    }
  }, [messages])

  if (loading) {
    return (
      <div className="relative">
        <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-7">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="border border-[#292E41]/8 shadow-sm rounded-lg">
            <CardContent className="py-4 px-4 sm:py-5 sm:px-5 md:py-6 md:px-7">
              <Skeleton className="h-16 sm:h-20 md:h-24 w-full mb-3 sm:mb-4" />
              <div className="flex items-center gap-2.5 sm:gap-3 pt-3 sm:pt-4 border-t border-[#292E41]/8">
                <Skeleton className="w-8 h-8 sm:w-9 sm:h-9 rounded-full" />
                <div className="flex-1 space-y-1.5 sm:space-y-2">
                  <Skeleton className="h-3 sm:h-3.5 w-20 sm:w-24" />
                  <Skeleton className="h-2.5 sm:h-3 w-16 sm:w-20" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
        </div>
      </div>
    )
  }

  if (messages.length === 0) {
    return (
      <div className="relative text-center py-8 sm:py-12 px-4 overflow-hidden">
        <div className="relative z-10">
        <div className="relative inline-block mb-4 sm:mb-6">
          <div className="absolute inset-0 bg-[#292E41]/10 rounded-full blur-xl scale-150"></div>
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 bg-[#292E41] rounded-full flex items-center justify-center mx-auto shadow-lg">
            <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 text-[#E6DFD2]" fill="#E6DFD2" />
          </div>
        </div>
        <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 sm:mb-3 uppercase tracking-wider" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 700 }}>
          No Messages Yet
        </h3>
        <p className="text-sm sm:text-base md:text-lg font-normal text-white max-w-md mx-auto leading-relaxed tracking-wide" style={{ fontFamily: '"Inter", sans-serif', fontWeight: 400 }}>
          Be the first to share your heartfelt wishes for the happy couple!
        </p>
        <div className="mt-4 sm:mt-6 flex justify-center">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#E6DFD2]" fill="#E6DFD2" />
            <span className="text-xs sm:text-sm font-normal text-white" style={{ fontFamily: '"Inter", sans-serif', fontWeight: 400 }}>Your message will appear here</span>
            <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#E6DFD2]" fill="#E6DFD2" />
          </div>
        </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative overflow-hidden">
      <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-7">
      {visibleMessages.map((msg, index) => (
        <Card
          key={index}
          className={`relative border border-[#292E41]/8 shadow-sm hover:shadow-lg hover:border-[#292E41]/15 transition-all duration-300 group rounded-lg ${
            isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
          }`}
          style={{
            transitionDelay: `${index * 100}ms`,
            animation: isAnimating ? 'none' : 'fadeInUp 0.6s ease-out forwards'
          }}
        >
          <CardContent className="relative py-4 px-4 sm:py-5 sm:px-6 md:py-6 md:px-7">
            {/* Message content with elegant quotation marks */}
            <div className="relative mb-3 sm:mb-4 md:mb-5">
              <span className="absolute -left-2 -top-3 sm:-left-3 sm:-top-4 md:-left-4 md:-top-5 text-4xl sm:text-5xl md:text-6xl text-[#292E41]/8 leading-none select-none group-hover:text-[#292E41]/12 transition-colors" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 700 }}>"</span>
              <div className="relative pl-6 sm:pl-8 md:pl-10 pr-4 sm:pr-6 md:pr-8 pt-2 sm:pt-3 pb-1.5 sm:pb-2">
                <p className="text-[#292E41] text-base sm:text-lg md:text-xl leading-relaxed font-normal tracking-wide" style={{ fontFamily: '"Inter", sans-serif', fontWeight: 400 }}>{msg.message}</p>
              </div>
              <span className="absolute -right-2 -bottom-1 sm:-right-3 sm:-bottom-2 md:-right-4 md:-bottom-3 text-4xl sm:text-5xl md:text-6xl text-[#292E41]/8 leading-none select-none group-hover:text-[#292E41]/12 transition-colors" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 700 }}>"</span>
            </div>
            
            {/* Author info at bottom with elegant divider */}
              <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-[#292E41]/8">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 bg-[#292E41] rounded-full flex items-center justify-center shadow-sm group-hover:shadow transition-shadow border border-[#292E41]/20">
                    <span className="text-[#E6DFD2] text-xs sm:text-sm font-bold" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 700 }}>
                      {msg.name
                        .split(" ")
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join("")
                        .toUpperCase()}
                    </span>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm sm:text-base md:text-lg text-[#292E41] font-bold leading-tight" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 700 }}>{msg.name}</h4>
                  <span className="text-xs sm:text-sm text-[#292E41]/50 font-normal tracking-wide" style={{ fontFamily: '"Inter", sans-serif', fontWeight: 400 }}>
                    {new Date(msg.timestamp).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric"
                    })}
                  </span>
                </div>
              </div>
              <Heart className="flex-shrink-0 h-4 w-4 sm:h-5 sm:w-5 text-[#292E41]/60 fill-[#292E41]/20 group-hover:text-[#292E41] group-hover:fill-[#292E41]/40 transition-all duration-300" />
            </div>
          </CardContent>
        </Card>
      ))}
      </div>
      
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
