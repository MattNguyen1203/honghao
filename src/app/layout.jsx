import {Londrina_Solid} from 'next/font/google'
import './globals.css'
import localFont from 'next/font/local'
import NextTopLoader from 'nextjs-toploader'
import {Toaster} from '@/components/ui/sonner'
const londrina = Londrina_Solid({
  display: 'swap',
  weight: ['100', '300', '400', '900'],
  variable: '--font-londrina-solid',
  subsets: ['latin'],
})

const tripsans = localFont({
  src: [
    {
      path: './font/trip-sans.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './font/trip-sans-medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './font/trip-sans-bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './font/trip-sans-ultra.otf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-trip-sans',
  display: 'swap',
})

export const metadata = {
  title: 'Hong Hao Travel',
  description: 'Generated by create Dev Okhub',
}
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}
export default function RootLayout({children}) {
  return (
    <html
      lang='en'
      className=''
    >
      <head>
        <meta
          name='google-site-verification'
          content='SvsjgzIy8C28C7KWsHAmy8Sa5w37npYRpaeAOpIemyo'
        />
      </head>
      <body
        className={` ${tripsans.className} ${tripsans.variable} ${londrina.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <NextTopLoader
          color='#E64827'
          initialPosition={0.08}
          crawlSpeed={200}
          height={5}
        />
        <Toaster />
        {children}
      </body>
    </html>
  )
}
