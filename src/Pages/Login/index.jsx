import { HStack, Input, Text, VStack, Flex, Box } from '@chakra-ui/react';
import React from 'react';
import { CiUser } from "react-icons/ci";
import CTAButton from '../../Components/CTAButton';
import { BsFacebook, BsApple } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import Divider from '../../Components/Divider/Divider';
import OnbardingCardLayout from '../../Layouts/CardLayout/OnbardingCardLayout';


const Login = () => {
    const iconsStyle = {
        fontSize: "1.5rem",
        padding: "0.4rem",
        width: "110px",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        margin: "auto",
        border: "1px solid var(--bordersecondary)",
        borderRadius: "6px",
        backgroundColor: "var(--secondarycolor)"
    }

    return (
        <OnbardingCardLayout title="Login to Bizzzy">
            <br />
            <VStack width="100%" gap={"7"}>
                <Flex border="1px solid var(--bordersecondary)" borderRadius="5px" width="100%" justifyContent={"center"} alignItems={"center"} padding="0rem 0.4rem">
                    <CiUser style={{ fontSize: "1.3rem", marginRight: "0.1rem" }} /> {/* User icon */}
                    <Input
                        placeholder="Username Or Email"
                        fontSize="1rem"
                        width={"100%"}
                        border={"none"}
                        variant={"unstyled"}
                        padding={"0.5rem 0.5rem"}
                    />
                </Flex>
                <CTAButton text="Continue with Email" bg="var(--primarycolor)" color="#ffff" fontWeight="500" height="2.5rem" borderRadius="5px" fontSize="1rem" />
                <Divider text="Or" dwidth="180px" />
                <HStack justifyContent={"space-between"} width={"100%"}>
                    <Box style={iconsStyle} color="#3789f4">
                        <BsFacebook />
                    </Box>
                    <Box style={iconsStyle}>
                        <FcGoogle />
                    </Box>
                    <Box style={iconsStyle}>
                        <BsApple />
                    </Box>
                </HStack>
            </VStack >
            <br />
            <br />
            <VStack width="100%" gap={25}>
                <Divider text="Don't have an Upwork account?" dwidth="60px" />
                <CTAButton text="Sign Up" border="1px solid var(--bordersecondary)" bg="var(--secondarycolor)" width="100%" />
            </VStack>
        </OnbardingCardLayout>
    )
}

export default Login;
