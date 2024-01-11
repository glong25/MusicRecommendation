import React from 'react';
import ArtistsList from '../../Components/Artists';
import '../../Styles/HomePage.css';
import Tracks from '../../Components/Tracks';

function HomePage() {
    return (
        <div>
            <h2 style={{ color: '#f1f1f1', fontSize: '20px', marginBottom: '10px' }}>Made for you:</h2>
            <div  className="scrollable-component">
                <Tracks />
            </div>
            <h2 style={{ color: '#f1f1f1', fontSize: '20px', marginBottom: '10px' }}>Recommend Artists:</h2>
            <div  className="scrollable-component">
                <ArtistsList />
            </div>
        </div>
    );
}

export default HomePage;
