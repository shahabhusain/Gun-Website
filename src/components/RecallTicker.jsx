import React from 'react'
import { RECALL_NOTICES } from '../data/catalog'

const RecallTicker = () => {
  const items = [...RECALL_NOTICES, ...RECALL_NOTICES]

  return (
    <div className="bg-sig-yellow text-black py-2.5 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((notice, i) => (
          <span key={i} className="inline-flex items-center mx-8 text-xs sm:text-sm font-semibold">
            {notice}
            <span className="mx-8 text-black/40">|</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default RecallTicker
