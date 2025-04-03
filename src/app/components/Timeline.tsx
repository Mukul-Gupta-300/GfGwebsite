"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"

const timelineEvents = [
  {
    year: "6 February, 2024",
    title: "Inaugration",
    description: "Celebrating the grand inauguration where we proudly introduced our society’s mission and vision to the college community",
    details:
      "The event marked the beginning of an exciting journey, fostering innovation, collaboration, and growth. With an overwhelming response, we set the stage for future achievements and impactful initiatives.",
  },
  {
    year: "23 February, 2024",
    title: "AI Connect",
    description: "AI Connect: A transformative event where students discovered the power of generative AI through hands-on projects and insights into its learning potential",
    details:
      "Students engaged in hands-on workshops, explored real-world applications of generative AI, and gained insights into its transformative potential through interactive sessions and expert talks."  },
  {
    year: "5 March 2024",
    title: "InnoVogue",
    description: "An inspiring ideathon where creativity met technology, exploring groundbreaking ideas at the intersection of software and fashion.",
    details:
"Participants brainstormed innovative solutions, blending AI, design, and fashion tech to redefine the future of the industry. The event fostered innovation, encouraging participants to merge technology with fashion to create cutting-edge solutions."  },
  {
    year: "6 March 2024",
    title: "PyHunt",
    description: "The flagship event of the tech fest, where brilliance in Python and computer science was put to the ultimate test!",
    details:
"Participants tackled challenging problems, showcasing their coding skills and problem-solving abilities in a high-stakes competition."  },
  {
    year: "25 April 2024",
    title: "StepNext",
    description: " A pre-placement bootcamp featuring the founder of GeeksforGeeks, equipping students with invaluable career insights and guidance for their next big step!",
    details:
    "Students gained expert advice, industry insights, and essential skills to excel in placements and kick-start their careers. " },
  {
    year: "4 Auguys 2024",
    title: "HQ Visit",
    description: "An enriching experience at the GeeksforGeeks headquarters, fostering networking and collaboration with other societies while gaining valuable insights!",
    details:
"Attendees explored the latest tech trends, engaged in knowledge-sharing sessions, and connected with industry experts. The visit provided a platform for meaningful discussions, opening doors to future collaborations and opportunities."  },
  {
    year: "15 August 2024",
    title: "Geekhunt",
    description: "A dynamic blend of knowledge and creativity, featuring an open-domain quiz to challenge minds and a meme-making competition to showcase humor and ingenuity",
    details:
"Participants tested their intellect with thought-provoking questions while unleashing their creativity through witty and tech-savvy memes. The event fostered a fun and engaging atmosphere, bringing together innovation and entertainment."  },
  {
    year: "19 October 2024",
    title: "Vichaar-X",
    description: "A multidisciplinary ideation challenge where participants showcased their prowess in both technical innovation and business strategy through multiple skill-testing rounds!",
    details:
"Teams tackled real-world problems, combining creativity with analytical thinking to develop impactful solutions. The challenge encouraged collaboration, strategic planning, and innovative problem-solving."  },
  {
    year: "11 Jan 2025",
    title: "HQ Visit",
    description: "A special session with Chandan Sir at the GeeksforGeeks headquarters, where he shared expert insights on cracking GATE and excelling in the exam!",
    details:
"Students gained valuable strategies, tips, and resources to enhance their GATE preparation. The session provided clarity on key concepts and effective study techniques for success."  },
  {
    year: "23 Jan 2025",
    title: "GateWay",
    description: "Gateway was an exciting online event featuring a technical quiz and a meme-making competition, testing both knowledge and creativity",
    details: 
"Participants showcased their problem-solving skills through challenging questions while adding a fun twist with tech-savvy memes. The event brought together innovation and humor, making learning an engaging experience."  }
]
// Animated glowing icon that moves along the timeline


export default function Timeline() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  return (
    <section ref={containerRef} className="py-20 bg-[#02091c] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white">Our Events</h2>
          <p className="mt-4 text-lg text-white/85">The evolution of GfG Bvcoe through the semesters</p>
        </motion.div>

        {/* Animated Timeline Line */}
        <motion.div
          className="absolute left-1/2 w-1 bg-blue-400 rounded-full transform -translate-x-1/2"
          style={{
            height: "100%",
            scaleY: scaleX,
            transformOrigin: "top",
            boxShadow: "0px 0px 15px rgba(0, 174, 228, 0.8)",
          }}
        />

        {/* Timeline Events */}
        {timelineEvents.map((event, index) => (
          <TimelineEvent
            key={index}
            event={event}
            index={index}
            isExpanded={expandedIndex === index}
            onToggle={() => setExpandedIndex(expandedIndex === index ? null : index)}
          />
        ))}
      </div>
    </section>
  )
}

function TimelineEvent({ event, index, isExpanded, onToggle }: any) {
  return (
    <motion.div
      className={`mb-10 flex items-center justify-between w-full ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="w-5/12" />
      
      {/* Circular Indicator */}
      <div className="relative z-20">
        <div className="w-6 h-6 bg-blue-500 rounded-full shadow-md border-4 border-[#02091c]" />
      </div>

      {/* Timeline Card */}
      <motion.div
        className="w-5/12 cursor-pointer p-4 bg-[#091428] rounded-lg shadow-md border border-blue-500/20"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onToggle}
      >
        <span className="font-bold text-blue-400">{event.year}</span>
        <h3 className="text-lg font-semibold mb-1 text-white">{event.title}</h3>
        <p className="text-white/75">{event.description}</p>

        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <p className="mt-2 text-sm text-white/70">{event.details}</p>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
