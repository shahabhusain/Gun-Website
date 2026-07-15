import React from 'react'
import PageHero from '../components/PageHero'
import ProductListing from '../components/ProductListing'
import { CATEGORIES, getProductsByCategory } from '../data/catalog'

const Ammunition = () => {
  const cat = CATEGORIES.ammunition
  const products = getProductsByCategory('ammunition')

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

export default Ammunition
