import { HStack, Input, Text, VStack, Flex, Box, FormControl, InputRightElement, Button, InputGroup, Checkbox, Image } from '@chakra-ui/react';
import React from 'react';
import { CiUser } from "react-icons/ci";
import CTAButton from '../../Components/CTAButton';
import { BsFacebook, BsApple } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { BiChevronDown } from 'react-icons/bi';
import Divider from '../../Components/Divider/Divider';
import OnbardingCardLayout from '../../Layouts/CardLayout/OnbardingCardLayout';


export const FreelancerSignUp = () => {
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
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    return (
        <OnbardingCardLayout title="Sign up to hire talent" width="500px">
            <br />
            <VStack width="100%" gap={"8"}>
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
                <Divider text="Or" dwidth="180px" />
                <FormControl display={"grid"} gap={"5"} isRequired>
                    <InputGroup gap={"5"}>
                        <Input placeholder='First name' />
                        <Input placeholder='Last name' />
                    </InputGroup>
                    <Input placeholder='Email' />
                    <InputGroup size='md'>
                        <Input
                            pr='4.5rem'
                            type={show ? 'text' : 'password'}
                            placeholder='Enter password'
                        />
                        <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='sm' onClick={handleClick}>
                                {show ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    <InputGroup>
                        <Input type='text' placeholder='United State' />
                        <InputRightElement>
                            <BiChevronDown color='green.500' fontSize={"1.4rem"} />
                        </InputRightElement>
                    </InputGroup>
                    <Box display={"grid"} gap={"5"}>
                        <Checkbox size='md' colorScheme='green' defaultChecked>
                            Send me emails with on how find talent my feeds
                        </Checkbox>
                        <Checkbox size='md' colorScheme='green' defaultChecked>
                            Yes, I understand & agree the Bizzzy <span className="font-[600] text-[var(--primarytextcolor)]"> Terms of Service </span>
                        </Checkbox>
                    </Box>
                </FormControl>
                <VStack width={"100%"} gap={"5"}>
                    <CTAButton fontWeight="500" text="Create Account" color="#fff" fontSize="1rem" bg="var(--primarycolor)" width="100%" height="2.5rem" />
                    <Text fontWeight={"500"}>Already Have Account? <span className='text-[var(--primarytextcolor)]'>Login</span></Text>
                </VStack>
            </VStack>
        </OnbardingCardLayout>
    )
}


export const ClientSignUp = () => {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    return (
        <OnbardingCardLayout title="Sign up to hire talent" width="500px" gap="5">
            <VStack gap={"5"}>
                <HStack gap={"5"}>
                    <Image src='./images/user.jpeg' width="50px" borderRadius="50%" />
                    <Text fontWeight="600" color="var(--primarytextcolor)">John@me.com</Text>
                </HStack>
                <FormControl display={"grid"} gap={"5"} isRequired>
                    <InputGroup gap={"5"}>
                        <Input placeholder='First name' />
                        <Input placeholder='Last name' />
                    </InputGroup>
                    {/* <Input placeholder='Email' />
                    <InputGroup size='md'>
                        <Input
                            pr='4.5rem'
                            type={show ? 'text' : 'password'}
                            placeholder='Enter password'
                        />
                        <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='sm' onClick={handleClick}>
                                {show ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightElement>
                    </InputGroup> */}
                    <InputGroup>
                        <Input type='text' placeholder='United State' />
                        <InputRightElement>
                            <BiChevronDown color='green.500' fontSize={"1.4rem"} />
                        </InputRightElement>
                    </InputGroup>
                    <Box display={"grid"} gap={"5"}>
                        <Checkbox size='md' colorScheme='green' defaultChecked>
                            Send me emails with on how find talent my feeds
                        </Checkbox>
                        <Checkbox size='md' colorScheme='green' defaultChecked>
                            Yes, I understand & agree the Bizzzy <span className="font-[600] text-[var(--primarytextcolor)]"> Terms of Service </span>
                        </Checkbox>
                    </Box>
                </FormControl>

                <VStack width={"100%"} gap={"5"}>
                    <CTAButton fontWeight="500" text="Create Account" color="#fff" fontSize="1rem" bg="var(--primarycolor)" width="100%" height="2.5rem" />
                    <Text fontWeight={"500"}>Already Have Account? <span className='text-[var(--primarytextcolor)]'>Login</span></Text>
                </VStack>
            </VStack>
        </OnbardingCardLayout>
    )
}


