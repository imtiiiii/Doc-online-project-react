import React from 'react';
import Banner from './Banner/Banner';
import Navigation from './Navigation/Navigation';



const Header = () => {
    return (
        <div>
            {/* 1. adding the navbar in header area */}
            <Navigation></Navigation>
            {/* 2.adding banner  */}
            <Banner></Banner>
        </div>
    );
};

export default Header;