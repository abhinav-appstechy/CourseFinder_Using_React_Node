import React from 'react';
import UserAvatar from "/public/images/team.jpg"


const Testimonials = React.forwardRef((props, ref)=>(
    <div ref={ref} className="my-6 font-[sans-serif] max-w-6xl mx-auto mt-20" id='TestimonialsSection'>
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="text-3xl font-extrabold text-gray-800">What our happy client say</h2>
      <p className="text-sm mt-4 leading-relaxed text-gray-800">Veniam proident aute magna anim excepteur et ex consectetur velit ullamco veniam minim aute sit. Elit occaecat officia et laboris Lorem minim. Officia do aliqua adipisicing ullamco in</p>
    </div>

    <div className="grid md:grid-cols-3 gap-6 max-md:gap-12 max-md:justify-center text-center max-md:max-w-lg mx-auto mt-16">
      {[1,1,1].map((item)=>(
        <>
        <div className="rounded-md">
        <div className="flex flex-col items-center">
          <img src={UserAvatar} className="w-24 h-24 rounded-full shadow-xl border-2 border-white" />
          <div className="mt-4">
            <h4 className="text-sm font-extrabold text-gray-800">John Doe</h4>
            <p className="text-xs text-blue-600 font-bold mt-1">CEO, Company</p>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-sm leading-relaxed text-gray-800">The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.</p>
        </div>

        <div className="flex justify-center space-x-1 mt-4">
          <svg className="w-4 fill-[#007bff]" viewBox="0 0 14 13" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
          <svg className="w-4 fill-[#007bff]" viewBox="0 0 14 13" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
          <svg className="w-4 fill-[#007bff]" viewBox="0 0 14 13" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
          <svg className="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
          <svg className="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
        </div>
      </div>
        </>
      ))}
      

    </div>
  </div>
));

Testimonials.displayName = "Testimonials";

export default Testimonials