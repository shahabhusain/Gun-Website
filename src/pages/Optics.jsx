import React from 'react'
import PageHero from '../components/PageHero'
import ProductListing from '../components/ProductListing'
import { CATEGORIES, getProductsByCategory } from '../data/catalog'

const Optics = () => {
  const cat = CATEGORIES.optics
  const products = getProductsByCategory('optics')

  return (
    <>
      <PageHero
        eyebrow="Products"
        title={cat.title}
        description={cat.description}
        image={cat.heroImage}
      />
      <ProductListing products={products} />
    </>
  )
}

export default Optics
