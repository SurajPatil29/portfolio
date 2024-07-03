import { Heading, Text, Box, Flex, Image } from '@chakra-ui/react';
import React from 'react';
import githubIcon from '../assets/github.png';
import linkedinIcon from '../assets/message.png'; // Correct the file name if necessary

function About() {
  const openGitHub = () => {
    window.open("https://github.com/SurajPatil29", "_blank");
  };

  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/suraj-patil-602bb72a8/", "_blank"); // Replace with your LinkedIn URL
  };

  return (
    <Flex 
      id='about' 
      p={{ base: "10% 2%", md: "10% 0" }} 
      justifyContent="center"
    >
      <Box textAlign="center" maxW="800px" w="100%">
        <Heading 
          as='h4' 
          size='xl' 
          fontFamily='"Oswald", sans-serif' 
          p={{ base: "2%", md: "5%" }}
        >
          About
        </Heading>
        <Text 
          fontFamily="'Merriweather', serif" 
          fontSize={{ base: 'md', md: '2xl' }} 
          mb={{ base: "5%", md: "5%" }}
        >
          Hi, I'm Suraj Patil from Maharashtra. I hold a diploma in
          Electrical Engineering and have transitioned into tech, gaining
          proficiency in Frontend Development with HTML, CSS, JavaScript,
          and React, along with basic DSA concepts. With hands-on
          experience in creating frontend projects, I am passionate
          about continuous learning and honing my skills in web
          development.
        </Text>
        <Flex 
          justifyContent="center" 
          gap={{ base: "5%", md: "10%" }} 
          flexWrap="wrap"
        >
          <Box 
            textAlign="center"
            cursor="pointer"
            onClick={openGitHub}
            _hover={{ bg: "RGBA(0, 0, 0, 0.08)", borderRadius: "md" }}
            p="4"
          >
            <Image src={githubIcon} alt='GitHub' boxSize={{ base: "40px", md: "50px" }} mb="2"/>
            <Text fontFamily='"Oswald", sans-serif'>GitHub</Text>
          </Box>
          <Box 
            textAlign="center"
            cursor="pointer"
            onClick={openLinkedIn}
            _hover={{ bg: "RGBA(0, 0, 0, 0.08)", borderRadius: "md" }}
            p="4"
          >
            <Image src={linkedinIcon} alt='LinkedIn' boxSize={{ base: "40px", md: "50px" }} mb="2"/>
            <Text fontFamily='"Oswald", sans-serif'>LinkedIn</Text>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}

export default About;
