'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Users } from 'lucide-react'
import Image from 'next/image'
import { useModal } from '@/context/ModalContext'

const cities = [
  {
    name: 'Năvodari',
    description: 'Sediul principal',
    image: '/images/gallery/588702727_18432102331104126_2059678183996744615_n.jpg',
  },
  {
    name: 'Constanța',
    description: 'Cursuri disponibile',
    image: '/images/gallery/589243578_18433765369104126_4660939626528537681_n.jpg',
  },
  {
    name: 'Hârșova',
    description: 'Cursuri disponibile',
    image: '/images/gallery/600955359_1436648481800275_3080660869012872171_n.jpg',
  },
  {
    name: 'Valu lui Traian',
    description: 'Cursuri disponibile',
    image: '/images/gallery/598150351_18433768165104126_3451718325131525554_n.jpg',
  },
  {
    name: 'Cernavodă',
    description: 'Cursuri disponibile',
    image: '/images/gallery/601476107_1440168341448289_3844633712055369762_n.jpg',
  },
]

export default function Hero() {
  const { openModal } = useModal()

  return (
    <section className="bg-black min-h-screen pt-24 pb-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Cele mai bune cursuri de{' '}
            <span className="text-gradient">chitară, canto și pian</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 italic mb-6">
            "Creăm amintiri de neuitat"
          </p>
          <div className="inline-flex items-center gap-2 px-5 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
            <Users size={20} className="text-mazo-pink" />
            <span className="text-white">
              Alătură-te celor peste <strong className="text-mazo-pink">950 de familii</strong> care au ales Mazo Music!
            </span>
          </div>
        </motion.div>

        {/* City Posters */}
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-5 md:overflow-visible">
          {cities.map((city, index) => (
            <motion.div
              key={city.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex-shrink-0 w-[280px] md:w-auto snap-center group"
            >
              <div className="relative h-[420px] md:h-[500px] rounded-3xl overflow-hidden">
                {/* Background Image */}
                <Image
                  src={city.image}
                  alt={city.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                  <div>
                    <span className="text-mazo-pink text-sm font-medium uppercase tracking-wider">
                      {city.description}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mt-1 mb-4">
                      {city.name}
                    </h3>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation()
                        openModal(city.name)
                      }}
                      className="relative z-20 inline-flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 hover:bg-mazo-pink hover:text-white hover:scale-105 cursor-pointer"
                    >
                      <MessageCircle size={16} />
                      Înscrie-te
                    </button>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-3xl border-2 border-white/0 group-hover:border-white/30 transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scroll hint on mobile */}
        <div className="md:hidden text-center mt-4">
          <span className="text-white/40 text-sm">← Scroll pentru mai multe locații →</span>
        </div>
      </div>
    </section>
  )
}
