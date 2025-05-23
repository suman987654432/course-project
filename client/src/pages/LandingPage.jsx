import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Success from '../components/Success'
import AllinOne from '../components/AllinOne'
import Totc from '../components/Totc'
import Classroom from '../components/Classroom'
import Features from '../components/Features/Features'
import Testimonals from '../components/Testimonals'
import Resourse from '../components/News/Resourse'
import Footer from '../components/Footer'


const LandingPage = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Success />
            <AllinOne />
            <Totc />
            <Classroom />
            <Features />
            <Testimonals />
            <Resourse />
            <Footer />


        </>
    )
}

export default LandingPage