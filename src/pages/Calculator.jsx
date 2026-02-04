import { useState } from 'react'
import { motion } from 'framer-motion'
import AnimatedSection from '../assets/components/AnimatedSection'
import { Calculator as CalcIcon, TrendingDown, DollarSign, Calendar, Info } from 'lucide-react'

export default function Calculator() {
  const [loanAmount, setLoanAmount] = useState('500000')
  const [interestRate, setInterestRate] = useState('6.00')
  const [loanTerm, setLoanTerm] = useState('30')
  const [results, setResults] = useState(null)

  const calculateLoan = (e) => {
    e.preventDefault()

    const P = parseFloat(loanAmount)
    const r = parseFloat(interestRate) / 100 / 12 // monthly rate
    const n = parseFloat(loanTerm) * 12 // months

    if (!P || !r || !n) {
      setResults(null)
      return
    }

    // Monthly payment formula
    const monthlyPayment = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
    const totalPaid = monthlyPayment * n
    const totalInterest = totalPaid - P

    // Calculate fortnightly and weekly
    const fortnightlyPayment = (monthlyPayment * 12) / 26
    const weeklyPayment = (monthlyPayment * 12) / 52

    setResults({
      monthly: monthlyPayment,
      fortnightly: fortnightlyPayment,
      weekly: weeklyPayment,
      totalPaid,
      totalInterest,
      principalPaid: P
    })
  }

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-AU', {
      style: 'currency',
      currency: 'AUD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value)
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
              <CalcIcon className="w-4 h-4" />
              <span>Free Loan Calculator</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-display font-bold mb-6">
              Mortgage Repayment Calculator
            </h1>
            
            <p className="text-lg text-slate-300">
              Estimate your home loan repayments and see how much you could save. 
              This calculator provides a guide only and is not a quote or approval.
            </p>
          </motion.div>

          {/* Calculator Interface */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
            {/* Input Form */}
            <AnimatedSection direction="left">
              <div className="card">
                <h2 className="text-2xl font-display font-semibold mb-6 text-white">
                  Loan Details
                </h2>

                <form onSubmit={calculateLoan} className="space-y-6">
                  
                  {/* Loan Amount */}
                  <div>
                    <label className="label">
                      <span>Loan Amount</span>
                      <span className="text-primary font-mono text-lg">
                        {formatCurrency(parseFloat(loanAmount) || 0)}
                      </span>
                    </label>
                    <input
                      type="range"
                      min="100000"
                      max="2000000"
                      step="10000"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(e.target.value)}
                      className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                    <input
                      type="number"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(e.target.value)}
                      className="input mt-2"
                      placeholder="Enter amount"
                    />
                  </div>

                  {/* Interest Rate */}
                  <div>
                    <label className="label">
                      <span>Interest Rate (p.a.)</span>
                      <span className="text-primary font-mono text-lg">
                        {interestRate}%
                      </span>
                    </label>
                    <input
                      type="range"
                      min="2"
                      max="10"
                      step="0.01"
                      value={interestRate}
                      onChange={(e) => setInterestRate(e.target.value)}
                      className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                    <input
                      type="number"
                      step="0.01"
                      value={interestRate}
                      onChange={(e) => setInterestRate(e.target.value)}
                      className="input mt-2"
                      placeholder="Enter rate"
                    />
                  </div>

                  {/* Loan Term */}
                  <div>
                    <label className="label">
                      <span>Loan Term</span>
                      <span className="text-primary font-mono text-lg">
                        {loanTerm} years
                      </span>
                    </label>
                    <input
                      type="range"
                      min="5"
                      max="30"
                      step="1"
                      value={loanTerm}
                      onChange={(e) => setLoanTerm(e.target.value)}
                      className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                    <input
                      type="number"
                      value={loanTerm}
                      onChange={(e) => setLoanTerm(e.target.value)}
                      className="input mt-2"
                      placeholder="Enter years"
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full">
                    <CalcIcon className="w-5 h-5 mr-2" />
                    Calculate Repayments
                  </button>
                </form>

                {/* Info Box */}
                <div className="mt-6 p-4 rounded-lg bg-primary/10 border border-primary/20">
                  <div className="flex gap-3">
                    <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-xs text-slate-300 leading-relaxed">
                      This calculator provides estimates only. Actual repayments will depend on 
                      your lender's rates, fees, and loan features. Speak with us for a tailored comparison.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Results Panel */}
            <AnimatedSection direction="right">
              <div className="card h-full flex flex-col">
                {!results ? (
                  <div className="flex-1 flex items-center justify-center text-center py-12">
                    <div>
                      <CalcIcon className="w-16 h-16 mx-auto mb-4 text-slate-600" />
                      <p className="text-slate-400">
                        Enter your loan details and click calculate to see your estimated repayments
                      </p>
                    </div>
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="space-y-6"
                  >
                    <h2 className="text-2xl font-display font-semibold text-white">
                      Your Estimated Repayments
                    </h2>

                    {/* Payment Frequency Cards */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl p-4 text-center border border-primary/30">
                        <div className="text-xs text-slate-400 uppercase tracking-wide mb-2">Monthly</div>
                        <div className="text-2xl font-bold text-white">
                          {formatCurrency(results.monthly)}
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 rounded-xl p-4 text-center border border-blue-500/30">
                        <div className="text-xs text-slate-400 uppercase tracking-wide mb-2">Fortnightly</div>
                        <div className="text-2xl font-bold text-white">
                          {formatCurrency(results.fortnightly)}
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 rounded-xl p-4 text-center border border-purple-500/30">
                        <div className="text-xs text-slate-400 uppercase tracking-wide mb-2">Weekly</div>
                        <div className="text-2xl font-bold text-white">
                          {formatCurrency(results.weekly)}
                        </div>
                      </div>
                    </div>

                    {/* Summary Stats */}
                    <div className="space-y-3 pt-6 border-t border-white/10">
                      <div className="flex items-center justify-between p-4 rounded-lg bg-white/5">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                            <DollarSign className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <div className="text-xs text-slate-400">Total Paid Over Loan Life</div>
                            <div className="text-lg font-semibold text-white">
                              {formatCurrency(results.totalPaid)}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-4 rounded-lg bg-white/5">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                            <TrendingDown className="w-5 h-5 text-amber-500" />
                          </div>
                          <div>
                            <div className="text-xs text-slate-400">Total Interest Paid</div>
                            <div className="text-lg font-semibold text-white">
                              {formatCurrency(results.totalInterest)}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-4 rounded-lg bg-white/5">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                            <Calendar className="w-5 h-5 text-green-500" />
                          </div>
                          <div>
                            <div className="text-xs text-slate-400">Principal Amount</div>
                            <div className="text-lg font-semibold text-white">
                              {formatCurrency(results.principalPaid)}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="pt-6 border-t border-white/10">
                      <p className="text-sm text-slate-400 mb-4">
                        Want to see how much you could save with a better rate?
                      </p>
                      <a href="/booking" className="btn-primary w-full justify-center">
                        Get a Free Rate Comparison
                      </a>
                    </div>
                  </motion.div>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <AnimatedSection className="py-20 lg:py-28 bg-gradient-to-b from-dark-lighter/50 to-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-4 text-white">
              Ways to Reduce Your Repayments
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Smart strategies to save money on your home loan
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Increase Payment Frequency',
                description: 'Switch from monthly to fortnightly payments to pay off your loan faster and save on interest'
              },
              {
                title: 'Make Extra Repayments',
                description: 'Even small additional payments can significantly reduce your loan term and total interest'
              },
              {
                title: 'Refinance to a Better Rate',
                description: 'A lower interest rate can save you thousands over the life of your loan'
              }
            ].map((tip, i) => (
              <AnimatedSection key={i} delay={i * 0.1} direction="up" className="card-hover">
                <h3 className="text-xl font-semibold mb-3 text-white">{tip.title}</h3>
                <p className="text-slate-300">{tip.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

    </div>
  )
}
