import{Nunito} from "next/font/google";
import './globals.css'
import Navbar from "./components/navbar/Navbar";
import RentModal from "./components/modals/RentModal";
export const metadata = {
  title: 'airbnb',
  description: 'airbnb test',
}

const font = Nunito({subsets:["latin"]})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={font.className}>
         
         <Navbar/>
		<RentModal />
        {children}
        
        </body>
    </html>
  )
}
