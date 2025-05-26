import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import './index.css' 
import LandingPage from "./pages/LandingPage"
import BlogPage from "./pages/BlogPage"  
import CoursePage from "./pages/CoursePage"
import CourseDetailPage from "./pages/CourseDetailPage"
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
   </Routes>
   </BrowserRouter>
   </>
  )
}

export default App