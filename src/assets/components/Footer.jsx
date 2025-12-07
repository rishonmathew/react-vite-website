export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-[#111218]/90">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row gap-3 sm:items-center justify-between text-xs sm:text-sm text-slate-400">
        <div>© {year} Asthi Mortgage Group. All rights reserved.</div>
        <div className="flex flex-wrap gap-4">
          <button className="hover:text-slate-200">Privacy</button>
          <button className="hover:text-slate-200">Terms</button>
        </div>
      </div>
    </footer>
  );
}
