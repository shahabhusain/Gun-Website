import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
  return (
    <div className="group flex flex-col bg-white border border-gray-200 hover:border-gray-400 transition-colors">
      <Link to={`/product/${product.slug}`} className="relative aspect-square bg-gray-50 overflow-hidden block">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.isNew && (
          <span className="absolute top-2 left-2 bg-sig-yellow text-black text-[10px] font-black px-2 py-0.5 uppercase">
            New
          </span>
        )}
        {product.restricted && (
          <div className="absolute bottom-0 left-0 right-0 bg-red-700 text-white text-[10px] font-bold text-center py-1.5 px-2">
            Restricted in some areas
          </div>
        )}
      </Link>
      <div className="p-3 sm:p-4 flex flex-col flex-1">
        {product.caliber && product.caliber !== '—' && (
          <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wide mb-1">{product.caliber}</p>
        )}
        <Link to={`/product/${product.slug}`}>
          <h3 className="text-xs sm:text-sm font-bold text-gray-900 leading-snug mb-2 line-clamp-2 hover:text-sig-yellow transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-base sm:text-lg font-bold text-gray-900 mb-3">
          ${product.price.toFixed(2)}
        </p>
        <div className="mt-auto flex flex-col gap-2">
          <Link
            to={`/product/${product.slug}`}
            className="w-full bg-sig-yellow hover:bg-sig-yellow-hover text-black text-[10px] sm:text-xs font-bold py-2.5 px-3 transition-colors uppercase tracking-wide text-center"
          >
            View Details
          </Link>
          <button className="w-full border border-gray-300 hover:border-gray-900 text-gray-700 hover:text-black text-[10px] sm:text-xs font-bold py-2.5 px-3 transition-colors uppercase tracking-wide">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
