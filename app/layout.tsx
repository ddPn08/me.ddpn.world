import './globals.scss'

import { Header } from '@/components/header'
import { Metadata } from 'next'
import { Zen_Kaku_Gothic_New } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader'

const zen_kaku_gothic_new = Zen_Kaku_Gothic_New({ weight: '700', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'I am ddPn08',
  description: "ddPn08's portfolio site",
  openGraph: {
    images: ['https://me.ddpn.world/favicon.png'],
  },
  icons: {
    apple: 'apple-touch-icon.png',
  },
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ja">
      <head>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="ddpn08" />
      </head>
      <body className={zen_kaku_gothic_new.className}>
        <NextTopLoader />
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}

export default RootLayout
