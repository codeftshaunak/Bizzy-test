import React from 'react'
import HomeLayout from '../../Layouts/HomeLayout'
import { AllJobs } from '../../Components/FindJobUi'
import { VStack } from '@chakra-ui/react'

const FindJob = () => {
    return (
        <HomeLayout>
            <VStack padding={"0 2rem"}>
                <AllJobs />
            </VStack>
        </HomeLayout>
    )
}

export default FindJob
