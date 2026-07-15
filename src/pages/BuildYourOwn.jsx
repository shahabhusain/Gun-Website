import React from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { getProductsByCategory } from '../data/catalog'
import ProductCard from '../components/ProductCard'

const BUILD_OPTIONS = [
  {
    title: 'Build a P365',
    description: 'Choose your grip module, slide, barrel, and optic.',
    image: 'https://images.unsplash.com/photo-1595590423163-82a159597781?w=600&q=80',
    link: '/firearms/pistols',
  },
  {
    title: 'Build a P320',
    description: 'Modular fire control unit — swap grips, slides, and calibers.',
    image: 'https://images.unsplash.com/photo-1578662996442-0486e3dbf3ad?w=600&q=80',
    link: '/firearms/pistols',
  },
  {
    title: 'Customize Your Rifle',
    description: 'Select handguard, stock, trigger, and optic packages.',
    image: 'https://images.unsplash.com/photo-1599609256326-f0b84b8f2f36?w=600&q=80',
    link: '/firearms/rifles',
  },
]

const BuildYourOwn = () => {
  const grips = getProductsByCategory('gear')

  return (
    <>
      <PageHero
        eyebrow="Configurator"
        title="Build Your Own"
        description="Customize your SIG SAUER firearm with modular grip modules, slides, barrels, and optics."
        image="https://images.unsplash.com/photo-1578662996442-0486e3dbf3ad?w=1920&q=80"
      />

      <div className="max-w-[1920px] mx-auto px-6 lg:px-14 py-12">
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {BUILD_OPTIONS.map((opt) => (
            <Link
              key={opt.title}
              to={opt.link}
              className="group border border-gray-200 hover:border-sig-yellow overflow-hidden transition-colors"
            >
              <div className="aspect-video overflow-hidden bg-gray-100">
                <img
                  src={opt.image}
                  alt={opt.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="font-black uppercase text-lg mb-2 group-hover:text-sig-yellow transition-colors">
                  {opt.title}
                </h3>
                <p className="text-gray-500 text-sm">{opt.description}</p>
                <span className="inline-block mt-4 text-xs font-bold uppercase text-sig-yellow">
                  Start Building →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <h2 className="text-xl font-black uppercase mb-6">Parts & Accessories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {grips.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </>
  )
}

export default BuildYourOwn
