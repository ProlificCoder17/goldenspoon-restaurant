import {
  FaAward,
  FaUsers,
  FaClock,
  FaUtensils,
} from 'react-icons/fa'

const reasons = [
  {
    icon: FaAward,
    title: 'Quality Ingredients',
    text: 'Fresh ingredients prepared to the highest standards.',
  },
  {
    icon: FaUsers,
    title: 'Experienced Team',
    text: 'Professional chefs and catering staff.',
  },
  {
    icon: FaClock,
    title: 'Reliable Service',
    text: 'On-time delivery and event execution.',
  },
  {
    icon: FaUtensils,
    title: 'Custom Menus',
    text: 'Tailored catering solutions for every event.',
  },
]

function WhyChooseUs() {
  return (
    <section className="py-24 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-yellow-500 uppercase tracking-[0.3em]">
            Why Choose Us
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Excellence In Every Event
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {reasons.map((item) => {
            const Icon = item.icon

            return (
              <div
                key={item.title}
                className="
                  bg-black
                  p-8
                  rounded-3xl
                  border
                  border-yellow-500/20
                  text-center
                "
              >
                <Icon className="text-yellow-500 text-4xl mx-auto mb-6" />

                <h3 className="font-bold text-xl mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-400">
                  {item.text}
                </p>
              </div>
            )
          })}

        </div>

      </div>
    </section>
  )
}

export default WhyChooseUs