"use client"

import { motion } from "framer-motion"

export function StudioLogo({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`flex items-center gap-2 ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative">
        {/* Microphone Icon */}
        <motion.div
          className="relative w-10 h-10"
          animate={{
            rotate: [0, -5, 5, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          {/* Mic body */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-5 h-6 bg-gradient-to-b from-primary to-secondary rounded-t-full" />
          {/* Mic grille lines */}
          <div className="absolute top-1 left-1/2 -translate-x-1/2 w-3 h-4 flex flex-col justify-around">
            <div className="w-full h-0.5 bg-background/30 rounded-full" />
            <div className="w-full h-0.5 bg-background/30 rounded-full" />
            <div className="w-full h-0.5 bg-background/30 rounded-full" />
          </div>
          {/* Mic stand */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 w-0.5 h-2 bg-gradient-to-b from-secondary to-primary" />
          <div className="absolute top-8 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </motion.div>

        {/* Animated sound waves */}
        <motion.div
          className="absolute -right-1 top-1/2 -translate-y-1/2"
          animate={{
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <div className="flex gap-0.5">
            <div className="w-0.5 h-2 bg-primary rounded-full" />
            <div className="w-0.5 h-3 bg-secondary rounded-full" />
            <div className="w-0.5 h-2 bg-primary rounded-full" />
          </div>
        </motion.div>
      </div>

      <div className="flex flex-col leading-none">
        <span className="text-xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
          STUDIO
        </span>
        <span className="text-2xl font-black bg-gradient-to-r from-secondary via-primary to-secondary bg-clip-text text-transparent tracking-wider">
          634
        </span>
      </div>
    </motion.div>
  )
}
