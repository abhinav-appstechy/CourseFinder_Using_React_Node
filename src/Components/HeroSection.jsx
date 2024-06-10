import React from 'react'

const HeroSection = React.forwardRef((props, ref)=>(
  <div ref={ref} className="bg-gray-800 font-[sans-serif] text-white p-6" id='HeroSection'>
      <div className="grid md:grid-cols-2 items-center gap-10 max-w-5xl max-md:max-w-md mx-auto">
        <div className="md:h-[400px]">
          <img src="https://blog.hubspot.com/hubfs/freeonlinecourses-1.webp" className="w-full h-full object-contain" />
        </div>
        <div className="max-md:text-center">
          <h3 className="md:text-3xl text-2xl md:leading-10">Discover Your Next Learning Adventure with CourseFinder.</h3>
          <p className="mt-6 text-sm">Unlock a world of knowledge with our extensive collection of online courses. Whether you're looking to advance your career, learn a new hobby, or gain new skills, CourseFinder has the perfect course for you.</p>
          <button type="button" className="px-6 py-2 mt-8 font-semibold rounded text-sm outline-none border-2 border-white"><a href="#SearchSection">Explore</a></button>
        </div>
      </div>
    </div>
))

HeroSection.displayName = 'HeroSection';

export default HeroSection