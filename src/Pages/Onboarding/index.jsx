import React from 'react'
import HomeLayout from '../../Layouts/HomeLayout';
import Login from '../Login';
import JoinCard from './JoinCard';
import { ClientSignUp, FreelancerSignUp } from '../SignUp';
import Verify from './Verify';
import Process from './Process';

const Onboarding = () => {
    return (
        <HomeLayout>
            {/* <Login /> */}
            {/* <JoinCard /> */}
            {/* <FreelancerSignUp /> */}
            {/* <Verify /> */}
            {/* <ClientSignUp /> */}
            <Process />
        </HomeLayout>
    )
}

export default Onboarding;
