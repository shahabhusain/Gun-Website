import React from 'react'
import PageHero from '../components/PageHero'
import ProductListing from '../components/ProductListing'
import { CATEGORIES, getProductsByCategory } from '../data/catalog'

const Suppressors = () => {
  const cat = CATEGORIES.suppressors
  const products = getProductsByCategory('suppressors')

  return (
    <>
      <PageHero
        eyebrow="Products"
        title={cat.title}
        description={cat.description}
        image={cat.heroImage}
      />
      <div className="bg-yellow-50 border-b border-yellow-200">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-14 py-4">
          <p className="text-sm text-yellow-900 font-semibold">
            ⚠ Suppressors require NFA paperwork and are restricted in some areas. Must be 21+ to purchase.
          </p>
        </div>
      </div>
      <ProductListing products={products} />
    </>
  )
}

export default Suppressors
