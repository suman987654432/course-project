import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import './index.css' 
import LandingPage from "./pages/LandingPage"
import BlogPage from "../src/pages/BlogPage"

const App = () => {
  return (
   <>
   <BrowserRouter>
   <Routes>
     <Route path="/" element={<LandingPage />} /> 
     <Route path="/login" element={<Login />} />
      <Route path="/blogspage" element={<BlogPage />} />
   </Routes>
   </BrowserRouter>
   </>
  )
}

export default App