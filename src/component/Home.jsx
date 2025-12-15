import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router';
import Footer from './Footer';
import { useLoaderData} from 'react-router';
const Home = () => {
    const data = useLoaderData();
    
    
    return (
        <div className='montserrat-font'>
            
            <Header data={data}></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;