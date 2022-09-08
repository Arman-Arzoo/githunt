import React from 'react'
import {

    Flex,
    MenuButton,
    MenuList,
    MenuItem,
    Select,
    Menu,
    Stack

} from '@chakra-ui/react'
// import { ChevronDownIcon } from 'react-icons/'


const Filters = () => {
    return (
        <Stack isInline>
            <Select>
                <option value="1">urdu</option>
            </Select>

            <Menu >
                <MenuButton as="button"
                    bg="white" borderWidth={1} px="38px"
                    fontWeight={"normal"}
                //  rightIcon={<ChevronDownIcon />}
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
        </Stack>
    )
}

export default Filters