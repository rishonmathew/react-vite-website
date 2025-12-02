import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../lib/supabaseClient";

export default function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const nav = useNavigate();

  useEffect(() => {
    async function check() {
      const { data } = await supabase.auth.getSession();
      if (!data?.session) {
        nav("/login");
      } else {
        setLoading(false);
      }
    }
    check();
  }, []);

  if (loading) return <div className="p-10 text-white">Checking login…</div>;

  return children;
}
