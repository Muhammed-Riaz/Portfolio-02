import React from 'react'
import Hero from './components/hero'
import Projects from './components/project';
import Services from './components/service';

function Home() {
  return (
    <main>
      <Hero/>
      <Projects/>
      <Services/>
    </main>
  )
}

export default Home