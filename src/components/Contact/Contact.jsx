import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa'

function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-yellow-500 uppercase tracking-[0.3em]">
            Contact
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Let's Plan Your Event
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-zinc-900 p-8 rounded-3xl">
            <FaPhone className="text-yellow-500 text-3xl mb-4" />
            <h3 className="font-bold mb-2">Phone</h3>
            <p>+27 76 179 0151</p>
            <p>+27 61 929 8503</p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-3xl">
            <FaEnvelope className="text-yellow-500 text-3xl mb-4" />
            <h3 className="font-bold mb-2">Email</h3>
            <p>info@goldenspoonkitchen.co.za</p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-3xl">
            <FaMapMarkerAlt className="text-yellow-500 text-3xl mb-4" />
            <h3 className="font-bold mb-2">Location</h3>
            <p>Cape Town, South Africa</p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Contact