import React from 'react'

const HeroSection = () => {
  return (
    <div className="bg-gray-800 font-[sans-serif] text-white p-6">
      <div className="grid md:grid-cols-2 items-center gap-10 max-w-5xl max-md:max-w-md mx-auto">
        <div className="md:h-[400px]">
          <img src="https://blog.hubspot.com/hubfs/freeonlinecourses-1.webp" className="w-full h-full object-contain" />
        </div>
        <div className="max-md:text-center">
          <h3 className="md:text-3xl text-2xl md:leading-10">Prompt Delivery and Enjoyable Dining Experience.</h3>
          <p className="mt-6 text-sm">Laboris qui Lorem ad tempor ut reprehenderit. Nostrud anim nulla officia ea sit deserunt. Eu eu quis anim aute Laboris qui Lorem ad tempor ut reprehenderit.</p>
          <button type="button" className="px-6 py-2 mt-8 font-semibold rounded text-sm outline-none border-2 border-white">Explore</button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection