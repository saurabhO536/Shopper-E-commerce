import React from 'react'
import hand_icon from '../../assets/hand_icon.png'
import arrow_icon from '../../assets/arrow.png'
import model_image from '../../assets/new-model_image.png'

const Hero = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[rgb(161,52,70)] to-white">
      <div
        className="
        max-w-7xl
        mx-auto
        flex
        flex-col
        lg:flex-row
        items-center
        justify-between
        px-6
        py-16
        gap-10
      "
      >
        {/* LEFT */}
        <div className="flex flex-col gap-5 text-center lg:text-left">
          <h2 className="text-gray-900 text-xl sm:text-2xl font-semibold">
            New Arrivals Only
          </h2>

          <div className="flex items-center justify-center lg:justify-start gap-4">
            <p className="text-gray-900 text-4xl sm:text-5xl md:text-6xl font-bold">
              New
            </p>

            <img src={hand_icon} alt="" className="w-10 sm:w-14 md:w-16" />
          </div>

          <p className="text-gray-900 text-4xl sm:text-5xl md:text-6xl font-bold">
            collection
          </p>

          <p className="text-gray-900 text-4xl sm:text-5xl md:text-6xl font-bold">
            for everyone
          </p>

          <div
            className="
            flex
            items-center
            justify-center
            lg:justify-start
            gap-3
            w-[220px]
            sm:w-[260px]
            h-[55px]
            mt-6
            rounded-full
            bg-red-500
            text-white
            text-base
            sm:text-lg
            font-semibold
            cursor-pointer
            mx-auto
            lg:mx-0
          "
          >
            <span>latest-collection</span>
            <img src={arrow_icon} alt="" className="w-5" />
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center w-full">
          <img
            src={model_image}
            alt=""
            className="
              w-[80%]
              sm:w-[70%]
              md:w-[60%]
              lg:w-[500px]
              object-contain
            "
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
