import React from 'react'
import Link from 'next/link';

import {
    Menu,MenuButton, MenuList, MenuItem,IconButton,Flex,Box,Spacer,Image,Stack
} from '@chakra-ui/react'
import {FcHome,FcAbout} from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import {FiKey,FiUserCheck} from 'react-icons/fi';
import {MoonIcon, SunIcon, closeIcon, HamburgerIcon, CloseIcon} from '@chakra-ui/icons';
import { useColorMode } from '@chakra-ui/react';
import { Fragment,useState } from 'react';
import { useRouter } from 'next/router';
const Navbar=()=> {
  const {colorMode, toggleColorMode}= useColorMode();
  const router=useRouter();
  return (
    <Flex p='12' borderBottom='1px' borderColor='gray.100'>
      <Box fontSize={['lg','xl','xl','2xl']} color='#F56565' fontWeight='bold'>
        <Stack direction='row' alignItems='center'>
          <Image boxSize='42px' src='' alt=''></Image>
          <Link href='/'>GetYourFlat</Link>
        </Stack>
      </Box>
      <Spacer/>

      <Box>
        <Menu>
          {({isOpen})=>(
            <Fragment>
              <MenuButton as={IconButton} icon={
                !isOpen ?(<HamburgerIcon width={5} height={5}/>):(<CloseIcon width={3} height={3}/>)
              }/>
            </Fragment>
          )}
        </Menu>
        </Box>

    </Flex>
    
  )
}

export default Navbar