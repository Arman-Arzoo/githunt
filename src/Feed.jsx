import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import PageHeader from './components/PageHeader'
import GroupTittle from './components/GroupTittle'
import Filters from './components/Filters'


const Feed = () => {

    return (
        <Box maxWidth="1200px" mx='auto' >
            <PageHeader />
            <Flex alignItems='center' justifyContent='space-between'>
                <GroupTittle />
                <Filters />
            </Flex>

        </Box>
    )
}

export default Feed;





