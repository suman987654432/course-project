import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import './index.css' 
import LandingPage from "./pages/LandingPage"

const App = () => {
  return (
   <>
   <BrowserRouter>
   <Routes>
     <Route path="/login" element={<Login />} />
     <Route path="/" element={<LandingPage />} />
   </Routes>
   </BrowserRouter>
   </>
  )
}

export default App