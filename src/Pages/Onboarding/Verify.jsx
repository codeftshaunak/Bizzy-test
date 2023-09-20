import React from 'react'
import OnbardingCardLayout from '../../Layouts/CardLayout/OnbardingCardLayout'
import { Box, HStack, Radio, Text, VStack } from '@chakra-ui/react'
import CTAButton from '../../Components/CTAButton'
import { BsChevronDown } from 'react-icons/bs'

const Verify = ({ setPage }) => {
    return (
        <OnbardingCardLayout width="600px">
            <VStack gap={"5"}>
                <VStack gap={"5"}>
                    <Box backgroundColor={"#F0FDF4"} padding={"1rem"} borderRadius={"50%"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                            <rect x="6" y="10" width="36" height="28" rx="2.66667" stroke="#16A34A" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M6 14L24 26L42 14" stroke="#16A34A" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </Box>
                    <Text color={"var(--primarytext)"} fontSize={"25px"} fontWeight={"500"}>Verify your email to proceed</Text>
                    <Text textAlign="center">
                        We just sent an email to the address <span className='font-bold text-[var(--primarytextcolor)]'>john@me.com</span><br />
                        Please check your email and click on the link provided to verify your address
                    </Text>
                </VStack>

                <VStack gap={"5"}>
                    <HStack color="var(--primarytextcolor)">
                        <BsChevronDown />
                        <Text>Change email</Text>
                    </HStack>
                    <HStack color="var(--primarytextcolor)">
                        <BsChevronDown />
                        <Text>I need help verifying my email</Text>
                    </HStack>
                </VStack>

                <HStack justifyContent={"space-evenly"} width={"100%"} gap={"5"}>
                    <CTAButton fontWeight="500" text="Resend Verification Email" color="var(--primarytext)" border="1px solid var(--bordersecondary)" fontSize="1rem" bg="var(--secondarycolor)" width="100%" height="2.5rem" />
                    <CTAButton fontWeight="500" text="Go to Gmail Inbox" color="#fff" fontSize="1rem" bg="var(--primarycolor)" width="100%" height="2.5rem" onClick={() => setPage(4)} />
                </HStack>
            </VStack>
        </OnbardingCardLayout>
    )
}

export default Verify;
