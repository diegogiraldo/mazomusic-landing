'use client'

import { motion } from 'framer-motion'
import { Camera } from 'lucide-react'
import Image from 'next/image'

const images = [
  '/images/gallery/585110917_18431388901104126_4069223916877865583_n.jpg',
  '/images/gallery/588702727_18432102331104126_2059678183996744615_n.jpg',
  '/images/gallery/588729612_18431875210104126_5790762159577477287_n.jpg',
  '/images/gallery/588741579_18432868141104126_6870739496512330359_n.jpg',
  '/images/gallery/589243578_18433765369104126_4660939626528537681_n.jpg',
  '/images/gallery/589744914_18432113911104126_6476806880616137739_n.jpg',
  '/images/gallery/598146732_18433768498104126_1972284147066125857_n.jpg',
  '/images/gallery/598150351_18433768165104126_3451718325131525554_n.jpg',
  '/images/gallery/598611794_18433565098104126_2137455495994846257_n.jpg',
  '/images/gallery/600955359_1436648481800275_3080660869012872171_n.jpg',
  '/images/gallery/600983137_1436651115133345_5552111340926361101_n.jpg',
  '/images/gallery/601476107_1440168341448289_3844633712055369762_n.jpg',
  '/images/gallery/602900394_1440168348114955_6216089459931500176_n.jpg',
  '/images/gallery/602924009_1440168351448288_6327621167646515096_n.jpg',
  '/images/gallery/603754550_1440168354781621_6746239674158332685_n.jpg',
]

export default function Gallery() {
  return (
    <section className="bg-black py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white/80 text-sm mb-6">
            <Camera size={16} />
            Galerie foto
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Momente din academia noastră
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-4">
            Fiecare fotografie spune o poveste de pasiune, dedicare și bucurie muzicală
          </p>
          <span className="text-mazo-pink font-semibold text-lg">#MazoMusicMoments</span>
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {images.map((src, index) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="break-inside-avoid group relative overflow-hidden rounded-2xl"
            >
              <div className="relative aspect-[3/4]">
                <Image
                  src={src}
                  alt={`Mazo Music Academy - Foto ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* YouTube CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.youtube.com/@mazomusicchannel"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            Vezi mai multe pe YouTube
          </a>
        </motion.div>
      </div>
    </section>
  )
}
