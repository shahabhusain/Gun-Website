import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Layout from '../layout/Layout'
import Home from '../pages/Home'
import Firearms from '../pages/Firearms'
import CategoryPage from '../pages/CategoryPage'
import Ammunition from '../pages/Ammunition'
import Optics from '../pages/Optics'
import Suppressors from '../pages/Suppressors'
import BuildYourOwn from '../pages/BuildYourOwn'
import Shop from '../pages/Shop'
import ProductDetail from '../pages/ProductDetail'
import DealerLocator from '../pages/DealerLocator'
import About from '../pages/About'
import Cart from '../pages/Cart'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="firearms" element={<Firearms />} />
      <Route path="firearms/:category" element={<CategoryPage />} />
      <Route path="ammunition" element={<Ammunition />} />
      <Route path="optics" element={<Optics />} />
      <Route path="suppressors" element={<Suppressors />} />
      <Route path="build-your-own" element={<BuildYourOwn />} />
      <Route path="shop" element={<Shop />} />
      <Route path="product/:slug" element={<ProductDetail />} />
      <Route path="dealer-locator" element={<DealerLocator />} />
      <Route path="about" element={<About />} />
      <Route path="cart" element={<Cart />} />
    </Route>
  )
)
