import React from 'react'
import HomeLayout from '../../Layouts/HomeLayout';
import { Link } from 'react-router-dom';
import { Button, HStack } from '@chakra-ui/react';

const Home = () => {
    return (
        <HomeLayout>
            <br />
            <HStack gap={"10"} flexWrap={"wrap"} justifyContent={"center"}>
                <Link to="/login">
                    <Button>Login</Button>
                </Link>
                <Link to="/freelancersignup">
                    <Button>SignUp For New Opportunity</Button>
                </Link>
                <Link to="/clintsignup">
                    <Button>
                        SignUp For Hire
                    </Button>
                </Link>

                <Link to="/onboarding"><Button>On-Boarding</Button></Link>
                <Link to="/create-job"><Button>Create New Job</Button></Link>
                <Link to="/apply-job"><Button>Apply To The Job</Button></Link>
            </HStack>
        </HomeLayout>
    )
}

export default Home;
