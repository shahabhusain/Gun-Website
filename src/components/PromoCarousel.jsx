import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { PROMO_SLIDES } from '../data/catalog'

const PromoCarousel = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % PROMO_SLIDES.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const slide = PROMO_SLIDES[current]

  return (
    <section className="bg-gray-100 py-12 lg:py-16">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-14">
        <div className="relative overflow-hidden bg-black">
          <div className="grid lg:grid-cols-2 min-h-[300px] lg:min-h-[400px]">
            <div className="relative overflow-hidden min-h-[250px] lg:min-h-0">
              <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col justify-center p-8 lg:p-12 bg-sig-dark">
              <span className="text-sig-yellow text-xs font-bold tracking-widest uppercase mb-3">
                {current + 1} / {PROMO_SLIDES.length}
              </span>
              <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-black uppercase mb-4 leading-tight">
                {slide.title}
              </h2>
              <p className="text-gray-300 text-sm sm:text-base mb-6 max-w-md">{slide.description}</p>
              <Link
                to={slide.link}
                className="self-start bg-sig-yellow hover:bg-sig-yellow-hover text-black text-sm font-bold py-3 px-6 uppercase tracking-wide transition-colors"
              >
                {slide.cta}
              </Link>
            </div>
          </div>

          <button
            onClick={() => setCurrent((c) => (c - 1 + PROMO_SLIDES.length) % PROMO_SLIDES.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => setCurrent((c) => (c + 1) % PROMO_SLIDES.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default PromoCarousel
