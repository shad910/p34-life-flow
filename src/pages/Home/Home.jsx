import React from 'react';
import Banner from './Banner';
import Featured from './Featured';
import Contacts from './Contacts';
import Newsletter from './Newsletter';

const Home = () => {
    return (
        <div>
            <Banner />
            <Featured />
            <Contacts />
            <Newsletter />
        </div>
    );
};

export default Home;