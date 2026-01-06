// Google Ads Conversion Tracking con Enhanced Conversions
// ID de cuenta: AW-971031919

export const GA_ADS_ID = 'AW-971031919'

// Conversion Label de Google Ads
export const CONVERSION_LABEL = 'CiMHCLW4kN4bEO-Kg88D'

// Conversion ID completo (ID + Label)
export const CONVERSION_ID = `${GA_ADS_ID}/${CONVERSION_LABEL}`

// Declaración de tipos para gtag
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void
    dataLayer: unknown[]
  }
}

// Verificar si gtag está disponible
export const isGtagAvailable = (): boolean => {
  return typeof window !== 'undefined' && typeof window.gtag === 'function'
}

// Enviar evento de conversión con Enhanced Conversions
export const sendConversion = (userData: {
  name: string
  city: string
  instrument: string
  age: string
}) => {
  if (!isGtagAvailable()) {
    console.warn('Google Tag not available')
    return
  }

  // Enviar conversión con datos mejorados
  window.gtag('event', 'conversion', {
    send_to: CONVERSION_ID,
    value: 1.0,
    currency: 'RON',
    // Enhanced Conversion Data - Google hashea automáticamente estos datos
    // cuando está habilitado en la configuración de Google Ads
    user_data: {
      // Datos del formulario disponibles
      address: {
        city: userData.city,
        country: 'RO',
      },
    },
    // Datos adicionales para reporting
    event_callback: () => {
      console.log('Conversion sent successfully')
    },
  })

  // También enviar como evento personalizado para Analytics
  window.gtag('event', 'generate_lead', {
    event_category: 'engagement',
    event_label: `${userData.instrument} - ${userData.city}`,
    value: 1,
    custom_parameters: {
      student_name: userData.name,
      student_age: userData.age,
      city: userData.city,
      instrument: userData.instrument,
    },
  })
}

// Configurar enhanced conversions globalmente
export const configureEnhancedConversions = () => {
  if (!isGtagAvailable()) return

  window.gtag('set', 'user_data', {
    address: {
      country: 'RO',
    },
  })
}
