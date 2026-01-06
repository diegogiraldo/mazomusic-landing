'use client'

import Script from 'next/script'
import { GA_ADS_ID } from '@/lib/gtag'

export default function GoogleAnalytics() {
  return (
    <>
      {/* Google Tag (gtag.js) - Google Ads */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ADS_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          // Configuración de Google Ads con Enhanced Conversions habilitado
          gtag('config', '${GA_ADS_ID}', {
            allow_enhanced_conversions: true
          });
        `}
      </Script>
    </>
  )
}
