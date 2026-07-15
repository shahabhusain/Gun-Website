import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { HERO_SLIDES } from '../data/catalog'

const Hero = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_SLIDES.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const slide = HERO_SLIDES[current]

  return (
    <section className="relative w-full h-[55vh] sm:h-[65vh] lg:h-[85vh] min-h-[400px] overflow-hidden bg-black">
      {HERO_SLIDES.map((s, i) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
        </div>
      ))}

      <div className="absolute inset-0 z-20 flex items-center">
        <div className="max-w-[1920px] mx-auto w-full px-6 lg:px-14">
          <div className="max-w-2xl uppercase">
            <p className="text-sm sm:text-lg text-white/90 mb-2 tracking-wide">{slide.eyebrow}</p>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl text-white font-black leading-none mb-4">
              {slide.title}
            </h1>
            <p className="text-sm sm:text-base text-white/80 normal-case mb-8 max-w-md">{slide.subtitle}</p>
            <div className="flex flex-wrap gap-3 normal-case">
              <Link
                to={slide.ctaPrimaryLink}
                className="bg-sig-yellow hover:bg-sig-yellow-hover text-black uppercase text-xs sm:text-sm font-bold py-3 sm:py-4 px-5 sm:px-6 transition-colors"
              >
                {slide.ctaPrimary}
              </Link>
              <Link
                to={slide.ctaSecondaryLink}
                className="border-2 border-white hover:bg-white hover:text-black text-white uppercase text-xs sm:text-sm font-bold py-3 sm:py-4 px-5 sm:px-6 transition-colors"
              >
                {slide.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => setCurrent((c) => (c - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/50 hover:bg-black/70 text-white p-2 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={() => setCurrent((c) => (c + 1) % HERO_SLIDES.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/50 hover:bg-black/70 text-white p-2 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              i === current ? 'bg-sig-yellow' : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero
