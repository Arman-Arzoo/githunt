import React from 'react'
import { Text } from '@chakra-ui/react'

const GroupTittle = () => {
    return (
        <Text fontSize={"24px"} fontWeight="700">
            This Week
            <Text fontSize={"15px"} fontWeight="500" color='gray.500' ml={"5px"} as="span">May 16, 2021 - May 23, 2022</Text>
        </Text >
    )
}

export default GroupTittle