import IntroTracker from './components/IntroTracker'
import ReduxProvider from './components/ReduxProvider'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Aaryan Shaik",
  description: "I am a Frontend Developer passionate about building seamless, dynamic, and visually stunning web experiences.",
  openGraph: {
    title: "Aaryan Shaik",
    description: "I am a Frontend Developer passionate about building seamless, dynamic, and visually stunning web experiences.",
    url: "https://can-i-code.vercel.app/",
    type: "website",
    images: [
      {
        url: "https://raw.githubusercontent.com/AaryanShaikh/My-Stock/refs/heads/main/portfolio2023/meta.gif",
        width: 1200,
        height: 630,
        alt: "Aaryan Shaik's Portfolio Image"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Aaryan Shaik",
    description: "I am a Frontend Developer passionate about building seamless, dynamic, and visually stunning web experiences.",
    images: [
      "https://raw.githubusercontent.com/AaryanShaikh/My-Stock/refs/heads/main/portfolio2023/meta.gif"
    ]
  }
};

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
