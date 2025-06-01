import CommonNavbar from '../components/commonNav/CommonNavbar'
import Course1 from '../components/Course/Course1'
import Course2 from '../components/Course/Course2'
import Course3 from '../components/Course/Course3'
import Course4 from '../components/Course/Course4'
import Course5 from '../components/Course/Course5'
import Course6 from '../components/Course/Course6'
import Course7 from '../components/Course/Course7'
import Footer from '../components/Footer'

const CoursePage = () => {
  return (
   <>
    <CommonNavbar />
    <div className="w-full max-w-[1920px] mx-auto overflow-x-hidden px-4 md:px-6 lg:px-8">
      <Course1 />
      <Course2 />
      <Course3 />
      <Course4 />
      <Course5 />
      <Course6 />
      <Course7 />
    </div>
    <Footer/>
   </>
  )
}

export default CoursePage