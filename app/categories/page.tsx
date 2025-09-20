import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, Building2, Cake, Users, Star, Calendar } from "lucide-react"
import Navigation from "@/components/shared/navigation"
import Footer from "@/components/shared/footer"

export default function CategoriesPage() {
  const categories = [
    {
      id: 1,
      title: "Wedding Events",
      description: "Creating magical moments for your special day with elegance and sophistication",
      icon: Heart,
      image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: ["Ceremony Planning", "Reception Design", "Vendor Coordination", "Timeline Management"],
      eventCount: "150+ Events",
    },
    {
      id: 2,
      title: "Corporate Events",
      description: "Professional gatherings that leave lasting impressions on your clients and team",
      icon: Building2,
      image: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: ["Conference Planning", "Team Building", "Product Launches", "Annual Galas"],
      eventCount: "200+ Events",
    },
    {
      id: 3,
      title: "Social/Private Events",
      description: "Intimate gatherings and celebrations designed with personal touches and attention to detail",
      icon: Users,
      image: "https://images.pexels.com/photos/1857157/pexels-photo-1857157.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: ["Birthday Parties", "Anniversary Celebrations", "Family Reunions", "Holiday Parties"],
      eventCount: "120+ Events",
    },
    {
      id: 4,
      title: "Cultural & Entertainment Events",
      description: "Vibrant cultural celebrations and entertainment experiences that bring communities together",
      icon: Star,
      image: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: ["Cultural Festivals", "Art Exhibitions", "Music Concerts", "Theater Productions"],
      eventCount: "80+ Events",
    },
    {
      id: 5,
      title: "Sports Events",
      description: "Dynamic sporting events and competitions that inspire and unite athletes and fans",
      icon: Cake,
      image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: ["Tournament Organization", "Award Ceremonies", "Sports Galas", "Team Events"],
      eventCount: "60+ Events",
    },
  ]

  return (
    <div className="min-h-screen bg-neutral-bg text-neutral-text">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Event Categories"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Event Categories</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover our expertise across different event types, each crafted with care and precision
          </p>
        </div>
      </section>

      {/* Categories Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-text">Our Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No matter the event, we bring expertise, creativity, and passion to make your moments unforgettable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {categories.map((category) => {
              const IconComponent = category.icon
              return (
                <div
                  key={category.id}
                  className="text-center group hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-neutral-text">{category.title}</h3>
                  <p className="text-gray-500 text-sm">{category.eventCount}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Detailed Categories */}
      <section className="py-16 bg-neutral-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {categories.map((category, index) => {
              const IconComponent = category.icon
              const isEven = index % 2 === 0

              return (
                <div
                  key={category.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    !isEven ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  <div className={`${!isEven ? "lg:col-start-2" : ""}`}>
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                      <Image
                        src={category.image || "/placeholder.svg"}
                        alt={category.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className={`${!isEven ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                    <div className="flex items-center mb-4">
                      <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-neutral-text">{category.title}</h3>
                        <p className="text-gray-500">{category.eventCount}</p>
                      </div>
                    </div>

                    <p className="text-lg text-gray-600 mb-6">{category.description}</p>

                    <div className="mb-8">
                      <h4 className="text-lg font-semibold mb-4 text-neutral-text">What we offer:</h4>
                      <ul className="space-y-2">
                        {category.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-600">
                            <Star className="w-4 h-4 mr-3 text-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button className="bg-primary text-white hover:bg-primary-600">
                      View {category.title} Gallery
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-secondary-purple">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Process</h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Every event follows our proven process to ensure perfection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", description: "Understanding your vision and requirements" },
              { step: "02", title: "Planning", description: "Detailed planning and timeline creation" },
              { step: "03", title: "Execution", description: "Flawless event execution and coordination" },
              { step: "04", title: "Follow-up", description: "Post-event support and feedback collection" },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-white text-secondary-purple rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{process.title}</h3>
                <p className="text-purple-100">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-secondary-teal">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to start planning your event?</h2>
          <p className="text-xl text-teal-100 mb-8">
            Let's discuss your vision and create something extraordinary together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-white hover:bg-primary-600 px-8 py-3">
              <Calendar className="w-5 h-5 mr-2" />
              <Link href="/book">Schedule Consultation</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-secondary-teal px-8 py-3"
            >
              <Link href="/gallery">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
