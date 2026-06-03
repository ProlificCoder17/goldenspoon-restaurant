import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'

function Home() {
  return (
    <div
      className="
      bg-black
      text-white
      min-h-screen
      bg-[radial-gradient(circle_at_top,#3d2b08,transparent_40%)]
      "
    >
      <Navbar />
      <Hero />
    </div>
  )
}

export default Home