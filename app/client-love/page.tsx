import Navigation from "@/components/shared/navigation"
import Footer from "@/components/shared/footer"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export default function ClientLovePage() {
  const testimonials = [
    {
      name: "Sarah & James Thompson",
      event: "Wedding",
      location: "London",
      quote:
        "Kaddosh Global Events made our wedding day absolutely perfect. From the initial consultation to the final dance, every detail was handled with care and professionalism. Our guests are still talking about how beautiful everything was!",
      image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 5,
    },
    {
      name: "Tech Innovations Ltd.",
      event: "Corporate Product Launch",
      location: "Manchester",
      quote:
        "The team at KGE transformed our product launch into an unforgettable experience. Their attention to detail and creative approach helped us make a strong impression on our clients and partners. We'll definitely be working with them again.",
      image: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 5,
    },
    {
      name: "Emma & David Wilson",
      event: "Anniversary Celebration",
      location: "Birmingham",
      quote:
        "We wanted our 25th anniversary to be special, and KGE delivered beyond our expectations. The venue decoration, catering, and entertainment were all perfectly coordinated. It was a night to remember!",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 5,
    },
    {
      name: "Global Finance Summit",
      event: "Conference",
      location: "Edinburgh",
      quote:
        "Organizing a conference for 500+ international attendees is no small task, but the KGE team handled it flawlessly. Their logistics management and attention to detail made our event run smoothly from start to finish.",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 5,
    },
    {
      name: "The Johnson Family",
      event: "Graduation Party",
      location: "Leeds",
      quote:
        "KGE helped us celebrate our daughter's graduation in style! The themed decorations and activities they planned were perfect for the occasion. They took care of everything so we could focus on enjoying the celebration.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 5,
    },
    {
      name: "Creative Arts Foundation",
      event: "Charity Gala",
      location: "Glasgow",
      quote:
        "Our annual fundraising gala needed to impress, and KGE delivered. Their team created an elegant atmosphere that helped us exceed our fundraising goals. The attention to our mission and values was evident in every detail.",
      image: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 5,
    },
  ]

  const featuredTestimonials = [
    {
      name: "Victoria & Michael",
      event: "Destination Wedding",
      location: "Cotswolds",
      quote:
        "Planning our destination wedding seemed overwhelming until we found Kaddosh Global Events. Their team handled everything from venue selection to coordinating with local vendors. Our guests were amazed by the beautiful setting and seamless execution. It truly was the wedding of our dreams!",
      image: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "National Health Association",
      event: "Annual Medical Conference",
      location: "Cambridge",
      quote:
        "As a medical organization, precision and professionalism are paramount. KGE understood our needs perfectly and delivered an exceptional conference experience. From the technical requirements to the specialized catering, everything was handled with expertise. Our attendees rated it as our best conference yet.",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ]

  return (
    <div className="min-h-screen bg-neutral-bg text-neutral-text">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-secondary-purple">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Client Love</h1>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Don't just take our word for it. Hear what our clients have to say about their experiences with Kaddosh
              Global Events.
            </p>
          </div>

          {/* Featured Testimonials */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            {featuredTestimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-sm border-white/20 overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
              >
                <CardContent className="p-8 relative">
                  <Quote className="absolute top-6 left-6 w-12 h-12 text-white/10" />
                  <div className="flex items-start gap-4">
                    <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 relative border-2 border-primary">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-white text-lg italic mb-4 relative z-10">{testimonial.quote}</p>
                      <div>
                        <p className="font-semibold text-white">{testimonial.name}</p>
                        <p className="text-purple-200 text-sm">
                          {testimonial.event} • {testimonial.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-text">More Happy Clients</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're proud to have helped create memorable experiences for these wonderful clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 relative">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-text">{testimonial.name}</p>
                      <p className="text-gray-500 text-sm">
                        {testimonial.event} • {testimonial.location}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-16 bg-neutral-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-text">Video Testimonials</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch our clients share their experiences in their own words
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Video Placeholder 1 */}
            <div className="bg-black aspect-video rounded-lg overflow-hidden relative flex items-center justify-center">
              <div className="text-white text-center p-8">
                <p className="text-lg font-medium mb-2">Sarah & James' Wedding Day</p>
                <p className="text-sm text-gray-400">Video testimonial coming soon</p>
              </div>
            </div>

            {/* Video Placeholder 2 */}
            <div className="bg-black aspect-video rounded-lg overflow-hidden relative flex items-center justify-center">
              <div className="text-white text-center p-8">
                <p className="text-lg font-medium mb-2">Tech Innovations Product Launch</p>
                <p className="text-sm text-gray-400">Video testimonial coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-text">Trusted By</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're proud to have worked with these amazing clients
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="flex items-center justify-center p-4">
                <div className="w-full h-16 bg-gray-200 rounded-md flex items-center justify-center">
                  <p className="text-gray-500 font-medium">Client Logo</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary-teal">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Create Your Own Success Story?</h2>
          <p className="text-xl text-teal-100 mb-8">
            Let's work together to plan an event that exceeds your expectations and leaves a lasting impression
          </p>
          <a
            href="/book"
            className="inline-block bg-primary text-white hover:bg-primary-600 px-8 py-3 rounded-md font-medium transition-colors"
          >
            Start Planning Your Event
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
