import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Corporate Client',
    role: 'Business Conference',
    review:
      'Exceptional service, professional staff and outstanding food quality.',
  },
  {
    name: 'Wedding Client',
    role: 'Wedding Reception',
    review:
      'Goldenspoon made our wedding unforgettable. Everything was perfect.',
  },
  {
    name: 'Community Organizer',
    role: 'Outdoor Event',
    review:
      'Reliable, punctual and highly professional from start to finish.',
  },
]

function Testimonials() {
  return (
    <section className="py-24 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-yellow-500 uppercase tracking-[0.3em]">
            Testimonials
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="
                bg-black
                p-8
                rounded-3xl
                border
                border-yellow-500/20
              "
            >
              <div className="text-yellow-500 text-xl mb-4">
                ★★★★★
              </div>

              <p className="text-gray-300 mb-6">
                "{testimonial.review}"
              </p>

              <h3 className="font-bold">
                {testimonial.name}
              </h3>

              <p className="text-sm text-gray-500">
                {testimonial.role}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Testimonials