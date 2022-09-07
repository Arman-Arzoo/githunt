import React from 'react'
import { Button, Flex } from '@chakra-ui/react'
import { FaGithub, FaChrome, FaTwitter } from 'react-icons/fa'
import Brand from './Brand'


const PageHeader = () => {

  return (
    <Flex justifyContent="space-between" alignItem='center' pt='1rem' >
      <Brand />
      <Flex gap={"10px"}>
        <Button leftIcon={<FaGithub />}>View Source</Button>
        <Button leftIcon={<FaChrome />} colorScheme='red'>View Extension</Button>
        <Button leftIcon={<FaTwitter />} colorScheme="purple">Tweet</Button>
      </Flex>
    </Flex>
  )
}

export default PageHeader