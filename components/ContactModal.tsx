'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, MessageCircle, User, Calendar, MapPin, Music } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useModal } from '@/context/ModalContext'

const cities = ['Năvodari', 'Constanța', 'Hârșova', 'Valu lui Traian', 'Cernavodă']
const instruments = [
  { value: 'chitara', label: 'Chitară' },
  { value: 'pian', label: 'Pian' },
  { value: 'canto', label: 'Canto' },
  { value: 'nedecis', label: 'Nu sunt decis încă' },
]

export default function ContactModal() {
  const { isOpen, preselectedCity, closeModal } = useModal()

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    city: '',
    instrument: '',
  })

  const [errors, setErrors] = useState<Record<string, boolean>>({})

  // Update city when preselectedCity changes
  useEffect(() => {
    if (preselectedCity) {
      setFormData(prev => ({ ...prev, city: preselectedCity }))
    }
  }, [preselectedCity])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validate
    const newErrors: Record<string, boolean> = {}
    if (!formData.name.trim()) newErrors.name = true
    if (!formData.age.trim()) newErrors.age = true
    if (!formData.city) newErrors.city = true
    if (!formData.instrument) newErrors.instrument = true

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    // Build WhatsApp message
    const instrumentLabel = instruments.find(i => i.value === formData.instrument)?.label || formData.instrument
    const message = `Bună! Aș dori să înscriu un elev la cursuri de muzică.

📋 *Detalii înscriere:*
👤 Nume: ${formData.name}
🎂 Vârstă: ${formData.age} ani
📍 Oraș: ${formData.city}
🎵 Instrument: ${instrumentLabel}

Aștept mai multe informații, mulțumesc!`

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/40770560424?text=${encodedMessage}`

    window.open(whatsappUrl, '_blank')
    closeModal()

    // Reset form
    setFormData({ name: '', age: '', city: '', instrument: '' })
    setErrors({})
  }

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: false }))
    }
  }

  const handleClose = () => {
    closeModal()
    setFormData({ name: '', age: '', city: '', instrument: '' })
    setErrors({})
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
          >
            <div className="bg-zinc-900 rounded-3xl w-full max-w-md p-8 relative border border-white/10 my-8">
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 text-white/60 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              {/* Header */}
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-mazo-pink/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Music size={32} className="text-mazo-pink" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">Înscrie-te acum</h2>
                <p className="text-white/60">Completează formularul și te vom contacta imediat</p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    <User size={14} className="inline mr-2" />
                    Numele elevului
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    placeholder="ex: Maria Popescu"
                    className={`w-full bg-white/5 border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-mazo-pink transition-colors`}
                  />
                </div>

                {/* Age */}
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    <Calendar size={14} className="inline mr-2" />
                    Vârsta
                  </label>
                  <input
                    type="number"
                    value={formData.age}
                    onChange={(e) => handleChange('age', e.target.value)}
                    placeholder="ex: 8"
                    min="3"
                    max="99"
                    className={`w-full bg-white/5 border ${errors.age ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-mazo-pink transition-colors`}
                  />
                </div>

                {/* City */}
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    <MapPin size={14} className="inline mr-2" />
                    Orașul
                  </label>
                  <select
                    value={formData.city}
                    onChange={(e) => handleChange('city', e.target.value)}
                    className={`w-full bg-white/5 border ${errors.city ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-mazo-pink transition-colors appearance-none cursor-pointer`}
                  >
                    <option value="" className="bg-zinc-900">Selectează orașul</option>
                    {cities.map(city => (
                      <option key={city} value={city} className="bg-zinc-900">{city}</option>
                    ))}
                  </select>
                </div>

                {/* Instrument */}
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    <Music size={14} className="inline mr-2" />
                    Instrumentul dorit
                  </label>
                  <select
                    value={formData.instrument}
                    onChange={(e) => handleChange('instrument', e.target.value)}
                    className={`w-full bg-white/5 border ${errors.instrument ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-mazo-pink transition-colors appearance-none cursor-pointer`}
                  >
                    <option value="" className="bg-zinc-900">Selectează instrumentul</option>
                    {instruments.map(inst => (
                      <option key={inst.value} value={inst.value} className="bg-zinc-900">{inst.label}</option>
                    ))}
                  </select>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#25D366] text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 mt-6 hover:bg-[#20BD5A] transition-colors"
                >
                  <MessageCircle size={20} />
                  Continuă pe WhatsApp
                </motion.button>
              </form>

              {/* Footer note */}
              <p className="text-white/40 text-xs text-center mt-4">
                Datele tale sunt în siguranță și nu vor fi partajate cu terți.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
