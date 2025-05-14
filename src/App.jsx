import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Footer from './components/Footer'


function App() {
  return (
    <>
      <Header />
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/blog" element={<Blog/>} />
        </Routes>
        </BrowserRouter>
        <Footer/>
    </>
  )
}

export default App
