import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import AnimatedSection from '../assets/components/AnimatedSection'
import {
  Home,
  TrendingUp,
  Building2,
  Briefcase,
  Users,
  Shield,
  FileText,
  Calculator,
  HeartHandshake,
  CheckCircle2,
  ArrowRight,
  Phone
} from 'lucide-react'

export default function Services() {
  const mainServices = [
    {
      icon: Home,
      title: 'First Home Buyers',
      description: 'Expert guidance for your first step onto the property ladder',
      features: [
        'First Home Owner Grant (FHOG) assistance',
        'Low deposit loan options (as low as 5%)',
        'Government schemes and incentives',
        'Pre-approval strategy and guidance',
        'Stamp duty concessions advice',
        'Lenders mortgage insurance options'
      ],
      benefits: [
        'Save thousands with the right loan structure',
        'Understand your true borrowing capacity',
        'Navigate complex eligibility criteria',
        'Speed up your home buying timeline'
      ],
      color: 'from-primary to-primary-light'
    },
    {
      icon: TrendingUp,
      title: 'Refinancing',
      description: 'Unlock better rates and save thousands on your existing home loan',
      features: [
        'Competitive rate comparison across 40+ lenders',
        'Break cost calculation and analysis',
        'Equity release for renovations or investments',
        'Debt consolidation strategies',
        'Loan restructuring for better cash flow',
        'Annual loan health checks'
      ],
      benefits: [
        'Potentially save $400+ per month on repayments',
        'Access your home equity without selling',
        'Consolidate debts for one simple payment',
        'Switch to a better product with more features'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Building2,
      title: 'Investment Property',
      description: 'Strategic lending solutions to grow your property portfolio',
      features: [
        'Portfolio lending strategy',
        'Interest-only loan options',
        'Cross-collateral advice',
        'Tax-effective loan structures',
        'Negative gearing optimization',
        'Long-term growth planning'
      ],
      benefits: [
        'Maximize your borrowing capacity',
        'Structure loans for tax benefits',
        'Build wealth through property',
        'Expert guidance on investment strategies'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Briefcase,
      title: 'Self-Employed',
      description: 'Tailored solutions for business owners and contractors',
      features: [
        'Low-doc and alt-doc loan options',
        'Business financial statement assessment',
        'ABN and sole trader lending',
        'Seasonal income accommodation',
        'Multiple income stream packaging',
        'Lender-specific expertise'
      ],
      benefits: [
        'Get approved with non-traditional income',
        'Simplified documentation processes',
        'Access to specialist lenders',
        'Understanding of business cycles'
      ],
      color: 'from-amber-500 to-amber-600'
    },
    {
      icon: Users,
      title: 'Family Guarantee',
      description: 'Help your children enter the property market',
      features: [
        'Family pledge loan structures',
        'Parent guarantee arrangements',
        'Security over multiple properties',
        'Risk mitigation strategies',
        'Legal considerations and advice',
        'Exit strategy planning'
      ],
      benefits: [
        'Help kids avoid LMI on low deposits',
        'Protect family assets appropriately',
        'Clear documentation and agreements',
        'Professional mediation if needed'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: FileText,
      title: 'Debt Consolidation',
      description: 'Simplify your finances with one smart solution',
      features: [
        'Credit card debt consolidation',
        'Personal loan refinancing',
        'Car loan integration',
        'Overall debt assessment',
        'Cash flow optimization',
        'Long-term financial planning'
      ],
      benefits: [
        'One payment instead of many',
        'Potentially save thousands in interest',
        'Improve your credit score',
        'Better budgeting and control'
      ],
      color: 'from-rose-500 to-rose-600'
    }
  ]

  const additionalServices = [
    {
      icon: Shield,
      title: 'Loan Protection',
      description: 'Insurance solutions to protect your home and family'
    },
    {
      icon: Calculator,
      title: 'Pre-Approval',
      description: 'Know your borrowing power before you start searching'
    },
    {
      icon: HeartHandshake,
      title: 'Ongoing Support',
      description: 'Annual reviews and support throughout your loan life'
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'Free 15-minute call to understand your needs and goals'
    },
    {
      step: '02',
      title: 'Assessment & Strategy',
      description: 'We analyze your situation and create a tailored lending strategy'
    },
    {
      step: '03',
      title: 'Lender Comparison',
      description: 'Compare 40+ lenders to find you the best rate and features'
    },
    {
      step: '04',
      title: 'Application & Approval',
      description: 'We handle the paperwork and liaise with lenders on your behalf'
    },
    {
      step: '05',
      title: 'Settlement & Beyond',
      description: 'Ongoing support and annual loan health checks'
    }
  ]

  return (
    <div className="overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-radial from-primary/10 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="badge badge-gold mb-6 inline-flex">
              <Shield className="w-4 h-4" />
              <span>Comprehensive Mortgage Solutions</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6">
              Our Lending Services
            </h1>
            
            <p className="text-xl text-slate-300 mb-8">
              From first home buyers to seasoned investors, we provide expert mortgage 
              advice tailored to your unique situation
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/booking" className="btn-primary">
                Book Consultation
              </Link>
              <Link to="/calculator" className="btn-secondary">
                Calculate Repayments
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-dark-lighter/50 to-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-16">
            {mainServices.map((service, i) => {
              const Icon = service.icon
              const isEven = i % 2 === 0

              return (
                <AnimatedSection
                  key={i}
                  delay={i * 0.1}
                  direction={isEven ? 'left' : 'right'}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    !isEven ? 'lg:grid-flow-dense' : ''
                  }`}
                >
                  {/* Icon & Content */}
                  <div className={!isEven ? 'lg:col-start-2' : ''}>
                    <div className="relative inline-block mb-6">
                      <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
                      <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-glow-lg`}>
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                    </div>

                    <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4 text-white">
                      {service.title}
                    </h2>
                    
                    <p className="text-lg text-slate-300 mb-6">
                      {service.description}
                    </p>

                    <Link 
                      to="/booking" 
                      className="inline-flex items-center gap-2 text-primary hover:text-primary-light font-semibold group"
                    >
                      <span>Discuss this service</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Features Card */}
                  <div className={!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <div className="card">
                      <h3 className="text-xl font-semibold mb-4 text-white">What We Offer</h3>
                      <ul className="space-y-3 mb-6">
                        {service.features.map((feature, j) => (
                          <li key={j} className="flex items-start gap-3 text-slate-300">
                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="pt-6 border-t border-white/10">
                        <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-3">
                          Key Benefits
                        </h4>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm text-slate-300">
                              <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <AnimatedSection className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4 text-white">
              Additional Services
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Complete support throughout your property journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {additionalServices.map((service, i) => {
              const Icon = service.icon
              return (
                <AnimatedSection
                  key={i}
                  delay={i * 0.1}
                  direction="up"
                  className="card-hover text-center"
                >
                  <Icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {service.title}
                  </h3>
                  <p className="text-slate-300">
                    {service.description}
                  </p>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </AnimatedSection>

      {/* Process Section */}
      <AnimatedSection className="py-20 lg:py-28 bg-gradient-to-b from-dark-lighter/50 to-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-header">How We Work With You</h2>
            <p className="section-subheader mx-auto">
              A simple, transparent process from first contact to settlement
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {process.map((item, i) => (
              <AnimatedSection
                key={i}
                delay={i * 0.1}
                direction="up"
                className="relative"
              >
                <div className="text-center">
                  <div className="relative inline-flex items-center justify-center w-16 h-16 mb-4">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg" />
                    <div className="relative w-full h-full rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-xl font-bold text-white shadow-glow">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-300">
                    {item.description}
                  </p>
                </div>

                {/* Connector Line */}
                {i < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                )}
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative">
            <div className="absolute -inset-8 bg-gradient-to-r from-primary/20 via-primary-light/20 to-primary/20 blur-3xl" />
            
            <div className="relative card-glass text-center p-12 lg:p-16">
              <Phone className="w-16 h-16 mx-auto mb-6 text-primary" />
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4 text-white">
                Let's Find Your Perfect Loan
              </h2>
              <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                Book a free consultation and discover how much you could save with the right home loan strategy
              </p>
              <Link to="/booking" className="btn-primary group">
                <span>Book Free Consultation</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>

    </div>
  )
}
