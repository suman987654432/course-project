import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import './index.css' 
import LandingPage from "./pages/LandingPage"
import BlogPage from "./pages/BlogPage"  
import CoursePage from "./pages/CoursePage"
import CourseDetailPage from "./pages/CourseDetailPage"
import MembershipPage from "./pages/MembershipPage"
import CheckOutPage from "./pages/CheckOutPage"
import BlogDetailPage from "./pages/BlogDetailPage"
import CareersPage from "./pages/CareersPage"
import SearchPage from "./pages/SearchPage"
import LiteratureCoursePage from "./pages/LiteratureCoursePage"
import Calender1Page from "./pages/Calender1Page"
import Calender2Page from "./pages/Calender2Page"
import Calender3Page from "./pages/Calender3Page"
const App = () => {
  return (
   <>
   <Routes>
     <Route path="/" element={<LandingPage />} /> 
     <Route path="/login" element={<Login />} />
     <Route path="/blogspage" element={<BlogPage />} />
     <Route path="/courses" element={<CoursePage />} />
     <Route path="/course-detail/:title" element={<CourseDetailPage />} />
     <Route path="/membership" element={<MembershipPage />} />
     <Route path="/checkout" element={<CheckOutPage />} />
     <Route path="/blogdetail" element={<BlogDetailPage />} />
     <Route path="/careers" element={<CareersPage />} />
     <Route path="/search" element={<SearchPage />} />
     <Route path="/about" element={<LiteratureCoursePage />} />
     <Route path="/calender1" element={<Calender1Page />} />
     <Route path="/calender2" element={<Calender2Page />} />
     <Route path="/calender3" element={<Calender3Page />} />
   </Routes>
   </>
  )
}

export default App