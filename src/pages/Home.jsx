import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-4 pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-20 lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid gap-10 md:grid-cols-2 items-center"
        >
          {/* Left */}
          <div className="space-y-5">
            <span className="badge-soft">Trusted mortgage guidance in Australia</span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
              Find the right {" "}
              <span className="text-[#E9F1F7]">home loan</span> without the stress.
            </h1>

            <p className="text-sm sm:text-base text-slate-300 max-w-xl">
              Asthi Mortgage Group compares lenders, explains your options, and helps you secure a home loan that actually fits your life.
            </p>

            <div className="flex flex-wrap gap-3">
              <motion.div whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.03 }}>
                <Link to="/booking" className="btn-primary">Book a free 15-min call</Link>
              </motion.div>

              <Link
                to="/calculator"
                className="text-sm text-slate-300 hover:text-slate-100 underline underline-offset-4"
              >
                Try the loan calculator
              </Link>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-400">
              <div>✔ No-obligation consultation</div>
              <div>✔ Access to multiple lenders</div>
              <div>✔ Simple, transparent advice</div>
            </div>
          </div>

          {/* Right Callout Card */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="card bg-gradient-to-br from-[#111218] via-[#1a1b24] to-[#48297A]/60 border-white/10"
          >
            <h2 className="text-lg font-semibold mb-3">What we can help you with</h2>
            <ul className="space-y-3 text-sm text-slate-200">
              <li>• First home buyer loans</li>
              <li>• Refinancing to reduce repayments</li>
              <li>• Investment property lending</li>
              <li>• Self-employed / complex income</li>
            </ul>
            <div className="mt-5 text-[11px] text-slate-400 border-t border-white/10 pt-3">
              This is general information only, not financial advice.
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* SERVICES STRIP */}
      <section className="max-w-6xl mx-auto px-4 pb-14">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold">How we support your loan journey</h2>
            <p className="text-sm text-slate-300 mt-1 max-w-xl">
              From your first enquiry through to settlement, we keep the process simple.
            </p>
          </div>

          <Link
            to="/services"
            className="text-xs sm:text-sm text-slate-300 hover:text-slate-100 underline underline-offset-4"
          >
            View all services
          </Link>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } }
          }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {["First home buyers", "Refinancing", "Property investors"].map((title, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: { opacity: 1, y: 0 },
              }}
              className="card"
            >
              <h3 className="font-semibold mb-2">{title}</h3>
              <p className="text-sm text-slate-300">
                Our expert advice helps you make informed lending decisions.
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
