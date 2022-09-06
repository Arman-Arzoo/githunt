import React from 'react'
import { Box, Image, Button, Flex } from '@chakra-ui/react'

const Feed = () => {
    return (
        <Box maxWidth="1200px" mx='auto'>
            <Flex justifyContent="space-between" alignItem='center' >
                <Box>
                    <Image src="/logo.svg" />
                </Box>
                <Box>
                    <Button >View Source</Button>
                    <Button variantColor='red'>View Extension</Button>
                    <Button variantColor="purple">Tweet</Button>
                </Box>
            </Flex>
        </Box>
    )
}

export default Feed