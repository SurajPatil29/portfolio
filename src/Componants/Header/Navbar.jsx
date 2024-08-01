import { Box, HStack, Menu, MenuButton, MenuList, MenuItem, IconButton } from "@chakra-ui/react";
import { HamburgerIcon, AddIcon, ExternalLinkIcon, RepeatIcon, EditIcon } from "@chakra-ui/icons";
import { useMediaQuery } from "@chakra-ui/react";
import Resume from "../../Sections/Resume";



function Navbar() {
  const [isLargeThan750] = useMediaQuery("(min-width: 750px)")
  const resumeDownload = "https://drive.google.com/uc?export=download&id=10licJK7TbuIdn3Mv53Be0MV2iJIz-FKO"
  return (
    <>
      <Box display="flex" p={4} >
        {
          isLargeThan750 ? (
            <HStack justifyContent="space-between" spacing={8}>
              <a href="#home" > Home </a>
              <a href="#about" > About </a>
              <a href="#skill" > Skill </a>
              <a href="#project" > Project </a>

              <a href="#contact" > Contact </a>
              <Resume />

            </HStack>
          ) : (
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                variant="outline"
                border=" 3px solid white"
              />
              <MenuList>
                <MenuItem as="a" href="#home" icon={<AddIcon />}>
                  Home
                </MenuItem>
                <MenuItem as="a" href="#about" icon={<ExternalLinkIcon />}>
                  About
                </MenuItem>
                <MenuItem as="a" href="#skill" icon={<RepeatIcon />}>
                  Skill
                </MenuItem>
                <MenuItem as="a" href="#project" icon={<EditIcon />}>
                  Project
                </MenuItem>
                <MenuItem as="a" href="#contact" icon={<ExternalLinkIcon />}>
                  Contact
                </MenuItem>
                <MenuItem as="a" href={resumeDownload} icon={<EditIcon />}>
                  Resume
                </MenuItem>
              </MenuList>
            </Menu>
          )
        }




      </Box>

    </>

  )
}

export default Navbar