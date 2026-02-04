import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Linkedin, 
  Twitter,
  Instagram,
  ExternalLink
} from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { label: 'First Home Buyers', to: '/services' },
      { label: 'Refinancing', to: '/services' },
      { label: 'Investment Loans', to: '/services' },
      { label: 'Self-Employed', to: '/services' },
    ],
    company: [
      { label: 'About Us', to: '/' },
      { label: 'Our Services', to: '/services' },
      { label: 'Loan Calculator', to: '/calculator' },
      { label: 'Book Consultation', to: '/booking' },
    ],
    support: [
      { label: 'Contact Us', to: '/contact' },
      { label: 'Leave a Review', to: '/review' },
      { label: 'FAQ', to: '/' },
      { label: 'Resources', to: '/' },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ]

  return (
    <footer className="relative bg-gradient-to-b from-dark to-dark-lighter border-t border-white/5">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-flex items-center gap-3 group mb-6">
              <img 
                src="/logo.png" 
                alt="Asthi Mortgage Group" 
                className="h-14 w-auto"
              />
            </Link>
            
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Expert mortgage brokers helping Australians secure the right home loan. 
              We compare lenders, explain your options, and guide you through every step.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3 text-slate-300">
                <Phone className="w-4 h-4 mt-1 text-primary shrink-0" />
                <div>
                  <div className="font-medium text-white">Phone</div>
                  <div>+61 4XX XXX XXX</div>
                </div>
              </div>
              <div className="flex items-start gap-3 text-slate-300">
                <Mail className="w-4 h-4 mt-1 text-primary shrink-0" />
                <div>
                  <div className="font-medium text-white">Email</div>
                  <div>hello@asthimortgage.com.au</div>
                </div>
              </div>
              <div className="flex items-start gap-3 text-slate-300">
                <Clock className="w-4 h-4 mt-1 text-primary shrink-0" />
                <div>
                  <div className="font-medium text-white">Business Hours</div>
                  <div>Mon - Fri, 9:00am - 5:00pm AEST</div>
                </div>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-slate-300 hover:text-white transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary group-hover:w-2 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-slate-300 hover:text-white transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary group-hover:w-2 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-3 mb-6">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-slate-300 hover:text-white transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary group-hover:w-2 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div>
              <h4 className="text-white font-semibold mb-3 text-sm">Follow Us</h4>
              <div className="flex items-center gap-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-9 h-9 rounded-lg bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/30 flex items-center justify-center text-slate-300 hover:text-white transition-all"
                      aria-label={social.label}
                    >
                      <Icon className="w-4 h-4" />
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <div className="text-slate-400">
              © {currentYear} Asthi Mortgage Group. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6">
              <button className="text-slate-400 hover:text-white transition-colors">
                Privacy Policy
              </button>
              <button className="text-slate-400 hover:text-white transition-colors">
                Terms of Service
              </button>
              <button className="text-slate-400 hover:text-white transition-colors">
                Disclaimer
              </button>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-6 p-4 rounded-lg bg-white/5 border border-white/5">
            <p className="text-xs text-slate-400 leading-relaxed">
              <strong className="text-slate-300">Disclaimer:</strong> This information is general in nature and does not constitute personal financial advice. 
              We recommend speaking with a licensed mortgage broker to discuss your individual circumstances. 
              Asthi Mortgage Group is not a lender. Credit and lending criteria, fees and charges apply.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </footer>
  )
}