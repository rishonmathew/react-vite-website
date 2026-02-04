import { useState } from 'react'
import { motion } from 'framer-motion'
import AnimatedSection from '../assets/components/AnimatedSection'
import supabase from '../assets/lib/supabaseClient'
import { Star, User, Mail, MessageSquare, CheckCircle2, AlertCircle, Award } from 'lucide-react'

export default function Review() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 5,
    message: ''
  })

  const [status, setStatus] = useState({ type: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: name === 'rating' ? parseInt(value) : value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus({ type: '', message: '' })

    try {
      const { error } = await supabase
        .from('testimonials')
        .insert([formData])

      if (error) throw error

      setStatus({
        type: 'success',
        message: 'Thank you for your review! It will appear on our website once approved.'
      })

      setFormData({
        name: '',
        email: '',
        rating: 5,
        message: ''
      })
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to submit review. Please try again later.'
      })
      console.error('Review error:', error)
    } finally {
      setLoading(false)
    }
  }

  const renderStars = (currentRating) => {
    return (
      <div className="flex gap-2 justify-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <motion.button
            key={star}
            type="button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setFormData(prev => ({ ...prev, rating: star }))}
            className="focus:outline-none"
          >
            <Star
              className={`w-10 h-10 transition-all ${
                star <= currentRating
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'text-slate-600 hover:text-slate-500'
              }`}
            />
          </motion.button>
        ))}
      </div>
    )
  }

  return (
    <div className="overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-radial from-yellow-500/10 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-glow mb-6">
              <Award className="w-8 h-8 text-white" />
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-display font-bold mb-6">
              Leave a Review
            </h1>
            
            <p className="text-lg text-slate-300">
              We'd love to hear about your experience with Asthi Mortgage Group. 
              Your feedback helps us improve and helps others make informed decisions.
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <AnimatedSection direction="up">
              <div className="card">
                <form onSubmit={handleSubmit} className="space-y-8">
                  
                  {/* Rating */}
                  <div className="text-center">
                    <label className="block text-xl font-semibold mb-4 text-white">
                      How would you rate your experience?
                    </label>
                    {renderStars(formData.rating)}
                    <p className="text-sm text-slate-400 mt-3">
                      {formData.rating === 5 && 'Excellent!'}
                      {formData.rating === 4 && 'Great!'}
                      {formData.rating === 3 && 'Good'}
                      {formData.rating === 2 && 'Fair'}
                      {formData.rating === 1 && 'Poor'}
                    </p>
                  </div>

                  {/* Name */}
                  <div>
                    <label className="label">
                      <User className="w-4 h-4 inline mr-2" />
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="input"
                      placeholder="John Smith"
                    />
                    <p className="text-xs text-slate-400 mt-2">
                      This will be displayed publicly with your review
                    </p>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="label">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email Address (optional)
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="input"
                      placeholder="john.smith@email.com"
                    />
                    <p className="text-xs text-slate-400 mt-2">
                      Your email won't be displayed publicly
                    </p>
                  </div>

                  {/* Review Message */}
                  <div>
                    <label className="label">
                      <MessageSquare className="w-4 h-4 inline mr-2" />
                      Your Review *
                    </label>
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      className="textarea"
                      placeholder="Tell us about your experience with Asthi Mortgage Group..."
                      minLength={20}
                    />
                    <p className="text-xs text-slate-400 mt-2">
                      Minimum 20 characters ({formData.message.length}/20)
                    </p>
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
                    disabled={loading || formData.message.length < 20}
                    className="btn-primary w-full justify-center disabled:opacity-50"
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
                        <Star className="w-5 h-5 mr-2" />
                        Submit Review
                      </>
                    )}
                  </button>

                  <p className="text-xs text-slate-400 text-center">
                    Your review will be reviewed and approved before being published on our website.
                  </p>
                </form>
              </div>
            </AnimatedSection>

            {/* Trust Badge */}
            <AnimatedSection delay={0.2} className="mt-8">
              <div className="card-glass text-center p-6">
                <div className="flex items-center justify-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-300">
                  Join 500+ satisfied clients who have shared their experiences
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

    </div>
  )
}
