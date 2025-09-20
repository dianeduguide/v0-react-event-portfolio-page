import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-neutral-text text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="relative h-16 w-48 mb-4">
              <Image src="/images/logo-no-bg.png" alt="Kaddosh Global Events" fill className="object-contain" />
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Creating magical moments and unforgettable experiences for over 15 years. Your vision, our expertise.
            </p>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-300">
                <Mail className="w-4 h-4 text-primary" />
                <span>admin@kaddoshglobalevents.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Phone className="w-4 h-4 text-primary" />
                <span>+44 (0) 20 1234 5678</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-4 h-4 text-primary" />
                <span>123 Event Avenue, Suite 100, London, UK SW1A 1AA</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/categories" className="hover:text-primary transition-colors">
                  Wedding Events
                </Link>
              </li>
              <li>
                <Link href="/categories" className="hover:text-primary transition-colors">
                  Corporate Events
                </Link>
              </li>
              <li>
                <Link href="/categories" className="hover:text-primary transition-colors">
                  Social/Private Events
                </Link>
              </li>
              <li>
                <Link href="/categories" className="hover:text-primary transition-colors">
                  Cultural & Entertainment
                </Link>
              </li>
              <li>
                <Link href="/categories" className="hover:text-primary transition-colors">
                  Sports Events
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-primary transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/client-love" className="hover:text-primary transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/kids" className="hover:text-primary transition-colors">
                  KGE-Kids
                </Link>
              </li>
              <li>
                <Link href="/book" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8">
          <div className="text-center mb-4">
            <Link
              href="https://kaddoshglobalservices.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-gray-300 hover:text-primary transition-colors"
            >
              A proud division of Kaddosh Global Services
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          <div className="text-center text-gray-400">
            <p>© 2025 Kaddosh Global Events. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
