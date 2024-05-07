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
        <div>{children}</div>
        </body>
    </html>
  )
}

export default MainLayout