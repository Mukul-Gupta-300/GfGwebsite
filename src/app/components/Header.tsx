"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline"
import { Home, MessageCircle, User } from "lucide-react"

// Menu item definitions
interface MenuItem {
  icon: React.ReactNode
  label: string
  href: string
  color: string
}

const menuItems: MenuItem[] = [
  {
    icon: <Home className="h-5 w-5" />,
    label: "Work",
    href: "https://www.flowersandsaints.com.au",
    color: "from-blue-500/60 to-blue-600/60",
  },
  {
    icon: <MessageCircle className="h-5 w-5" />,
    label: "About",
    href: "https://www.flowersandsaints.com.au",
    color: "from-green-500/60 to-green-600/60",
  },
  {
    icon: <User className="h-5 w-5" />,
    label: "Contact",
    href: "https://www.flowersandsaints.com.au",
    color: "from-red-500/60 to-red-600/60",
  },
]

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <motion.header
  className="sticky top-0 z-50 h-27 bg-black/35 backdrop-blur-lg m-0 p-0"
  initial={{ y: -90 }}
  animate={{ y: 0 }}
  transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 20 }}
>

      {/* Base Background */}
      <div className="absolute inset-0 m-0 p-0">
        {/* Base Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-gray-900/60 to-transparent" />

        
        {/* Additional Gradient Layers */}
        <div className="absolute inset-0 m-0 p-0">
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/40 via-blue-950/30 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,theme(colors.emerald.500),transparent_70%)] opacity-10" />
        </div>
      </div>

      {/* Animated Lines */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-[20%] h-[1px] w-full opacity-20"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(14, 165, 233, 0.3), transparent)",
          }}
        />
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-[80%] h-[1px] w-full opacity-10 m-0 p-0"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(34, 197, 94, 0.3), transparent)",
          }}
        />
      </div>

      {/* Subtle Glass Effect */}
      <div className="absolute inset-0 backdrop-blur-[2px] bg-black/10" />

      {/* Updated Bottom Gradient to blend with Hero */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-emerald-950/60 to-transparent" />

      {/* Noise Texture */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />

      {/* Header Content with Enhanced Navigation */}
      <div className="relative mx-auto max-w-7xl px-4 lg:px-6">
        <div className="flex items-center justify-between py-4">
          {/* Logo Section */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {/* Persistent Glow Effect */}
            <div className="absolute inset-0 w-20 h-20 mx-auto  bg-blue-400/70 blur-2xl brightness-110" />
            
            <Link href="/" className="m-1.5 p-1.5">
              <span className="sr-only">Flowers & Saints</span>
              <img
                className="h-13 w-auto brightness-180 contrast-150"
                src="/images/Logo.png"
                alt="GfG Logo"
              />
            </Link>
          </motion.div>
          
          {/* Enhanced Navigation Menu */}
          <div className="flex items-center">
            <nav className="flex space-x-2 md:space-x-4 items-center">
              {menuItems.map((item) => (
                <motion.div 
                  key={item.label}
                  className="relative"
                  onHoverStart={() => setHoveredItem(item.label)}
                  onHoverEnd={() => setHoveredItem(null)}
                >
                  <Link
                    href={item.href}
                    className="relative flex items-center gap-2 px-4 py-2 rounded-full text-gray-200 transition-colors duration-200 z-10 overflow-hidden group"
                  >
                    {/* Animated background on hover */}
                    <AnimatePresence>
                      {hoveredItem === item.label && (
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-full -z-10`}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 1.2 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </AnimatePresence>
                    
                    {/* Icon with floating animation */}
                    <motion.div
                      animate={hoveredItem === item.label ? {
                        y: [0, -4, 0],
                        transition: { 
                          duration: 0.5, 
                          repeat: 0, 
                          ease: "easeInOut" 
                        }
                      } : {}}
                    >
                      {item.icon}
                    </motion.div>
                    
                    {/* Text with slide-up animation */}
                    <motion.span
                      animate={hoveredItem === item.label ? {
                        y: [2, 0],
                        opacity: [0.8, 1],
                        transition: { duration: 0.2 }
                      } : {}}
                    >
                      {item.label}
                    </motion.span>
                    
                    {/* Decorative dots that appear on hover */}
                    <AnimatePresence>
                      {hoveredItem === item.label && (
                        <motion.div
                          className="absolute -right-1 -top-1 w-2 h-2 rounded-full bg-white/50"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 0.7 }}
                          exit={{ scale: 0, opacity: 0 }}
                          transition={{ delay: 0.1 }}
                        />
                      )}
                    </AnimatePresence>
                    <AnimatePresence>
                      {hoveredItem === item.label && (
                        <motion.div
                          className="absolute -left-1 -bottom-1 w-1 h-1 rounded-full bg-white/30"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 0.5 }}
                          exit={{ scale: 0, opacity: 0 }}
                          transition={{ delay: 0.15 }}
                        />
                      )}
                    </AnimatePresence>
                  </Link>
                </motion.div>
              ))}
            </nav>
          </div>
          
          {/* Theme Toggle with Enhanced Animation */}
          {mounted && (
            <div className="flex-shrink-0 relative">
              <motion.button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="relative z-10 rounded-full p-2 text-gray-300 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={theme}
                    initial={{ rotateY: 90, opacity: 0 }}
                    animate={{ rotateY: 0, opacity: 1 }}
                    exit={{ rotateY: -90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {theme === "dark" ? 
                      <SunIcon className="h-5 w-5" /> : 
                      <MoonIcon className="h-5 w-5" />
                    }
                  </motion.div>
                </AnimatePresence>
              </motion.button>
              
              {/* Animated glow behind the toggle */}
              <AnimatePresence>
                {hoveredItem === null && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500/20 to-blue-500/20 blur-md -z-10"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                      opacity: [0.5, 0.7, 0.5], 
                      scale: [1, 1.1, 1],
                      transition: {
                        opacity: { repeat: Infinity, duration: 2 },
                        scale: { repeat: Infinity, duration: 2 },
                      }
                    }}
                    exit={{ opacity: 0, scale: 0.8 }}
                  />
                )}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
    </motion.header>
  )
}