import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#091126] border-t border-gray-800 text-white py-16 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">

        {/* Navigation Links - Centered & Spaced */}
        <nav className="flex flex-wrap justify-center gap-8 text-sm font-medium mb-8">
          {["About", "Work", "Services", "Contact", "Privacy", "Terms"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-white/80 hover:text-emerald-400 transition-colors duration-300"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Social Media Icons - On a Separate Line */}
        <div className="flex justify-center space-x-6 mb-8">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition duration-300">
            <FaFacebook size={28} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-300">
            <FaTwitter size={28} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition duration-300">
            <FaInstagram size={28} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition duration-300">
            <FaLinkedin size={28} />
          </a>
        </div>

        {/* Divider Line with Shadow Effect */}
        <div className="relative w-full flex justify-center mb-6">
          <div className="w-3/4 h-[1px] bg-gray-700 opacity-50 shadow-[0px_0px_10px_rgba(0,255,200,0.3)]"></div>
        </div>

        {/* Copyright & Credits */}
        <p className="text-sm text-white/80">
          Designed & Developed with ❤️ | © {new Date().getFullYear()}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
