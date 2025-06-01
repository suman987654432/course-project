import CommonNavbar from '../components/commonNav/CommonNavbar'
import Button from '../components/LiteratureCourse/Button'
import HeroSection from '../components/LiteratureCourse/HeroSection'
import LiteratureCourse from '../components/LiteratureCourse/LiteratureCourse'
import Footer from '../components/Footer'

const LiteratureCoursePage = () => {
  return (
    <>
    <CommonNavbar />
    <div className="w-full max-w-[1920px] mx-auto overflow-x-hidden px-4 md:px-6 lg:px-8">
      <HeroSection/>
      <Button/>
      <LiteratureCourse/>
    </div>
    <Footer/>
    </>
  )
}

export default LiteratureCoursePage