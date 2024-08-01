import { Box, Grid, Image, Heading, Text, Flex } from '@chakra-ui/react';
import React from 'react';
import sephora from "../assets/sephora.png";
import skinstore from "../assets/skinstore.png";
import html from "../assets/html.png";
import css from "../assets/css-3.png";
import javascript from "../assets/javascript.png";
import react from "../assets/atom.png";
import github from "../assets/developer.png";
import link from "../assets/link.png";

function Project() {
  function sephoraGit(){
    window.open("https://github.com/SurajPatil29/Sephora_Project", "_blank");
  }
  function sephoreLink(){
    window.open("https://sephora-project-sage.vercel.app/", "_blank");
  }
  function skinstoreGit(){
    window.open("https://github.com/SurajPatil29/SkinStore-Project", "_blank");
  }
  function skinstoreLink(){
    window.open("https://skinstore-gamma.vercel.app/", "_blank");
  }

  return (
    <Box id='project' p={{ base: "25% 5%", md: "10% 0" }}>
      <Heading as='h4' size='xl' textAlign="center" fontFamily='"Oswald", sans-serif' p="5%">Projects</Heading>

      <Grid
        templateColumns={{  md: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
        gap="5%"
        justifyContent="center"
      >
        <Box borderRadius="10px" bg="RGBA(0, 0, 0, 0.08)" m="10px">
          <Image src={sephora} mb="10px" />
          <Box p="10px" textAlign="center">
            <Heading size='md' mb="10px">Sephora</Heading>
            <Text mb="10px" fontSize="sm">
              Sephora is a premier e-commerce platform specializing in skincare and personal care. Catering primarily to North American customers, especially in the USA.
            </Text>
            <Flex justifyContent="center" gap="5%">
              <Box><Image src={html} boxSize="50px" /></Box>
              <Box><Image src={css} boxSize="50px" /></Box>
              <Box><Image src={javascript} boxSize="50px" /></Box>
            </Flex>
            <Flex justifyContent="center" gap="10%" mt="10px">
              <Flex onClick={sephoraGit} align="center" cursor="pointer">
                <Image src={github} boxSize="20px" />
                <Heading size="sm" ml="5px">GitHub</Heading>
              </Flex>
              <Flex onClick={sephoreLink} align="center" cursor="pointer">
                <Image src={link} boxSize="20px" />
                <Heading size="sm" ml="5px">Link</Heading>
              </Flex>
            </Flex>
          </Box>
        </Box>

        <Box borderRadius="10px" bg="RGBA(0, 0, 0, 0.08)" m="10px">
          <Image src={skinstore} mb="10px" />
          <Box p="10px" textAlign="center">
            <Heading size='md' mb="10px">SkinStore</Heading>
            <Text mb="10px" fontSize="sm">
              SkinStore is a leading e-commerce site for skincare and personal care, offering a wide range of products in categories. It primarily serves North American customers, especially in Canada.
            </Text>
            <Flex justifyContent="center" gap="5%">
              <Box><Image src={html} boxSize="50px" /></Box>
              <Box><Image src={css} boxSize="50px" /></Box>
              <Box><Image src={javascript} boxSize="50px" /></Box>
              <Box><Image src={react} boxSize="50px" /></Box>
            </Flex>
            <Flex justifyContent="center" gap="10%" mt="10px">
              <Flex onClick={skinstoreGit} align="center" cursor="pointer">
                <Image src={github} boxSize="20px" />
                <Heading size="sm" ml="5px">GitHub</Heading>
              </Flex>
              <Flex onClick={skinstoreLink} align="center" cursor="pointer">
                <Image src={link} boxSize="20px" />
                <Heading size="sm" ml="5px">Link</Heading>
              </Flex>
            </Flex>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
}

export default Project;
