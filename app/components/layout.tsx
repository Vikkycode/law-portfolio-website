import React from 'react'
import Navbar from './common/Navbar'
import Footer from './common/Footer'
import NewsLetter from './common/NewsLetter'
export const Layout = ({
    children,
  }: {
    children: React.ReactNode
  }) => {  
    return (
    <>
    <Navbar />
    <main>{children}</main>
    <NewsLetter />
    <Footer />
    </>
  )
}
