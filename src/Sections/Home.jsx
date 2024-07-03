import React from 'react'
import TypeWriter from '../Componants/TypeWriter'
import { Heading, Box, Text } from '@chakra-ui/react'

function Home() {
  return (
    <>
 <Box 
      id='home' 
      textAlign="center" 
      padding={{ base: "100px 0 0 0", md: "18% 0 0 0" }} 
      width="100%" 
      maxWidth="1200px" 
      margin="0 auto"
    >
      <Heading 
        padding={4} 
        as='h3' 
        size='2xl' 
        fontFamily="sans-serif"
        fontSize={{ base: '2xl', md: '3xl' }}
      >
        Hi &#x1F44B; I am Suraj Patil
      </Heading>
      <TypeWriter text={"Front-End Developer"} />
      <Text 
        padding={4} 
        fontFamily="'Merriweather', serif" 
        fontSize={{ base: 'md', md: '2xl' }}
      >
        🌟 Frontend Developer with a strong foundation in HTML, CSS,
        and JavaScript, adept at creating responsive and engaging web
        interfaces. Passionate about crafting seamless user experiences
        and continuously expanding skills in modern frontend frameworks
        like React. Dedicated to delivering visually appealing and
        functional web solutions.
      </Text>
    </Box>


    </>


  )
}

export default Home