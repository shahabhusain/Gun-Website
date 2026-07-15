import React from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { FIREARMS_SUBCATEGORIES, ALL_PRODUCTS } from '../data/catalog'
import ProductListing from '../components/ProductListing'

const Firearms = () => {
  const firearmProducts = ALL_PRODUCTS.filter((p) =>
    ['pistols', 'rifles', 'shotguns', 'airguns'].includes(p.category)
  )

  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Firearms"
        description="Trusted by military, police, and civilians for decades — SIG SAUER pistols, rifles, shotguns, and airguns deliver unquestioned accuracy and unflinching reliability."
        image="https://images.unsplash.com/photo-1595590423163-82a159597781?w=1920&q=80"
      />

      <div className="max-w-[1920px] mx-auto px-6 lg:px-14 py-12">
        <h2 className="text-xl font-black uppercase mb-6">Browse by Category</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FIREARMS_SUBCATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              to={`/firearms/${cat.slug}`}
              className="group relative overflow-hidden aspect-[4/3] bg-black"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-white font-black uppercase text-lg">{cat.title}</h3>
                <p className="text-sig-yellow text-xs font-bold mt-1">{cat.count} Products →</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <ProductListing products={firearmProducts} title="All Firearms" />
    </>
  )
}

export default Firearms
