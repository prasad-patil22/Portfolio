import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Chatbot from './Chatbot';

const Layout = () => {
    return (
        <div style={{
            display: 'flex', flexDirection: 'column', minHeight:
                '100vh'
        }}>
            {/* Fixed Header */}
            <div style={{
                position: 'fixed', top: 0, width: '100%', zIndex:
                    100
            }}>

                <Header />
            </div>
            {/* Main Content (Outlet) */}

            <div><Chatbot/> </div>
            <div style={{
                flex: 1, paddingTop: '75px'
            }}>
                <Outlet style={{background:'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'}} >

                </Outlet>
            </div>
            {/* Fixed Footer */}
            <div style={{
                position: 'float',
                bottom: 0,
                width: '100%',
                zIndex: 100,
                backgroundColor: 'black',
                color: 'white'
            }}>
                <Footer />
               
            </div>
        </div>
    );
};
export default Layout;