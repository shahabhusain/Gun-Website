import React from 'react'
import PageHero from '../components/PageHero'

const About = () => {
  return (
    <>
      <PageHero
        eyebrow="Company"
        title="About SIG SAUER"
        description="For over 150 years, SIG SAUER has evolved by blending American ingenuity, German engineering, and Swiss precision."
        image="https://images.unsplash.com/photo-1595590423163-82a159597781?w=1920&q=80"
      />

      <div className="max-w-[1920px] mx-auto px-6 lg:px-14 py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-black uppercase mb-4">World-Class Systems Provider</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              SIG SAUER, Inc. is a leading provider and manufacturer of firearms, electro-optics,
              ammunition, airguns, suppressors, and training. Today, SIG SAUER is synonymous with
              industry-leading quality and innovation — the brand of choice among the U.S. Military,
              global defense community, law enforcement, competitive shooters, and responsible citizens.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Headquartered in Newington, New Hampshire, SIG SAUER has almost 2,000 employees across
              eight locations worldwide.
            </p>
          </div>
          <div className="aspect-video overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1599609256326-f0b84b8f2f36?w=800&q=80"
              alt="SIG SAUER firearms"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { stat: '150+', label: 'Years of Excellence' },
            { stat: '2,000+', label: 'Employees Worldwide' },
            { stat: '#1', label: 'Choice of U.S. Military' },
          ].map((item) => (
            <div key={item.label} className="bg-sig-dark text-white p-8 text-center">
              <p className="text-4xl font-black text-sig-yellow mb-2">{item.stat}</p>
              <p className="text-sm font-bold uppercase tracking-wide">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default About
