import React from 'react'
import data_product from '../../assets/data'
import Item from '../Item/Item'

const Popular = () => {
  return (
    <section className="w-full flex flex-col items-center py-12 px-4 sm:mt-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 text-center">
        Popular In Women
      </h2>

      <hr className="w-20 sm:w-28 h-[3px] bg-gray-800 rounded-full mt-3 mb-10" />

      <div
        className="
         w-full
  max-w-7xl
  grid
  grid-cols-1
  sm:grid-cols-2
  lg:grid-cols-4
  gap-6
  
      "
      >
        {data_product.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </section>
  )
}

export default Popular
