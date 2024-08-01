import { Box, Heading, Image, Flex } from '@chakra-ui/react'
import React from 'react'
import phone from "../assets/telephone1.png"
import gmail from "../assets/gmail-logo.png"
import linkedinIcon from '../assets/message.png'; 

function Contact(){

  function linkedIn(){
    window.open("https://www.linkedin.com/in/suraj-patil-602bb72a8/", "_blank");
  }
  return (
    <Box id='contact' p="5%" textAlign="center">
    <Heading as='h2' size='xl' fontFamily='"Oswald", sans-serif' mb="5%">Contact</Heading>
    <Box mb="20px">
      <Flex justifyContent="center" alignItems="center" mb="10px">
        <Image src={gmail} boxSize="50px" mr="10px" />
        <Heading as='h4' size='md'>surajrpatil0729@gmail.com</Heading>
      </Flex>
    </Box>
    <Box mb="20px">
      <Flex justifyContent="center" alignItems="center" mb="10px">
        <Image src={phone} boxSize="50px" mr="10px" />
        <Heading as='h4' size='md'>+91 9325518422</Heading>
      </Flex>
    </Box>
    <Box cursor="pointer" onClick={linkedIn} mb="20px">
      <Flex justifyContent="center" alignItems="center">
        <Image src={linkedinIcon} boxSize="50px" mr="10px" />
        <Heading as='h4' size='md'>LinkedIn</Heading>
      </Flex>
    </Box>
    {/* Uncomment and complete this section if you have additional contact methods */}
    {/* <Box>
      <Flex justifyContent="center" alignItems="center">
        <Image src={otherIcon} boxSize="50px" mr="10px" />
        <Heading as='h4' size='md'>Other Contact</Heading>
      </Flex>
    </Box> */}
  </Box>
  )
}

export default Contact