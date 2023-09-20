import React, { useState } from 'react'
import HomeLayout from '../../Layouts/HomeLayout';
import Login from '../Login';
import JoinCard from './JoinCard';
import { ClientSignUp, FreelancerSignUp } from '../SignUp';
import Verify from './Verify';
import Process from './Process';

const Onboarding = () => {
    const [page, setPage] = useState(1);
    return (
        <>
            {page === 1 && <Login setPage={setPage} />}
            {page === 2 && <JoinCard setPage={setPage} />}
            {page === 3 && <Verify setPage={setPage} />}
            {

                page === 4 &&
                <HomeLayout>
                    <Process setPageU={setPage} />
                </HomeLayout>

            }
        </>

    )
}

export default Onboarding;
