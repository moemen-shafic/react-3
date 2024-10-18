import {Route, Routes } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import './App.css'
import { About } from './component/About/About.jsx'
import { Contact } from './component/Contact/Contact.jsx'
import { Footer } from './component/Footer/Footer.jsx'
import { Home } from './component/Home/Home.jsx'
import { Navbar } from './component/Navbar/Navbar.jsx'
import { Products } from './component/Products/Products.jsx'
import { NotFound } from './component/NotFound/NotFound.jsx'
import { ProductDetails } from './component/ProductDetials/ProductDetails.jsx'

function App() {
  return (
    <>
      <Navbar />

      <Routes>
          <Route path ='/' element={<Home />} />
          <Route path ='/products' element={<Products />} />
          <Route path ='/products/:id' element={<ProductDetails />} />
          <Route path ='/about' element={<About />} />
          <Route path ='/contact' element={<Contact />} />
          <Route path ='*' element={<NotFound />} />
      </Routes>


      <Footer />

    </>
  )
}

export default App
