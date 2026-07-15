import React, { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import PageHero from '../components/PageHero'
import ProductListing from '../components/ProductListing'
import { ALL_PRODUCTS, CATEGORIES } from '../data/catalog'

const Shop = () => {
  const [params] = useSearchParams()
  const catFilter = params.get('cat')

  const products = useMemo(() => {
    if (!catFilter) return ALL_PRODUCTS
    return ALL_PRODUCTS.filter((p) => p.category === catFilter)
  }, [catFilter])

  const catTitle = catFilter && CATEGORIES[catFilter] ? CATEGORIES[catFilter].title : 'All Products'

  return (
    <>
      <PageHero
        eyebrow="Shop"
        title={catTitle}
        description="Browse our complete catalog of firearms, ammunition, optics, suppressors, and gear."
        image="https://images.unsplash.com/photo-1595590423163-82a159597781?w=1920&q=80"
      />
      <ProductListing products={products} showFilters />
    </>
  )
}

export default Shop
