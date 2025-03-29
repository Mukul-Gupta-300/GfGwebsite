"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Define the team member type
interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
}

export default function TeamCarousel() {
  // Sample team data
  const teamMembers: TeamMember[] = [
    { name: "Navya Gupta", role: "President", imageUrl: "/team/Navya.jpg" },
    { name: "Mukul Gupta", role: "Vice President", imageUrl: "/team/Mukul.jpg" },
    { name: "Ganeev", role: "Technical Lead", imageUrl: "/team/Ganeev.jpg" },
    { name: "Shreyansh Raj", role: "Event Manager", imageUrl: "/team/Shreyansh.jpg" },
    { name: "Tanishka Guru", role: "Design Lead", imageUrl: "/team/Tanishka.jpg" },
    { name: "Toshika Goswami", role: "Social Media Lead", imageUrl: "/team/Toshika.jpg" },
    { name: "Nitin Sounkaria", role: "Content Lead", imageUrl: "/team/Nitin.jpg" },
    { name: "Zaynah", role: "Outreach Lead", imageUrl: "/team/Zaynah.jpg" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredDot, setHoveredDot] = useState<number | null>(null);

  // Auto rotate effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % teamMembers.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [teamMembers.length]);

  return (
    <div className="relative w-full overflow-hidden mt-0 bg-[#02091c] py-16 flex flex-col items-center justify-center z-10">
{/* Base Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-l from-green-700 via-blue-800 to-black" />

      {/* Additional Gradient Layers */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,theme(colors.emerald.500),transparent_50%)] opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,theme(colors.blue.400),transparent_50%)] opacity-30" />
      </div>

      {/* Noise Texture */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.05] mix-blend-overlay pointer-events-none" />

      {/* Title */}
      <h2 className="text-4xl font-bold text-center mb-16 
        bg-gradient-to-l from-emerald-400 via-blue-300 to-emerald-400 
        bg-clip-text text-transparent brightness-120 contrast-115 shadow-md">
        Meet the Team
      </h2>

      {/* Carousel Container */}
      <div className="relative w-full h-96 mt-24 mb-32">
        {teamMembers.map((member, index) => {
          const totalCards = teamMembers.length;
          const adjustedIndex = (index - activeIndex + totalCards) % totalCards;
          
          const startAngle = Math.PI / 2;
          const angle = startAngle + (adjustedIndex / totalCards) * 2 * Math.PI;
          
          const radius = 38;
          const x = 50 + radius * Math.cos(angle);
          const y = 50 + radius * Math.sin(angle);
          
          const isActive = adjustedIndex === 0;
          const distanceFromActive = Math.min(adjustedIndex, totalCards - adjustedIndex);
          const scale = isActive ? 1.3 : 0.7 - (distanceFromActive * 0.05);
          const zIndex = 40 - distanceFromActive;

          return (
            <motion.div
              key={index}
              className="absolute transform -translate-x-1/2 -translate-y-1/2"
              initial={false}
              animate={{
                left: `${x}%`,
                top: `${y}%`,
                scale: scale,
                zIndex: zIndex,
                opacity: isActive ? 1 : 0.7,
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              onClick={() => setActiveIndex(index)}
            >
              <div className="w-56 rounded-xl shadow-lg overflow-hidden cursor-pointer bg-black/80 backdrop-blur-md border border-emerald-700/50">
                <div className="h-56">
                  <div className="bg-gradient-to-b from-blue-900 to-emerald-900 w-full h-full flex items-center justify-center">
                    <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${member.imageUrl})` }}>
                      <div className="w-full h-full flex items-center justify-center text-gray-400 text-xl">
                        {!member.imageUrl && member.name.substring(0, 1)}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-black/70 backdrop-blur-sm">
                  <h3 className="font-bold text-xl 
                    bg-gradient-to-l from-emerald-400 via-blue-300 to-emerald-400 
                    bg-clip-text text-transparent shadow-lg">
                    {member.name}
                  </h3>
                  <p className="text-emerald-200 brightness-150">{member.role}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-20 gap-4 px-4 py-2 bg-black/30 backdrop-blur-sm rounded-full shadow-md border border-emerald-800/30">
        {teamMembers.map((_, index) => {
          const isActive = activeIndex === index;
          const isHovered = hoveredDot === index;

          return (
            <motion.button
              key={index}
              className="relative focus:outline-none"
              onMouseEnter={() => setHoveredDot(index)}
              onMouseLeave={() => setHoveredDot(null)}
              onClick={() => setActiveIndex(index)}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                className="w-3 h-3 rounded-full bg-gray-700"
                initial={false}
                animate={{
                  backgroundColor: isActive ? "#10b981" : isHovered ? "#0ea5e9" : "#374151",
                  scale: isActive ? 1 : isHovered ? 1.2 : 1,
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />

              {isActive && (
                <motion.div
                  className="absolute inset-0 rounded-full bg-emerald-500 -z-10"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1.8, opacity: 0 }}
                  transition={{
                    duration: 1.5,
                    ease: "easeOut",
                    repeat: Infinity,
                    repeatDelay: 0.5,
                  }}
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
