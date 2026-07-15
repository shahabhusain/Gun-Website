import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from './ProductCard'

const SORT_OPTIONS = [
  { value: 'default', label: 'Default' },
  { value: 'name-asc', label: 'Name A–Z' },
  { value: 'name-desc', label: 'Name Z–A' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
]

const ProductListing = ({ products, title, showFilters = true }) => {
  const [sort, setSort] = useState('default')
  const [showCount, setShowCount] = useState(12)

  const sorted = useMemo(() => {
    const list = [...products]
    switch (sort) {
      case 'name-asc': return list.sort((a, b) => a.name.localeCompare(b.name))
      case 'name-desc': return list.sort((a, b) => b.name.localeCompare(a.name))
      case 'price-asc': return list.sort((a, b) => a.price - b.price)
      case 'price-desc': return list.sort((a, b) => b.price - a.price)
      default: return list
    }
  }, [products, sort])

  const visible = sorted.slice(0, showCount)

  return (
    <div className="max-w-[1920px] mx-auto px-6 lg:px-14 py-10 lg:py-14">
      {title && (
        <h2 className="text-xl font-black uppercase tracking-wide mb-6">{title}</h2>
      )}

      {showFilters && (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-gray-200">
          <p className="text-sm text-gray-600">
            Products <span className="font-bold text-black">1–{visible.length}</span> of{' '}
            <span className="font-bold text-black">{products.length}</span>
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <label className="text-xs font-bold uppercase text-gray-500">Sort By</label>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border border-gray-300 text-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sig-yellow bg-white"
            >
              {SORT_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>
        </div>
      )}

      {visible.length === 0 ? (
        <div className="text-center py-20 text-gray-500">
          <p className="text-lg font-bold mb-2">No products found</p>
          <Link to="/shop" className="text-sig-yellow hover:underline text-sm font-bold">Browse all products</Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {visible.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {showCount < sorted.length && (
        <div className="text-center mt-10">
          <button
            onClick={() => setShowCount((c) => c + 12)}
            className="border-2 border-black hover:bg-black hover:text-white text-black text-sm font-bold px-8 py-3 uppercase tracking-wide transition-colors"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  )
}

export default ProductListing
