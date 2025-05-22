import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Success from '../components/Success'
import AllinOne from '../components/AllinOne'
import Totc from '../components/Totc'
import Classroom from '../components/Classroom'
import Features from '../components/Features'

const LandingPage = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Success />
            <AllinOne/>
            <Totc/>
            <Classroom/>
            <Features/>
            

        </>
    )
}

export default LandingPage