import { useState } from "react";
import supabase from "../assets/lib/supabaseClient";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [err, setErr] = useState("");

  async function login(e) {
    e.preventDefault();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password: pw,
    });

    if (error) setErr(error.message);
    else window.location.href = "/admin";
  }

  return (
    <section className="max-w-sm mx-auto px-4 py-20 text-white">
      <h1 className="text-2xl font-semibold mb-6 text-center">Admin Login</h1>
      <form onSubmit={login} className="card space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full bg-[#111218] border border-white/10 px-3 py-2 rounded"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full bg-[#111218] border border-white/10 px-3 py-2 rounded"
          onChange={(e) => setPw(e.target.value)}
        />
        {err && <p className="text-red-400 text-sm">{err}</p>}
        <button className="btn-primary w-full">Login</button>
      </form>
    </section>
  );
}
