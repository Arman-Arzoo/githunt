import React from 'react'
import { Box, Button, Flex, SimpleGrid } from '@chakra-ui/react'
import PageHeader from './components/PageHeader'
import GroupTittle from './components/GroupTittle'
import Filters from './components/Filters'
import Repos from './components/Repos'


const Feed = () => {

    return (
        <Box maxWidth="1200px" mx='auto' >
            <PageHeader />
            <Flex alignItems='center' justifyContent='space-between' mt={"1rem"}>
                <GroupTittle />
                <Filters />
            </Flex>
            <SimpleGrid columns={3} spacing="15px" mt={"1.5rem"}>
                <Repos />
                <Repos />
                <Repos />
                <Repos />

            </SimpleGrid>

            <Flex alignItem="center" justifyContent="center" my="20px">
                <Button bg={"blue"} color="white" >Load next Group</Button>

            </Flex>
        </Box>
    )
}

export default Feed;





