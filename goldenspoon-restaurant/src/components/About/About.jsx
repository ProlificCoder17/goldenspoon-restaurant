import { motion } from 'framer-motion'

function About() {
    return (
        <section id="about" className="py-24 px-6">
            <div className="max-w-7xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <p className="text-yellow-500 uppercase tracking-widest mb-3">
                        About Goldenspoon
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold mb-8">
                        Premium Catering & Hospitality Services
                    </h2>

                    <p className="text-gray-300 text-lg leading-8 max-w-4xl">
                        Goldenspoon Kitchen (Pvt) Ltd is a dynamic food and catering company committed to delivering exceptional culinary
                        experiences for corporate events, weddings, conferences, private functions and special occasions.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mt-16">

                        <div className="bg-zinc-900 p-8 rounded-2xl border border-yellow-500/20">
                            <h3 className="text-2xl font-bold text-yellow-500 mb-4">
                                Our Vision
                            </h3>

                            <p className="text-gray-300">
                                To become one of the leading catering and hospitality brands in Southern Africa by providing high-quality
                                food and professional service experiences.
                            </p>
                        </div>

                        <div className="bg-zinc-900 p-8 rounded-2xl border border-yellow-500/20">
                            <h3 className="text-2xl font-bold text-yellow-500 mb-4">
                                Our Mission
                            </h3>

                            <p className="text-gray-300">
                                To deliver delicious meals, exceptional customer service and reliable event solutions while maintaining the
                                highest standards of hygiene, professionalism and affordability.
                            </p>
                        </div>

                        <div className="mt-20">

                            <h3 className="text-3xl font-bold mb-10 text-center">
                                Our Core Values
                            </h3>

                            <div className="grid md:grid-cols-5 gap-6">

                                {[
                                    'Excellence',
                                    'Integrity',
                                    'Customer Satisfaction',
                                    'Innovation',
                                    'Teamwork',
                                ].map((value) => (
                                    <div
                                        key={value}
                                        className="bg-zinc-900 rounded-xl p-6 border border-yellow-500/20 text-center">
                                        <h4 className="font-bold text-yellow-500">
                                            {value}
                                        </h4>
                                    </div>
                                ))}
                            </div>

                        </div>

                    </div>
                </motion.div>

            </div>
        </section>
    )
}

export default About