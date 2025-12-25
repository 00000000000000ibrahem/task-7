import { Cormorant_Garamond } from 'next/font/google'

const frenchFont = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-french',
})
export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="font-french min-h-screen">
      {children}
    </section>
  )
}