import React, { useState } from 'react'
import { X } from 'lucide-react'

const CompareBar = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-[9999] bg-black text-white text-xs font-bold px-4 py-3 shadow-lg hover:bg-sig-dark transition-colors uppercase tracking-wide border border-gray-700"
      >
        Compare Products
      </button> */}

      {open && (
        <div className="fixed bottom-0 left-0 right-0 z-[9999] bg-white border-t-2 border-sig-yellow shadow-2xl">
          <div className="max-w-[1920px] mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-sm font-black uppercase">Compare Products</span>
              <span className="text-gray-500 text-sm">0 Items</span>
            </div>
            <div className="flex items-center gap-3">
              <button className="bg-sig-yellow hover:bg-sig-yellow-hover text-black text-xs font-bold px-4 py-2 uppercase">
                Launch Compare
              </button>
              <button onClick={() => setOpen(false)} aria-label="Close compare">
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CompareBar
