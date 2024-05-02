import type { Metadata } from "next"
import { Chakra_Petch, Orbitron } from "next/font/google"
import "./globals.css"

const chakraPetch = Chakra_Petch({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-chakra-petch",
})

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-orbitron",
})

export const metadata: Metadata = {
  title: "Aiw Digital | Transformando ideias em realidade digital",
  description: "Transformando ideias em realidade digital",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-br"
      className={`${chakraPetch.variable} ${orbitron.variable}`}
    >
      <body className={chakraPetch.className}>{children}</body>
    </html>
  )
}
