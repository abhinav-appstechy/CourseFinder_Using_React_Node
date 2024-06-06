import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import HeroSection from './Components/HeroSection'
import SearchSection from './Components/SearchSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <HeroSection />
      <SearchSection />
      <Footer />
    </>
  )
}

export default App
