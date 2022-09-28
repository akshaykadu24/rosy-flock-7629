import { HStack, MenuList, MenuItem, VStack, Flex, Heading } from "@chakra-ui/react"

const Shooes = () => {

    return (

        <MenuList  >

            <Flex >
                <VStack >
                    <MenuItem  > <Heading fontSize='md'>Men</Heading>  </MenuItem>
                    <MenuItem>casual</MenuItem>
                    <MenuItem>formal</MenuItem>
                    <MenuItem>slippers</MenuItem>
                    <MenuItem>sports</MenuItem>
                    <MenuItem>stylish </MenuItem>
               
                </VStack>
                <VStack gap='0px'>
                    <MenuItem ><Heading fontSize='md'>Women</Heading></MenuItem>
                    <MenuItem>casual</MenuItem>
                    <MenuItem>formal</MenuItem>
                    <MenuItem>slippers</MenuItem>
                    <MenuItem>sports</MenuItem>
                    <MenuItem>stylish </MenuItem>

                </VStack>
                <VStack >
                <MenuItem><Heading fontSize='md'>Kids</Heading></MenuItem>
                    <MenuItem>casual</MenuItem>
                    <MenuItem>slippers</MenuItem>
                    <MenuItem>sports</MenuItem>
                    <MenuItem>stylish </MenuItem>
                </VStack>
                <VStack gap='0px'>
                    <MenuItem><Heading fontSize='md'>Teenagers</Heading></MenuItem>
                    <MenuItem>casual</MenuItem>
                    <MenuItem>formal</MenuItem>
                    <MenuItem>slippers</MenuItem>
                    <MenuItem>sports</MenuItem>
                    <MenuItem>stylish </MenuItem>
                    

                </VStack>
            </Flex>    

        </MenuList>




    )
}

export default Shooes