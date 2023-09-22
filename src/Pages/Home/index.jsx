import React from 'react'
import HomeLayout from '../../Layouts/HomeLayout';
import { Link } from 'react-router-dom';
import { Button, HStack } from '@chakra-ui/react';
import HomeComp from './HomeComp';

const Home = () => {
    return (
        <HomeLayout>
            <HomeComp />
        </HomeLayout>
    )
}

export default Home;
