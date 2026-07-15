import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { getFeaturedProducts } from '../data/catalog'
import ProductCard from './ProductCard'

const FeaturedProducts = () => {
  const products = getFeaturedProducts()
  const scrollRef = React.useRef(null)

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 320, behavior: 'smooth' })
    }
  }

  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-14">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-black tracking-wide uppercase">
            Featured Products
          </h2>
          <div className="flex items-center gap-4">
            <Link to="/shop" className="text-sm font-bold text-gray-600 hover:text-black hidden sm:block">
              View All →
            </Link>
            <div className="flex gap-2">
              <button
                onClick={() => scroll(-1)}
                className="border border-gray-300 hover:border-black p-2 transition-colors"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll(1)}
                className="border border-gray-300 hover:border-black p-2 transition-colors"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div
          ref={scrollRef}
          className=" grid grid-cols-4 gap-4 lg:gap-6 overflow-x-auto pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map((product) => (
            <div key={product.id} className="min-w-[260px] sm:min-w-[280px] flex-shrink-0">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts
