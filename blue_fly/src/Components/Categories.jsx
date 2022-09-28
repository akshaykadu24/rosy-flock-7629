import { HStack, MenuList, MenuItem, VStack, Flex, Heading } from "@chakra-ui/react"

const Categories = () => {

    return (

        <MenuList  >

            <Flex >
                <VStack >
                    <MenuItem  > <Heading fontSize='md'>Men</Heading>  </MenuItem>
                    <MenuItem>shirts</MenuItem>
                    <MenuItem>Tshirts</MenuItem>
                    <MenuItem>Jeans</MenuItem>
                    <MenuItem>activewear</MenuItem>
                    <MenuItem>poloshirts </MenuItem>
                    <MenuItem>shorts </MenuItem>
                    <MenuItem>underwear</MenuItem>
                    <MenuItem>denim</MenuItem>
                    <MenuItem>sweaters</MenuItem>
                </VStack>
                <VStack gap='0px'>
                    <MenuItem ><Heading fontSize='md'>Women</Heading></MenuItem>
                    <MenuItem>denim</MenuItem>
                    <MenuItem>activewear</MenuItem>
                    <MenuItem>underwear</MenuItem>
                    <MenuItem>shorts</MenuItem>
                    <MenuItem> sweaters</MenuItem>
                    <MenuItem> shirts</MenuItem>
                    <MenuItem>poloshirts</MenuItem>
                    <MenuItem>Jeans</MenuItem>
                    <MenuItem>Tshirts</MenuItem>

                </VStack>
                <VStack >
                    <MenuItem><Heading fontSize='md'>Kids</Heading></MenuItem>
                    <MenuItem>shirts</MenuItem>
                    <MenuItem>Tshirts</MenuItem>
                    <MenuItem>sweaters</MenuItem>
                    <MenuItem>Jeans</MenuItem>
                    <MenuItem>poloshirts </MenuItem>
                    <MenuItem>shorts </MenuItem>
                    <MenuItem>underwear</MenuItem>
                    <MenuItem>denim</MenuItem>
                    <MenuItem>activewear</MenuItem>
                </VStack>
                <VStack gap='0px'>
                    <MenuItem><Heading fontSize='md'>Teenagers</Heading></MenuItem>
                    <MenuItem>sweaters</MenuItem>
                    <MenuItem>activewear</MenuItem>
                    <MenuItem>underwear</MenuItem>
                    <MenuItem>shorts</MenuItem>
                    <MenuItem>denim </MenuItem>
                    <MenuItem> shirts</MenuItem>
                    <MenuItem>poloshirts</MenuItem>
                    <MenuItem>Jeans</MenuItem>
                    <MenuItem>denim</MenuItem>
                    

                </VStack>
            </Flex>    

        </MenuList>




    )
}

export default Categories