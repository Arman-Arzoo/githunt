import React from 'react'
import { Box, Image, Flex, Heading, Text } from '@chakra-ui/react'

const Brand = () => {
    return (
        <Flex alignItems="center" gap='10px'>
            <Image src="/logo.svg" />
            <Box>
                <Heading fontSize='24px'>GitHunt</Heading>
                <Text color='gray.600'>Most Starred Projects on Github</Text>
            </Box>
        </Flex>
    )
}

export default Brand