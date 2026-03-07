import React from 'react'
import { motion } from 'framer-motion'
import { Truck, RefreshCcw, ShieldCheck, Headphones } from 'lucide-react'

const services = [
  {
    icon: <Truck size={36} />,
    title: 'Free Delivery',
    description: 'Free shipping on all orders over $50 worldwide.',
  },
  {
    icon: <RefreshCcw size={36} />,
    title: 'Easy Returns',
    description: '30-day hassle-free return policy on all products.',
  },
  {
    icon: <ShieldCheck size={36} />,
    title: 'Secure Payments',
    description: 'Your transactions are encrypted and secure.',
  },
  {
    icon: <Headphones size={36} />,
    title: '24/7 Support',
    description: 'Our support team is always ready to help you.',
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const card = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
}

const Services = () => {
  return (
    <section className="w-full py-16 px-6 bg-gray-50">
      {/* Title */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Why Shop With Us
        </h2>
        <p className="text-gray-500 mt-3">
          We provide the best experience for our customers
        </p>
      </div>

      {/* Services Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="
          max-w-7xl
          mx-auto
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-8
        "
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={card}
            whileHover={{ scale: 1.05 }}
            className="
              bg-white
              p-6
              rounded-xl
              shadow-sm
              hover:shadow-lg
              transition
              flex
              flex-col
              items-center
              text-center
            "
          >
            <div className="text-red-500 mb-4">{service.icon}</div>

            <h3 className="text-lg font-semibold text-gray-900">
              {service.title}
            </h3>

            <p className="text-gray-500 text-sm mt-2">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Services
