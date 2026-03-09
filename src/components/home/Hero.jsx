import React from 'react'
import hand_icon from '../../assets/hand_icon.png'
import arrow_icon from '../../assets/arrow.png'
import model_image from '../../assets/new-model_image.png'

const Hero = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[rgb(161,52,70)] to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-20 flex flex-col lg:flex-row items-center gap-12">
        {/* LEFT */}
        <div className="lg:w-1/2 flex flex-col gap-5 text-center lg:text-left">
          <h2 className="text-gray-900 text-xl sm:text-2xl font-semibold tracking-wide">
            New Arrivals Only
          </h2>

          <div className="text-gray-900 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight space-y-1">
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <span>New</span>
              <img
                src={hand_icon}
                alt="hand icon"
                className="w-10 sm:w-14 md:w-16"
              />
            </div>

            <p>Collection</p>
            <p>For Everyone</p>
          </div>

          <button className="flex items-center justify-center lg:justify-start gap-3 w-[220px] sm:w-[260px] h-[55px] mt-6 rounded-full bg-red-500 text-white font-semibold hover:bg-red-600 transition duration-300 mx-auto lg:mx-0 shadow-lg">
            Latest Collection
            <img src={arrow_icon} alt="arrow" className="w-5" />
          </button>
        </div>

        {/* RIGHT */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={model_image}
            alt="fashion model"
            className="w-[80%] sm:w-[70%] md:w-[60%] lg:w-[450px] xl:w-[520px] object-contain drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
