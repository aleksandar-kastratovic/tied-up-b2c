import { CartContextProvider } from "./api/cartContext";
import "./globals.css";
import Script from "next/script";
import "react-toastify/dist/ReactToastify.css";
import Footer from "@/components/Footer/Footer";
import NavigationMobile from "@/components/Navigation/NavigationMobile";
import { UserProvider } from "@/context/userContext";
import CookieAlert from "@/components/CookieAlert/CookieAlert";
import Header from "@/components/Header/Header";

import { QueryProvider } from "@/components/QueryProvider";
import { ToastContainer } from "react-toastify";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel={`stylesheet`}
          href={`https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css`}
        />

        <Script
          src={`https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/js/regular.js`}
        ></Script>
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="relative">
        <UserProvider>
          <CartContextProvider>
            <QueryProvider>
              <Header />
              <NavigationMobile />
              {children}
              <Footer />
              <CookieAlert />
              <ToastContainer />
            </QueryProvider>
          </CartContextProvider>
        </UserProvider>
      </body>
    </html>
  );
}

export const metadata = {
  title: "Početna | Tied up",
  description: "Dobrodošli na Tied up Online Shop",
  robots: "index, follow",
  openGraph: {
    title: "Početna | Tied up",
    description: "Dobrodošli na Tied up Online Shop",
    type: "website",
    url: "https://tiedup.com",
    image: "https://ibb.co/8srntZv",
    site_name: "tiedup.com",
    locale: "sr_RS",
  },
};
