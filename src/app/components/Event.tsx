"use client"

import { useRef, useEffect } from "react"
import { motion, useAnimationControls } from "framer-motion"

const events = [
  { id: 1, image: "/images/Ai_connect.jpg" },
  { id: 2, image: "/images/GateWay.jpg" },
  { id: 3, image: "/images/Inaugration.jpg" },
  { id: 4, image: "/images/Pyhunt.jpg" },
  { id: 5, image: "/images/StepNext.jpg" },
  { id: 6, image: "/images/VichaarX.jpg" },
  { id: 7, image: "/images/together.jpg" },
]

export default function PortfolioGrid() {
  const containerRef = useRef<HTMLDivElement>(null)
  const controls = useAnimationControls()
  
  useEffect(() => {
    if (!containerRef.current) return
    
    // Calculate total width of a single set of slides
    const slideWidth = containerRef.current.scrollWidth / 2
    
    const infiniteScroll = async () => {
      while (true) {
        await controls.start({
          x: -slideWidth,
          transition: { duration: 20, ease: "linear" }
        })
        
        // Reset position without animation
        controls.set({ x: 0 })
      }
    }
    
    infiniteScroll()
  }, [controls])
  
  return (
    <div className="relative w-full overflow-hidden bg-[#02091c] py-10">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10" />
      
      <div className="overflow-hidden">
        <motion.div 
          ref={containerRef}
          className="flex whitespace-nowrap"
          animate={controls}
        >
          {/* First set of images */}
          {events.map((event) => (
            <div key={event.id} className="flex items-center mx-4">
              <div className="w-64 h-40 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={event.image} 
                  alt={`Event ${event.id}`} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
          
          {/* Duplicate set of images to create seamless loop */}
          {events.map((event) => (
            <div key={`${event.id}-duplicate`} className="flex items-center mx-4">
              <div className="w-64 h-40 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={event.image} 
                  alt={`Event ${event.id}`} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}