import React from 'react';
import Header from '../components/Header/index.tsx';
import Nav from '../components/Nav/Nav.tsx';
import Profile from '../components/Profile/Profile.tsx';
import Dialogs from '../components/Dialogs/Dialogs.tsx';
import News from '../components/News/News.tsx';
import Music from '../components/Music/Music.tsx';
import Settings from '../components/Settings/Settings.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Home = () => {
    return (
        <BrowserRouter>
            <Header />
            <main className="main">
                <Nav />
                <Routes>
                    <Route path="/profile" Component={Profile} />
                    <Route path="/dialogs" Component={Dialogs} />
                    <Route path="/news" Component={News} />
                    <Route path="/music" Component={Music} />
                    <Route path="/settings" Component={Settings} />
                </Routes>
            </main>
        </BrowserRouter>
    );
};

export default Home;
