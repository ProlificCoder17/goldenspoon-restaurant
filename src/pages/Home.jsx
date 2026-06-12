import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Services from '../components/Services/Services'

function Home() {
  return (
    <div className="bg-black text-white min-h-screen bg-[radial-gradient(circle_at_top,#3d2b08,transparent_40%)]">
      <Navbar />
      <Hero />
      <About />
      <Services />  
    </div>
  )
}

export default Home