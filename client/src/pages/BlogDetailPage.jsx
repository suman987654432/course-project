import Hero from "../components/blogdetail/Hero"
import CommonNavbar from '../components/commonNav/CommonNavbar'
import Blogs from "../components/Blog/Blogs"
import Footer from "../components/Footer"
const BlogDetailPage = () => {
  return (
   <>
   <CommonNavbar />
   <div className="w-full max-w-[1920px] mx-auto overflow-x-hidden">
     <Hero/>
     <Blogs />
   </div>
   <Footer/>
   </>
  )
}

export default BlogDetailPage