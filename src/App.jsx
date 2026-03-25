import { BrowserRouter , Routes, Route,Navigate } from "react-router-dom"
import Signup from "./components/Signup"
import Home from "./pages/Home"
import Login from "./components/Login"

function App() {

  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    

    
  
  )
}

export default App
