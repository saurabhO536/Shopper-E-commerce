import React from 'react'
import new_collections from '../../assets/new_collections'
import Item from '../Item/Item'

const NewCollection = () => {
  return (
    <div className="flex flex-col items-center py-12 px-6">
      <h1 className="text-3xl md:text-5xl font-semibold text-[#171717]">
        New Collection
      </h1>

      <hr className="w-[120px] h-[4px] rounded-full bg-gray-800 mt-3 mb-10" />

      <div
        className="
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        gap-6
        w-full
        max-w-7xl
      "
      >
        {new_collections.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}

export default NewCollection
