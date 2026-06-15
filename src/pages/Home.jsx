import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Services from '../components/Services/Services'
import ParallaxSection from '../components/ParallaxSection/ParallaxSection'
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs'
import Testimonials from '../components/Testimonials/Testimonials'
import Contact from '../components/Contact/Contact'
import BookingForm from '../components/BookingForm/BookingForm'
import Footer from '../components/Footer/Footer'

function Home() {
  return (
    <div className="bg-black text-white min-h-screen">

      <Navbar />

      <Hero />

      <ParallaxSection
        image="./images/weddingevents.png"
        title="Creating Unforgettable Celebrations"
        subtitle="Premium wedding catering tailored to your special day."
      />

      <About />

      <ParallaxSection
        image="./images/corporate.png"
        title="Corporate Catering Excellence"
        subtitle="Professional dining solutions for meetings and conferences."
      />

      <Services />

      <ParallaxSection
        image="./images/watermellon.jpeg"
        title="Fresh Ingredients. Exceptional Taste."
        subtitle="Prepared with passion and served with excellence."
      />

      <WhyChooseUs />

        <ParallaxSection
        image="./images/beef.jpeg"
        title="Serving Communities Across Southern Africa"
        subtitle="From intimate gatherings to large-scale celebrations."
      />

      <Testimonials />

      <Contact />

      <BookingForm />

      <Footer />
    
    </div>
  )
}

export default Home