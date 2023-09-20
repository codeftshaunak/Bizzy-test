import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Onboarding from '../Pages/Onboarding';
import Login from '../Pages/Login';
import { ClientSignUp, FreelancerSignUp } from '../Pages/SignUp';
import Verify from '../Pages/Onboarding/Verify';
import JoinCard from '../Pages/Onboarding/JoinCard';
import Home from '../Pages/Home';
import JobPost from '../Pages/JobPost';
import ApplyJob from '../Pages/ApplyJob';
import JobDetails from '../Components/JobDetails/JobDetails';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<JobDetails />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/freelancersignup" element={<ClientSignUp />} />
                <Route exact path="/clintsignup" element={<FreelancerSignUp />} />
                <Route exact path="/joincard" element={<JoinCard />} />
                <Route exact path="/verify" element={<Verify />} />
                <Route exact path="/onboarding" element={<Onboarding />} />

                <Route exact path="/create-job" element={<JobPost />} />

                <Route exact path="/apply-job" element={<ApplyJob />} />

            </Routes>
        </BrowserRouter>
    )
}

export default Router;
