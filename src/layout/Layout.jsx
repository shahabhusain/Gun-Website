import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import CompareBar from '../components/CompareBar'

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-[72px]">
        <Outlet />
      </main>
      <Footer />
      <CompareBar />
    </div>
  )
}

export default Layout
