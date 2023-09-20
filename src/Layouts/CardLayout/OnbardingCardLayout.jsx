import { Text, VStack } from '@chakra-ui/react';
import React from 'react'
import HomeLayout from '../HomeLayout';

const OnbardingCardLayout = (props) => {
    return (
        <HomeLayout>
            <br />
            <VStack width={props.width ? props.width : "450px"} border={"1px solid var(--bordersecondary)"} padding={"1.5rem 1.4rem"} borderRadius={"10px"} marginTop={"5%"} gap={props.gap && props.gap} margin={"auto"} justifyContent={"center"} alignItems={"center"}>
                <Text color={"var(--primarytext)"} fontSize={"25px"} fontWeight={"500"}>{props.title}</Text>
                {props.children}
            </VStack>
        </HomeLayout>
    )
}

export default OnbardingCardLayout;
