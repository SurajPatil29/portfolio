import { Button } from '@chakra-ui/react'
import React from 'react'

function Resume() {
  const downloadResume = () => {
    window.location.href = 'https://drive.google.com/uc?export=download&id=10licJK7TbuIdn3Mv53Be0MV2iJIz-FKO';
  };
  return (
    <Button onClick={downloadResume}>Resume</Button>
  )
}

export default Resume