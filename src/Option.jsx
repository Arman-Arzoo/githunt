import React from 'react'
import { Box, Image, Button } from '@chakra-ui/react'


const Option = () => {
    return (
        <Box maxWidth="1200px" mx='auto'>
            <Box>
                <Image />
            </Box>
            <Box>
                <Button>View Source</Button>
                <Button>View Extension</Button>
                <Button>Tweet</Button>
            </Box>
        </Box>
    )
}

export default Option




