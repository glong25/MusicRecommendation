import React from 'react';
import Img from '../img/good_times_with_bad_music_1050x700.webp';
import { useNavigate } from 'react-router-dom';

const Tracks = () => {
    let navigate= useNavigate();
  const  routeChange = (path) =>{
    navigate(path);
  }
    return (
        <div className="artist-list-container">
      <ul className="artist-list">
        
          <li key={1} className="artist-item" onClick={()=>routeChange('/Recommend')}>
            <img src={Img} alt={'Recommend music'} className="artist-image" />
            <div className="artist-details">
              <h3>{'Recommend music'}</h3>
              <p>{'Recommend music'}</p>
            </div>
          </li>
      </ul>
    </div>
    );
};

export default Tracks;
