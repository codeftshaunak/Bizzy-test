import { HStack } from '@chakra-ui/react';
import React from 'react'
import UserCard from '../../Components/UserCard';

const OnboardingProcess = (props) => {
    return (
        <HStack width="100%" marginTop={"5%"} gap={props.gap && props.gap} justifyContent={"space-around"}>
            {props.children}
            <HStack width={props.width ? props.width : "450px"} border={"1px solid var(--bordersecondary)"} padding={"1.5rem 1.3rem"} borderRadius={"10px"}>
                <UserCard />
            </HStack>
        </HStack>
    )
}

export default OnboardingProcess;
