import React from 'react'
import { Box, Image, Button, Flex, Heading, Text } from '@chakra-ui/react'

const Feed = () => {
    return (
        <Box maxWidth="1200px" mx='auto' pt='1rem'>
            <Flex justifyContent="space-between" alignItem='center' >
                <Flex alignItems="center" gap='10px'>
                    <Image src="/logo.svg" />
                    <Box>
                        <Heading fontSize='24px'>GitHunt</Heading>
                        <Text color='gray.600'>Most Starred Projects on Github</Text>
                    </Box>
                </Flex>
                <Flex gap={"10px"}>
                    <Button >View Source</Button>
                    <Button colorScheme='red'>View Extension</Button>
                    <Button colorScheme="purple">Tweet</Button>
                </Flex>
            </Flex>
        </Box>
    )
}

export default Feed