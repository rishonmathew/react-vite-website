import { useEffect, useState } from "react";
import supabase from "../assets/lib/supabaseClient.js";

export default function Admin() {
  const [bookings, setBookings] = useState([]);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    const { data: b } = await supabase
      .from("bookings")
      .select("*")
      .order("created_at", { ascending: false });

    const { data: c } = await supabase
      .from("contacts")
      .select("*")
      .order("created_at", { ascending: false });

    setBookings(b || []);
    setContacts(c || []);
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-10 text-white">
      <h1 className="text-3xl font-semibold mb-10">Admin Dashboard</h1>

      {/* BOOKINGS */}
      <h2 className="text-xl font-semibold mb-3">Bookings</h2>
      <div className="overflow-x-auto mb-14">
        <table className="min-w-full text-sm border border-white/10">
          <thead className="bg-white/5">
            <tr>
              <th className="px-3 py-2 text-left">Name</th>
              <th className="px-3 py-2 text-left">Email</th>
              <th className="px-3 py-2 text-left">Phone</th>
              <th className="px-3 py-2 text-left">Time</th>
              <th className="px-3 py-2 text-left">Topic</th>
              <th className="px-3 py-2 text-left">Created at</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b) => (
              <tr key={b.id} className="border-t border-white/10">
                <td className="px-3 py-2">{b.first_name} {b.last_name}</td>
                <td className="px-3 py-2">{b.email}</td>
                <td className="px-3 py-2">{b.phone}</td>
                <td className="px-3 py-2">{b.preferred_day} {b.preferred_time}</td>
                <td className="px-3 py-2">{b.topic}</td>
                <td className="px-3 py-2">{b.created_at}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* CONTACTS */}
      <h2 className="text-xl font-semibold mb-3">Contact Messages</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm border border-white/10">
          <thead className="bg-white/5">
            <tr>
              <th className="px-3 py-2 text-left">Name</th>
              <th className="px-3 py-2 text-left">Email</th>
              <th className="px-3 py-2 text-left">Message</th>
              <th className="px-3 py-2 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((c) => (
              <tr key={c.id} className="border-t border-white/10">
                <td className="px-3 py-2">{c.name}</td>
                <td className="px-3 py-2">{c.email}</td>
                <td className="px-3 py-2">{c.message}</td>
                <td className="px-3 py-2">{c.created_at}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
