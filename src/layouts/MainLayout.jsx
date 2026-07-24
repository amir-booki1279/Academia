import 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const MainLayout = () => {
    return (
        <>
        <Header/>
        <div>
            <Outlet/>
        </div>
        <Footer/>
        </>
    );
};

export default MainLayout;