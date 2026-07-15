import React from 'react'
import { Link } from 'react-router-dom'
import { FOOTER_LINKS } from '../data/navigation'

const SocialIcon = ({ children, label }) => (
  <a href="#" className="text-gray-400 hover:text-sig-yellow transition-colors" aria-label={label}>
    {children}
  </a>
)

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="border-b border-gray-800">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-14 py-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-lg font-black uppercase tracking-wide mb-2">Stay Connected</h3>
              <p className="text-gray-400 text-sm">
                Sign up for the latest news, product launches, and exclusive offers from SIG SAUER.
              </p>
            </div>
            <form className="flex flex-col sm:flex-row gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white text-gray-900 text-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sig-yellow"
              />
              <button
                type="submit"
                className="bg-sig-yellow hover:bg-sig-yellow-hover text-black text-sm font-bold px-6 py-3 uppercase tracking-wide transition-colors whitespace-nowrap"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="max-w-[1920px] mx-auto px-6 lg:px-14 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {Object.values(FOOTER_LINKS).map((section) => (
            <div key={section.title}>
              <h4 className="text-sig-yellow text-xs font-black uppercase tracking-widest mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-gray-400 text-sm hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-xl italic font-black">
              SIG<span className="not-italic">SAUER</span>
              <sup className="text-[8px] align-super">®</sup>
            </Link>
            <div className="flex gap-3">
              <SocialIcon label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </SocialIcon>
              <SocialIcon label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </SocialIcon>
              <SocialIcon label="YouTube">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </SocialIcon>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500">
            <Link to="/about" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/about" className="hover:text-white transition-colors">Terms of Use</Link>
            <Link to="/about" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 text-xs leading-relaxed max-w-4xl mx-auto">
            © {new Date().getFullYear()} SIG SAUER, Inc. All rights reserved. Firearms sold only through authorized dealers.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
