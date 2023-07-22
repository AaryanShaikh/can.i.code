import IntroTracker from './components/IntroTracker'
import ReduxProvider from './components/ReduxProvider'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Aaryan\'s Portfolio',
  description: 'Created with Next.js by Aaryan with ❤️',
}

export default function RootLayout({ children }) {
  return (<>
    <html lang="en">
      <body className={inter.className} >
        <ReduxProvider>
          <IntroTracker />
          {children}
        </ReduxProvider>
      </body>
    </html>
  </>
  )
}
