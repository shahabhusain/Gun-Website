import React from 'react'
import { Link } from 'react-router-dom'

const PageHero = ({ eyebrow, title, description, image, children }) => (
  <div className={`relative text-white overflow-hidden ${image ? 'bg-sig-dark' : 'bg-sig-dark'}`}>
    {image && (
      <>
        <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
      </>
    )}
    <div className="relative max-w-[1920px] mx-auto px-6 lg:px-14 py-14 lg:py-20">
      {eyebrow && (
        <p className="text-sig-yellow text-xs font-bold tracking-widest uppercase mb-3">{eyebrow}</p>
      )}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase leading-tight">{title}</h1>
      {description && (
        <p className="text-gray-300 mt-4 max-w-2xl text-sm sm:text-base leading-relaxed">{description}</p>
      )}
      {children}
    </div>
  </div>
)

export default PageHero
