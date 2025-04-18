import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import {ChatProvider} from "@/context/app_context"
const outfit = Outfit({ subsets: ['latin'], weight: ["300", "400", "500"] })


export const metadata: Metadata = {
  title: "nextshop",
  description: "world number one marketplace for all kinds of electronics.",
  icons:{
    icon:'/'
  } 
}

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className}  antialiased`} >
        <ChatProvider>
          <div className="3xl:container mx-auto bg-white">
              {children}
          </div>
        </ChatProvider>
      </body>
    </html>
  );
}
