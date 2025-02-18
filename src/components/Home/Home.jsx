import React from 'react'
import TypeWriter from 'typewriter-effect';
import './Home.css'
import BIRDS from 'vanta/dist/vanta.birds.min'
import { useState, useEffect } from 'react';
const Home = () => {

  const [vantaEffect, setVantaEffect] = useState(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(BIRDS({
        el: "#home",
        color1: 0xe0c5c5,
        birdSize: 0.50,
        wingSpan: 21.00,
        backgroundAlpha: 0
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <>
      <section className="main" id="home">
        <div className="main-container">
          <h3 data-aos='fade-right'>HELLO I'M</h3>
          <h1>
            <TypeWriter options={{ strings: ['Jahnavi', 'Programmer', 'Fullstack Developer', 'Mobile App Developer'], autoStart: true, loop: true }} />
          </h1>

        </div>
      </section>
    </>
  )
}

export default Home
