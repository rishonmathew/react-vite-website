import { useState } from 'react'
import { motion } from 'framer-motion'
import AnimatedSection from '../assets/components/AnimatedSection'
import supabase from '../assets/lib/supabaseClient'
import { Calendar, Clock, User, Mail, Phone, MessageSquare, CheckCircle2, AlertCircle } from 'lucide-react'

export default function Booking() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    preferred_day: '',
    preferred_time: '',
    topic: '',
    notify_sms: false,
    marketing_opt_in: false
  })

  const [status, setStatus] = useState({ type: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus({ type: '', message: '' })

    try {
      const { error } = await supabase
        .from('bookings')
        .insert([formData])

      if (error) throw error

      setStatus({
        type: 'success',
        message: 'Your consultation request has been submitted! We\'ll contact you within 24 hours.'
      })

      // Reset form
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        preferred_day: '',
        preferred_time: '',
        topic: '',
        notify_sms: false,
        marketing_opt_in: false
      })
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Something went wrong. Please try again or call us directly.'
      })
      console.error('Booking error:', error)
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
              <Calendar className="w-4 h-4" />
              <span>Book Your Free Consultation</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-display font-bold mb-6">
              Let's Discuss Your Home Loan
            </h1>
            
            <p className="text-lg text-slate-300">
              Book a free 15-minute consultation. No obligation, just expert advice tailored to your situation.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Booking Form */}
            <AnimatedSection direction="left" className="lg:col-span-2">
              <div className="card">
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name Fields */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="label">
                        <User className="w-4 h-4 inline mr-2" />
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="first_name"
                        required
                        value={formData.first_name}
                        onChange={handleChange}
                        className="input"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="label">Last Name *</label>
                      <input
                        type="text"
                        name="last_name"
                        required
                        value={formData.last_name}
                        onChange={handleChange}
                        className="input"
                        placeholder="Smith"
                      />
                    </div>
                  </div>

                  {/* Contact Fields */}
                  <div>
                    <label className="label">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email Address *
                    </label>
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
                    <label className="label">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="input"
                      placeholder="0400 000 000"
                    />
                  </div>

                  {/* Date & Time */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="label">
                        <Calendar className="w-4 h-4 inline mr-2" />
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        name="preferred_day"
                        required
                        value={formData.preferred_day}
                        onChange={handleChange}
                        className="input"
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                    <div>
                      <label className="label">
                        <Clock className="w-4 h-4 inline mr-2" />
                        Preferred Time *
                      </label>
                      <input
                        type="time"
                        name="preferred_time"
                        required
                        value={formData.preferred_time}
                        onChange={handleChange}
                        className="input"
                      />
                    </div>
                  </div>

                  {/* Topic */}
                  <div>
                    <label className="label">
                      <MessageSquare className="w-4 h-4 inline mr-2" />
                      What would you like to discuss? *
                    </label>
                    <textarea
                      name="topic"
                      required
                      value={formData.topic}
                      onChange={handleChange}
                      rows="4"
                      className="textarea"
                      placeholder="E.g., First home buyer loan, refinancing options, investment property..."
                    />
                  </div>

                  {/* Checkboxes */}
                  <div className="space-y-3 p-4 rounded-lg bg-white/5 border border-white/10">
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        name="notify_sms"
                        checked={formData.notify_sms}
                        onChange={handleChange}
                        className="mt-1 w-4 h-4 rounded border-white/20 bg-white/5 text-primary focus:ring-primary"
                      />
                      <span className="text-sm text-slate-300 group-hover:text-white transition-colors">
                        Send me SMS notifications about my consultation
                      </span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        name="marketing_opt_in"
                        checked={formData.marketing_opt_in}
                        onChange={handleChange}
                        className="mt-1 w-4 h-4 rounded border-white/20 bg-white/5 text-primary focus:ring-primary"
                      />
                      <span className="text-sm text-slate-300 group-hover:text-white transition-colors">
                        I'd like to receive helpful tips and market updates (you can unsubscribe anytime)
                      </span>
                    </label>
                  </div>

                  {/* Status Message */}
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

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                        />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Calendar className="w-5 h-5 mr-2" />
                        Book Consultation
                      </>
                    )}
                  </button>

                  <p className="text-xs text-slate-400 text-center">
                    By submitting this form, you agree to our Privacy Policy and Terms of Service.
                  </p>
                </form>
              </div>
            </AnimatedSection>

            {/* Info Sidebar */}
            <AnimatedSection direction="right">
              <div className="space-y-6">
                
                {/* Contact Info Card */}
                <div className="card">
                  <h3 className="text-xl font-semibold mb-4 text-white">Contact Information</h3>
                  <div className="space-y-4 text-sm">
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium text-white mb-1">Phone</div>
                        <div className="text-slate-300">+61 4XX XXX XXX</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium text-white mb-1">Email</div>
                        <div className="text-slate-300">hello@asthimortgage.com.au</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium text-white mb-1">Business Hours</div>
                        <div className="text-slate-300">Mon - Fri, 9:00am - 5:00pm AEST</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* What to Expect */}
                <div className="card">
                  <h3 className="text-xl font-semibold mb-4 text-white">What to Expect</h3>
                  <ul className="space-y-3 text-sm">
                    {[
                      '15-minute friendly consultation',
                      'No obligation or pressure',
                      'Expert advice on your options',
                      'Clear next steps if you proceed'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-300">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Trust Indicators */}
                <div className="card bg-gradient-to-br from-primary/10 to-transparent border-primary/20">
                  <div className="text-center">
                    <div className="text-3xl font-display font-bold text-white mb-2">500+</div>
                    <div className="text-sm text-slate-300">Happy Clients Helped</div>
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
