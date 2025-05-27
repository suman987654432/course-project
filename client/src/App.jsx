import { BrowserRouter, Route, Routes } from "react-router-dom"
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
const App = () => {
  return (
   <>
   <BrowserRouter>
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
     
   </Routes>
   </BrowserRouter>
   </>
  )
}

export default App