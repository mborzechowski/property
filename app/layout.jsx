import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import '@/assets/styles/globals.css'

export const metadata = {
    title: 'ProportyPulse | Find The Perfect Rental',
    description: 'Find The Perfect Rental',
    keywords: 'rental, find rentals, find properties'
}

const MainLayout = ({children}) => {
  return (
    <html lang="PL">
        <body>
          <Navbar/>
        <main>{children}</main>
        <Footer />
        </body>
    </html>
  )
}

export default MainLayout