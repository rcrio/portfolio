import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import AboutMe from "./pages/AboutMe"
import Projects from "./pages/Projects"
import Experience from "./pages/Experience"
import Education from "./pages/Education"


// home -> include linkedin github (maybe discord) logos
    // coming soon...? will be my dev blog for making my game....
    
function App() {
  return (

    
    
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App