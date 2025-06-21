import gsap from 'gsap'
import React from 'react'
import { ScrollTrigger,SplitText } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger,SplitText)

const App = () => {
  return (
    <div className='bg-black-50 text-white'>App</div>
  )
}

export default App