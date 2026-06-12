import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

function ParallaxSection({
  image,
  title,
  subtitle,
}) {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1.2, 1]
  )

  return (
    <section
      ref={ref}
      className="relative h-screen overflow-hidden"
    >
      <motion.img
        src={image}
        alt={title}
        style={{ scale }}
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
          bg-black/50
          flex
          items-center
          justify-center
        "
      >
        <div className="text-center text-white">
          <h2 className="text-5xl font-bold">
            {title}
          </h2>

          <p className="mt-4 text-xl">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  )
}

export default ParallaxSection