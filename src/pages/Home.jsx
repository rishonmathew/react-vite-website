import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection from '../assets/components/AnimatedSection'
import { 
  Home as HomeIcon,
  TrendingUp, 
  Shield, 
  Users, 
  CheckCircle2,
  ArrowRight,
  Award,
  Clock,
  DollarSign,
  HeartHandshake,
  Star,
  Calculator,
  Phone
} from 'lucide-react'

export default function Home() {
  const stats = [
    { value: '500+', label: 'Loans Approved', icon: CheckCircle2 },
    { value: '$500M+', label: 'Funded', icon: DollarSign },
    { value: '98%', label: 'Client Satisfaction', icon: Star },
    { value: '24hr', label: 'Response Time', icon: Clock },
  ]

  const features = [
    {
      icon: Users,
      title: 'Expert Guidance',
      description: 'Work with experienced brokers who understand the Australian lending landscape'
    },
    {
      icon: TrendingUp,
      title: 'Best Rates',
      description: 'Access competitive rates from 40+ lenders including major banks and specialists'
    },
    {
      icon: Shield,
      title: 'Transparent Process',
      description: 'No hidden fees. Clear explanations. Your interests always come first'
    },
    {
      icon: HeartHandshake,
      title: 'Ongoing Support',
      description: 'Annual loan health checks and support throughout the life of your loan'
    }
  ]

  const services = [
    {
      title: 'First Home Buyers',
      description: 'Navigate grants, deposits, and lender requirements with confidence',
      features: ['First Home Buyer Grants', 'Low deposit options', 'Government schemes', 'Pre-approval guidance'],
      gradient: 'from-primary to-primary-light'
    },
    {
      title: 'Refinancing',
      description: 'Save thousands by switching to a better rate or unlocking equity',
      features: ['Rate comparisons', 'Break cost analysis', 'Equity access', 'Debt consolidation'],
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Investment Property',
      description: 'Build your property portfolio with tailored investment loan strategies',
      features: ['Portfolio review', 'Tax-effective structures', 'Negative gearing', 'Growth strategies'],
      gradient: 'from-purple-500 to-purple-600'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah & James',
      role: 'First Home Buyers',
      content: 'Asthi made the complex simple. They found us a great rate and guided us through every step of buying our first home.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Refinance Client',
      content: 'Saved over $400/month by refinancing through Asthi. The process was smooth and the communication excellent.',
      rating: 5
    },
    {
      name: 'Lisa Thompson',
      role: 'Property Investor',
      content: 'Professional, knowledgeable, and always responsive. Asthi has been instrumental in growing my property portfolio.',
      rating: 5
    }
  ]

  return (
    <div className="overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Background Elements */}
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-radial from-primary/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-radial from-primary/5 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 badge mb-6"
              >
                <Award className="w-4 h-4" />
                <span>Trusted Australian Mortgage Brokers</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl lg:text-6xl xl:text-7xl font-display font-bold mb-6 leading-tight"
              >
                Find Your Perfect{' '}
                <span className="block mt-2 animated-gradient-text">
                  Home Loan
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg lg:text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl"
              >
                Navigate the mortgage maze with expert guidance. We compare 40+ lenders, 
                explain your options, and help you secure a home loan that fits your life.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4 mb-8"
              >
                <Link to="/booking" className="btn-primary group">
                  <span>Book Free Consultation</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/calculator" className="btn-secondary group">
                  <Calculator className="w-5 h-5 mr-2" />
                  <span>Try Calculator</span>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-300"
              >
                {['No obligation', 'Free service', 'Compare 40+ lenders'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - Stats Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative"
            >
              {/* Floating Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary-light/20 blur-3xl rounded-full animate-pulse" />
              
              <div className="relative card-glass grid grid-cols-2 gap-4 p-8">
                {stats.map((stat, i) => {
                  const Icon = stat.icon
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + i * 0.1 }}
                      className="text-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      <Icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                      <div className="stat-value text-3xl">{stat.value}</div>
                      <div className="stat-label mt-1">{stat.label}</div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <AnimatedSection className="py-20 lg:py-28 bg-gradient-to-b from-transparent to-dark-lighter/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-header">Why Choose Asthi Mortgage Group</h2>
            <p className="section-subheader mx-auto">
              We're not just brokers—we're your partners in securing the right home loan
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => {
              const Icon = feature.icon
              return (
                <AnimatedSection
                  key={i}
                  delay={i * 0.1}
                  direction="up"
                  className="card-hover group text-center"
                >
                  <div className="relative inline-block mb-6">
                    <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full group-hover:bg-primary/40 transition-all" />
                    <div className="relative w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center shadow-glow">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-3 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    {feature.description}
                  </p>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </AnimatedSection>

      {/* Services Showcase */}
      <AnimatedSection className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-header">Our Lending Solutions</h2>
            <p className="section-subheader mx-auto">
              Tailored home loan strategies for every stage of your property journey
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <AnimatedSection
                key={i}
                delay={i * 0.15}
                direction="up"
                className="relative group"
              >
                <div className="card-hover h-full flex flex-col">
                  {/* Gradient Header */}
                  <div className={`p-6 rounded-t-2xl bg-gradient-to-br ${service.gradient} mb-6`}>
                    <h3 className="text-2xl font-display font-bold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-white/90 text-sm">
                      {service.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="flex-1 px-6 pb-6">
                    <ul className="space-y-3">
                      {service.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-3 text-slate-300">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="px-6 pb-6">
                    <Link 
                      to="/services" 
                      className="inline-flex items-center gap-2 text-primary hover:text-primary-light font-medium group/link"
                    >
                      <span>Learn more</span>
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.5} className="text-center mt-12">
            <Link to="/services" className="btn-primary">
              View All Services
            </Link>
          </AnimatedSection>
        </div>
      </AnimatedSection>

      {/* Testimonials */}
      <AnimatedSection className="py-20 lg:py-28 bg-gradient-to-b from-dark-lighter/50 to-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-header">What Our Clients Say</h2>
            <p className="section-subheader mx-auto">
              Real experiences from real people we've helped
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <AnimatedSection
                key={i}
                delay={i * 0.1}
                direction="up"
                className="card-hover"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-slate-400">{testimonial.role}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.4} className="text-center mt-12">
            <Link 
              to="/review" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary-light font-medium"
            >
              <span>Leave your review</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute -inset-8 bg-gradient-to-r from-primary/20 via-primary-light/20 to-primary/20 blur-3xl" />
            
            <div className="relative card-glass text-center p-12 lg:p-16">
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4 text-white">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                Book a free 15-minute consultation and let's discuss your home loan options. 
                No obligation, just expert advice tailored to you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/booking" className="btn-primary group">
                  <Phone className="w-5 h-5 mr-2" />
                  <span>Book Consultation</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/calculator" className="btn-secondary">
                  <Calculator className="w-5 h-5 mr-2" />
                  <span>Calculate Repayments</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

    </div>
  )
}