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
      <Pricing />
      <Course5 />
      <FAQ />
      <Students />
      <Download/>
      <Laptop/>
      <Footer/>
    </>
  )
}

export default MembershipPage