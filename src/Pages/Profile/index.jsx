import React from 'react'
import UserProfile from '../../Components/Profile';
import UserProfileSetting from '../../Components/Profile/UserProfileSetting';
import HomeLayout from '../../Layouts/HomeLayout';

export const Profile = () => {
    return (
        <HomeLayout>
            <UserProfile />
        </HomeLayout>
    )
}

export const ProfileSetting = () => {
    return (
        <HomeLayout>
            <UserProfileSetting />
        </HomeLayout>
    )
}