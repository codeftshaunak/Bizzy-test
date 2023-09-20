import { Box, HStack, Text } from '@chakra-ui/react'
import React from 'react'

const Divider = (props) => {
    return (
        <HStack justifyContent={"space-between"} width={"100%"}>
            <Box backgroundColor="var(--bordersecondary)" height="1px" width={props.dwidth ? props.dwidth : "100px"}></Box>
            <Text color={"var(--secondarytext)"}>{props.text}</Text>
            <Box backgroundColor="var(--bordersecondary)" height="1px" width={props.dwidth ? props.dwidth : "100px"}></Box>
        </HStack>
    )
}

export default Divider
