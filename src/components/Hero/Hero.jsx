import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">

      <div className="max-w-6xl mx-auto text-center">

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold"
        >
          Serving Excellence
          <span className="block text-yellow-500">
            With Every Spoon
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-gray-300 text-lg max-w-3xl mx-auto"
        >
          Premium catering solutions for weddings,
          corporate events, conferences, private functions
          and unforgettable celebrations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-10 flex flex-col md:flex-row justify-center gap-4"
        >
          <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold">
            Request Catering
          </button>

          <button className="border border-yellow-500 text-yellow-500 px-8 py-4 rounded-full">
            View Services
          </button>
        </motion.div>

      </div>

    </section>
  )
}

export default Hero