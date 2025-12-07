import { useState } from "react";

export default function Calculator() {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
  const [result, setResult] = useState(null);

  const handleCalculate = (e) => {
    e.preventDefault();

    const P = Number(amount);
    const yearlyRate = Number(rate) / 100;
    const r = yearlyRate / 12; // monthly
    const n = Number(years) * 12;

    if (!P || !yearlyRate || !n) {
      setResult(null);
      return;
    }

    const monthly =
      (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

    const total = monthly * n;
    const interest = total - P;

    setResult({
      monthly: monthly,
      fortnightly: (monthly * 12) / 26,
      weekly: (monthly * 12) / 52,
      total,
      interest,
    });
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-10 sm:py-14 lg:py-16">
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Left: form */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold mb-3">
            Loan repayment calculator
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mb-6">
            Estimate your repayments based on loan amount, interest rate and
            term. This is a guide only and not a quote or approval.
          </p>

          <form
            onSubmit={handleCalculate}
            className="card space-y-4 text-sm sm:text-base"
          >
            <div className="space-y-1">
              <label className="block text-xs uppercase tracking-wide text-slate-400">
                Loan amount
              </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="500000"
                className="w-full rounded-lg bg-[#111218] border border-white/10 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#48297A]"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-xs uppercase tracking-wide text-slate-400">
                Interest rate (p.a.)
              </label>
              <input
                type="number"
                step="0.01"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                placeholder="6.00"
                className="w-full rounded-lg bg-[#111218] border border-white/10 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#48297A]"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-xs uppercase tracking-wide text-slate-400">
                Loan term (years)
              </label>
              <input
                type="number"
                value={years}
                onChange={(e) => setYears(e.target.value)}
                placeholder="30"
                className="w-full rounded-lg bg-[#111218] border border-white/10 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#48297A]"
              />
            </div>

            <button type="submit" className="btn-primary w-full sm:w-auto">
              Calculate repayments
            </button>

            <p className="text-[11px] text-slate-400">
              These figures are a general guide only and do not constitute
              personal advice or a lending decision.
            </p>
          </form>
        </div>

        {/* Right: results */}
        <div className="card h-full flex flex-col justify-center text-sm sm:text-base">
          {!result ? (
            <p className="text-slate-300">
              Enter your details on the left to see an estimate of your
              repayments.
            </p>
          ) : (
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Estimated repayments</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-white/5 rounded-xl px-3 py-3">
                  <div className="text-xs text-slate-400">Monthly</div>
                  <div className="text-base font-semibold">
                    ${result.monthly.toFixed(0)}
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl px-3 py-3">
                  <div className="text-xs text-slate-400">Fortnightly</div>
                  <div className="text-base font-semibold">
                    ${result.fortnightly.toFixed(0)}
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl px-3 py-3">
                  <div className="text-xs text-slate-400">Weekly</div>
                  <div className="text-base font-semibold">
                    ${result.weekly.toFixed(0)}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-white/5 rounded-xl px-3 py-3">
                  <div className="text-xs text-slate-400">
                    Total paid over life of loan
                  </div>
                  <div className="text-base font-semibold">
                    ${result.total.toFixed(0)}
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl px-3 py-3">
                  <div className="text-xs text-slate-400">
                    Total interest paid
                  </div>
                  <div className="text-base font-semibold">
                    ${result.interest.toFixed(0)}
                  </div>
                </div>
              </div>

              <p className="text-[11px] text-slate-400">
                Actual repayments will depend on your lender, product, repayment
                frequency, fees and other factors. Speak with us for a tailored
                comparison.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
