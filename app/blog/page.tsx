"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, Calendar, User, ArrowRight, Clock } from "lucide-react"
import Navigation from "@/components/shared/navigation"
import Footer from "@/components/shared/footer"

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const categories = ["All", "Event Inspiration", "Planning Guides", "Vendor Features"]

  const blogPosts = [
    {
      id: 1,
      title: "10 Stunning Wedding Color Palettes for 2025",
      excerpt: "Discover the most beautiful and trending color combinations that will make your wedding unforgettable.",
      category: "Event Inspiration",
      author: "Sarah Johnson",
      date: "January 15, 2025",
      readTime: "5 min read",
      image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600",
      featured: true,
    },
    {
      id: 2,
      title: "The Ultimate Wedding Planning Timeline: 12 Months to 'I Do'",
      excerpt: "A comprehensive month-by-month guide to planning your perfect wedding without the stress.",
      category: "Planning Guides",
      author: "Michael Chen",
      date: "January 12, 2025",
      readTime: "8 min read",
      image: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=600",
      featured: false,
    },
    {
      id: 3,
      title: "Spotlight: Elite Catering Co. - Masters of Culinary Excellence",
      excerpt:
        "Meet the award-winning catering team that's been creating extraordinary dining experiences for over a decade.",
      category: "Vendor Features",
      author: "Emma Rodriguez",
      date: "January 10, 2025",
      readTime: "6 min read",
      image: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=600",
      featured: false,
    },
    {
      id: 4,
      title: "Corporate Event Trends That Will Dominate 2025",
      excerpt:
        "From hybrid experiences to sustainable practices, explore the trends shaping corporate events this year.",
      category: "Event Inspiration",
      author: "David Park",
      date: "January 8, 2025",
      readTime: "7 min read",
      image: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=600",
      featured: false,
    },
    {
      id: 5,
      title: "How to Choose the Perfect Venue: A Complete Guide",
      excerpt:
        "Everything you need to know about selecting a venue that perfectly matches your event vision and budget.",
      category: "Planning Guides",
      author: "Lisa Thompson",
      date: "January 5, 2025",
      readTime: "10 min read",
      image: "https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg?auto=compress&cs=tinysrgb&w=600",
      featured: false,
    },
    {
      id: 6,
      title: "Featured Florist: Bloom & Blossom's Artistic Arrangements",
      excerpt: "Discover how this innovative florist creates breathtaking floral designs that tell your unique story.",
      category: "Vendor Features",
      author: "Rachel Green",
      date: "January 3, 2025",
      readTime: "4 min read",
      image: "https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=600",
      featured: false,
    },
    {
      id: 7,
      title: "Birthday Party Ideas That Will Wow Your Guests",
      excerpt:
        "Creative and memorable birthday party themes and ideas for celebrations that guests will talk about for years.",
      category: "Event Inspiration",
      author: "Alex Martinez",
      date: "December 30, 2024",
      readTime: "6 min read",
      image: "https://images.pexels.com/photos/1857157/pexels-photo-1857157.jpeg?auto=compress&cs=tinysrgb&w=600",
      featured: false,
    },
    {
      id: 8,
      title: "Budget Planning 101: How to Plan an Amazing Event on Any Budget",
      excerpt:
        "Smart strategies and insider tips for creating spectacular events while staying within your budget constraints.",
      category: "Planning Guides",
      author: "Jennifer Kim",
      date: "December 28, 2024",
      readTime: "9 min read",
      image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600",
      featured: false,
    },
  ]

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen bg-neutral-bg text-neutral-text">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-secondary-purple">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Event Insights & Inspiration</h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Discover expert tips, trending ideas, and behind-the-scenes stories from the world of event planning
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white border-gray-300 text-neutral-text"
                />
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  variant={category === selectedCategory ? "default" : "outline"}
                  className={`${
                    category === selectedCategory
                      ? "bg-primary text-white hover:bg-primary-600"
                      : "border-white text-white hover:bg-white hover:text-neutral-text"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && selectedCategory === "All" && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <Badge className="bg-primary text-white mb-4">Featured Article</Badge>
            </div>

            <Card className="bg-white border-gray-200 overflow-hidden shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <Badge variant="secondary" className="bg-secondary-teal/10 text-secondary-teal border-0 w-fit mb-4">
                    {featuredPost.category}
                  </Badge>
                  <h2 className="text-3xl font-bold text-neutral-text mb-4">{featuredPost.title}</h2>
                  <p className="text-gray-600 mb-6 text-lg">{featuredPost.excerpt}</p>

                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </div>
                  </div>

                  <Button className="bg-primary text-white hover:bg-primary-600 w-fit">
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16 bg-neutral-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card
                key={post.id}
                className="bg-white border-gray-200 overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative h-48">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-neutral-text border-0">
                      {post.category}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-neutral-text mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <Button variant="ghost" className="text-primary hover:bg-primary/10 p-0">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-secondary-teal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Stay Inspired</h2>
          <p className="text-xl text-teal-100 mb-8">
            Get the latest event planning tips, trends, and inspiration delivered to your inbox
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input placeholder="Enter your email" className="bg-white border-white text-neutral-text" />
            <Button className="bg-primary text-white hover:bg-primary-600 whitespace-nowrap">Subscribe</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
