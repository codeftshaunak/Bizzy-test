import React from 'react'
import HomeLayout from '../../Layouts/HomeLayout';
import { Link } from 'react-router-dom';
import { Button, HStack } from '@chakra-ui/react';
import HomeComp from './HomeComp';
import { HomeFooter } from '../../Components/Footer';

const Home = () => {
    return (
        <>
            <HomeLayout>
                <HomeComp />
            </HomeLayout>
            <HomeFooter />
        </>

    )
}

export default Home;
