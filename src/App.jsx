import { Link } from "react-router-dom"
import Home from "./Sections/Home"
import Header from "./Componants/Header/Header"
import About from "./Sections/About"
import Skill from "./Sections/Skill"
import Project from "./Sections/Project"
import Contact from "./Sections/Contact"
import { Box } from "@chakra-ui/react"


function App() {


  return (
    <>
      <Box >
        <Header />
        <Box padding={{base : "0 10%", sm : "0 10%", md : "0 10%" }} >
          <Home />
          <About />
          <Skill />
          <Project />
         
          <Contact />
        </Box>

      </Box>


    </>
  )
}

export default App
