import { Box, Button, Flex, Heading, Image, Link, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const Repos = () => {
    return (
        <Box borderWidth={1} bg="white" p='15px' rounded={'5px'}>
            <Flex mb="15px">
                <Image
                    src=""
                    w="35px"
                    h="35px"
                    rounded="5px"
                />
                <Box ml={"15px "}>
                    <Heading fontSize={"16px"}>helkjdlk</Heading>
                    <Text fontSize={"13px"}>View Profile</Text>
                </Box>
            </Flex>
            <Box mb={"15px"}>
                <Box mb={"10px"}>
                    <Heading fontSize={"19px"} as="a" href='dkjf' target={"_blank"} color="purple.700">GitHut</Heading>
                    <Text fontSize={"14px"} color={"gray.600"}> Built by &middot; <Link fontWeight={"bold"} href='324' target={"_blank"}>armanali</Link> &middot;  June 3, 2022</Text>
                </Box>

                <Text fontSize={"14px"} color="gary.900"> your project description show here</Text>
            </Box>
            <Stack isInline>
                <Button as="a" cursor={"pointer"} variant="link" fontSize={"14px"} iconSpacing="4px" _hover={{ textDecoration: 'none' }}>3454</Button>
                <Button as="a" cursor={"pointer"} variant="link" fontSize={"14px"} iconSpacing="4px" _hover={{ textDecoration: 'none' }}>3454</Button>
                <Button as="a" cursor={"pointer"} variant="link" fontSize={"14px"} iconSpacing="4px" _hover={{ textDecoration: 'none' }}>3454</Button>

            </Stack>

        </Box>
    )
}

export default Repos