import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Foter from './components/Foter'
import Header from './components/Header'
import About from './pages/About'
import Skill from './pages/Skill'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'

function App() {




  return (
    <>
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/skill' element={<Skill/>}/>
    <Route path='/portfolio' element={<Portfolio/>}/>
    <Route path='/gallery' element={<Gallery/>}/>
    <Route path='/contact' element={<Contact/>}/>
   </Routes>
   <Foter/>
   </BrowserRouter>
    </>
  )
}

export default App
