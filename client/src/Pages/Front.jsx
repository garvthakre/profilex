import React from 'react'
import HeroSection from '../Components/HeroSection'
import FeaturesSection from '../Components/FeatureSection'
import Footer from '../Components/Footer'
function Front() {
  return (
    <div className="min-h-screen flex flex-col">
    <main className="flex-grow">
      <HeroSection />
      <FeaturesSection />
    </main>
    <Footer />
  </div>
  )
}

export default Front