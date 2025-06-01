import Classroom from '../components/Classroom'
import CommonNavbar from '../components/commonNav/CommonNavbar'
import CourseMarketing from '../components/coursedetail/CourseMarketing'
import DetailHero from '../components/coursedetail/DetailHero'
import Offer from '../components/coursedetail/Offer'
import Footer from '../components/Footer'

const CourseDetailPage = () => {
  return (
   <>
  <CommonNavbar/>
  <div className="w-full max-w-[1920px] mx-auto overflow-x-hidden">
    <DetailHero/>
    <div className="px-4 md:px-6 lg:px-8">
      <CourseMarketing/>
      <Classroom/>
      <Offer/>
    </div>
  </div>
  <Footer/>
   </>
  )
}

export default CourseDetailPage