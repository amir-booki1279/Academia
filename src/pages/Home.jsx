import React from 'react';
import Services from '../features/home/Services';
import Courses from '../features/home/Courses';
import Category from '../features/home/Category';

const Home = () => {
    return (
        <div>
            <Services/>
            <Courses/>
            <Category/>
        </div>
    );
};

export default Home;