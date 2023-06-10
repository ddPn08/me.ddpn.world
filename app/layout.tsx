import './globals.scss'

import { Header } from '@/components/header'
import { Zen_Kaku_Gothic_New } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader'

const zen_kaku_gothic_new = Zen_Kaku_Gothic_New({ weight: '700', subsets: ['latin'] })

export const metadata = {
  title: 'I am ddPn08',
  description: "ddPn08's portfolio site",
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ja">
      <body className={zen_kaku_gothic_new.className}>
        <NextTopLoader />
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}

export default RootLayout
