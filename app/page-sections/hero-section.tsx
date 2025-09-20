"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Play, Award, Star, CheckCircle } from "lucide-react"

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-40">
      <div className="absolute inset-0">
        <Image
          src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Elegant Event"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="relative text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
          Creating Magical
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary-teal">
            Moments for Your
          </span>
          <br />
          Special Day
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
          Well-planned events, trusted by many. We bring expertise, creativity, and passion to make your moments
          unforgettable.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/book">
              <Button size="lg" className="bg-primary text-white hover:bg-primary-600 px-8 py-4 text-lg">
                Start Planning Your Event
              </Button>
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/gallery">
              <Button
                size="lg"
                variant="outline"
                className="border-secondary-teal text-secondary-teal hover:bg-secondary-teal hover:text-white px-8 py-4 text-lg"
              >
                <Play className="w-5 h-5 mr-2" />
                View Our Work
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-200">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-primary" />
            Award-Winning Team
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-primary" />
            500+ Happy Clients
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-primary" />
            15+ Years Experience
          </div>
        </div>
      </motion.div>
    </section>
  )
}
