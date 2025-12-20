'use client'

import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
import { useState } from 'react'

const testimonials = [
  {
    id: 1,
    name: 'Maria Ionescu',
    role: 'Mama lui Andrei, 9 ani',
    content:
      'Andrei a făcut progrese uimitoare de când a început lecțiile de chitară la Mazo Music. Profesorii sunt răbdători și știu cum să lucreze cu copiii. Recomand cu încredere!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Alexandru Popescu',
    role: 'Tatăl Mariei, 11 ani',
    content:
      'Maria adoră lecțiile de canto! A câștigat multă încredere și acum chiar participă la concerte. Mulțumim echipei Mazo Music pentru tot sprijinul.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Elena Dumitrescu',
    role: 'Mama lui David, 7 ani',
    content:
      'David a început cu pianul și s-a îndrăgostit de muzică. Atmosfera este caldă și prietenoasă, iar progresul lui este vizibil la fiecare lecție.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Cristian Marinescu',
    role: 'Tatăl Anei, 10 ani',
    content:
      'Suntem foarte mulțumiți de experiența la Mazo Music. Ana a învățat nu doar să cânte, ci și disciplina și perseverența. O investiție în viitorul ei.',
    rating: 5,
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="section-padding bg-mazo-dark text-white overflow-hidden">
      <div className="container-custom mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium mb-4">
            Testimoniale
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Ce spun părinții
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Feedback-ul familiilor noastre este cea mai mare recunoaștere a muncii
            noastre.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12"
          >
            <Quote size={48} className="text-mazo-green/30 mb-6" />

            <p className="text-xl md:text-2xl font-light leading-relaxed mb-8">
              "{testimonials[activeIndex].content}"
            </p>

            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <div className="font-medium text-lg">{testimonials[activeIndex].name}</div>
                <div className="text-gray-400">{testimonials[activeIndex].role}</div>
              </div>
              <div className="flex gap-1">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400" fill="currentColor" />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'bg-mazo-green w-8'
                    : 'bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
