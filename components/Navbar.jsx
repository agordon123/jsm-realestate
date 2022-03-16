import { Link } from "@chakra-ui/react";
import {Menu,MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer} from '@chakra-ui/react';
import {FcHome, FcMenu,FcAbout} from 'react-icons/fc';
import {BsSearch} from 'react-icons/bs';
import {FiKey} from 'react-icons/fi';
import { Icon,LinkBox } from "@chakra-ui/react";

const Navbar = () => {
    
    return(
    <Flex p="2" borderBottom="1px" borderColor="gray.100">
        <Box fontSize="3xl" color="rgb(78,78,78)" fontWeight="bold" alignItems="end">
        <Link href="/" paddingLeft="2" paddingRight="2">MNC Development 3.20<FcHome /></Link>
        
        </Box>
            <Spacer />
            <Box>
                <Menu>
                <MenuButton as={IconButton} icon={<FcMenu />} variant="outlined" color="red.400"></MenuButton>
                <MenuList>
                    <Link href="/" passhref="true">
                        <MenuItem icon={<FcHome />}>Home</MenuItem>
                        </Link>
                        <Link href="/login" passhref="true">
                        <MenuItem icon={<BsSearch />}>search</MenuItem>
                        </Link>

                        <Link href="/search?purpose=for-sale" passhref="true">
                        <MenuItem icon={<FcAbout />}>Buy Properties</MenuItem>
                        </Link>
                        <Link href="/search?purpose=for-rent" passhref="true">
                        <MenuItem icon={<FiKey />}>Rent Properties</MenuItem>
                        </Link>
                </MenuList>
                </Menu>
            </Box>
        </Flex>
    )
}

export default Navbar;