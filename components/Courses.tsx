'use client'

import { motion } from 'framer-motion'
import { Guitar, Mic2, Piano } from 'lucide-react'

const courses = [
  {
    icon: Guitar,
    title: 'Chitară',
    description:
      'De la acorduri de bază până la tehnici avansate. Chitară clasică și acustică pentru toate nivelurile.',
    features: ['Chitară clasică', 'Chitară acustică', 'Lecții individuale', 'Toate nivelurile'],
  },
  {
    icon: Mic2,
    title: 'Canto',
    description:
      'Dezvoltă-ți vocea și încrederea pe scenă. Tehnici vocale profesionale adaptate pentru copii.',
    features: ['Tehnică vocală', 'Interpretare', 'Pregătire scenă', 'Repertoriu variat'],
  },
  {
    icon: Piano,
    title: 'Pian',
    description:
      'Descoperă magia clapelor. De la note simple la piese complexe, într-un mod distractiv.',
    features: ['Pian clasic', 'Keyboard', 'Teorie muzicală', 'Lecții practice'],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export default function Courses() {
  return (
    <section id="cursuri" className="section-padding bg-gray-50">
      <div className="container-custom mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-mazo-pink/10 text-mazo-pink rounded-full text-sm font-medium mb-4">
            Ce oferim
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Cursurile noastre
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Alegem cu grijă metodele de predare pentru a face din muzică o experiență
            captivantă și educativă.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {courses.map((course) => (
            <motion.div
              key={course.title}
              variants={itemVariants}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="w-16 h-16 bg-mazo-green/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-mazo-green group-hover:text-white transition-colors duration-300">
                <course.icon size={32} className="text-mazo-green group-hover:text-white transition-colors duration-300" />
              </div>

              <h3 className="font-display text-2xl font-bold mb-3">{course.title}</h3>
              <p className="text-gray-600 mb-6">{course.description}</p>

              <ul className="space-y-2">
                {course.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 bg-mazo-green rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
