import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import './index.css' 

const App = () => {
  return (
   <>
   <BrowserRouter>
   <Routes>
     <Route path="/" element={<Login />} />
   </Routes>
   </BrowserRouter>
   </>
  )
}

export default App