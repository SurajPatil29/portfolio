import React from 'react'
import Navbar from './Navbar'
import HeaderSectionLogo from './HeaderSectionLogo'
import { HStack } from '@chakra-ui/react'


function Header() {
  return (
    <>
      <HStack justifyContent="space-around" 
      bg="#CBD5E0"
      color="black"
      position="fixed"  
      zIndex={1000}
      top={0}
      left={0}
      right={0}
      boxShadow="md"
      >
        <HeaderSectionLogo />
        <Navbar />
        

      </HStack>

    </>

  )
}

export default Header