import { motion } from 'framer-motion'

function BookingForm() {
  return (
    <section className="py-24 px-6 bg-zinc-950">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-yellow-500 uppercase tracking-[0.3em]">
            Booking Request
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Request A Catering Quote
          </h2>

          <p className="text-gray-400 mt-4">
            Tell us about your event and we'll prepare a customized catering solution.
          </p>
        </div>

        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="grid md:grid-cols-2 gap-6"
        >
          <input
            type="text"
            placeholder="Full Name"
            className="bg-black p-4 rounded-xl border border-yellow-500/20"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="bg-black p-4 rounded-xl border border-yellow-500/20"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="bg-black p-4 rounded-xl border border-yellow-500/20"
          />

          <input
            type="date"
            className="bg-black p-4 rounded-xl border border-yellow-500/20"
          />

          <input
            type="text"
            placeholder="Event Type"
            className="bg-black p-4 rounded-xl border border-yellow-500/20 md:col-span-2"
          />

          <textarea
            rows="6"
            placeholder="Tell us about your event..."
            className="bg-black p-4 rounded-xl border border-yellow-500/20 md:col-span-2"
          />

          <button
            className="
            md:col-span-2
            bg-yellow-500
            text-black
            py-4
            rounded-xl
            font-bold
            hover:scale-105
            transition
            "
          >
            Request Quote
          </button>
        </motion.form>

      </div>
    </section>
  )
}

export default BookingForm