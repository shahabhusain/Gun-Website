import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Search, MapPin, Megaphone, ShoppingCart, User, Menu, X } from 'lucide-react'
import { NAV_ITEMS } from '../data/navigation'

const Header = () => {
  const [openMenu, setOpenMenu] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const closeTimer = useRef(null)

  const handleEnter = (key) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpenMenu(key)
  }

  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 150)
  }

  const activeItem = NAV_ITEMS.find((item) => item.key === openMenu)

  return (
    <header className="w-full bg-black z-[10000] font-sans select-none fixed top-0 left-0 right-0">
      <div className="flex items-center justify-between px-4 lg:px-6 h-16 max-w-[1920px] mx-auto">
        <Link to="/" className="flex items-center shrink-0 mr-4 lg:mr-8">
          <span className="text-white text-xl lg:text-2xl tracking-tight italic font-black leading-none">
            SIG<span className="not-italic">SAUER</span>
            <sup className="text-[10px] align-super">®</sup>
          </span>
        </Link>

        <nav className="hidden xl:flex items-center justify-center gap-5 2xl:gap-7 flex-1">
          {NAV_ITEMS.map((item) => (
            <div
              key={item.key}
              onMouseEnter={() => item.mega && handleEnter(item.key)}
              onMouseLeave={handleLeave}
              className="relative h-16 flex items-center"
            >
              <Link
                to={item.href || '#'}
                className={`text-[13px] font-bold tracking-wide whitespace-nowrap transition-colors ${
                  openMenu === item.key ? 'text-sig-yellow' : 'text-white hover:text-sig-yellow'
                }`}
              >
                {item.label}
              </Link>
            </div>
          ))}

          <div className="flex items-center gap-3 ml-1">
            <div className="w-px h-5 bg-gray-600" />
            <Link
              to="/shop"
              className="bg-sig-yellow text-black text-[13px] font-bold tracking-wide px-4 py-2 hover:bg-sig-yellow-hover transition-colors"
            >
              SHOP
            </Link>
          </div>
        </nav>

        <div className="flex items-center gap-3 lg:gap-4 ml-auto xl:ml-6 shrink-0">
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search Site"
              className="bg-white text-sm text-gray-800 placeholder-gray-400 rounded-sm pl-3 pr-9 py-1.5 w-36 lg:w-44 focus:outline-none focus:ring-2 focus:ring-sig-yellow"
            />
            <Search className="w-4 h-4 text-gray-500 absolute right-2.5 top-1/2 -translate-y-1/2" />
          </div>
          <Link to="/dealer-locator" className="text-white hover:text-sig-yellow transition-colors" aria-label="Dealer Locator">
            <MapPin className="w-5 h-5" />
          </Link>
          <Link to="/shop" className="text-white hover:text-sig-yellow transition-colors hidden sm:block" aria-label="Promotions">
            <Megaphone className="w-5 h-5" />
          </Link>
          <Link to="/cart" className="text-white hover:text-sig-yellow transition-colors" aria-label="Cart">
            <ShoppingCart className="w-5 h-5" />
          </Link>
          <Link to="/about" className="text-white hover:text-sig-yellow transition-colors hidden sm:block" aria-label="Sign In">
            <User className="w-5 h-5" />
          </Link>
          <button
            className="text-white hover:text-sig-yellow transition-colors xl:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div className="relative h-2 w-full bg-black">
        <div
          className="absolute left-0 top-0 h-full bg-sig-yellow"
          style={{ width: '15%', clipPath: 'polygon(0 0, 100% 0, calc(100% - 16px) 100%, 0 100%)' }}
        />
      </div>

      {activeItem?.mega && (
        <div
          onMouseEnter={() => handleEnter(activeItem.key)}
          onMouseLeave={handleLeave}
          className="w-full bg-sig-dark border-t border-gray-800 relative hidden xl:block"
        >
          <div className="max-w-[1920px] mx-auto px-10 py-8 grid grid-cols-3 gap-10">
            {activeItem.mega.columns.map((col) => (
              <div key={col.heading}>
                <h3 className="text-white text-[13px] font-bold tracking-wide mb-2">{col.heading}</h3>
                <div className="w-9 h-[3px] bg-sig-yellow mb-3" />
                {col.links.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="block text-gray-300 text-sm hover:text-sig-yellow mt-1.5 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
          <div className="relative h-2 w-full bg-black">
            <div
              className="absolute left-0 top-0 h-full bg-sig-yellow"
              style={{ width: '96%', clipPath: 'polygon(0 0, 100% 0, calc(100% - 16px) 100%, 0 100%)' }}
            />
          </div>
        </div>
      )}

      {mobileOpen && (
        <div className="xl:hidden bg-sig-dark border-t border-gray-800 max-h-[70vh] overflow-y-auto">
          {NAV_ITEMS.map((item) => (
            <div key={item.key} className="border-b border-gray-800">
              <Link
                to={item.href || '#'}
                onClick={() => setMobileOpen(false)}
                className="block px-6 py-4 text-white text-sm font-bold tracking-wide hover:text-sig-yellow"
              >
                {item.label}
              </Link>
              {item.mega?.columns.map((col) =>
                col.links.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-10 py-2 text-gray-400 text-sm hover:text-sig-yellow"
                  >
                    {link.label}
                  </Link>
                ))
              )}
            </div>
          ))}
          <Link
            to="/shop"
            onClick={() => setMobileOpen(false)}
            className="block mx-6 my-4 bg-sig-yellow text-black text-center text-sm font-bold py-3"
          >
            SHOP
          </Link>
        </div>
      )}
    </header>
  )
}

export default Header
