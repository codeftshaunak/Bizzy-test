import { Box, HStack, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import { BsBriefcase, BsSend } from 'react-icons/bs';

const UserCard = () => {
    return (
        <VStack color="var(--primarytext)" gap={"5"}>
            <Image src='./images/user.jpeg' alt='user' width="80px" borderRadius="100%" />

            <VStack gap={"0"}>
                <Text fontSize="1.5rem" fontWeight="500" marginBottom={"0"}>Sasheen M.</Text>
                <Text marginBottom={"0"}>Customer Experience Consultant</Text>
            </VStack>

            <HStack>
                <HStack>
                    <AiOutlineStar />
                    <Text>5.0</Text>
                </HStack>
                <HStack>
                    <BsSend />
                    <Text>$65.00/hr</Text>
                </HStack>
                <HStack>
                    <BsBriefcase />
                    <Text>$65.00/hr</Text>
                </HStack>
            </HStack>
            <Text textAlign={"center"} fontWeight={"500"} fontSize={"1.1rem"}>
                “Bizzzy has enabled me to increase my
                rates. I know what I’m bringing to the table
                and love the feelings of being able to help a <br />
                variety of clients.”
            </Text>
        </VStack>
    )
}

export default UserCard;
