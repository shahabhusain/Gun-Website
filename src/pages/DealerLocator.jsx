import React, { useState } from 'react'
import { MapPin, Search } from 'lucide-react'
import PageHero from '../components/PageHero'

const DEALERS = [
  { name: 'Elite Firearms & Supply', city: 'Newington', state: 'NH', zip: '03801', phone: '(603) 555-0100', elite: true },
  { name: 'Patriot Gun Works', city: 'Manchester', state: 'NH', zip: '03101', phone: '(603) 555-0101', elite: false },
  { name: 'Tactical Edge Outdoors', city: 'Boston', state: 'MA', zip: '02101', phone: '(617) 555-0102', elite: true },
  { name: 'Freedom Arms Co.', city: 'Portland', state: 'ME', zip: '04101', phone: '(207) 555-0103', elite: false },
  { name: 'Precision Shooting Supply', city: 'Hartford', state: 'CT', zip: '06101', phone: '(860) 555-0104', elite: true },
  { name: 'North East Gun Shop', city: 'Providence', state: 'RI', zip: '02901', phone: '(401) 555-0105', elite: false },
]

const DealerLocator = () => {
  const [zip, setZip] = useState('')
  const [results, setResults] = useState(null)

  const search = (e) => {
    e.preventDefault()
    setResults(DEALERS)
  }

  return (
    <>
      <PageHero
        eyebrow="Support"
        title="Dealer Locator"
        description="Find an authorized SIG SAUER dealer near you. Elite and Master dealers carry our full product line."
        image="https://images.unsplash.com/photo-1599609256326-f0b84b8f2f36?w=1920&q=80"
      />

      <div className="max-w-[1920px] mx-auto px-6 lg:px-14 py-12">
        <form onSubmit={search} className="max-w-lg flex gap-3 mb-10">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Enter ZIP Code"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              className="w-full border border-gray-300 px-4 py-3 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-sig-yellow"
            />
            <MapPin className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>
          <button
            type="submit"
            className="bg-sig-yellow hover:bg-sig-yellow-hover text-black font-bold px-6 py-3 uppercase text-sm flex items-center gap-2 transition-colors"
          >
            <Search className="w-4 h-4" />
            Search
          </button>
        </form>

        {results && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {results.map((dealer) => (
              <div key={dealer.name} className="border border-gray-200 p-6 hover:border-sig-yellow transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-black uppercase text-sm">{dealer.name}</h3>
                  {dealer.elite && (
                    <span className="bg-sig-yellow text-black text-[10px] font-black px-2 py-0.5 uppercase shrink-0 ml-2">
                      Elite
                    </span>
                  )}
                </div>
                <p className="text-gray-500 text-sm">{dealer.city}, {dealer.state} {dealer.zip}</p>
                <p className="text-gray-700 text-sm mt-2 font-semibold">{dealer.phone}</p>
                <button className="mt-4 text-xs font-bold uppercase text-sig-yellow hover:underline">
                  Get Directions →
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default DealerLocator
