import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, Award, Target, Eye, Lightbulb, CheckCircle, Star, Calendar, ArrowRight } from "lucide-react"
import Navigation from "@/components/shared/navigation"
import Footer from "@/components/shared/footer"

export default function AboutPage() {
  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & Creative Director",
      bio: "With over 15 years in event planning, Sarah founded Kaddosh Global Events with a vision to create extraordinary experiences that bring people together.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
      specialties: ["Wedding Planning", "Creative Design", "Vendor Relations"],
    },
    {
      name: "Michael Chen",
      role: "Operations Director",
      bio: "Michael ensures every event runs seamlessly from conception to completion. His attention to detail and organizational skills are unmatched.",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600",
      specialties: ["Project Management", "Logistics", "Timeline Coordination"],
    },
    {
      name: "Emma Rodriguez",
      role: "Senior Event Coordinator",
      bio: "Emma brings creativity and passion to every project, specializing in corporate events and milestone celebrations.",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600",
      specialties: ["Corporate Events", "Milestone Celebrations", "Vendor Coordination"],
    },
    {
      name: "David Park",
      role: "Design & Styling Lead",
      bio: "David's artistic vision transforms venues into breathtaking spaces that perfectly reflect each client's unique style and personality.",
      image: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=600",
      specialties: ["Event Design", "Floral Arrangements", "Venue Styling"],
    },
  ]

  const values = [
    {
      icon: Heart,
      title: "Passion",
      description:
        "We pour our hearts into every event, treating each celebration as if it were our own special moment.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work closely with our clients and vendors to ensure every detail aligns with your vision.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We strive for perfection in every aspect of event planning, from initial concept to final execution.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We stay ahead of trends and continuously evolve our approach to create fresh, memorable experiences.",
    },
  ]

  const milestones = [
    {
      year: "2009",
      event: "Founded Kaddosh Global Events",
      description: "Started with a dream to create extraordinary celebrations",
    },
    {
      year: "2012",
      event: "First Corporate Partnership",
      description: "Expanded services to include large-scale corporate events",
    },
    {
      year: "2015",
      event: "Award Recognition",
      description: "Received 'Event Planner of the Year' from the National Events Association",
    },
    { year: "2018", event: "Team Expansion", description: "Grew to a team of 10+ dedicated event professionals" },
    {
      year: "2020",
      event: "Virtual Events Innovation",
      description: "Pioneered hybrid and virtual event solutions during the pandemic",
    },
    { year: "2022", event: "KGE-Kids Launch", description: "Launched specialized children's event planning division" },
    { year: "2024", event: "500+ Events Milestone", description: "Celebrated planning our 500th successful event" },
  ]

  const stats = [
    { number: "500+", label: "Events Planned", icon: Calendar },
    { number: "15+", label: "Years Experience", icon: Award },
    { number: "50+", label: "Vendor Partners", icon: Users },
    { number: "98%", label: "Client Satisfaction", icon: Star },
  ]

  return (
    <div className="min-h-screen bg-neutral-bg text-neutral-text">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-secondary-purple">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">About Kaddosh Global Events</h1>
              <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                Founded with a passion for creating extraordinary experiences, Kaddosh Global Events has been
                transforming visions into unforgettable celebrations for over 15 years. We believe that every event
                tells a story, and we're here to help you tell yours beautifully.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon
                  return (
                    <div key={index} className="text-center p-4 bg-white/10 rounded-lg">
                      <IconComponent className="w-8 h-8 mx-auto mb-2 text-white" />
                      <div className="text-2xl font-bold text-white">{stat.number}</div>
                      <div className="text-purple-200 text-sm">{stat.label}</div>
                    </div>
                  )
                })}
              </div>

              <Button className="bg-primary text-white hover:bg-primary-600">
                Start Your Journey With Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="Event Planning Team"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-32 rounded-lg overflow-hidden">
                    <Image
                      src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="Team Collaboration"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative h-32 rounded-lg overflow-hidden">
                    <Image
                      src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="Event Details"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="Beautiful Events"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="bg-white border-gray-200 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Target className="w-8 h-8 mr-3 text-secondary-teal" />
                  <h2 className="text-3xl font-bold text-neutral-text">Our Mission</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To create extraordinary events that bring people together, celebrate life's most precious moments, and
                  leave lasting impressions on every guest. We are committed to turning your vision into reality through
                  meticulous planning, creative design, and flawless execution.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Eye className="w-8 h-8 mr-3 text-secondary-purple" />
                  <h2 className="text-3xl font-bold text-neutral-text">Our Vision</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To be the leading event planning company that sets the standard for excellence, innovation, and client
                  satisfaction. We envision a world where every celebration becomes a cherished memory that brings joy
                  for years to come.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-neutral-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-neutral-text">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <Card
                  key={index}
                  className="bg-white border-gray-200 text-center hover:transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
                >
                  <CardContent className="p-6">
                    <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-neutral-text">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-neutral-text">Our Journey</h2>
            <p className="text-xl text-gray-600">Milestones that shaped who we are today</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-300"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <Card className="bg-white border-gray-200 shadow-lg">
                      <CardContent className="p-6">
                        <Badge className="bg-primary text-white mb-3">{milestone.year}</Badge>
                        <h3 className="text-xl font-semibold mb-2 text-neutral-text">{milestone.event}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-white"></div>
                  </div>

                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-16 bg-neutral-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-neutral-text">Meet Our Team</h2>
            <p className="text-xl text-gray-600">The passionate professionals behind every successful event</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="bg-white border-gray-200 overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative h-64">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-1 text-neutral-text">{member.name}</h3>
                  <p className="text-gray-500 mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>

                  <div className="space-y-1">
                    <p className="text-xs text-gray-500 font-semibold">Specialties:</p>
                    <div className="flex flex-wrap gap-1">
                      {member.specialties.map((specialty, i) => (
                        <Badge key={i} variant="secondary" className="bg-primary/10 text-primary border-0 text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-neutral-text">Why Choose Kaddosh Global Events</h2>
            <p className="text-xl text-gray-600">What sets us apart in the world of event planning</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Personalized Approach",
                description:
                  "Every event is unique, and we tailor our services to match your specific vision, style, and budget.",
                icon: Heart,
              },
              {
                title: "Experienced Team",
                description:
                  "Our team brings over 15 years of combined experience in planning events of all sizes and types.",
                icon: Award,
              },
              {
                title: "Vendor Network",
                description:
                  "We've built strong relationships with the best vendors in the industry to ensure quality and value.",
                icon: Users,
              },
              {
                title: "Attention to Detail",
                description: "We handle every aspect of your event, from the big picture down to the smallest details.",
                icon: CheckCircle,
              },
              {
                title: "Stress-Free Planning",
                description:
                  "Our comprehensive planning process ensures you can enjoy your event without worrying about logistics.",
                icon: Target,
              },
              {
                title: "Creative Innovation",
                description:
                  "We stay current with trends and bring fresh, creative ideas to make your event truly memorable.",
                icon: Lightbulb,
              },
            ].map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card
                  key={index}
                  className="bg-white border-gray-200 hover:transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
                >
                  <CardContent className="p-6 text-center">
                    <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-neutral-text">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-secondary-teal">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6 text-white">Ready to Start Planning Your Dream Event?</h2>
          <p className="text-xl text-teal-100 mb-8">
            Let's work together to create an unforgettable experience that reflects your unique vision and style
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book">
              <Button size="lg" className="bg-primary text-white hover:bg-primary-600 px-8 py-3">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule a Consultation
              </Button>
            </Link>
            <Link href="/gallery">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-secondary-teal px-8 py-3"
              >
                View Our Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
