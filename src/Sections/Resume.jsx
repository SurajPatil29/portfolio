import { Button } from '@chakra-ui/react'
import React from 'react'

function Resume() {
  const downloadResume = () => {
    window.location.href = 'https://drive.google.com/uc?export=download&id=1JpFHtZC5K8EsJv5iWyuyT36Er95KGnM5';
  };
  return (
    <Button onClick={downloadResume}>Resume</Button>
  )
}

export default Resume