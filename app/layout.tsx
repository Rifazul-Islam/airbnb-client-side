import{Nunito} from "next/font/google";
import './globals.css'
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import RegisterModal from "./components/Modals/RegisterModal";
import ToasterProvider from "./provider/ToasterProvider";
import LoginModal from "./components/Modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";

export const metadata = {
  title: 'airbnb',
  description: 'airbnb test',
}

const font = Nunito({subsets:["latin"]})

export default async function  RootLayout({

  children,

}: {

  children: React.ReactNode
}) {

    const currentUser = await getCurrentUser();
  return (
    <html lang="en">

      <body className={font.className}>
         
        <ClientOnly>
          
        <ToasterProvider/>

        <LoginModal/>
        <RegisterModal/>
        <Navbar currentUser={currentUser} />

        </ClientOnly>

        

         <Navbar/>
	
        {children}
        
        </body>
    </html>
  )
}
