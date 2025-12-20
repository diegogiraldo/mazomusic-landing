'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { useModal } from '@/context/ModalContext'

export default function WhatsAppButton() {
  const { openModal } = useModal()

  return (
    <motion.button
      onClick={() => openModal()}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 transition-shadow group"
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle size={28} className="text-white" fill="white" />

      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
    </motion.button>
  )
}
