import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ id, name, image, new_price, old_price }) => {
  return (
    <div
      className="
      w-full
      bg-white
      rounded-xl
      overflow-hidden
      shadow-sm
      hover:shadow-md
      transition
      duration-300
      flex
      flex-col
    "
    >
      <Link to={`/product/${id}`} className="block w-full">
        <img
          src={image}
          alt={name}
          onClick={() => window.scrollTo(0, 0)}
          className="
            w-full
            h-[220px]
            sm:h-[240px]
            md:h-[260px]
            object-cover
          "
        />
      </Link>

      <div className="p-3 flex flex-col flex-grow">
        <p
          className="
          text-sm
          sm:text-base
          font-medium
          text-gray-800
          line-clamp-2
        "
        >
          {name}
        </p>

        <div className="flex items-center gap-2 mt-2">
          <span className="text-red-500 font-semibold text-base sm:text-lg">
            ${new_price}
          </span>

          <span className="text-gray-400 line-through text-sm">
            ${old_price}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Item
