import React from 'react'

const Subscribe = () => {
  return (
    <section className="w-full px-4 py-16 flex justify-center ">
      <div
        className="
        w-full
        max-w-6xl
        rounded-2xl
        bg-gradient-to-b
        from-pink-400
        via-pink-300
        to-white
        text-center
        py-16
        px-6
        md:px-12
        flex
        flex-col
        items-center
        gap-6
      "
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black">
          Get exclusive offers on your email
        </h1>

        <p className="text-gray-700 text-sm sm:text-base">
          Subscribe to our page and stay updated
        </p>

        {/* Input + Button */}
        <div
          className="
          w-full
          max-w-xl
          flex
          flex-col
          sm:flex-row
          items-center
          bg-white
          border
          border-gray-300
          rounded-full
          overflow-hidden
        "
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="
              w-full
              px-6
              py-4
              outline-none
              text-gray-800
            "
          />

          <button
            className="
              w-full
              sm:w-auto
              px-8
              py-4
              bg-black
              text-white
              font-medium
              hover:bg-gray-800
              transition
            "
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
  )
}

export default Subscribe
