import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

function ParallaxSection({
  image,
  title,
  subtitle,
  height = '100vh',
}) {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1.15, 1]
  )

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 1],
    [0.6, 1, 1]
  )

  return (
    <section
      ref={ref}
      style={{ height }}
      className="relative overflow-hidden"
    >
      <motion.img
        src={image}
        alt={title}
        style={{
          scale,
          opacity,
        }}
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-black/60
          flex
          items-center
          justify-center
          px-6
        "
      >
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
          }}
          className="text-center"
        >
          <p className="text-yellow-500 uppercase tracking-[0.4em] mb-4">
            GoldSpoon Experience
          </p>

          <h2
            className="
            text-4xl
            md:text-6xl
            font-bold
            mb-6
            "
          >
            {title}
          </h2>

          <p
            className="
            text-lg
            md:text-xl
            text-gray-200
            max-w-3xl
            mx-auto
            "
          >
            {subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default ParallaxSection