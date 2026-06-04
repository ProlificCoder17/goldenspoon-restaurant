import { FaBars } from 'react-icons/fa'

function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-md border-b border-yellow-600/20">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        <h1 className="text-3xl font-bold text-yellow-500">
          Goldenspoon
        </h1>

        <ul className="hidden md:flex gap-8 text-white">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Gallery</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        <button className="hidden md:block bg-yellow-500 text-black px-5 py-2 rounded-full font-semibold hover:scale-105 transition">
          Book Event
        </button>

        <FaBars className="text-2xl md:hidden text-yellow-500" />
      </div>
    </nav>
  )
}

export default Navbar