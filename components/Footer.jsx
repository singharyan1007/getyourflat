import { FaLinkedin, FaGithub } from "react-icons/fa";
import {
  Box,
  Container,
  Flex,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { MdRealEstateAgent } from "react-icons/md";
import realestate from '../assets/images/real-estate.png'
const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"xl"}>
      {children}
    </Text>
  );
};
const Footer = () => {
  return (
    <Box borderTop={"1px"} borderColor="gray.100" mt={"20px"}>
      <Container as={Stack} maxW={"6xl"} py={20}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 2 }} spacing={10}>
          <Stack align={"center"}>
            <ListHeader>Company</ListHeader>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms and Condition</Link>
          </Stack>
          <Stack align={"center"}>
            <ListHeader>Useful links</ListHeader>
            <Link href="/search?purpose=for-sale" >
              Buy Property
            </Link>
            <Link href="/search?purpose=for-rent" >
              Rent Property
            </Link>
            <Link href="/about" >
              About Us
            </Link>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box pb={10}>
        <Flex
          align={"center"}
          _before={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.100", "gray.100"),
            flexGrow: 1,
            ml: 8,
          }}
          _after={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.100", "gray.100"),
            flexGrow: 1,
            ml: 8,
          }}
        >
          <Image boxSize={"100px"} src={realestate.src} alt="" position={"relative"} />
        </Flex>
        <Text pt={6} fontSize={"sm"} textAlign={"center"} color="gray.600">
          © 2022 Get Your Flat, Inc. All rights reserved
        </Text>
        <Text fontSize={"sm"} textAlign={"center"} color="green.400">
          Made with ❤ by &nbsp;
          <a href="https://www.linkedin.com/in/aryan-singh1007/">Aryan Singh</a>
        </Text>
        <Stack direction={"row"} spacing={6} justifyContent={"center"} mt={6}>
          <Link href="https://www.linkedin.com/in/aryan-singh1007/">
            <FaLinkedin size={30} />
          </Link>
          <Link href="https://github.com/singharyan1007/">
            <FaGithub size={30} />
          </Link>
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;
