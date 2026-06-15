import {
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaEnvelope,
} from 'react-icons/fa'

function Footer() {
  return (
    <footer className="bg-black border-t border-yellow-500/20">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-4 gap-10">

          <div>
            <h3 className="text-2xl font-bold text-yellow-500 mb-4">
              Goldenspoon Kitchen
            </h3>

            <p className="text-gray-400">
              Serving Excellence with Every Spoon.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">
              Services
            </h4>

            <ul className="space-y-2 text-gray-400">
              <li>Corporate Catering</li>
              <li>Wedding Catering</li>
              <li>Outdoor Events</li>
              <li>Equipment Hire</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">
              Contact
            </h4>

            <ul className="space-y-3 text-gray-400">
              <li className="flex gap-2">
                <FaPhone />
                +27 76 179 0151
              </li>

              <li className="flex gap-2">
                <FaEnvelope />
                info@goldenspoonkitchen.co.za
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">
              Follow Us
            </h4>

            <div className="flex gap-4 text-yellow-500 text-2xl">
              <FaFacebook />
              <FaInstagram />
            </div>
          </div>

        </div>

        <div className="border-t border-yellow-500/10 mt-12 pt-8 text-center text-gray-500">
          © 2026 Goldenspoon Kitchen (Pvt) Ltd. All rights reserved.
        </div>

      </div>

    </footer>
  )
}

export default Footer