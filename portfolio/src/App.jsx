import HomePage from "./pages/HomePage"
import { Box } from "@chakra-ui/react"
import { Routes, Route, Navigate } from "react-router-dom"  
import Navbar from "./components/NavBar"  
import Footer from "./components/Footer"
import AboutMe from "./pages/SobreMi"
import FeaturedProjects from "./pages/Proyectos"
import Services from "./pages/Servicios"
import Contacto from "./pages/Contacto"

function App() {
return (
    <Box overflowX="hidden" overflowY="hidden">
       <Navbar/>   
       <Routes>
       <Route path="/" element={<HomePage/>} />
       <Route path="/about" element={<AboutMe/>} />
       <Route path="/projects" element={<FeaturedProjects/>} />
       <Route path="/services" element={<Services/>} />
       <Route path="/contact" element={<Contacto/>} />
       contact
       <Route
          path='*'
          element={<Navigate to='/' />}
        />
        </Routes>
      
      <Footer/>
      </Box>
  )
}

export default App