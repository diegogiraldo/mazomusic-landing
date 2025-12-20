'use client'

import { motion } from 'framer-motion'
import { Heart, Users, Award, Music } from 'lucide-react'

const stats = [
  { icon: Users, value: '500+', label: 'Elevi fericiți' },
  { icon: Award, value: '10+', label: 'Ani de experiență' },
  { icon: Music, value: '3', label: 'Instrumente' },
  { icon: Heart, value: '5', label: 'Locații' },
]

export default function About() {
  return (
    <section id="despre" className="section-padding">
      <div className="container-custom mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-mazo-green/10 text-mazo-green rounded-full text-sm font-medium mb-4">
              Despre noi
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Muzica este limbajul
              <span className="text-gradient"> sufletului</span>
            </h2>
            <div className="space-y-4 text-gray-600 text-lg">
              <p>
                Mazo Music Academy s-a născut din pasiunea pentru muzică și dorința
                de a o împărtăși cu generațiile viitoare. Credem că fiecare copil are
                un talent muzical care așteaptă să fie descoperit.
              </p>
              <p>
                Cu o echipă de profesori dedicați și o metodă de predare adaptată
                fiecărui elev, transformăm lecțiile de muzică într-o aventură
                captivantă. Nu doar învățăm note și acorduri – construim încredere,
                disciplină și o dragoste pe viață pentru artă.
              </p>
              <p>
                Suntem mândri de fiecare elev care a trecut pragul academiei noastre
                și de progresul extraordinar pe care îl fac zi de zi.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-2xl p-6 text-center hover:bg-mazo-green/5 transition-colors"
                >
                  <div className="w-12 h-12 bg-mazo-green/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon size={24} className="text-mazo-green" />
                  </div>
                  <div className="font-display text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-gray-500 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Decorative Element */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-mazo-pink/10 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-mazo-green/10 rounded-full blur-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
