// Facebook/Meta Pixel Tracking
// Pixel ID: 421547945739095

export const FB_PIXEL_ID = '421547945739095'

// Declaración de tipos para fbq
declare global {
  interface Window {
    fbq: (
      command: 'init' | 'track' | 'trackCustom',
      eventOrId: string,
      params?: Record<string, unknown>
    ) => void
    _fbq: unknown
  }
}

// Verificar si fbq está disponible
export const isFbqAvailable = (): boolean => {
  return typeof window !== 'undefined' && typeof window.fbq === 'function'
}

// Enviar evento Lead cuando el usuario completa el formulario
export const sendFacebookLead = (userData: {
  name: string
  city: string
  instrument: string
  age: string
}) => {
  if (!isFbqAvailable()) {
    console.warn('Facebook Pixel not available')
    return
  }

  // Evento Lead estándar de Facebook
  window.fbq('track', 'Lead', {
    content_name: `Inscripción ${userData.instrument}`,
    content_category: userData.instrument,
    city: userData.city,
    value: 1.0,
    currency: 'RON',
  })
}

// Evento PageView (se llama automáticamente al cargar)
export const pageview = () => {
  if (!isFbqAvailable()) return
  window.fbq('track', 'PageView')
}
