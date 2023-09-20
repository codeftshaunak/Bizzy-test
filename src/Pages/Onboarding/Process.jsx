import React, { useState } from 'react';
import OnboardingProcess from '../../Layouts/CardLayout/OnboardingProcess';
import { Box, Button, Checkbox, HStack, Input, Text, VStack } from '@chakra-ui/react';
import { CiUser } from 'react-icons/ci';
import { TbClick, TbReceipt } from 'react-icons/tb';
import { IoIosAddCircleOutline } from 'react-icons/io';
import CTAButton from '../../Components/CTAButton';

const Process = ({ setPageU }) => {
    const [page, setPage] = useState(1);

    return (
        <OnboardingProcess>
            {page === 1 && (
                <VStack justifyContent="start" alignItems="start" width="530px" gap="10" color="var(--primarytext)">
                    <Box>
                        <Text fontSize="40px" fontWeight="500">Hey Jane. Ready for your next big opportunity?</Text>
                    </Box>
                    <HStack>
                        <CiUser color="var(--primarycolor)" fontSize="1.4rem" />
                        <Text fontWeight="400" fontSize="1.2rem">Apply for open roles or list services for clients to buy</Text>
                    </HStack>
                    <HStack>
                        <TbClick color="var(--primarycolor)" fontSize="1.4rem" />
                        <Text fontWeight="400" fontSize="1.2rem">Apply for open roles or list services for clients to buy</Text>
                    </HStack>
                    <HStack>
                        <TbReceipt color="var(--primarycolor)" fontSize="1.4rem" />
                        <Text fontWeight="400" fontSize="1.2rem">Get paid safely and know we’re there to help</Text>
                    </HStack>
                    <Button fontWeight="500" color="#fff" fontSize="1rem" bg="var(--primarycolor)" height="2.5rem" transition={"0.3s ease-in-out"} _hover={{ border: "1px solid var(--primarycolor)", backgroundColor: "var(--primarysoftbg)", color: "var(--primarytext)" }} onClick={() => setPage(2)}>Get Started</Button>
                </VStack>
            )}
            {page === 2 && (
                <VStack justifyContent="start" alignItems="start" width="630px" gap="10" color="var(--primarytext)">
                    <Box backgroundColor="var(--primarysoftbg)" color="var(--primarytextcolor)" padding="0rem 0.8rem" borderRadius="5px">Create your Profile</Box>
                    <Box>
                        <Text fontSize="40px" fontWeight="500">How would you like to tell us about yourself?</Text>
                    </Box>
                    <Box>
                        <Text fontSize="15px" fontWeight="400">
                            We need to get a sense of your education, experience and skills. It’s quickest to import your information, you can edit it before your profile goes live.
                        </Text>
                    </Box>
                    <HStack>
                        <CTAButton fontWeight="500" text="Import from LinkedIn" color="var(--secondarytext)" border="1px solid var(--bordersecondary)" fontSize="1rem" bg="var(--secondarycolor)" height="2.5rem" />
                        <CTAButton fontWeight="500" text="Upload your Resume" color="var(--secondarytext)" border="1px solid var(--bordersecondary)" fontSize="1rem" bg="var(--secondarycolor)" height="2.5rem" />
                        <CTAButton fontWeight="500" text="Fill out manually (15mins)" color="var(--secondarytext)" border="1px solid var(--bordersecondary)" fontSize="1rem" bg="var(--secondarycolor)" height="2.5rem" />
                    </HStack>
                    <Button fontWeight="500" color="#fff" fontSize="1rem" bg="var(--primarycolor)" height="2.5rem" transition={"0.3s ease-in-out"} _hover={{ border: "1px solid var(--primarycolor)", backgroundColor: "var(--primarysoftbg)", color: "var(--primarytext)" }} onClick={() => setPage(3)}>Save & Continue</Button>
                </VStack>
            )}
            {page === 3 && (
                <VStack justifyContent="start" alignItems="start" width="630px" gap="10" color="var(--primarytext)">
                    <Box backgroundColor="var(--primarysoftbg)" color="var(--primarytextcolor)" padding="0rem 0.8rem" borderRadius="5px">Create your Profile</Box>
                    <Box>
                        <Text fontSize="40px" fontWeight="500">Got it. Now, add a title to tell the world what you do.</Text>
                    </Box>
                    <Box>
                        <Text fontSize="15px" fontWeight="400">
                            It’s the very first thing clients see, so make it count. Stand out by describing your expertise in your words.
                        </Text>
                    </Box>
                    <VStack width={"full"} alignItems={"start"}>
                        <Text mb='0px'>{"Your Professional Role"}</Text>
                        <Input variant='outline' placeholder='Professional Virtual Assistant' width={"100%"} />
                    </VStack>
                    <Button fontWeight="500" color="#fff" fontSize="1rem" bg="var(--primarycolor)" height="2.5rem" transition={"0.3s ease-in-out"} _hover={{ border: "1px solid var(--primarycolor)", backgroundColor: "var(--primarysoftbg)", color: "var(--primarytext)" }} onClick={() => setPage(4)}>Save & Continue</Button>
                </VStack>
            )}  {page === 4 && (
                <VStack justifyContent="start" alignItems="start" width="630px" gap="10" color="var(--primarytext)">
                    <Box backgroundColor="var(--primarysoftbg)" color="var(--primarytextcolor)" padding="0rem 0.8rem" borderRadius="5px">Create your Profile</Box>
                    <Box>
                        <Text fontSize="40px" fontWeight="500">If you have relevant work experience, add it here.</Text>
                    </Box>
                    <Box>
                        <Text fontSize="15px" fontWeight="400">
                            Freelancers who add their experience are twice as likely to win work. But if you’re just starting out, you can still create a great profile. Just head on the next page.                        </Text>
                    </Box>
                    <HStack backgroundColor="var(--primarysoftbg)" padding="2.5rem 2rem" width="300px" borderRadius="5px" border="1px solid var(--primarycolor)">
                        <IoIosAddCircleOutline />
                        <Text>Add experience</Text>
                    </HStack>
                    <Checkbox colorScheme='green' >
                        Nothing to add? Check the box and keep going.
                    </Checkbox>
                    <Button fontWeight="500" color="#fff" fontSize="1rem" bg="var(--primarycolor)" height="2.5rem" transition={"0.3s ease-in-out"} _hover={{ border: "1px solid var(--primarycolor)", backgroundColor: "var(--primarysoftbg)", color: "var(--primarytext)" }} onClick={() => setPageU(1)}>Save & Continue</Button>
                </VStack>
            )}
        </OnboardingProcess>
    )
}

export default Process;
