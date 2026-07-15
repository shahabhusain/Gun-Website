import React, { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { ChevronLeft, ShoppingCart, MapPin } from 'lucide-react'
import { getProductBySlug, getProductsByCategory } from '../data/catalog'
import ProductCard from '../components/ProductCard'

const ProductDetail = () => {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const [activeImage, setActiveImage] = useState(0)

  if (!product) return <Navigate to="/shop" replace />

  const related = getProductsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 4)

  const images = product.images || [product.image]

  return (
    <div className="bg-white">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-14 py-6">
        <Link to={`/${product.category === 'pistols' || product.category === 'rifles' || product.category === 'shotguns' || product.category === 'airguns' ? `firearms/${product.category}` : product.category}`} className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-black mb-6">
          <ChevronLeft className="w-4 h-4" />
          Back to category
        </Link>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Images */}
          <div>
            <div className="aspect-square bg-gray-50 border border-gray-200 overflow-hidden mb-4">
              <img
                src={images[activeImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {images.length > 1 && (
              <div className="flex gap-2">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`w-20 h-20 border-2 overflow-hidden ${i === activeImage ? 'border-sig-yellow' : 'border-gray-200'}`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div>
            {product.isNew && (
              <span className="inline-block bg-sig-yellow text-black text-xs font-black px-2 py-0.5 uppercase mb-3">
                New
              </span>
            )}
            <h1 className="text-2xl sm:text-3xl font-black uppercase leading-tight mb-4">
              {product.name}
            </h1>
            <p className="text-3xl font-black mb-6">${product.price.toFixed(2)}</p>

            {product.restricted && (
              <div className="bg-red-50 border border-red-200 text-red-800 text-sm px-4 py-3 mb-6 flex items-center gap-2">
                <MapPin className="w-4 h-4 shrink-0" />
                Restricted in some areas — Set My Location to check availability.
              </div>
            )}

            <p className="text-gray-600 text-sm leading-relaxed mb-8">{product.description}</p>

            {/* Specs */}
            <div className="border border-gray-200 mb-8">
              {[
                ['Caliber', product.caliber],
                ['Capacity', product.capacity],
                ['Barrel Length', product.barrel],
              ].filter(([, v]) => v && v !== '—').map(([label, value]) => (
                <div key={label} className="flex border-b border-gray-200 last:border-0">
                  <span className="w-40 bg-gray-50 text-xs font-bold uppercase px-4 py-3 text-gray-500 shrink-0">
                    {label}
                  </span>
                  <span className="text-sm px-4 py-3">{value}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button className="flex-1 bg-sig-yellow hover:bg-sig-yellow-hover text-black font-bold py-4 px-6 uppercase text-sm tracking-wide flex items-center justify-center gap-2 transition-colors">
                <ShoppingCart className="w-4 h-4" />
                Add to Cart
              </button>
              <Link
                to="/dealer-locator"
                className="flex-1 border-2 border-black hover:bg-black hover:text-white text-black font-bold py-4 px-6 uppercase text-sm tracking-wide text-center transition-colors"
              >
                Find a Dealer
              </Link>
            </div>
            <button className="w-full mt-3 border border-gray-300 hover:border-gray-900 text-gray-700 text-xs font-bold py-3 uppercase tracking-wide transition-colors">
              Add to Compare
            </button>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-16 pt-12 border-t border-gray-200">
            <h2 className="text-xl font-black uppercase mb-6">Related Products</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductDetail
