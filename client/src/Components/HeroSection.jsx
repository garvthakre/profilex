function HeroSection() {
    return (
      <section className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Build Your Dream Portfolio</h1>
          <p className="text-xl md:text-2xl mb-8">Create, customize, and showcase your work with ease</p>
          <div className="space-x-4">
            <button className="bg-white text-purple-500 px-6 py-2 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300">
              Get Started
            </button>
            <button className="border-2 border-white text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-500 transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section> 
    )
  }
  
  export default HeroSection
  
  