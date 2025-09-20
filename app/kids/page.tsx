"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Star, Calendar, MapPin, Users, Sparkles, Gift, Cake, PartyPopper, Mail, Check } from "lucide-react"
import Navigation from "@/components/shared/navigation"
import Footer from "@/components/shared/footer"

export default function KidsPage() {
  const [emailSignup, setEmailSignup] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const upcomingEvents = [
    {
      id: 1,
      title: "Spring Garden Party",
      date: "March 15, 2025",
      time: "10:00 AM - 2:00 PM",
      location: "Sunny Park Pavilion",
      ageGroup: "3-8 years",
      description: "A magical garden adventure with fairy tale characters, nature crafts, and butterfly releases!",
      image: "https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "$45",
      spots: "15 spots left",
    },
    {
      id: 2,
      title: "Summer Splash Extravaganza",
      date: "June 20, 2025",
      time: "11:00 AM - 4:00 PM",
      location: "Community Pool & Park",
      ageGroup: "5-12 years",
      description: "Beat the heat with water games, pool parties, ice cream making, and summer crafts!",
      image: "https://images.pexels.com/photos/296301/pexels-photo-296301.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "$55",
      spots: "20 spots left",
    },
    {
      id: 3,
      title: "Halloween Spooktacular",
      date: "October 31, 2025",
      time: "4:00 PM - 8:00 PM",
      location: "Mystery Manor Venue",
      ageGroup: "4-10 years",
      description: "Not-so-scary Halloween fun with costume contests, pumpkin decorating, and treat hunts!",
      image: "https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "$50",
      spots: "Coming Soon",
    },
  ]

  const galleryImages = [
    {
      title: "Superhero Birthday Bash",
      image: "https://images.pexels.com/photos/1857163/pexels-photo-1857163.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Birthday Party",
    },
    {
      title: "Princess Tea Party",
      image: "https://images.pexels.com/photos/1857164/pexels-photo-1857164.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Theme Party",
    },
    {
      title: "Science Discovery Day",
      image: "https://images.pexels.com/photos/8197525/pexels-photo-8197525.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Educational Event",
    },
    {
      title: "Art & Craft Workshop",
      image: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Workshop",
    },
    {
      title: "Sports Fun Day",
      image: "https://images.pexels.com/photos/296301/pexels-photo-296301.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Active Event",
    },
    {
      title: "Holiday Celebration",
      image: "https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Seasonal Event",
    },
  ]

  const handleEmailSignup = (e: React.FormEvent) => {
    e.preventDefault()
    if (emailSignup.trim()) {
      setIsSubscribed(true)
      setEmailSignup("")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-blue-50">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-8 h-8 text-yellow-400" />
                <span className="text-lg font-semibold" style={{ color: "#bbd067" }}>
                  Kaddosh Global Events
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
                KGE-
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Kids</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                We plan magical moments with you (birthdays, fun days)... and also create unforgettable experiences for
                kids everywhere! ✨
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="text-white"
                  style={{ backgroundColor: "#bbd067", color: "white" }}
                  onClick={() => (window.location.href = "/book")}
                >
                  <PartyPopper className="w-5 h-5 mr-2" />
                  Plan My Kid's Party
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-purple-300 text-purple-600 hover:bg-purple-50"
                  onClick={() => (window.location.href = "/book")}
                >
                  View Our Events
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Happy kids at party"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                <Star className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-pink-400 rounded-full flex items-center justify-center">
                <Heart className="w-10 h-10 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Who We Are</h2>
            <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: "#bbd067" }} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We're the dream team of kid-party wizards! 🎭 At KGE-Kids, we believe every child deserves to feel like
                the star of their own magical story. Our passionate team of event planners, entertainers, and creativity
                experts work together to bring joy, laughter, and wonder to every celebration.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                From intimate backyard birthday parties to large-scale community events, we pour our hearts into
                creating experiences that kids will remember forever. We're not just party planners – we're memory
                makers, smile creators, and happiness architects!
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">500+</div>
                  <div className="text-sm text-gray-600">Happy Kids</div>
                </div>
                <div className="text-center p-4 bg-pink-50 rounded-lg">
                  <div className="text-2xl font-bold text-pink-600">50+</div>
                  <div className="text-sm text-gray-600">Events Planned</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Kids enjoying activities"
                width={500}
                height={400}
                className="rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From birthday parties to educational workshops, we create magical experiences tailored to every child's
              dreams!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Cake,
                title: "Birthday Parties",
                description: "Themed birthday celebrations with entertainment, decorations, and sweet surprises",
                color: "bg-pink-100 text-pink-600",
              },
              {
                icon: Sparkles,
                title: "Theme Parties",
                description: "Princess, superhero, dinosaur, or any theme your child loves - we bring it to life!",
                color: "bg-purple-100 text-purple-600",
              },
              {
                icon: Star,
                title: "Educational Events",
                description:
                  "Fun learning experiences with science experiments, art workshops, and discovery activities",
                color: "bg-blue-100 text-blue-600",
              },
              {
                icon: Users,
                title: "School Events",
                description: "End-of-year celebrations, fundraisers, and special school community gatherings",
                color: "bg-green-100 text-green-600",
              },
              {
                icon: Heart,
                title: "Holiday Celebrations",
                description: "Seasonal parties for Halloween, Christmas, Easter, and other special holidays",
                color: "bg-yellow-100 text-yellow-600",
              },
              {
                icon: Gift,
                title: "Special Occasions",
                description: "Baby showers, baptisms, graduations, and family milestone celebrations",
                color: "bg-red-100 text-red-600",
              },
            ].map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-16 h-16 rounded-full ${service.color} flex items-center justify-center mx-auto mb-4`}
                    >
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Upcoming Curated Events */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Upcoming Curated Events</h2>
            <p className="text-xl text-gray-600">Join us for these special seasonal celebrations!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <Card
                key={event.id}
                className="border-0 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48">
                  <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-gray-800 border-0">{event.ageGroup}</Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-green-500 text-white border-0">{event.spots}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-2" />
                      {event.date} at {event.time}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="w-4 h-4 mr-2" />
                      {event.location}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-purple-600">{event.price}</span>
                    <Button
                      className="text-white"
                      style={{ backgroundColor: "#bbd067", color: "white" }}
                      onClick={() => (window.location.href = "/book")}
                    >
                      Register Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Magical Moments</h2>
            <p className="text-xl text-gray-600">Take a peek at the joy and wonder we create!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="aspect-square relative">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-center text-white">
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <Badge className="bg-white/20 text-white border-0">{item.category}</Badge>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-purple-300 text-purple-600 hover:bg-purple-50"
              onClick={() => (window.location.href = "/gallery")}
            >
              View Full Gallery
            </Button>
          </div>
        </div>
      </section>

      {/* Join KGE-Kids Club */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Sparkles className="w-16 h-16 mx-auto mb-4 text-yellow-300" />
            <h2 className="text-4xl font-bold mb-4">Join the KGE-Kids Club!</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Get exclusive access to early event registration, special discounts, party planning tips, and magical
              surprises for your little ones!
            </p>
          </div>

          {!isSubscribed ? (
            <form onSubmit={handleEmailSignup} className="max-w-md mx-auto">
              <div className="flex gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={emailSignup}
                  onChange={(e) => setEmailSignup(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                  required
                />
                <Button
                  type="submit"
                  className="whitespace-nowrap"
                  style={{ backgroundColor: "#bbd067", color: "white" }}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Join Club
                </Button>
              </div>
            </form>
          ) : (
            <div className="bg-white/10 rounded-lg p-6 max-w-md mx-auto">
              <Check className="w-12 h-12 mx-auto mb-4 text-green-300" />
              <h3 className="text-xl font-semibold mb-2">Welcome to the Club! 🎉</h3>
              <p className="opacity-90">You'll receive your welcome packet and exclusive offers soon!</p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="w-6 h-6 text-yellow-300" />
              </div>
              <h3 className="font-semibold mb-2">Early Access</h3>
              <p className="text-sm opacity-80">First dibs on event registration</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Gift className="w-6 h-6 text-yellow-300" />
              </div>
              <h3 className="font-semibold mb-2">Special Discounts</h3>
              <p className="text-sm opacity-80">Exclusive member pricing</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Sparkles className="w-6 h-6 text-yellow-300" />
              </div>
              <h3 className="font-semibold mb-2">Party Tips</h3>
              <p className="text-sm opacity-80">Expert planning advice</p>
            </div>
          </div>
        </div>
      </section>

      {/* Book an Event / Partner with Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Let's Create Magic Together</h2>
            <p className="text-xl text-gray-600">
              Whether it's a private party or community partnership, we're here to help!
            </p>
          </div>

          <Tabs defaultValue="book" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="book">Book an Event</TabsTrigger>
              <TabsTrigger value="partner">Partner with Us</TabsTrigger>
            </TabsList>

            <TabsContent value="book">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <PartyPopper className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">Plan Your Child's Perfect Party</h3>
                    <p className="text-gray-600">Let us handle the magic while you enjoy the smiles!</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-800 mb-2">What's Included:</h4>
                      <ul className="text-sm text-purple-700 space-y-1">
                        <li>• Theme planning & decorations</li>
                        <li>• Entertainment & activities</li>
                        <li>• Party favors & goodie bags</li>
                        <li>• Setup & cleanup</li>
                      </ul>
                    </div>
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-pink-800 mb-2">Popular Themes:</h4>
                      <ul className="text-sm text-pink-700 space-y-1">
                        <li>• Princess & fairy tales</li>
                        <li>• Superheroes & adventures</li>
                        <li>• Animals & safari</li>
                        <li>• Arts & crafts</li>
                      </ul>
                    </div>
                  </div>

                  <div className="text-center">
                    <Button
                      size="lg"
                      className="text-white"
                      style={{ backgroundColor: "#bbd067", color: "white" }}
                      onClick={() => (window.location.href = "/book")}
                    >
                      Start Planning My Party
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="partner">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">Partnership Opportunities</h3>
                    <p className="text-gray-600">Bring joy to your community with our professional event services</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">Schools</h4>
                      <p className="text-sm text-blue-700">
                        End-of-year celebrations, fundraising events, educational workshops
                      </p>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">Churches</h4>
                      <p className="text-sm text-green-700">Vacation Bible School, youth events, family celebrations</p>
                    </div>
                    <div className="text-center p-4 bg-yellow-50 rounded-lg">
                      <h4 className="font-semibold text-yellow-800 mb-2">Family Brands</h4>
                      <p className="text-sm text-yellow-700">Product launches, brand activations, community outreach</p>
                    </div>
                  </div>

                  <div className="text-center">
                    <Button
                      size="lg"
                      className="text-white"
                      style={{ backgroundColor: "#bbd067", color: "white" }}
                      onClick={() => (window.location.href = "/book")}
                    >
                      Explore Partnerships
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
