import React from "react";
import Link from "next/link";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Flex,
  Box,
  Spacer,
  Image,
  Stack,
} from "@chakra-ui/react";
import { FcHome, FcAbout } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey, FiUserCheck } from "react-icons/fi";
import {
  MoonIcon,
  SunIcon,
  closeIcon,
  HamburgerIcon,
  CloseIcon,
} from "@chakra-ui/icons";
import { useColorMode } from "@chakra-ui/react";
import { Fragment, useState } from "react";
import { useRouter } from "next/router";
import realestate from '../assets/images/real-estate.png'

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter();
  return (
    <Flex p="2" borderBottom="1px" borderColor="gray.100">
      <Box
        fontSize={["lg", "xl", "xl", "2xl"]}
        color="black"
        fontWeight="bold">
        <Stack direction="row" alignItems="center">
        <Image boxSize="42px" src={realestate.src} alt="logo" />
          <Link href="/" paddingleft="2" color="">
            Get Your Flat
          </Link>
        </Stack>
      </Box>
      <Spacer />
      <Box>
        <Menu>
          {({ isOpen }) => (
            <Fragment>
              <MenuButton
                
                as={IconButton}
                icon={
                  !isOpen ? (
                    <HamburgerIcon width={5} height={5} />
                  ) : (
                    <CloseIcon width={3} height={3} />
                  )
                }
                variant='outline'
                
              />
              <MenuList padding={0} margin={0}>
                <Link href="/" >
                  <MenuItem
                    icon={<FcHome />}
                    backgroundColor={router.asPath === "/" && "#99accb"}>
                    Home
                  </MenuItem>
                </Link>
                <Link href="/search" >
                  <MenuItem
                    icon={<BsSearch />}
                    backgroundColor={router.asPath === "/search" && "#99accb"}>
                    Search
                  </MenuItem>
                </Link>
                <Link href="/search?purpose=for-sale" >
                  <MenuItem
                    icon={<FcAbout />}
                    backgroundColor={
                      router.asPath === "/search?purpose=for-sale" && "#99accb"
                    }>
                    Buy Property
                  </MenuItem>
                </Link>
                <Link href="/search?purpose=for-rent" >
                  <MenuItem
                    icon={<FiKey />}
                    backgroundColor={
                      router.asPath === "/search?purpose=for-rent" && "#99accb"
                    }>
                    Rent Property
                  </MenuItem>
                </Link>
               
                <MenuItem>
                  <IconButton
                    width="100%"
                    alignSelf={"center"}
                    _hover={{ backgroundColor: "transparent" }}
                    bg="transparent"
                    height={6}
                    m="auto"
                    aria-label="Toggle Mode"
                    onClick={toggleColorMode}>
                    {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                  </IconButton>
                </MenuItem>
              </MenuList>
            </Fragment>
          )}
        </Menu>
      </Box>
    </Flex>
  );
};

export default Navbar;
