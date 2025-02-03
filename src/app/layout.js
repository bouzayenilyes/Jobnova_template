import { Plus_Jakarta_Sans } from 'next/font/google'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./assets/scss/style.scss"
import "./assets/css/materialdesignicons.min.css"

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight:["200","300","400","500","600","700","800"],
  variable: '--font-jakarta',
  })

export const metadata = {
  title: 'Jobnova - Next Js Job Board & Job Portal Template',
  description: 'Jobnova - Next Js Job Board & Job Portal Template',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jakarta.variable}>{children}</body>
    </html>
  )
}
