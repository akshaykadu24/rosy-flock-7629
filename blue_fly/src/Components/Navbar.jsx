import { Box, Flex, Spacer, Text, Image, HStack, Menu, MenuButton, MenuList, MenuItem, Button,Input } from '@chakra-ui/react'
import Caterories from './Categories'
// import { Icon } from '@chakra-ui/react'
import React, { component } from 'react'
import ReactHover, { Trigger } from 'react-hover'
import Shooes from './Shooes'


const Navbar = () => {
    return (
        <Box>

            <Box>
                <Flex flexDirection='column'>
                    <Flex w='90%' margin='auto'>
                        <Box bg='red'  >
        {/* box1 */}

                        </Box>
                        <Spacer />
                        <Box marginLeft='280px'>
                        <Image h='30px' marginTop='15px' src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/BLUEFLY-LOGO-11-20.png?v=1613183141" alt="" />
                        </Box>
                        <Spacer />
                        <Box p='4' >
                            <Flex gap='10px'>
                           <Input h='30px' type="text" placeholder='Search' name="" id="" />
                            <Image h='30px' src='data:image/png;base64,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'></Image>
                            
                            <Image h='28px' src="data:image/png;base64,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" alt="" />
                            </Flex>
                        </Box>


                    </Flex>
                    <HStack w='80%' margin='auto'  gap='30px'>
                        {/* <Box>
                        <ReactHover>
                            <ReactHover.Trigger type='Trigger'>
                                <Caterories/>
                            </ReactHover.Trigger>
                        </ReactHover>

                        </Box> */}
                        <Menu>
                            <MenuButton  >
                            CLOTHING
                            </MenuButton>
                            <Caterories/>
                        </Menu>
                        <Menu>
                            <MenuButton  >
                            SHOOES
                            </MenuButton>
                            <Shooes/>
                        </Menu>
                        <Menu>
                            <MenuButton  >
                            HANDBAGS&ACCESSORIES
                            </MenuButton>
                            <Caterories/>
                        </Menu>
                        <Menu>
                            <MenuButton  >
                            DESIGNERS
                            </MenuButton>
                            <Caterories/>
                        </Menu>
                        <Menu>
                            <MenuButton  >
                            SUNGLASSES
                            </MenuButton>
                            <Caterories/>
                        </Menu>
                        <Menu>
                            <MenuButton  >
                            JEWELARY&WATCHES
                            </MenuButton>
                            <Caterories/>
                        </Menu>
                        <Menu>
                            <MenuButton  >
                            UNDER$50
                            </MenuButton>
                            <Caterories/>
                        </Menu>
                        <Menu>
                            <MenuButton  >
                            BEAUTY
                            </MenuButton>
                            <Caterories/>
                        </Menu>
                        <Menu>
                            <MenuButton  >
                            CLEARANCE
                            </MenuButton>
                            <Caterories/>
                        </Menu>


                        
                        <Text></Text>
                        <Text></Text>
                        <Text></Text>
                        <Text></Text>
                        <Text></Text>
                        <Text></Text>
                        <Text></Text>
                        <Text></Text>
                    </HStack>
                </Flex>

            </Box>

        </Box>

    )
}
export default Navbar