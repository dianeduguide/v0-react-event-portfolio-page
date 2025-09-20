"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Navigation from "@/components/shared/navigation"
import Footer from "@/components/shared/footer"

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedEvent, setSelectedEvent] = useState<any>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const events = [
    {
      id: 1,
      title: "Elegant Garden Wedding",
      category: "Wedding Events",
      image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "June 2024",
      location: "Botanical Gardens",
      description: "A breathtaking outdoor wedding ceremony surrounded by lush gardens and natural beauty.",
      gallery: [
        "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
    },
    {
      id: 2,
      title: "Corporate Annual Gala",
      category: "Corporate Events",
      image: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "May 2024",
      location: "Grand Ballroom",
      description: "An elegant corporate gala celebrating achievements and fostering team connections.",
      gallery: [
        "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
    },
    {
      id: 3,
      title: "Birthday Celebration",
      category: "Social/Private Events",
      image: "https://images.pexels.com/photos/1857157/pexels-photo-1857157.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "April 2024",
      location: "Private Venue",
      description: "A joyful birthday celebration filled with laughter, music, and unforgettable moments.",
      gallery: [
        "https://images.pexels.com/photos/1857157/pexels-photo-1857157.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1857163/pexels-photo-1857163.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1857164/pexels-photo-1857164.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1857165/pexels-photo-1857165.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
    },
    {
      id: 4,
      title: "Intimate Wedding Ceremony",
      category: "Wedding Events",
      image: "https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "March 2024",
      location: "Countryside Estate",
      description: "An intimate wedding ceremony in a picturesque countryside setting with close family and friends.",
      gallery: [
        "https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1444424/pexels-photo-1444424.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1729799/pexels-photo-1729799.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1616114/pexels-photo-1616114.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
    },
    {
      id: 5,
      title: "Product Launch Event",
      category: "Corporate Events",
      image: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "February 2024",
      location: "Convention Center",
      description: "A dynamic product launch event showcasing innovation and engaging with industry leaders.",
      gallery: [
        "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
    },
    {
      id: 6,
      title: "Anniversary Celebration",
      category: "Social/Private Events",
      image: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "January 2024",
      location: "Rooftop Terrace",
      description: "A romantic anniversary celebration on a beautiful rooftop terrace with stunning city views.",
      gallery: [
        "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
    },
    {
      id: 7,
      title: "Luxury Wedding Reception",
      category: "Wedding Events",
      image: "https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "December 2023",
      location: "Five Star Hotel",
      description: "An opulent wedding reception in a luxury hotel ballroom with exquisite dining and entertainment.",
      gallery: [
        "https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
    },
    {
      id: 8,
      title: "Team Building Event",
      category: "Corporate Events",
      image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "November 2023",
      location: "Resort & Spa",
      description: "An engaging team building event designed to strengthen relationships and boost morale.",
      gallery: [
        "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
    },
    {
      id: 9,
      title: "Sweet 16 Party",
      category: "Social/Private Events",
      image: "https://images.pexels.com/photos/1857163/pexels-photo-1857163.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "October 2023",
      location: "Event Hall",
      description:
        "A magical Sweet 16 celebration with themed decorations and entertainment for a memorable milestone.",
      gallery: [
        "https://images.pexels.com/photos/1857163/pexels-photo-1857163.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1857157/pexels-photo-1857157.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1857164/pexels-photo-1857164.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1857165/pexels-photo-1857165.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
    },
    {
      id: 10,
      title: "Summer Music Festival",
      category: "Cultural & Entertainment Events",
      image: "https://images.pexels.com/photos/1753848/pexels-photo-1753848.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "August 2023",
      location: "Outdoor Amphitheater",
      description: "A vibrant summer music festival featuring live performances and diverse musical genres.",
      gallery: [
        "https://images.pexels.com/photos/1753848/pexels-photo-1753848.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/372195/pexels-photo-372195.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/210237/pexels-photo-210237.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
    },
    {
      id: 11,
      title: "Marathon Race",
      category: "Sports Events",
      image: "https://images.pexels.com/photos/1571970/pexels-photo-1571970.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "September 2023",
      location: "City Streets",
      description: "An exhilarating marathon race through the city streets, promoting fitness and community spirit.",
      gallery: [
        "https://images.pexels.com/photos/1571970/pexels-photo-1571970.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1571967/pexels-photo-1571967.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/46798/pexels-photo-46798.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
    },
  ]

  const categories = [
    "All",
    "Wedding Events",
    "Corporate Events",
    "Social/Private Events",
    "Cultural & Entertainment Events",
    "Sports Events",
  ]

  const filteredEvents =
    selectedCategory === "All" ? events : events.filter((event) => event.category === selectedCategory)

  const openEventModal = (event: any) => {
    setSelectedEvent(event)
    setCurrentImageIndex(0)
  }

  const closeEventModal = () => {
    setSelectedEvent(null)
    setCurrentImageIndex(0)
  }

  const nextImage = () => {
    if (selectedEvent) {
      setCurrentImageIndex((prev) => (prev === selectedEvent.gallery.length - 1 ? 0 : prev + 1))
    }
  }

  const prevImage = () => {
    if (selectedEvent) {
      setCurrentImageIndex((prev) => (prev === 0 ? selectedEvent.gallery.length - 1 : prev - 1))
    }
  }

  return (
    <div className="min-h-screen bg-neutral-bg text-neutral-text">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Event Gallery"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Event Portfolio</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Take a glimpse at the events we've proudly crafted to perfection
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={category === selectedCategory ? "default" : "outline"}
                className={`${
                  category === selectedCategory
                    ? "bg-primary text-white hover:bg-primary-600"
                    : "border-gray-300 text-neutral-text hover:bg-gray-100"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-neutral-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                onClick={() => openEventModal(event)}
                className="group relative overflow-hidden rounded-lg bg-white border border-gray-200 hover:transform hover:scale-105 transition-all duration-300 hover:shadow-xl cursor-pointer"
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-neutral-text border-0">
                      {event.category}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-primary/80 rounded-full p-3">
                      <span className="text-white font-semibold">View Gallery</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-neutral-text group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{event.date}</span>
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Modal */}
      <Dialog open={!!selectedEvent} onOpenChange={closeEventModal}>
        <DialogContent className="max-w-4xl bg-white border-gray-200 text-neutral-text">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-neutral-text">{selectedEvent?.title}</DialogTitle>
          </DialogHeader>

          {selectedEvent && (
            <div className="space-y-6">
              {/* Image Gallery */}
              <div className="relative aspect-[16/10] rounded-lg overflow-hidden">
                <Image
                  src={selectedEvent.gallery[currentImageIndex] || "/placeholder.svg"}
                  alt={`${selectedEvent.title} - Image ${currentImageIndex + 1}`}
                  fill
                  className="object-cover"
                />

                {/* Navigation Arrows */}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    prevImage()
                  }}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    nextImage()
                  }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 rounded-full px-3 py-1">
                  <span className="text-sm text-white">
                    {currentImageIndex + 1} / {selectedEvent.gallery.length}
                  </span>
                </div>
              </div>

              {/* Thumbnail Gallery */}
              <div className="flex gap-2 overflow-x-auto pb-2">
                {selectedEvent.gallery.map((image: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      index === currentImageIndex ? "border-primary" : "border-transparent"
                    }`}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`Thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Event Details */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-0">
                    {selectedEvent.category}
                  </Badge>
                  <span className="text-gray-500">{selectedEvent.date}</span>
                  <span className="text-gray-500">{selectedEvent.location}</span>
                </div>
                <p className="text-gray-600 leading-relaxed">{selectedEvent.description}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Call to Action */}
      <section className="py-16 bg-secondary-teal">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to create your unforgettable event?</h2>
          <p className="text-xl text-teal-100 mb-8">
            Let us bring your vision to life with our expertise and creativity
          </p>
          <Link href="/book">
            <Button size="lg" className="bg-primary text-white hover:bg-primary-600 px-8 py-3">
              Start Planning
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
