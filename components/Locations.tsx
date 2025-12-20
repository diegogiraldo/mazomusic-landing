'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone } from 'lucide-react'

const locations = [
  {
    city: 'Constanța',
    description: 'Sediul principal al academiei',
    isMain: true,
  },
  {
    city: 'Năvodari',
    description: 'Cursuri disponibile',
    isMain: false,
  },
  {
    city: 'Hârșova',
    description: 'Cursuri disponibile',
    isMain: false,
  },
  {
    city: 'Valu lui Traian',
    description: 'Cursuri disponibile',
    isMain: false,
  },
  {
    city: 'Cernavodă',
    description: 'Cursuri disponibile',
    isMain: false,
  },
]

export default function Locations() {
  return (
    <section id="locatii" className="section-padding">
      <div className="container-custom mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-mazo-green/10 text-mazo-green rounded-full text-sm font-medium mb-4">
            Unde ne găsești
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Locațiile noastre
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Suntem prezenți în 5 orașe din județul Constanța, aproape de tine.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {locations.map((location, index) => (
            <motion.div
              key={location.city}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`relative p-6 rounded-2xl border-2 transition-all duration-300 hover:shadow-lg ${
                location.isMain
                  ? 'border-mazo-green bg-mazo-green/5'
                  : 'border-gray-200 hover:border-mazo-green/50'
              }`}
            >
              {location.isMain && (
                <span className="absolute -top-3 left-4 px-3 py-1 bg-mazo-green text-white text-xs rounded-full">
                  Sediu principal
                </span>
              )}

              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl ${location.isMain ? 'bg-mazo-green text-white' : 'bg-gray-100'}`}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold mb-1">{location.city}</h3>
                  <p className="text-gray-500 text-sm">{location.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center bg-mazo-dark rounded-3xl p-8 md:p-12"
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
            Vrei să afli mai multe despre locația din orașul tău?
          </h3>
          <p className="text-gray-400 mb-6">
            Contactează-ne pentru detalii despre orarul și disponibilitatea cursurilor.
          </p>
          <a
            href="https://wa.me/40770560424?text=Bună! Aș dori informații despre cursurile din zona mea."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <Phone size={18} />
            Sună-ne acum
          </a>
        </motion.div>
      </div>
    </section>
  )
}
