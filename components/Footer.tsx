'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Youtube, Instagram, Facebook } from 'lucide-react'

const footerLinks = {
  cursuri: [
    { name: 'Chitară', href: '#cursuri' },
    { name: 'Pian', href: '#cursuri' },
    { name: 'Canto', href: '#cursuri' },
  ],
  locatii: [
    { name: 'Constanța', href: '#locatii' },
    { name: 'Năvodari', href: '#locatii' },
    { name: 'Hârșova', href: '#locatii' },
    { name: 'Valu lui Traian', href: '#locatii' },
    { name: 'Cernavodă', href: '#locatii' },
  ],
  navigare: [
    { name: 'Acasă', href: '#' },
    { name: 'Despre noi', href: '#despre' },
    { name: 'Galerie', href: '#galerie' },
    { name: 'Contact', href: '#contact' },
  ],
}

const socialLinks = [
  { name: 'YouTube', icon: Youtube, href: 'https://www.youtube.com/@mazomusicchannel' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'Facebook', icon: Facebook, href: '#' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-gray-50 pt-16 pb-8">
      <div className="container-custom mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-mazo-dark rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="font-display text-2xl font-bold">Mazo Music</span>
            </a>
            <p className="text-gray-600 mb-6">
              Academia de muzică pentru copii. Descoperă talentul în tine!
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-mazo-green hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Cursuri */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h4 className="font-display text-lg font-bold mb-4">Cursuri</h4>
            <ul className="space-y-3">
              {footerLinks.cursuri.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-mazo-green transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Locații */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <h4 className="font-display text-lg font-bold mb-4">Locații</h4>
            <ul className="space-y-3">
              {footerLinks.locatii.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-mazo-green transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <h4 className="font-display text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://wa.me/40770560424"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-600 hover:text-mazo-green transition-colors"
                >
                  <Phone size={18} />
                  0770.560.424
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@mazomusic.com"
                  className="flex items-center gap-3 text-gray-600 hover:text-mazo-green transition-colors"
                >
                  <Mail size={18} />
                  contact@mazomusic.com
                </a>
              </li>
              <li>
                <span className="flex items-start gap-3 text-gray-600">
                  <MapPin size={18} className="mt-1 flex-shrink-0" />
                  Constanța, România
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} Mazo Music Academy. Toate drepturile rezervate.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-mazo-green transition-colors">
                Politica de confidențialitate
              </a>
              <a href="#" className="text-gray-500 hover:text-mazo-green transition-colors">
                Termeni și condiții
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
