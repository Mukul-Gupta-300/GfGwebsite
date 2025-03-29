"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Calendar } from "lucide-react"

const HQVisits = [
  {
    title: "First HQ Visit",
    date: "March 15, 2024",
    location: "National Headquarters, Central City",
    description: "Our first official visit to the national headquarters, where we discussed key strategic initiatives and future plans for our society.",
    image: "/images/hq-visit-1.jpg", // Replace with your actual image
    highlights: [
      "Met with senior leadership",
      "Presented annual report",
      "Discussed future collaboration"
    ]
  },
  {
    title: "Second HQ Visit",
    date: "September 22, 2024", 
    location: "Regional Headquarters, Riverside",
    description: "Our second visit focused on community outreach and developing new program strategies to expand our society's impact.",
    image: "/images/hq-visit-2.jpg", // Replace with your actual image
    highlights: [
      "Workshop on community engagement",
      "Reviewed quarterly progress", 
      "Planned upcoming community projects"
    ]
  }
]

export default function HQVisitsPage() {
  const [selectedVisit, setSelectedVisit] = useState(0)

  // Format the description text to replace \n with <br> and preserve formatting
  const formatDescription = (text: string) => {
    return text.split('\n').map((line, i) => (
      <span key={i}>
        {line}
        <br />
      </span>
    ));
  };

  return (
    <div className="py-20 bg-[#02091c] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center mb-12 text-white" style={{ fontFamily: 'serif' }}>
          Our HQ Visits
        </h2>

        <div className="space-y-8">
          {HQVisits.map((visit, index) => (
            <motion.div 
              key={index}
              className={`
                cursor-pointer 
                rounded-xl 
                shadow-lg 
                overflow-hidden 
                transition-all 
                duration-300 
                ${selectedVisit === index ? 'scale-105' : 'hover:scale-105'}
              `}
              onClick={() => setSelectedVisit(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative">
                {/* Gradient background */}
                <div className="absolute inset-0 bg-gradient-to-l from-green-800 via-blue-900 to-black">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,theme(colors.emerald.500),transparent_50%)] opacity-20" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,theme(colors.blue.500),transparent_50%)] opacity-20" />
                </div>

                {/* Content container */}
                <div className="relative p-5">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                    {/* Visit image */}
                    <div className="shrink-0 w-64 self-center md:self-auto">
                      <img 
                        src={visit.image} 
                        alt={visit.title}
                        className="rounded-lg shadow-lg w-full"
                      />
                    </div>

                    {/* Visit details */}
                    <div className="flex-1 text-white">
                      <h3 className="text-3xl font-normal mb-4">{visit.title}</h3>
                      
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center text-gray-300">
                          <Calendar className="mr-3 text-blue-400" size={24} />
                          <span>{visit.date}</span>
                        </div>
                        
                        <div className="flex items-center text-gray-300">
                          <MapPin className="mr-3 text-blue-400" size={24} />
                          <span>{visit.location}</span>
                        </div>
                      </div>

                      <p className="text-gray-300 leading-relaxed">{visit.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Highlights Section */}
        {selectedVisit !== null && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-12 bg-white/10 backdrop-blur-sm rounded-xl p-8"
          >
            <h4 className="text-3xl font-bold mb-6 text-white">
              {HQVisits[selectedVisit].title} Highlights
            </h4>
            
            <ul className="space-y-3 text-gray-300">
              {HQVisits[selectedVisit].highlights.map((highlight, index) => (
                <li key={index} className="flex items-center">
                  <span className="mr-3 text-blue-400">•</span>
                  {highlight}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </div>
  )
}