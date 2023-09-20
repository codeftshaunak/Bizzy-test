import React from 'react'
import HomeLayout from '../../Layouts/HomeLayout';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <HomeLayout>
            <Link to="/login">Login</Link>
            <Link to="/freelancersignup">SignUp For New Opportunity</Link>
            <Link to="/clintsignup">SignUp For Hire</Link>
            <Link to="/joincard"></Link>
            <Link to="/verify"></Link>
            <Link to="/onboarding">On-Boarding</Link>
            <Link to="/create-job">Create New Job</Link>
            <Link to="/apply-job">Apply To The Job</Link>
        </HomeLayout>
    )
}

export default Home;
