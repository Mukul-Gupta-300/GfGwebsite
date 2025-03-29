"use client"

import { motion } from "framer-motion"

export default function WearYourStory() {
  return (
    <section className="bg-[#02091c] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center max-w-6xl mx-auto">
          {/* Mission Card with Darker Blue Gradient */}
          <motion.div
            className="relative rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 group w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Enhanced backglow effect */}
            <div className="absolute -inset-1 bg-blue-500/0 group-hover:bg-blue-500/50 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 z-0"></div>
            <div className="absolute -inset-2 bg-blue-400/0 group-hover:bg-blue-400/30 rounded-xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 z-0"></div>
            <div className="absolute -inset-3 bg-blue-300/0 group-hover:bg-blue-300/20 rounded-xl blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 z-0"></div>
            
            {/* Card backside glow effect */}
            <div className="absolute inset-0 bg-blue-400/0 group-hover:bg-blue-400/20 transition-all duration-500"></div>
            
            {/* Darker blue gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-800 via-blue-900 to-blue-950 z-10"></div>
            
            {/* Secondary diagonal gradient for more depth */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-950/90 via-transparent to-blue-600/20 z-10"></div>
            
            {/* Radial gradient accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_center,#0369a1_0%,transparent_70%)] opacity-20 z-10"></div>
            
            {/* Additional radial accent at bottom left */}
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-[radial-gradient(circle_at_center,#1e40af_0%,transparent_70%)] opacity-20 z-10"></div>
            
            {/* Enhanced overlay gradient for more depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent z-10"></div>
            
            {/* Improved subtle pattern overlay */}
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#fff_1px,transparent_1px)] bg-[length:20px_20px] z-10"></div>
            
            {/* Accent line with enhanced gradient */}
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-blue-400 via-blue-500 to-blue-700 z-20"></div>
            
            {/* Additional accent on the right */}
            <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600/30 via-blue-500/20 to-blue-400/30 z-20"></div>
            
            {/* Backside glow effect on hover */}
            <div className="absolute inset-0 bg-blue-400/0 group-hover:bg-blue-400/10 transition-colors duration-500 z-0"></div>
            
            <div className="p-6 text-center relative z-30">
              {/* Image container with enhanced gradient glow */}
              <div className="mx-auto w-14 h-14 rounded-full bg-white flex items-center justify-center mb-4 overflow-hidden shadow-[0_0_20px_rgba(59,130,246,0.6)] border-2 border-blue-400 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.8)] transition-shadow duration-300">
                <img 
                  src="/images/Mission.png" 
                  alt="Mission" 
                  className="h-8 w-8 object-contain"
                />
              </div>
              
              <h3 className="text-xl font-bold text-white uppercase mb-2 text-shadow">MISSION</h3>
              <p className="text-blue-50 text-sm">
                Our mission is to provide a supportive and engaging platform where students can learn, teach, and grow through seminars, workshops, talks, competitions, and project showcases. We are dedicated to fostering peer-driven learning, equipping students with the necessary guidance and resources to excel in their chosen fields while embracing the spirit of continuous innovation and teamwork.
              </p>
            </div>
          </motion.div>

          {/* Vision Card with Darker Green Gradient */}
          <motion.div
            className="relative rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 group w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Enhanced backglow effect */}
            <div className="absolute -inset-1 bg-emerald-500/0 group-hover:bg-emerald-500/50 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 z-0"></div>
            <div className="absolute -inset-2 bg-emerald-400/0 group-hover:bg-emerald-400/30 rounded-xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 z-0"></div>
            <div className="absolute -inset-3 bg-emerald-300/0 group-hover:bg-emerald-300/20 rounded-xl blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 z-0"></div>
            
            {/* Card backside glow effect */}
            <div className="absolute inset-0 bg-emerald-400/0 group-hover:bg-emerald-400/20 transition-all duration-500"></div>
            
            {/* Darker green gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-emerald-800 to-green-950 z-10"></div>
            
            {/* Secondary diagonal gradient for more depth */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-950/90 via-transparent to-emerald-600/20 z-10"></div>
            
            {/* Enhanced radial gradient accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_center,#047857_0%,transparent_70%)] opacity-20 z-10"></div>
            
            {/* Additional radial accent at bottom left */}
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-[radial-gradient(circle_at_center,#064e3b_0%,transparent_70%)] opacity-20 z-10"></div>
            
            {/* Enhanced overlay gradient for more depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent z-10"></div>
            
            {/* Improved subtle pattern overlay */}
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#fff_1px,transparent_1px)] bg-[length:20px_20px] z-10"></div>
            
            {/* Accent line with enhanced gradient */}
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-emerald-400 via-emerald-500 to-emerald-800 z-20"></div>
            
            {/* Additional accent on the right */}
            <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-600/30 via-emerald-500/20 to-emerald-400/30 z-20"></div>
            
            {/* Backside glow effect on hover */}
            <div className="absolute inset-0 bg-emerald-400/0 group-hover:bg-emerald-400/10 transition-colors duration-500 z-0"></div>
            
            <div className="p-6 text-center relative z-30">
              {/* Image container with enhanced gradient glow */}
              <div className="mx-auto w-14 h-14 rounded-full bg-white flex items-center justify-center mb-4 overflow-hidden shadow-[0_0_20px_rgba(16,185,129,0.6)] border-2 border-emerald-400 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.8)] transition-shadow duration-300">
                <img 
                  src="/images/vision.png" 
                  alt="Vision" 
                  className="h-8 w-8 object-contain"
                />
              </div>
              
              <h3 className="text-xl font-bold text-white uppercase mb-2 text-shadow">VISION</h3>
              <p className="text-emerald-50 text-sm">
                The GFG BVCOE Student Chapter envisions a collaborative and dynamic learning environment where students continuously grow, innovate, and share knowledge. We aim to cultivate a community that fosters curiosity, skill enhancement, and the exchange of ideas, ensuring that every member contributes to a collective journey of learning and discovery.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}