import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/products/Home'
import Laptops from './pages/products/Laptops'
import Macbooks from './pages/products/Macbooks'
import Printers from './pages/products/Printers'
import CCTV from './pages/products/CCTV'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function ProductLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/products/laptops"
          element={<ProductLayout><Laptops /></ProductLayout>}
        />

        <Route
          path="/products/macbooks"
          element={<ProductLayout><Macbooks /></ProductLayout>}
        />

        <Route
          path="/products/printers"
          element={<ProductLayout><Printers /></ProductLayout>}
        />

        <Route
          path="/products/cctv"
          element={<ProductLayout><CCTV /></ProductLayout>}
        />

        <Route
          path="*"
          element={
            <ProductLayout>
              <div className="px-4 py-24 text-center">
                <h1 className="text-3xl font-bold text-blue-950">
                  Page not found
                </h1>
                <a href="/" className="mt-5 inline-block text-blue-700 underline">
                  Back to Home
                </a>
              </div>
            </ProductLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}