import { Box, Text, Grid, Image, Heading } from '@chakra-ui/react';
import React from 'react';
import html from "../assets/html.png";
import css from "../assets/css-3.png";
import javascript from "../assets/javascript.png";
import react from "../assets/atom.png";
import github from "../assets/developer.png";

function Skill() {
  return (
    <Box p={{ base: "10% 5%", md: "10% 0" }}>
      <Heading as='h4' size='xl' textAlign="center" fontFamily='"Oswald", sans-serif' p="5%">Skill</Heading>

      <Grid
        id='skill'
        templateColumns={{ base: "repeat(2, 1fr)", sm: "repeat(3, 1fr)", md: "repeat(4, 1fr)", lg: "repeat(5, 1fr)" }}
        gap={6}
        p="5%"
      >
        <Box
          bg="RGBA(0, 0, 0, 0.08)"
          cursor="pointer"
          textAlign="center"
          p="4"
          borderRadius="md"
          _hover={{ bg: "#D84924", color: "white" }}
        >
          <Image src={html} maxWidth="80%" />
          <Text fontFamily='"Oswald", sans-serif' mt="2">HTML</Text>
        </Box>
        <Box
          bg="RGBA(0, 0, 0, 0.08)"
          cursor="pointer"
          textAlign="center"
          p="4"
          borderRadius="md"
          _hover={{ bg: "#1577B4", color: "white" }}
        >
          <Image src={css} maxWidth="80%" />
          <Text fontFamily='"Oswald", sans-serif' mt="2">CSS</Text>
        </Box>
        <Box
          bg="RGBA(0, 0, 0, 0.08)"
          cursor="pointer"
          textAlign="center"
          p="4"
          borderRadius="md"
          _hover={{ bg: "#FFFF00" }}
        >
          <Image src={javascript} maxWidth="80%" />
          <Text fontFamily='"Oswald", sans-serif' mt="2">JavaScript</Text>
        </Box>
        <Box
          bg="RGBA(0, 0, 0, 0.08)"
          cursor="pointer"
          textAlign="center"
          p="4"
          borderRadius="md"
          _hover={{ bg: "#00D8FF", color: "white" }}
        >
          <Image src={react} maxWidth="80%" />
          <Text fontFamily='"Oswald", sans-serif' mt="2">React</Text>
        </Box>
        <Box
          bg="RGBA(0, 0, 0, 0.08)"
          cursor="pointer"
          textAlign="center"
          p="4"
          borderRadius="md"
          _hover={{ bg: "#1577B4", color: "white" }}
        >
          <Image src={github} maxWidth="80%" />
          <Text fontFamily='"Oswald", sans-serif' mt="2">GitHub</Text>
        </Box>
      </Grid>
    </Box>
  );
}

export default Skill;
