import React from 'react'
import Pricing from '../components/Membership/Pricing'
import CommonNavbar from '../components/commonNav/CommonNavbar'
import Course5 from "../components/Course/Course5"
import FAQ from '../components/Membership/FAQ'
import Students from '../components/Membership/Students'
import Download from '../components/Membership/Download'
import Footer from '../components/Footer'
import Laptop from '../components/Membership/Laptop'

const MembershipPage = () => {
  return (
    <>
      <CommonNavbar />
      <div className="w-full max-w-[1920px] mx-auto overflow-x-hidden px-4 md:px-6 lg:px-8">
        <Pricing />
        <Course5 />
        <FAQ />
        <Students />
        <Download/>
        <Laptop/>
      </div>
      <Footer/>
    </>
  )
}

export default MembershipPage