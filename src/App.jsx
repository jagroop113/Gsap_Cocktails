import gsap from 'gsap'
import React from 'react'
import { ScrollTrigger,SplitText } from 'gsap/all'
import Navbar from './components/Navbar'
import Hero from './components/Hero'



const App = () => {
  gsap.registerPlugin(ScrollTrigger,SplitText)
  return (
    <main>
      <Navbar />
      <Hero/>
      <div className='h-dvh bg-black'></div>
    </main>
  )
}

export default App