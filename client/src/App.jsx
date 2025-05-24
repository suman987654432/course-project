import { HashRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import './index.css' 
import LandingPage from "./pages/LandingPage"
import BlogPage from "./pages/BlogPage"  // Fixed the import path

const App = () => {
  return (
   <>
   <HashRouter>
   <Routes>
     <Route path="/" element={<LandingPage />} /> 
     <Route path="/login" element={<Login />} />
     <Route path="/blogspage" element={<BlogPage />} />
   </Routes>
   </HashRouter>
   </>
  )
}

export default App