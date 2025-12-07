import { motion } from "framer-motion";

export default function Services() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10 sm:py-14 lg:py-16">

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
      >
        <h1 className="text-2xl sm:text-3xl font-semibold mb-3">Our mortgage services</h1>
        <p className="text-sm sm:text-base text-slate-300 mb-8 max-w-2xl">
          We help you make sense of the numbers, lender jargon, and loan options.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.12 } }
        }}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {[
          "First home buyer guidance",
          "Refinancing & repricing",
          "Investment lending",
          "Self-employed borrowers",
          "Debt consolidation",
          "Ongoing loan check-ins"
        ].map((service, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 25 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 180, damping: 14 }}
            className="card"
          >
            <h2 className="font-semibold mb-2">{service}</h2>
            <p className="text-sm text-slate-300">
              Tailored lending advice to suit your situation.
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
