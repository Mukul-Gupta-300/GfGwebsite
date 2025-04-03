"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useAnimation, useMotionValue } from "framer-motion"

const features = [
  {
    title: "Ms. Rachna Narula",
    description:`Dear Students, \nAs an Assistant Professor in the CSE Department at Bharatividyapeeth's College of Engineering, New Delhi, I have navigated an educational journey from schooling through B. Tech (Maharashi Dayanand University, Rohtak), M. Tech (Manav Rachna University, Faridabad), and Pursuing Ph.D. (The Northcap University, Gurugram). Throughout this path, self-valuation has been a cornerstone, and I believe it is essential for maintaining a balanced mind-set.\n\nAs the Faculty In-charge of our GeeksforGeeks (GFG) Student Chapter, I am delighted to welcome you to a community dedicated to fostering growth, innovation, and collaboration in the field of computer science and engineering. \n\n<strong>Our Mission:</strong> \nIt aims to create a peer-to-peer learning environment where students can enhance their \ntechnical skills, engage in meaningful projects, and prepare for successful careers in the tech industry. \n\n<strong>Opportunities and Benefits:</strong> \n\n•	Skill Development: Participate in workshops, coding competitions, and hackathons to \nsharpen your programming and problem-solving abilities.\n •	Industry Exposure: Attend webinars and seminars led by experts to gain insights into \ncurrent industry trends and technologies. \n •	Networking: Connect with like-minded peers and professionals, expanding your \nprofessional network within and beyond our institution. \n\nWishing you all a balanced and fulfilling academic journey. \n\nBest regards, \n[Ms. Rachna Narula]`,
    image: "/images/Rachna.jpg",
  },
]

export default function FeatureCarousel() {
  const [width, setWidth] = useState(0)
  const carousel = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const controls = useAnimation()

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }
  }, [])

  const handleDragEnd = () => {
    const currentX = x.get()
    if (currentX > 0) {
      controls.start({ x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } })
    } else if (currentX < -width) {
      controls.start({ x: -width, transition: { type: "spring", stiffness: 300, damping: 30 } })
    }
  }

  // Format the description text to replace \n with <br> and preserve formatting
  const formatDescription = (text: string) => {
    return <p dangerouslySetInnerHTML={{ __html: text.replace(/\n/g, "<br>") }} />;
  };

  return (
    <div className="py-20 bg-[#02091c] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center mb-12 text-white" style={{ fontFamily: 'serif' }}>Meet Our Faculty Coordinator</h2>
        <motion.div ref={carousel} className="cursor-grab overflow-visible">
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            whileTap={{ cursor: "grabbing" }}
            animate={controls}
            style={{ x }}
            onDragEnd={handleDragEnd}
            className="flex"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="min-w-full m-4 rounded-xl shadow-lg overflow-hidden"
              >
                {/* Container with gradient background */}
                <div className="relative">
                  {/* Gradient background confined to the box */}
                  <div className="absolute inset-0 bg-gradient-to-l from-green-800 via-blue-900 to-black">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,theme(colors.emerald.500),transparent_50%)] opacity-20" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,theme(colors.blue.500),transparent_50%)] opacity-20" />
                  </div>
                  
                  {/* Content container with auto height to fit all content */}
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-8 p-6 relative">
                    {/* Faculty image - now vertically centered with flex */}
                    <div className="shrink-0 w-64 self-center md:self-auto">
                      <img 
                        src={feature.image} 
                        alt={feature.title}
                        className="rounded-lg shadow-lg w-full drop-shadow-[0_0_15px_rgba(0,255,255,0.8)] brightness-120 contrast-115"
                      />
                    </div>
                    
                    {/* Content section */}
                    <div className="flex-1">
                      <h3 className="text-3xl font-normal mb-4 text-white">{feature.title}</h3>
                      <div className="text-gray-300 leading-relaxed text-base space-y-4">
                        {formatDescription(feature.description)}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}