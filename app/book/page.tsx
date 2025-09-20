"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { format } from "date-fns"
import { CalendarIcon, Clock, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navigation from "@/components/shared/navigation"
import Footer from "@/components/shared/footer"

export default function BookingPage() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null)
  const [bookingStep, setBookingStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    message: "",
  })
  const [bookingFormData, setBookingFormData] = useState({
    bookingName: "",
    bookingEmail: "",
    bookingPhone: "",
    bookingNotes: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Generate time slots for the selected date
  const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"]

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Handle booking form input changes
  const handleBookingInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setBookingFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Handle select changes
  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  // Handle calendar booking submission
  const handleBookCall = async () => {
    if (!date || !selectedTimeSlot) return

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setBookingStep(3)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-neutral-bg text-neutral-text">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Let's Plan Together"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Let's Plan Together</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Start your journey to an unforgettable event with a personalized consultation
          </p>
        </div>
      </section>

      {/* Booking Options */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-text">How Would You Like to Connect?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the option that works best for you, and we'll be in touch to bring your vision to life
            </p>
          </div>

          <Tabs defaultValue="form" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="form">Contact Form</TabsTrigger>
              <TabsTrigger value="call">Schedule a Call</TabsTrigger>
            </TabsList>

            <TabsContent value="form" className="mt-6">
              <Card className="bg-white border-gray-200 shadow-lg">
                <CardContent className="pt-6">
                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Your Name</Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="Full Name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            className="bg-white border-gray-300 text-neutral-text"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="your@email.com"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="bg-white border-gray-300 text-neutral-text"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            name="phone"
                            placeholder="(123) 456-7890"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="bg-white border-gray-300 text-neutral-text"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="eventType">Event Type</Label>
                          <Select name="eventType" onValueChange={(value) => handleSelectChange("eventType", value)}>
                            <SelectTrigger className="bg-white border-gray-300 text-neutral-text">
                              <SelectValue placeholder="Select event type" />
                            </SelectTrigger>
                            <SelectContent className="bg-white border-gray-200 text-neutral-text">
                              <SelectItem value="wedding">Wedding Events</SelectItem>
                              <SelectItem value="corporate">Corporate Events</SelectItem>
                              <SelectItem value="social">Social/Private Events</SelectItem>
                              <SelectItem value="cultural">Cultural & Entertainment Events</SelectItem>
                              <SelectItem value="sports">Sports Events</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="eventDate">Event Date</Label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                className="w-full justify-start text-left font-normal bg-white border-gray-300 text-neutral-text hover:bg-gray-100"
                              >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {formData.eventDate ? formData.eventDate : <span>Pick a date</span>}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0 bg-white border-gray-200">
                              <Calendar
                                mode="single"
                                selected={date}
                                onSelect={(selectedDate) => {
                                  setDate(selectedDate)
                                  if (selectedDate) {
                                    setFormData((prev) => ({
                                      ...prev,
                                      eventDate: format(selectedDate, "PPP"),
                                    }))
                                  }
                                }}
                                initialFocus
                                className="bg-white text-neutral-text"
                              />
                            </PopoverContent>
                          </Popover>
                        </div>

                        <div className="space-y-2 md:col-span-2">
                          <Label htmlFor="message">Tell Us About Your Event</Label>
                          <Textarea
                            id="message"
                            name="message"
                            placeholder="Share your vision, guest count, special requirements, or any questions you have..."
                            rows={5}
                            value={formData.message}
                            onChange={handleInputChange}
                            className="bg-white border-gray-300 text-neutral-text resize-none"
                          />
                        </div>
                      </div>

                      <div className="flex justify-end">
                        <Button
                          type="submit"
                          className="bg-primary text-white hover:bg-primary-600 px-8"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Sending..." : "Send Message"}
                        </Button>
                      </div>
                    </form>
                  ) : (
                    <div className="text-center py-12 space-y-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                        <Check className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-neutral-text">Thank You!</h3>
                      <p className="text-gray-600 max-w-md mx-auto">
                        We've received your message and will get back to you within 24 hours to discuss your event.
                      </p>
                      <Button
                        onClick={() => {
                          setIsSubmitted(false)
                          setFormData({
                            name: "",
                            email: "",
                            phone: "",
                            eventType: "",
                            eventDate: "",
                            message: "",
                          })
                        }}
                        className="bg-primary text-white hover:bg-primary-600 mt-4"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="call" className="mt-6">
              <Card className="bg-white border-gray-200 shadow-lg">
                <CardContent className="pt-6">
                  {bookingStep === 1 && (
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-center text-neutral-text">
                        Select a Date for Your Discovery Call
                      </h3>

                      <div className="flex justify-center">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          className="bg-white text-neutral-text rounded-md border border-gray-200"
                          disabled={(date) => {
                            // Disable past dates and weekends
                            const today = new Date()
                            today.setHours(0, 0, 0, 0)
                            const day = date.getDay()
                            return date < today || day === 0 || day === 6
                          }}
                        />
                      </div>

                      {date && (
                        <div className="space-y-4">
                          <h4 className="font-medium text-center text-neutral-text">
                            Available Times for {format(date, "EEEE, MMMM d")}
                          </h4>

                          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                            {timeSlots.map((time) => (
                              <Button
                                key={time}
                                variant="outline"
                                className={`border-gray-300 hover:bg-gray-100 ${
                                  selectedTimeSlot === time
                                    ? "bg-primary text-white hover:bg-primary-600"
                                    : "bg-white text-neutral-text"
                                }`}
                                onClick={() => setSelectedTimeSlot(time)}
                              >
                                <Clock className="w-4 h-4 mr-2" />
                                {time}
                              </Button>
                            ))}
                          </div>

                          <div className="flex justify-end">
                            <Button
                              onClick={() => setBookingStep(2)}
                              disabled={!selectedTimeSlot}
                              className="bg-primary text-white hover:bg-primary-600"
                            >
                              Continue
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {bookingStep === 2 && (
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-center text-neutral-text">Complete Your Booking</h3>

                      <div className="bg-gray-50 p-4 rounded-lg mb-6">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-neutral-text">Discovery Call</h4>
                          <Badge className="bg-primary/10 text-primary border-0">30 Minutes</Badge>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <CalendarIcon className="w-4 h-4 mr-2" />
                          <span>
                            {format(date!, "EEEE, MMMM d")} at {selectedTimeSlot}
                          </span>
                        </div>
                      </div>

                      <form className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="bookingName">Your Name</Label>
                          <Input
                            id="bookingName"
                            name="bookingName"
                            placeholder="Full Name"
                            required
                            value={bookingFormData.bookingName}
                            onChange={handleBookingInputChange}
                            className="bg-white border-gray-300 text-neutral-text"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="bookingEmail">Email Address</Label>
                          <Input
                            id="bookingEmail"
                            type="email"
                            name="bookingEmail"
                            placeholder="your@email.com"
                            required
                            value={bookingFormData.bookingEmail}
                            onChange={handleBookingInputChange}
                            className="bg-white border-gray-300 text-neutral-text"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="bookingPhone">Phone Number</Label>
                          <Input
                            id="bookingPhone"
                            name="bookingPhone"
                            placeholder="(123) 456-7890"
                            value={bookingFormData.bookingPhone}
                            onChange={handleBookingInputChange}
                            className="bg-white border-gray-300 text-neutral-text"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="bookingNotes">What would you like to discuss?</Label>
                          <Textarea
                            id="bookingNotes"
                            name="bookingNotes"
                            placeholder="Share a brief overview of your event and any specific questions..."
                            rows={3}
                            value={bookingFormData.bookingNotes}
                            onChange={handleBookingInputChange}
                            className="bg-white border-gray-300 text-neutral-text resize-none"
                          />
                        </div>
                      </form>

                      <div className="flex justify-between">
                        <Button
                          variant="outline"
                          onClick={() => setBookingStep(1)}
                          className="border-gray-300 text-neutral-text hover:bg-gray-100"
                        >
                          Back
                        </Button>
                        <Button
                          onClick={handleBookCall}
                          disabled={isSubmitting}
                          className="bg-primary text-white hover:bg-primary-600"
                        >
                          {isSubmitting ? "Booking..." : "Confirm Booking"}
                        </Button>
                      </div>
                    </div>
                  )}

                  {bookingStep === 3 && (
                    <div className="text-center py-12 space-y-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                        <Check className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-neutral-text">Your Call is Scheduled!</h3>
                      <div className="bg-gray-50 p-4 rounded-lg max-w-md mx-auto">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-neutral-text">Discovery Call</h4>
                          <Badge className="bg-primary/10 text-primary border-0">30 Minutes</Badge>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <CalendarIcon className="w-4 h-4 mr-2" />
                          <span>
                            {format(date!, "EEEE, MMMM d")} at {selectedTimeSlot}
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-600 max-w-md mx-auto">
                        We've sent a calendar invitation to your email. Looking forward to discussing your event!
                      </p>
                      <Button
                        onClick={() => {
                          setBookingStep(1)
                          setDate(undefined)
                          setSelectedTimeSlot(null)
                        }}
                        className="bg-primary text-white hover:bg-primary-600 mt-4"
                      >
                        Schedule Another Call
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Why Book With Us */}
      <section className="py-16 bg-neutral-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-text">Why Plan With Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to making your event planning experience as seamless as your event itself
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Personalized Approach",
                description:
                  "We take the time to understand your vision and create a customized plan that brings it to life.",
                image:
                  "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
              },
              {
                title: "Experienced Team",
                description:
                  "Our team has years of experience planning and executing flawless events of all types and sizes.",
                image:
                  "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600",
              },
              {
                title: "Stress-Free Process",
                description:
                  "We handle all the details, coordination, and logistics so you can enjoy the planning process.",
                image:
                  "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="h-48 relative">
                  <Image src={feature.image || "/placeholder.svg"} alt={feature.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-neutral-text">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-text">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from couples and clients who trusted us with their special moments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Sarah & James",
                event: "Wedding",
                quote:
                  "Working with EventCraft was the best decision we made for our wedding. They took care of every detail and made our day absolutely perfect.",
                image:
                  "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600",
              },
              {
                name: "Tech Innovations Inc.",
                event: "Corporate Launch",
                quote:
                  "The team's attention to detail and creativity made our product launch a standout event. Our clients were impressed and our team was able to focus on what matters.",
                image:
                  "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=600",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-neutral-bg rounded-lg p-6 border border-gray-200 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 relative">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-semibold text-neutral-text">{testimonial.name}</p>
                      <p className="text-gray-500 text-sm">{testimonial.event}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-neutral-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-text">FAQ</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Frequently Asked Questions about our event planning services
            </p>
          </div>

          {/* FAQ Content */}
          <div className="space-y-8">
            {/* FAQ Item 1 */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-neutral-text">How do you plan events?</h3>
              <p className="text-gray-600">
                We start by understanding your vision and requirements, then we create a detailed plan that includes all
                the necessary elements to make your event a success.
              </p>
            </div>

            {/* FAQ Item 2 */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-neutral-text">What types of events do you handle?</h3>
              <p className="text-gray-600">
                We specialize in a variety of events including weddings, corporate events, social gatherings, cultural
                events, and sports events.
              </p>
            </div>

            {/* FAQ Item 3 */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-neutral-text">How much does it cost?</h3>
              <p className="text-gray-600">
                Our pricing varies based on the event type, size, and specific requirements. Please contact us for a
                detailed quote.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
