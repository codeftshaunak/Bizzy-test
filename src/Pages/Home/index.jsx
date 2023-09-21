import React from 'react'
import HomeLayout from '../../Layouts/HomeLayout';
import { Link } from 'react-router-dom';
import { Button, HStack } from '@chakra-ui/react';
import HomeComp from './HomeComp';

const Home = () => {
    return (
        <HomeLayout>
            {/* <HStack gap={"10"} flexWrap={"wrap"} justifyContent={"center"}>
                <Link to="/login">
                    <Button backgroundColor={"var(--primarycolor)"}>Login</Button>
                </Link>
                <Link to="/freelancersignup">
                    <Button>SignUp For New Opportunity</Button>
                </Link>
                <Link to="/clintsignup">
                    <Button backgroundColor={"var(--primarycolor)"}>
                        SignUp For Hire
                    </Button>
                </Link>

                <Link to="/onboarding"><Button backgroundColor={"var(--primarycolor)"}>On-Boarding</Button></Link>
                <Link to="/create-job"><Button>Create New Job</Button></Link>
                <Link to="/apply-job"><Button backgroundColor={"var(--primarycolor)"}>Apply To The Job</Button></Link>

                <Link to="/userprofile"><Button>Visit Profile</Button></Link>
                <Link to="/userprofile-setting"><Button backgroundColor={"var(--primarycolor)"}>Profile Setting</Button></Link>


            </HStack> */}
            <HomeComp />
        </HomeLayout>
    )
}

export default Home;
