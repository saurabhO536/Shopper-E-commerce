import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ id, name, image, new_price, old_price }) => {
  return (
    <div className="w-full bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition duration-300">
      <Link to={`/product/${id}`}>
        <img
          src={image}
          alt={name}
          onClick={() => window.scrollTo(0, 0)}
          className="w-full h-[260px] object-cover rounded-md"
        />
      </Link>

      <p className="mt-3 text-sm font-medium text-gray-800 line-clamp-2">
        {name}
      </p>

      <div className="flex items-center gap-3 mt-2">
        <span className="text-red-500 font-semibold text-lg">${new_price}</span>

        <span className="text-gray-400 line-through text-sm">${old_price}</span>
      </div>
    </div>
  )
}

export default Item
