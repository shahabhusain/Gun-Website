import React from 'react'
import { useParams, Navigate } from 'react-router-dom'
import PageHero from '../components/PageHero'
import ProductListing from '../components/ProductListing'
import { CATEGORIES, getProductsByCategory } from '../data/catalog'

const CategoryPage = () => {
  const { category } = useParams()
  const cat = CATEGORIES[category]

  if (!cat) return <Navigate to="/shop" replace />

  const products = getProductsByCategory(category)

  return (
    <>
      <PageHero
        eyebrow={cat.parent ? 'Firearms' : 'Products'}
        title={cat.title}
        description={cat.description}
        image={cat.heroImage}
      />
      <ProductListing products={products} />
    </>
  )
}

export default CategoryPage
