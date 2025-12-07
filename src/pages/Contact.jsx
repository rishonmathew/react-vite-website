import { useState } from "react";
import supabase from "../assets/lib/supabaseClient";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    // INSERT INTO SUPABASE CONTACTS TABLE
    const { error } = await supabase.from("contacts").insert([
      { name, email, message }
    ]);

    if (error) {
      console.error("SUPABASE CONTACT ERROR:", error);
      alert("There was an issue submitting your message.");
    } else {
      alert("Your message has been sent!");
      setName("");
      setEmail("");
      setMessage("");
    }
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-10 sm:py-14 lg:py-16">
      <div className="grid gap-8 lg:grid-cols-2">

        {/* Contact info (unchanged) */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold mb-3">Contact us</h1>
          <p className="text-sm sm:text-base text-slate-300 mb-6 max-w-xl">
            Have a question or want to talk through your options? Reach out and
            we’ll be in touch as soon as possible.
          </p>

          <div className="space-y-4 text-sm text-slate-300">
            <div>
              <div className="text-xs uppercase tracking-wide text-slate-400">Email</div>
              <div>hello@asthimortgage.com.au</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wide text-slate-400">Phone</div>
              <div>+61 4XX XXX XXX</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wide text-slate-400">Hours</div>
              <div>Mon – Fri, 9:00am – 5:00pm (AEST)</div>
            </div>
          </div>
        </div>

        {/* FORM */}
        <form className="card space-y-4 text-sm sm:text-base" onSubmit={handleSubmit}>

          <div className="space-y-1">
            <label className="block text-xs uppercase tracking-wide text-slate-400">
              Name
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg bg-[#111218] border border-white/10 px-3 py-2 text-sm text-slate-100"
            />
          </div>

          <div className="space-y-1">
            <label className="block text-xs uppercase tracking-wide text-slate-400">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg bg-[#111218] border border-white/10 px-3 py-2 text-sm text-slate-100"
            />
          </div>

          <div className="space-y-1">
            <label className="block text-xs uppercase tracking-wide text-slate-400">
              Message
            </label>
            <textarea
              rows="4"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full rounded-lg bg-[#111218] border border-white/10 px-3 py-2 text-sm text-slate-100"
              placeholder="How can we help?"
            />
          </div>

          <button type="submit" className="btn-primary w-full sm:w-auto">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
