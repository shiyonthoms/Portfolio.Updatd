export default function Footer() {
  return (
    <footer className="w-full border-t border-[#E2DDD5] bg-white/55 backdrop-blur-2xl py-8 px-4 md:px-8 mt-12 text-[#52504C] text-xs font-mono">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="font-bold text-[#111111]">Shiyon Thomas</span>
          <span className="text-[#52504C]">•</span>
          <span>Adobe Campaign Systems Architect</span>
          <span className="text-[#52504C]">•</span>
          <span className="text-[#111111] font-semibold">
            Certified Through 2026
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a className="hover:text-[#111111] transition-colors" href="tel:+918075195107">
            +91 8075195107
          </a>
          <span className="text-[#E2DDD5]">/</span>
          <a
            className="hover:text-[#111111] transition-colors"
            href="mailto:shiyonthoms@gmail.com"
          >
            shiyonthoms@gmail.com
          </a>
          <span className="text-[#E2DDD5]">/</span>
          <a
            className="hover:text-[#111111] transition-colors"
            href="https://linkedin.com/in/shiyonthomas"
            rel="noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
        <div>
          <span>© 2026 Shiyon Thomas</span>
        </div>
      </div>
    </footer>
  );
}
