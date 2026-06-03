import {
  FaUtensils,
  FaGlassCheers,
  FaTruck,
  FaChair,
  FaMotorcycle,
} from 'react-icons/fa'

const services = [
  {
    title: 'Corporate Catering',
    icon: FaUtensils,
  },
  {
    title: 'Event Catering',
    icon: FaGlassCheers,
  },
  {
    title: 'Outdoor Catering',
    icon: FaTruck,
  },
  {
    title: 'Equipment Hire',
    icon: FaChair,
  },
  {
    title: 'Meal Delivery',
    icon: FaMotorcycle,
  },
]

function Services() {
  return (
    <section className="py-24 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-yellow-500 uppercase tracking-widest">
            Services
          </p>

          <h2 className="text-4xl font-bold mt-3">
            What We Offer
          </h2>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">

          {services.map((service) => {
            const Icon = service.icon

            return (
              <div
                key={service.title}
                className="
                bg-zinc-900
                p-8
                rounded-2xl
                border
                border-yellow-500/20
                hover:border-yellow-500
                transition
                "
              >
                <Icon className="text-4xl text-yellow-500 mb-6" />

                <h3 className="font-bold">
                  {service.title}
                </h3>
              </div>
            )
          })}
        </div>

      </div>

    </section>
  )
}

export default Services