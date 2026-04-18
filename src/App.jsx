import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from "./components/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Menu from "./pages/Menu"
import Contact from "./pages/Contact"
import ProductsList from './pages/ProductsList'
import Page404 from './components/Page404'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route path="*" element={<Page404 />} />
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="menu">
              <Route index element={<Menu />}/>
              <Route path="products" element={<ProductsList />} />
            </Route>
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
