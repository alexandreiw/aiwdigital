import type { Metadata } from 'next'
import { Chakra_Petch } from 'next/font/google'
import './globals.css'

const chakraPetch = Chakra_Petch({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Aiw Digital | Transformando ideias em realidade digital',
  description: 'Transformando ideias em realidade digital',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={chakraPetch.className}>{children}</body>
    </html>
  )
}
