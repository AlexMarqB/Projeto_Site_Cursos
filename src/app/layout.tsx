import type { Metadata } from 'next'
import { Sidebar } from '@/Components/sidebar'
import { Poppins } from 'next/font/google'
import { Header } from '@/Components/mobile/components/header'
import { Footer } from '@/Components/mobile/components/footer'
import './globals.css'

const poppins = Poppins({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'Learnhub'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="antialiased">
      <body className={`${poppins.className}`}>
        <div className='lg:grid lg:grid-cols-app flex flex-col min-h-screen min-w-screen'>
          <div className='hidden lg:block'>
          <Sidebar/>
          </div>
          <div className='lg:hidden'>
          <Header />
          </div>
          <main className='px-8 pb-12 pt-8 bg-zinc-800 min-h-full'>
            {children}
          </main>
          <div className='lg:hidden'>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}