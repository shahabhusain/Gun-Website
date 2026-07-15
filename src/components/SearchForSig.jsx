import React, { useState } from 'react'
import { Search, X } from 'lucide-react'
import { SIG_MODELS } from '../data/catalog'

const SearchForSig = () => {
  const [selected, setSelected] = useState([])
  const [modalOpen, setModalOpen] = useState(false)

  const toggleModel = (model) => {
    setSelected((prev) =>
      prev.includes(model) ? prev.filter((m) => m !== model) : [...prev, model]
    )
  }

  return (
    <section className="bg-sig-dark py-12 lg:py-16">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-14">
        <h2 className="text-white text-2xl sm:text-3xl font-black tracking-wide text-center mb-8 uppercase">
          Search For Your SIG
        </h2>

        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => setModalOpen(true)}
            className="flex-1 bg-white text-gray-800 text-sm font-semibold py-3 px-4 text-left hover:bg-gray-100 transition-colors"
          >
            {selected.length > 0
              ? `${selected.length} model${selected.length > 1 ? 's' : ''} selected`
              : 'Select Models'}
          </button>
          <button className="bg-sig-yellow hover:bg-sig-yellow-hover text-black font-bold py-3 px-8 flex items-center justify-center gap-2 transition-colors uppercase text-sm tracking-wide">
            <Search className="w-4 h-4" />
            Search
          </button>
        </div>

        {selected.length > 0 && (
          <div className="max-w-3xl mx-auto mt-4 flex flex-wrap gap-2">
            {selected.map((model) => (
              <span
                key={model}
                className="inline-flex items-center gap-1 bg-sig-yellow text-black text-xs font-bold px-3 py-1"
              >
                {model}
                <button onClick={() => toggleModel(model)} aria-label={`Remove ${model}`}>
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
          </div>
        )}
      </div>

      {modalOpen && (
        <div className="fixed inset-0 z-[20000] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/70" onClick={() => setModalOpen(false)} />
          <div className="relative bg-white w-full max-w-2xl max-h-[80vh] overflow-hidden flex flex-col">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-black uppercase tracking-wide">Select Models</h3>
              <button onClick={() => setModalOpen(false)} aria-label="Close">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto flex flex-wrap gap-2">
              {SIG_MODELS.map((model) => (
                <button
                  key={model}
                  onClick={() => toggleModel(model)}
                  className={`text-xs font-bold px-3 py-2 border transition-colors ${
                    selected.includes(model)
                      ? 'bg-sig-yellow border-sig-yellow text-black'
                      : 'border-gray-300 text-gray-700 hover:border-gray-900'
                  }`}
                >
                  {model}
                </button>
              ))}
            </div>
            <div className="px-6 py-4 border-t border-gray-200 flex justify-end gap-3">
              <button
                onClick={() => setSelected([])}
                className="text-sm font-bold text-gray-600 hover:text-black px-4 py-2"
              >
                Clear All
              </button>
              <button
                onClick={() => setModalOpen(false)}
                className="bg-sig-yellow hover:bg-sig-yellow-hover text-black text-sm font-bold px-6 py-2 uppercase"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default SearchForSig
