import React from 'react'
import Header from './fragments/Header'
import Hero from './fragments/Hero'
import About from './fragments/About'
import Service from './fragments/Service'
import Property from './fragments/Property'
import Features from './fragments/Features'
import Blog from './fragments/Blog'
import CTA from './fragments/CTA'
import Footer from './fragments/Footer'

function Home() {
  return (
    <div>
      <Header/>
      <main>
        <article>
            <Hero/>
            <About/>
            <Service/>
            <Property/>
            <Features/>
            <Blog/>
            <CTA/>
        </article>
      </main>
      <Footer/>
    </div>
  )
}

export default Home
