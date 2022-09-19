import React, { useState } from 'react'
import {

    Flex,
    MenuButton,
    MenuList,
    MenuItem,
    Select,
    Menu,
    Stack,
    Button

} from '@chakra-ui/react'

import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'
import { BsFillGridFill, BsList } from 'react-icons/bs'


const Filters = () => {

    const [isActionActive, setIsActionActive] = useState(false)
    return (
        <Stack isInline>
            <Select>
                <option value="1">urdu</option>
            </Select>

            <Menu >
                <MenuButton as={Button}
                    onClick={() => {
                        setIsActionActive(!isActionActive)
                    }}
                    minWidth="inherit"
                    bg="white" borderWidth={1}
                    // px="38px"
                    fontWeight={"normal"}
                    leftIcon={isActionActive ? <TiArrowSortedDown /> : <TiArrowSortedUp />}
                >
                    Actions
                </MenuButton>
                <MenuList>
                    <MenuItem>Download</MenuItem>
                    <MenuItem>Create a Copy</MenuItem>
                    <MenuItem>Mark as Draft</MenuItem>
                    <MenuItem>Delete</MenuItem>
                    <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
            </Menu>
            <Stack isInline>
                <Button leftIcon={<BsFillGridFill />} bg="white">Grid</Button>
                <Button leftIcon={<BsList />} bg="white">List</Button>
            </Stack>
        </Stack>
    )
}

export default Filters