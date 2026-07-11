const Footer = () => {
  return (
    <footer className="bg-[#111113] border-t border-white/5 py-14">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">

        {/* Logo */}
        <h2 className="text-5xl font-black uppercase tracking-tight">
          <span className="text-gray-400">FAN</span>
          <span className="text-red-500">FEST</span>
          <span className="text-gray-400 ml-2">2026</span>
        </h2>

        {/* Subtitle */}
        <p className="mt-6 text-gray-400 text-xl">
          August 14–16, 2026
          <span className="mx-3 text-gray-600">•</span>
          For creators, by creators.
        </p>

        {/* Copyright */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-lg text-gray-500">
          <span>© 2026 FanFest. All rights reserved.</span>

          <span className="text-gray-700">|</span>

          <a
            href="#"
            className="text-red-500 hover:text-red-400 transition"
          >
            Privacy Policy
          </a>

          <span className="text-gray-700">|</span>

          <a
            href="#contact"
            className="text-red-500 hover:text-red-400 transition"
          >
            Contact Us
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;