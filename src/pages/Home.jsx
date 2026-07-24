import React from 'react';
import Services from '../features/home/Services';
import Courses from '../features/home/Courses';
import Category from '../features/home/Category';
import TeacherSlider from '../features/home/TeacherSlider';
import Blogs from '../features/home/Blogs';

const Home = () => {
    return (
        <div>
            <Services/>
            <Courses/>
            <Category/>
            <TeacherSlider/>
            <Blogs/>
        </div>
    );
};

export default Home;