import { useState } from "react";
import supabase from "../assets/lib/supabaseClient";

export default function Booking() {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [preferred_day, setPreferredDay] = useState("");
  const [preferred_time, setPreferredTime] = useState("");
  const [topic, setTopic] = useState("");

  // MUST be boolean
  const [notify_sms, setNotifySMS] = useState(false);
  const [marketing_opt_in, setMarketingOptIn] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    const { error } = await supabase.from("bookings").insert([
      {
        first_name,
        last_name,
        email,
        phone,
        preferred_day,
        preferred_time,
        topic,
        notify_sms,
        marketing_opt_in
      }
    ]);

    if (error) {
      console.error(error);
      alert("There was an issue submitting your booking.");
    } else {
      alert("Your enquiry has been submitted!");

      // Clear form
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setPreferredDay("");
      setPreferredTime("");
      setTopic("");
      setNotifySMS(false);
      setMarketingOptIn(false);
    }
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-10 sm:py-14 lg:py-16">
      <div className="grid gap-8 lg:grid-cols-[1.2fr,0.9fr]">

        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold mb-3">
            Book a consultation
          </h1>

          <form className="card space-y-4 text-sm sm:text-base" onSubmit={handleSubmit}>
            
            {/* First + last name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label>First name</label>
                <input
                  value={first_name}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  type="text"
                  className="w-full rounded-lg bg-[#111218] border border-white/10 px-3 py-2 text-sm text-slate-100"
                />
              </div>

              <div className="space-y-1">
                <label>Last name</label>
                <input
                  value={last_name}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  type="text"
                  className="w-full rounded-lg bg-[#111218] border border-white/10 px-3 py-2 text-sm text-slate-100"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-1">
              <label>Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                type="email"
                className="w-full rounded-lg bg-[#111218] border border-white/10 px-3 py-2 text-sm text-slate-100"
              />
            </div>

            {/* Phone */}
            <div className="space-y-1">
              <label>Phone number</label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                type="tel"
                className="w-full rounded-lg bg-[#111218] border border-white/10 px-3 py-2 text-sm text-slate-100"
              />
            </div>

            {/* Day + time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label>Preferred day</label>
                <input
                  value={preferred_day}
                  onChange={(e) => setPreferredDay(e.target.value)}
                  required
                  type="date"
                  className="w-full rounded-lg bg-[#111218] border border-white/10 px-3 py-2 text-sm text-slate-100"
                />
              </div>

              <div className="space-y-1">
                <label>Preferred time</label>
                <input
                  value={preferred_time}
                  onChange={(e) => setPreferredTime(e.target.value)}
                  required
                  type="time"
                  className="w-full rounded-lg bg-[#111218] border border-white/10 px-3 py-2 text-sm text-slate-100"
                />
              </div>
            </div>

            {/* Topic */}
            <div className="space-y-1">
              <label>What would you like help with?</label>
              <textarea
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                required
                rows="4"
                className="w-full rounded-lg bg-[#111218] border border-white/10 px-3 py-2 text-sm text-slate-100"
              />
            </div>

            {/* Checkboxes */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-slate-300">
                <input
                  type="checkbox"
                  checked={notify_sms}
                  onChange={(e) => setNotifySMS(e.target.checked)}
                />
                Receive SMS notifications
              </label>

              <label className="flex items-center gap-2 text-slate-300">
                <input
                  type="checkbox"
                  checked={marketing_opt_in}
                  onChange={(e) => setMarketingOptIn(e.target.checked)}
                />
                I agree to receive promotional messages
              </label>
            </div>

            <button type="submit" className="btn-primary w-full sm:w-auto">
              Submit enquiry
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
