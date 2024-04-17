/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Profile.scss';
import MyPosts from './MyPosts/MyPosts.tsx';
import ProfileInfo from './ProfileInfo/ProfoleInfo.tsx';

const Profile = () => {
    return (
        <div className="profile">
            <ProfileInfo />
            <MyPosts />
        </div>
    );
};

export default Profile;
