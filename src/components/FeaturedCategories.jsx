import React from 'react'
import { Link } from 'react-router-dom'

const accent = '#D97E4A'

const IconPistols = () => (
  <svg viewBox="0 0 120 60" fill="none" stroke="white" strokeWidth="1.2" className="w-full max-w-[110px] h-auto mx-auto">
    <path d="M8 38 L8 32 L14 28 L14 22 L28 22 L32 18 L52 18 L56 22 L72 22 L76 26 L88 26 L92 30 L92 38 L88 42 L72 42 L68 38 L52 38 L48 42 L32 42 L28 38 Z" />
    <path d="M92 30 L108 30 L112 34 L112 38 L108 42 L92 42" />
    <path d="M14 28 L14 24 L20 24" />
    <circle cx="82" cy="34" r="2" />
    <path d="M38 22 L38 18 L44 18" />
  </svg>
)

const IconRifles = () => (
  <svg viewBox="0 0 120 60" fill="none" stroke="white" strokeWidth="1.2" className="w-full max-w-[120px] h-auto mx-auto">
    <path d="M4 32 L4 28 L10 24 L10 20 L18 20 L22 16 L70 16 L74 20 L82 20 L86 24 L86 28 L82 32 L74 32 L70 28 L50 28 L46 32 L38 32 L34 28 L22 28 L18 32 Z" />
    <path d="M86 24 L108 24 L112 28 L112 32 L108 36 L86 36 L86 32" />
    <path d="M50 16 L50 12 L58 12 L58 16" />
    <path d="M62 16 L62 10 L68 10 L68 16" />
    <rect x="90" y="26" width="8" height="6" rx="1" />
    <path d="M10 24 L10 20 L16 20" />
  </svg>
)

const IconParts = () => (
  <svg viewBox="0 0 120 60" fill="none" stroke="white" strokeWidth="1.2" className="w-full max-w-[100px] h-auto mx-auto">
    <path d="M20 10 L20 50" strokeDasharray="2 2" />
    <path d="M24 14 L24 46 M28 18 L28 42 M32 22 L32 38" />
    <rect x="50" y="18" width="40" height="8" rx="1" />
    <rect x="50" y="30" width="40" height="8" rx="1" />
    <path d="M58 22 L58 34 L72 34 L72 22" />
    <path d="M78 34 L78 46 L66 46 L66 38" />
    <circle cx="70" cy="42" r="3" />
  </svg>
)

const IconBuildYourOwn = () => (
  <svg viewBox="0 0 120 60" fill="none" stroke="white" strokeWidth="1.2" className="w-full max-w-[110px] h-auto mx-auto">
    <path d="M8 38 L8 32 L14 28 L14 22 L28 22 L32 18 L52 18 L56 22 L72 22 L76 26 L88 26 L92 30 L92 38 L88 42 L72 42 L68 38 L52 38 L48 42 L32 42 L28 38 Z" opacity="0.4" />
    <path d="M48 8 L48 4 L54 4 L54 8" />
    <path d="M44 8 L80 8 L84 12 L84 20 L80 24 L44 24 L40 20 L40 12 Z" transform="translate(0, -6)" />
    <path d="M52 12 L52 20 L72 20 L72 12" transform="translate(0, -6)" />
    <path d="M56 24 L56 32 L68 32 L68 24" />
    <path d="M60 32 L60 38 L64 38 L64 32" strokeDasharray="2 2" />
  </svg>
)

const IconRedDots = () => (
  <svg viewBox="0 0 120 60" fill="none" stroke="white" strokeWidth="1.2" className="w-full max-w-[90px] h-auto mx-auto">
    <path d="M20 28 L20 24 L28 20 L92 20 L100 24 L100 36 L92 40 L28 40 L20 36 Z" />
    <circle cx="60" cy="30" r="10" />
    <circle cx="60" cy="30" r="5" />
    <circle cx="60" cy="30" r="2" fill="white" />
    <path d="M100 28 L108 28 L108 32 L100 32" />
  </svg>
)

const IconRiflescopes = () => (
  <svg viewBox="0 0 120 60" fill="none" stroke="white" strokeWidth="1.2" className="w-full max-w-[120px] h-auto mx-auto">
    <path d="M8 28 L8 24 L16 20 L104 20 L112 24 L112 36 L104 40 L16 40 L8 36 Z" />
    <circle cx="60" cy="30" r="12" />
    <circle cx="60" cy="30" r="7" />
    <circle cx="60" cy="30" r="3" />
    <path d="M48 30 L72 30" />
    <path d="M16 24 L16 20 L24 20" />
    <path d="M104 24 L104 20 L112 20" />
  </svg>
)

const IconAmmo = () => (
  <svg viewBox="0 0 120 60" fill="none" stroke="white" strokeWidth="1.2" className="w-full max-w-[80px] h-auto mx-auto">
    {[0, 1, 2, 3].map((i) => (
      <g key={i} transform={`translate(${20 + i * 22}, 0)`}>
        <path d="M8 8 L8 14 L12 18 L12 48 L4 48 L4 18 L8 14 Z" />
        <path d="M4 18 L12 18" />
        <ellipse cx="8" cy="8" rx="4" ry="3" />
      </g>
    ))}
  </svg>
)

const IconHolsters = () => (
  <svg viewBox="0 0 120 60" fill="none" stroke="white" strokeWidth="1.2" className="w-full max-w-[90px] h-auto mx-auto">
    <path d="M40 8 L40 4 L80 4 L80 8 L84 52 L36 52 Z" />
    <path d="M44 12 L44 48 L76 48 L76 12" />
    <path d="M48 16 L48 44 L72 44 L72 16" />
    <path d="M52 20 L52 24 L68 24 L68 20 L64 16 L56 16 Z" />
    <path d="M56 24 L56 38 L64 38 L64 24" />
    <path d="M36 52 L36 56 L84 56 L84 52" />
  </svg>
)

const IconMagazines = () => (
  <svg viewBox="0 0 120 60" fill="none" stroke="white" strokeWidth="1.2" className="w-full max-w-[70px] h-auto mx-auto">
    <path d="M44 8 L44 52 L56 52 L56 8 Z" />
    <path d="M48 12 L48 48 L52 48 L52 12" />
    <path d="M44 8 L50 4 L56 8" />
    <path d="M46 20 L54 20 M46 26 L54 26 M46 32 L54 32 M46 38 L54 38" />
    <path d="M58 12 L58 50 L66 50 L66 12 Z" opacity="0.6" transform="translate(4, 2)" />
  </svg>
)

const IconAirguns = () => (
  <svg viewBox="0 0 120 60" fill="none" stroke="white" strokeWidth="1.2" className="w-full max-w-[110px] h-auto mx-auto">
    <path d="M8 38 L8 32 L14 28 L14 22 L28 22 L32 18 L52 18 L56 22 L72 22 L76 26 L88 26 L92 30 L92 38 L88 42 L72 42 L68 38 L52 38 L48 42 L32 42 L28 38 Z" />
    <path d="M92 30 L108 30 L112 34 L112 38 L108 42 L92 42" />
    <circle cx="82" cy="34" r="2" />
    <path d="M38 22 L38 14 L44 14 L44 22" />
    <path d="M40 14 L42 10 L44 14" />
  </svg>
)

const IconApparel = () => (
  <svg viewBox="0 0 120 60" fill="none" stroke="white" strokeWidth="1.2" className="w-full max-w-[80px] h-auto mx-auto">
    <path d="M60 8 L68 16 L80 12 L88 20 L88 52 L32 52 L32 20 L40 12 L52 16 Z" />
    <path d="M60 8 L52 16 L52 24 L68 24 L68 16 Z" />
    <rect x="48" y="30" width="24" height="16" rx="1" />
    <path d="M48 30 L72 30" />
  </svg>
)

const IconSlides = () => (
  <svg viewBox="0 0 120 60" fill="none" stroke="white" strokeWidth="1.2" className="w-full max-w-[110px] h-auto mx-auto">
    <path d="M8 38 L8 32 L14 28 L14 22 L28 22 L32 18 L52 18 L56 22 L72 22 L76 26 L88 26 L92 30 L92 38 L88 42 L72 42 L68 38 L52 38 L48 42 L32 42 L28 38 Z" />
    <path d="M92 30 L108 30 L112 34 L112 38 L108 42 L92 42" />
    <path d="M38 22 L38 18 L44 18" />
    <path d="M48 22 L48 18 L56 18 L56 22" strokeDasharray="2 2" />
    <circle cx="82" cy="34" r="2" />
    <path d="M14 28 L14 24 L20 24" />
  </svg>
)

const CATEGORIES = [
  { label: 'PISTOLS', href: '/firearms/pistols', Icon: IconPistols },
  { label: 'RIFLES', href: '/firearms/rifles', Icon: IconRifles },
  { label: 'PARTS', href: '/shop?cat=gear', Icon: IconParts },
  { label: 'BUILD YOUR OWN', href: '/build-your-own', Icon: IconBuildYourOwn },
  { label: 'RED DOTS', href: '/optics', Icon: IconRedDots },
  { label: 'RIFLESCOPES', href: '/optics', Icon: IconRiflescopes },
  { label: 'AMMO', href: '/ammunition', Icon: IconAmmo },
  { label: 'HOLSTERS', href: '/shop?cat=gear', Icon: IconHolsters },
  { label: 'MAGAZINES', href: '/shop?cat=gear', Icon: IconMagazines },
  { label: 'AIRGUNS', href: '/firearms/airguns', Icon: IconAirguns },
  { label: 'APPAREL', href: '/shop', Icon: IconApparel },
  { label: 'SLIDES', href: '/shop?cat=gear', Icon: IconSlides },
]

const CategoryItem = ({ label, href, Icon }) => (
  <Link
    to={href}
    className="group flex flex-col items-center justify-start py-6 px-2 hover:opacity-90 transition-opacity"
  >
    <div className="h-[70px] sm:h-[80px] flex items-center justify-center w-full mb-5">
      <Icon />
    </div>
    <span className="text-white text-[11px] sm:text-xs md:text-[13px] font-bold tracking-[0.12em] uppercase text-center leading-tight">
      {label}
    </span>
    <span
      className="block mt-3 h-[2px] w-8 group-hover:w-12 transition-all duration-300"
      style={{ backgroundColor: accent }}
    />
  </Link>
)

const FeaturedCategories = () => {
  return (
    <section className="bg-black py-10 sm:py-12 lg:py-14">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10">
        <h2 className="text-white text-center text-sm sm:text-base md:text-lg font-bold tracking-[0.2em] uppercase mb-8 sm:mb-10 lg:mb-12">
          Featured Categories
        </h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-x-2 gap-y-2 sm:gap-x-4 sm:gap-y-0">
          {CATEGORIES.map((cat) => (
            <CategoryItem key={cat.label} {...cat} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedCategories
