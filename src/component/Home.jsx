import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router';
import Footer from './Footer';

const Home = () => {
    
    
    
    return (
        <div className='montserrat-font'>
            
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;