import { useState } from 'react'
import { motion } from 'framer-motion'
import AnimatedSection from '../assets/components/AnimatedSection'
import supabase from '../assets/lib/supabaseClient'
import { Mail, Phone, Clock, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [status, setStatus] = useState({ type: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus({ type: '', message: '' })

    try {
      const { error } = await supabase
        .from('contacts')
        .insert([formData])

      if (error) throw error

      setStatus({
        type: 'success',
        message: 'Message sent successfully! We\'ll get back to you within 24 hours.'
      })

      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or call us directly.'
      })
      console.error('Contact error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <div className="badge mb-6 inline-flex">
              <Mail className="w-4 h-4" />
              <span>Get In Touch</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-display font-bold mb-6">
              Contact Us
            </h1>
            
            <p className="text-lg text-slate-300">
              Have a question or want to discuss your home loan options? 
              We're here to help and typically respond within 24 hours.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Contact Form */}
            <AnimatedSection direction="left" className="lg:col-span-2">
              <div className="card">
                <h2 className="text-2xl font-display font-semibold mb-6 text-white">
                  Send Us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="label">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="input"
                      placeholder="John Smith"
                    />
                  </div>

                  <div>
                    <label className="label">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="input"
                      placeholder="john.smith@email.com"
                    />
                  </div>

                  <div>
                    <label className="label">Your Message *</label>
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      className="textarea"
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  {status.message && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`p-4 rounded-lg flex items-start gap-3 ${
                        status.type === 'success'
                          ? 'bg-green-500/10 border border-green-500/30'
                          : 'bg-red-500/10 border border-red-500/30'
                      }`}
                    >
                      {status.type === 'success' ? (
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      ) : (
                        <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                      )}
                      <p className={`text-sm ${
                        status.type === 'success' ? 'text-green-300' : 'text-red-300'
                      }`}>
                        {status.message}
                      </p>
                    </motion.div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full justify-center disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </AnimatedSection>

            {/* Contact Info Sidebar */}
            <AnimatedSection direction="right">
              <div className="space-y-6">
                
                {/* Contact Details */}
                <div className="card">
                  <h3 className="text-xl font-semibold mb-6 text-white">Contact Details</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-white mb-1">Phone</div>
                        <div className="text-slate-300">+61 4XX XXX XXX</div>
                        <div className="text-sm text-slate-400 mt-1">Mon-Fri, 9am-5pm AEST</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-white mb-1">Email</div>
                        <div className="text-slate-300 break-all">hello@asthimortgage.com.au</div>
                        <div className="text-sm text-slate-400 mt-1">We reply within 24 hours</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                        <Clock className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-white mb-1">Business Hours</div>
                        <div className="text-slate-300">Monday - Friday</div>
                        <div className="text-slate-300">9:00am - 5:00pm AEST</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-white mb-1">Location</div>
                        <div className="text-slate-300">Melbourne, Victoria</div>
                        <div className="text-slate-300">Australia</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="card bg-gradient-to-br from-primary/10 to-transparent border-primary/20">
                  <h3 className="text-lg font-semibold mb-4 text-white">Need Immediate Help?</h3>
                  <div className="space-y-3">
                    <a href="/booking" className="block p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                      <div className="font-medium text-white mb-1">Book a Consultation</div>
                      <div className="text-xs text-slate-400">Free 15-minute call</div>
                    </a>
                    <a href="/calculator" className="block p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                      <div className="font-medium text-white mb-1">Try Our Calculator</div>
                      <div className="text-xs text-slate-400">Estimate your repayments</div>
                    </a>
                  </div>
                </div>

              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

    </div>
  )
}
