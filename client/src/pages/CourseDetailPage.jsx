
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
  <DetailHero/>
  <CourseMarketing/>
  <Classroom/>
  <Offer/>
  <Footer/>
   </>
  )
}

export default CourseDetailPage