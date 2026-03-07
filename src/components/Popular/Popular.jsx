import React from 'react'
import data_product from '../../assets/data'
import Item from '../Item/Item'

const Popular = () => {
  return (
    <div className="flex flex-col items-center gap-6 py-12 px-6">
      <h2 className="text-[#171717] text-3xl md:text-5xl font-semibold">
        Popular In Women
      </h2>

      <hr className="w-[120px] h-[4px] rounded-full bg-gray-800" />

      <div
        className="
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        gap-6
        mt-10
      "
      >
        {data_product.map((item, i) => (
          <Item key={i} {...item} />
        ))}
      </div>
    </div>
  )
}

export default Popular
