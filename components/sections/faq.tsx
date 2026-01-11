"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Section } from "@/components/section";
import Image from "next/image";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "When and where is the wedding?",
    answer:
      "Our wedding will be held on Tuesday, February 10, 2026, at 3:00 PM. Both the ceremony and reception will take place at Lokal ng Brookside & Kubo Grill. Please refer to the Event Details section for more information and directions.",
  },
  {
    question: "What is the dress code?",
    answer:
      "Attire Guidelines:\n\n• Ladies: Light Pink\n• Gentlemen: Navy Blue\n\nWe kindly ask that you adhere to our attire guidelines to help create a cohesive and beautiful celebration. Please refer to the Event Details section for the complete color palette.",
  },
  {
    question: "When is the RSVP deadline?",
    answer:
      "We have reserved seats for you and look forward to celebrating with you! Your response helps us finalize our guest list and seating arrangements.\n\n[RSVP_LINK]Click here to RSVP[/RSVP_LINK]",
  },
  {
    question: "Can I bring a plus one?",
    answer:
      "As we celebrate this moment with our closest loved ones, we kindly ask that attendance be limited to those named on the invitation. Thank you for your understanding and cooperation!",
  },
  {
    question: "Are children allowed?",
    answer:
      "We love your little ones, but to keep the celebration intimate, we kindly request an adults-only event. Children in our family and the entourage are the exception. We appreciate your understanding!",
  },
  {
    question: "What is your gift policy?",
    answer:
      "Your presence at our celebration is more than enough, and we are truly grateful for you sharing this special moment with us. However, if you would like to honor us with a gift, we would be deeply appreciative of a monetary contribution for our future together. Gifts may be given during the celebration.",
  },
  {
    question: "Can I take photos during the ceremony?",
    answer:
      "We'd love for everyone to be fully present. Please avoid posting photos during the celebration or ahead of time—our photographers will take care of the memories. We want everyone to be in the moment with us!",
  },
  {
    question: "What if I have dietary restrictions or allergies?",
    answer:
      "Please mention any dietary restrictions, allergies, or special meal requirements in the message field when you submit your RSVP, or contact us directly. We want to ensure everyone is comfortable and well-fed!",
  },
  {
    question: "How do I get to the venue?",
    answer:
      "You can use the 'Get Directions' button in the Event Details section to open Google Maps for easy navigation to Lokal ng Brookside & Kubo Grill. The venue also provides QR codes in the details section for convenient access to directions.",
  },
  {
    question: "Is there parking available?",
    answer:
      "Yes! The venue has parking facilities available. We recommend arriving 15-20 minutes early to secure a spot and get settled comfortably. The ceremony starts at 3:00 PM.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section
      id="faq"
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
          Frequently Asked Questions
        </h2>
        <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
          <div className="h-[1px] w-12 sm:w-16 md:w-24 bg-gradient-to-r from-transparent via-[#292E41] to-transparent" />
        </div>
        <p className="text-lg sm:text-xl md:text-2xl font-normal text-[#292E41]/80 max-w-xl mx-auto leading-relaxed tracking-wide px-2" style={{ fontFamily: '"Inter", sans-serif', fontWeight: 400 }}>
          Everything you need to know about our special day
        </p>
      </div>

      {/* FAQ content */}
      <div className="relative z-10 max-w-5xl mx-auto px-3 sm:px-4 md:px-6">
        {/* Main card */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-br from-[#292E41]/20 to-[#292E41]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />

          <div className="relative backdrop-blur-sm rounded-xl sm:rounded-2xl overflow-hidden border-2 border-[#292E41]/30 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-[#292E41]/50" style={{ 
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
              {/* FAQ items */}
              <div className="space-y-2.5 sm:space-y-3 md:space-y-4">
                {faqItems.map((item, index) => {
                  const isOpen = openIndex === index;
                  const contentId = `faq-item-${index}`;
                  return (
                    <div
                      key={index}
                      className="rounded-lg sm:rounded-xl border border-[#292E41]/20 hover:bg-white/40 transition-all duration-300 hover:shadow-md hover:border-[#292E41]/40 overflow-hidden bg-gradient-to-br from-white/30 via-white/20 to-white"
                    >
                      <button
                        onClick={() => toggleItem(index)}
                        className="group w-full px-3 sm:px-4 md:px-5 py-3 sm:py-3.5 md:py-4 flex items-center justify-between text-left outline-none focus-visible:ring-2 focus-visible:ring-[#292E41]/50 focus-visible:ring-offset-2 transition-colors"
                        aria-expanded={isOpen}
                        aria-controls={contentId}
                      >
                        <span className="font-bold text-[#292E41] pr-3 sm:pr-4 text-sm sm:text-base md:text-lg leading-relaxed group-hover:text-[#292E41]/80 transition-colors duration-200" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 700 }}>
                          {item.question}
                        </span>
                        <ChevronDown
                          size={18}
                          className={`text-[#292E41] flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""} w-4 h-4 sm:w-5 sm:h-5 group-hover:text-[#292E41]/80`}
                          aria-hidden
                        />
                      </button>

                      <div
                        id={contentId}
                        role="region"
                        className={`grid transition-all duration-300 ease-out ${
                          isOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 md:py-4 border-t border-[#292E41]/20 bg-white/40">
                            {item.answer.includes("[RSVP_LINK]") ? (
                              <p className="text-[#292E41]/80 leading-relaxed text-sm sm:text-base md:text-lg whitespace-pre-line" style={{ fontFamily: '"Inter", sans-serif', fontWeight: 400 }}>
                                {item.answer.split("[RSVP_LINK]")[0]}
                                <a
                                  href="#guest-list"
                                  className="text-[#292E41] underline font-bold hover:text-[#292E41]/80 transition-colors inline-flex items-center gap-1"
                                  style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 700 }}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    document
                                      .getElementById("guest-list")
                                      ?.scrollIntoView({ behavior: "smooth" });
                                  }}
                                >
                                  {
                                    item.answer.match(
                                      /\[RSVP_LINK\](.*?)\[\/RSVP_LINK\]/,
                                    )?.[1]
                                  }
                                </a>
                                {item.answer.split("[/RSVP_LINK]")[1]}
                              </p>
                            ) : (
                              <p className="text-[#292E41]/80 leading-relaxed text-sm sm:text-base md:text-lg whitespace-pre-line" style={{ fontFamily: '"Inter", sans-serif', fontWeight: 400 }}>
                                {item.answer}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
