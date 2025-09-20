"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Star,
  ArrowRight,
  Calendar,
  Users,
  Heart,
  Award,
  CheckCircle,
  Play,
  Building2,
  Music,
  Trophy,
  ChevronDown,
  ArrowUpRight,
} from "lucide-react"

import Navigation from "@/components/shared/navigation"
import Footer from "@/components/shared/footer"

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemFadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function HomePage() {
  // Scroll animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll(".animate-on-scroll").forEach((element) => {
      observer.observe(element)
    })

    return () => {
      document.querySelectorAll(".animate-on-scroll").forEach((element) => {
        observer.unobserve(element)
      })
    }
  }, [])

  const services = [
    {
      title: "Wedding Events",
      description: "Creating magical moments for your special day with elegance and sophistication",
      image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600",
      icon: Heart,
      link: "/categories",
    },
    {
      title: "Corporate Events",
      description: "Professional gatherings that leave lasting impressions on your clients and team",
      image: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=600",
      icon: Building2,
      link: "/categories",
    },
    {
      title: "Social/Private Events",
      description: "Intimate celebrations and gatherings designed with personal touches and attention to detail",
      image: "https://images.pexels.com/photos/1857157/pexels-photo-1857157.jpeg?auto=compress&cs=tinysrgb&w=600",
      icon: Users,
      link: "/categories",
    },
    {
      title: "Cultural & Entertainment Events",
      description: "Vibrant cultural celebrations and entertainment experiences that bring communities together",
      image: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=600",
      icon: Music,
      link: "/categories",
    },
    {
      title: "Sports Events",
      description: "Dynamic sporting events and competitions that inspire and unite athletes and fans",
      image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600",
      icon: Trophy,
      link: "/categories",
    },
  ]

  const features = [
    "Full-service event planning and coordination",
    "Vendor management and relationship building",
    "Custom design and styling services",
    "Timeline development and day-of coordination",
    "Budget planning and cost management",
    "Post-event follow-up and support",
  ]

  const testimonials = [
    {
      name: "Sarah & Michael",
      event: "Wedding",
      quote: "Kaddosh Global Events turned our dream wedding into reality. Every detail was perfect!",
      image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 5,
    },
    {
      name: "Jennifer Chen",
      event: "Corporate Gala",
      quote: "Professional, creative, and flawless execution. Our event was a huge success!",
      image: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 5,
    },
    {
      name: "The Rodriguez Family",
      event: "Birthday Party",
      quote: "They made our daughter's Sweet 16 absolutely magical. Highly recommend!",
      image: "https://images.pexels.com/photos/1857157/pexels-photo-1857157.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 5,
    },
  ]

  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "1000+", label: "Events Planned" },
    { number: "15+", label: "Years Experience" },
    { number: "50+", label: "Vendor Partners" },
  ]

  const blogPosts = [
    {
      title: "10 Stunning Wedding Color Palettes for 2025",
      excerpt: "Discover the most beautiful and trending color combinations that will make your wedding unforgettable.",
      category: "Event Inspiration",
      image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Corporate Event Trends That Will Dominate 2025",
      excerpt:
        "From hybrid experiences to sustainable practices, explore the trends shaping corporate events this year.",
      category: "Event Inspiration",
      image: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "How to Choose the Perfect Venue: A Complete Guide",
      excerpt:
        "Everything you need to know about selecting a venue that perfectly matches your event vision and budget.",
      category: "Planning Guides",
      image: "https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ]

  return (
    <div className="min-h-screen bg-neutral-bg text-neutral-text">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
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
          className="relative text-center mt-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
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

        {/* Scroll indicator */}
        {/*<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-10 h-10 text-white/70" />
        </div>*/}
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <Badge className="bg-primary/10 text-primary mb-4">OUR SERVICES</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-text">Our Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No matter the event, we bring expertise, creativity, and passion to make your moments unforgettable
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.slice(0, 3).map((service, index) => {
              const IconComponent = service.icon
              return (
                <motion.div key={index} variants={itemFadeIn}>
                  <Card className="bg-white border-gray-200 overflow-hidden group hover:transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
                    <div className="relative h-64">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 group-hover:from-black/80 transition-colors duration-300" />
                      <div className="absolute top-4 left-4">
                        <div className="bg-primary/20 backdrop-blur-sm rounded-full p-3">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-2xl font-semibold mb-2 text-white">{service.title}</h3>
                        <p className="text-gray-200 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {service.description}
                        </p>
                        <Link href={service.link}>
                          <Button
                            variant="secondary"
                            className="bg-white/20 backdrop-blur-sm text-white hover:bg-white hover:text-primary transition-colors"
                          >
                            Learn More
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>

          <div className="mt-12 text-center">
            <Link href="/categories">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                View All Services
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-neutral-bg relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200')] bg-fixed bg-cover opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <Badge className="bg-primary/10 text-primary mb-4">ABOUT US</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-text">
                Creating Joyful Moments with Events That Matter
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our vision is to create a world where every event becomes a cherished memory, and every celebration
                brings people together in meaningful ways. We believe that the best events are those that reflect the
                unique personality and style of our clients.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>

              <Link href="/about">
                <Button className="bg-primary text-white hover:bg-primary-600">
                  Learn More About Us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <motion.div whileHover={{ y: -5 }} className="relative h-48 rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="Event Planning"
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  <motion.div whileHover={{ y: -5 }} className="relative h-32 rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="Team Work"
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </div>
                <div className="space-y-4 pt-8">
                  <motion.div whileHover={{ y: -5 }} className="relative h-32 rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="Event Details"
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  <motion.div whileHover={{ y: -5 }} className="relative h-48 rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="Celebration"
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <Badge className="bg-primary/10 text-primary mb-4">OUR WORK</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-text">Event Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a glimpse at the events we've proudly crafted to perfection
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              {
                image:
                  "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600",
                title: "Elegant Wedding",
                category: "Wedding Events",
              },
              {
                image:
                  "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=600",
                title: "Corporate Gala",
                category: "Corporate Events",
              },
              {
                image:
                  "https://images.pexels.com/photos/1857157/pexels-photo-1857157.jpeg?auto=compress&cs=tinysrgb&w=600",
                title: "Birthday Celebration",
                category: "Social/Private Events",
              },
              {
                image:
                  "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=600",
                title: "Cultural Festival",
                category: "Cultural & Entertainment Events",
              },
              {
                image:
                  "https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg?auto=compress&cs=tinysrgb&w=600",
                title: "Luxury Reception",
                category: "Wedding Events",
              },
              {
                image:
                  "https://images.pexels.com/photos/1571970/pexels-photo-1571970.jpeg?auto=compress&cs=tinysrgb&w=600",
                title: "Marathon Event",
                category: "Sports Events",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemFadeIn}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-lg aspect-square shadow-lg"
              >
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex flex-col items-center justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Badge className="bg-white/20 text-white mb-2">{item.category}</Badge>
                  <h3 className="text-white text-xl font-semibold mb-4">{item.title}</h3>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="bg-white/20 backdrop-blur-sm text-white hover:bg-white hover:text-primary"
                  >
                    View Details
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link href="/gallery">
              <Button className="bg-primary text-white hover:bg-primary-600">
                View Full Gallery
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary-purple">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {stats.map((stat, index) => (
              <motion.div key={index} variants={itemFadeIn} whileHover={{ y: -5 }}>
                <div className="text-4xl md:text-5xl font-bold mb-2 text-white">{stat.number}</div>
                <div className="text-purple-100">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <Badge className="bg-primary/10 text-primary mb-4">TESTIMONIALS</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-text">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Hear how we've made every event truly unforgettable</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={itemFadeIn} whileHover={{ y: -10 }}>
                <Card className="bg-white border-gray-200 shadow-lg h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-primary fill-current" />
                      ))}
                    </div>

                    <blockquote className="text-gray-600 mb-6 italic">"{testimonial.quote}"</blockquote>

                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full overflow-hidden relative">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-semibold text-neutral-text">{testimonial.name}</div>
                        <div className="text-sm text-gray-500">{testimonial.event}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link href="/client-love">
              <Button
                variant="outline"
                className="border-secondary-teal text-secondary-teal hover:bg-secondary-teal hover:text-white"
              >
                Read More Reviews
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-neutral-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <Badge className="bg-primary/10 text-primary mb-4">BLOG</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-text">Event Insights & Inspiration</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover expert tips, trending ideas, and behind-the-scenes stories from the world of event planning
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {blogPosts.map((post, index) => (
              <motion.div key={index} variants={itemFadeIn} whileHover={{ y: -10 }}>
                <Card className="bg-white border-gray-200 overflow-hidden h-full hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48">
                    <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/90 text-neutral-text">{post.category}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-neutral-text line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <Link href="/blog" className="inline-flex items-center text-primary hover:underline">
                      Read More
                      <ArrowUpRight className="w-4 h-4 ml-1" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link href="/blog">
              <Button className="bg-primary text-white hover:bg-primary-600">
                View All Articles
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* KGE-Kids Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <Badge className="bg-secondary-purple/10 text-secondary-purple mb-4">KGE-KIDS</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-text">
                Magical Moments for
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-purple to-secondary-teal">
                  {" "}
                  Little Ones
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We plan magical moments with you (birthdays, fun days)... and also create unforgettable experiences for
                kids everywhere! From themed birthday parties to educational workshops, we bring joy and wonder to
                children's events.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {["Themed Birthday Parties", "Educational Events", "School Events", "Holiday Celebrations"].map(
                  (feature, index) => (
                    <div key={index} className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-sm">
                      <CheckCircle className="w-5 h-5 text-secondary-purple" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ),
                )}
              </div>

              <Link href="/kids">
                <Button className="bg-secondary-purple text-white hover:bg-secondary-purple/90">
                  Explore KGE-Kids
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="relative"
            >
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Happy kids at party"
                  fill
                  className="object-cover"
                />
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center animate-pulse">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-pink-400 rounded-full flex items-center justify-center animate-pulse delay-300">
                  <Heart className="w-10 h-10 text-white" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary-teal">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Create Your Unforgettable Event?
            </h2>
            <p className="text-xl text-teal-100 mb-8">
              Let us bring your vision to life with our expertise, creativity, and passion for perfection
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/book">
                  <Button size="lg" className="bg-primary text-white hover:bg-primary-600 px-8 py-4">
                    <Calendar className="w-5 h-5 mr-2" />
                    Start Planning Today
                  </Button>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/book">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-secondary-teal px-8 py-4"
                  >
                    Schedule Consultation
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
