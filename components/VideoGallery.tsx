'use client'

import { motion } from 'framer-motion'
import { Play, Youtube, ExternalLink } from 'lucide-react'
import { useState } from 'react'

const videos = [
  {
    id: '1',
    title: 'Elevii noștri în concert',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    youtubeId: 'dQw4w9WgXcQ', // Replace with actual video IDs
  },
  {
    id: '2',
    title: 'Lecție de chitară',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    youtubeId: 'dQw4w9WgXcQ',
  },
  {
    id: '3',
    title: 'Spectacol de final de an',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    youtubeId: 'dQw4w9WgXcQ',
  },
  {
    id: '4',
    title: 'Cover interpretat de elevi',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    youtubeId: 'dQw4w9WgXcQ',
  },
]

export default function VideoGallery() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null)

  return (
    <section id="galerie" className="section-padding bg-gray-50">
      <div className="container-custom mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-red-500/10 text-red-500 rounded-full text-sm font-medium mb-4">
            <Youtube size={16} className="inline mr-1" />
            Galerie video
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Muzica în acțiune
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Urmărește progresul și talentul elevilor noștri în videoclipurile de pe
            canalul nostru de YouTube.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative aspect-video rounded-2xl overflow-hidden bg-gray-200 cursor-pointer"
              onClick={() => setActiveVideo(video.youtubeId)}
            >
              {activeVideo === video.youtubeId ? (
                <iframe
                  src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              ) : (
                <>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                  <div className="absolute inset-0 bg-mazo-dark/20 flex items-center justify-center z-20 group-hover:bg-mazo-dark/40 transition-colors">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                      <Play size={28} className="text-mazo-dark ml-1" fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 z-20">
                    <p className="text-white font-medium text-lg">{video.title}</p>
                  </div>
                  {/* Placeholder for thumbnail */}
                  <div className="w-full h-full bg-gradient-to-br from-mazo-green/20 to-mazo-pink/20 flex items-center justify-center">
                    <span className="text-6xl opacity-20">🎵</span>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="https://www.youtube.com/@mazomusicchannel"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-mazo-dark hover:text-mazo-green transition-colors font-medium"
          >
            Vezi toate videoclipurile pe YouTube
            <ExternalLink size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
