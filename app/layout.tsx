import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/common/Navbar'
import NewsLetter from './components/common/NewsLetter'
import Footer from './components/common/Footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Law Portfolio Website',
  description: 'Created by nextjs,typescript,tailwindcss',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <NewsLetter />
        <Footer />
        </body>
    </html>
  )
}
