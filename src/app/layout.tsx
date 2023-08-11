import './globals.css'
import type { Metadata } from 'next'
import { Providers } from "./providers";
import { Inter } from 'next/font/google'
import Footer from './components/Footer';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EcoScript',
  description: 'EcoScript (.ecs) is a python based programming language designed with sustainability in mind.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
       <body>
        <Providers >
          {children}
        </Providers>
        <Footer />
      </body>
    </html>
  )
}
