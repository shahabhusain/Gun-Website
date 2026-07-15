import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart, Trash2 } from 'lucide-react'
import PageHero from '../components/PageHero'
import { ALL_PRODUCTS } from '../data/catalog'

const CART_ITEMS = ALL_PRODUCTS.slice(0, 2)

const Cart = () => {
  const total = CART_ITEMS.reduce((sum, item) => sum + item.price, 0)

  return (
    <>
      <PageHero
        eyebrow="Shop"
        title="Shopping Cart"
        description=""
        image={null}
      />

      <div className="max-w-[1920px] mx-auto px-6 lg:px-14 py-12">
        {CART_ITEMS.length === 0 ? (
          <div className="text-center py-20">
            <ShoppingCart className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-lg font-bold mb-4">Your cart is empty</p>
            <Link to="/shop" className="bg-sig-yellow text-black font-bold px-6 py-3 uppercase text-sm">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-4">
              {CART_ITEMS.map((item) => (
                <div key={item.id} className="flex gap-4 border border-gray-200 p-4">
                  <img src={item.image} alt={item.name} className="w-24 h-24 object-cover bg-gray-50 shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-bold text-sm uppercase">{item.name}</h3>
                    <p className="text-gray-500 text-xs mt-1">{item.caliber}</p>
                    <p className="font-black mt-2">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex flex-col items-end justify-between">
                    <button className="text-gray-400 hover:text-red-600 transition-colors" aria-label="Remove">
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <div className="flex items-center border border-gray-300">
                      <button className="px-3 py-1 text-sm hover:bg-gray-100">−</button>
                      <span className="px-3 py-1 text-sm border-x border-gray-300">1</span>
                      <button className="px-3 py-1 text-sm hover:bg-gray-100">+</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border border-gray-200 p-6 h-fit">
              <h2 className="font-black uppercase mb-4">Order Summary</h2>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-500">Subtotal</span>
                <span className="font-bold">${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm mb-4 pb-4 border-b border-gray-200">
                <span className="text-gray-500">Shipping</span>
                <span className="font-bold">Calculated at checkout</span>
              </div>
              <div className="flex justify-between font-black text-lg mb-6">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <button className="w-full bg-sig-yellow hover:bg-sig-yellow-hover text-black font-bold py-4 uppercase text-sm tracking-wide transition-colors mb-3">
                Proceed to Checkout
              </button>
              <Link to="/shop" className="block text-center text-sm text-gray-500 hover:text-black">
                Continue Shopping
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Cart
