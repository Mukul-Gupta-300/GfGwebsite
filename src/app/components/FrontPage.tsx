"use client"

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-black min-h-screen flex items-center">
      {/* Base Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-l from-green-800 via-blue-900 to-black" />
      
      {/* Additional Gradient Layers */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,theme(colors.emerald.500),transparent_50%)] opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,theme(colors.blue.500),transparent_50%)] opacity-20" />
      </div>

      {/* Background Animations */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Curved Lines */}
        <svg className="absolute h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad1" x1="1" y1="0" x2="0" y2="0">
              <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0" />
              <stop offset="50%" stopColor="#0ea5e9" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="grad2" x1="1" y1="0" x2="0" y2="0">
              <stop offset="0%" stopColor="#065f46" stopOpacity="0" />
              <stop offset="50%" stopColor="#065f46" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#065f46" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Top Curves */}
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              repeatDelay: 1,
            }}
            d="M 100 100 Q 300 0 500 100 T 900 100"
            fill="none"
            stroke="url(#grad1)"
            strokeWidth="2"
          />
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              repeatDelay: 1,
              delay: 0.5,
            }}
            d="M 0 200 Q 200 100 400 200 T 800 200"
            fill="none"
            stroke="url(#grad2)"
            strokeWidth="2"
          />
        </svg>

        {/* Straight Lines */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ x: "100%", opacity: 0 }}
              animate={{
                x: "-100%",
                opacity: [0, 0.5, 0.5, 0],
              }}
              transition={{
                duration: 2.5,
                delay: i * 0.2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                ease: "linear",
              }}
              className="absolute right-0"
              style={{
                top: `${15 + i * 10}%`,
                height: "1.5px",
                width: "100%",
                background: `linear-gradient(90deg, transparent, ${
                  i % 2 === 0 ? "#0ea5e9" : "#10b981"
                }30, transparent)`,
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Animated Background Blobs */}
      <div className="absolute inset-0 z-[1]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute -left-1/4 top-1/4 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute -right-1/4 top-1/2 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"
        />
      </div>

      {/* Noise Texture */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />

      {/* Hero Content */}
      <div className="mx-auto max-w-7xl px-6 pt-0 pb-6 lg:flex lg:items-center lg:gap-x-10 lg:px-8 relative z-[2] -mt-12">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg lg:flex-shrink-0">
          <motion.h1
            className="text-4xl font-bold tracking-tight text-white sm:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-l from-emerald-800 via-blue-400 to-emerald-800 bg-clip-text text-transparent brightness-120">
              GeeksforGeeks BVP
            </span>
          </motion.h1>
          <motion.p
            className="mt-6 text-lg leading-8 text-emerald-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Compile minds run success
          </motion.p>
          <motion.div
            className="mt-10 flex items-center gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="#"
              className="rounded-full px-6 py-3 text-sm font-semibold text-white shadow-sm bg-gradient-to-l from-emerald-800 to-blue-600 hover:from-emerald-700 hover:to-blue-500 transition-all duration-300"
            >
              Explore Our Work
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-300 hover:text-white transition-colors"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </motion.div>
        </div>
        <motion.div
          className="mx-auto mt-8 lg:mt-0"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="relative">
            {/* Glowing background element */}
            <div 
              className="absolute inset-0 flex items-center justify-center" 
              style={{
                filter: "blur(40px) brightness(1.3)",
                transform: "scale(0.95)",
                opacity: 0.6,
                zIndex: 0
              }}
            >
              <img
                src="/images/Student Chapter Logo.png"
                alt=""
                className="w-[400px] brightness-160 contrast-120"
              />
            </div>
            
            {/* Main logo */}
            <img
              src="/images/Student Chapter Logo.png"
              alt="GfG logo"
              width={700}
              height={700}
              className="w-[400px] rounded-2xl relative z-10"
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}