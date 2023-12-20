// ArtistList.js
import React, { useEffect, useState } from 'react';
import '../../Styles/ArtistList.css';
import axios from 'axios';
import authHeader from '../../Service/auth_header';

const ArtistList = ({data, onAlbumClick}) => {


  return (
    <div className="artist-list-container">
      <h2>List of Album:</h2>
      <ul className="artist-list">
        {data && data.map((album, index) => (
          <li key={index} className="artist-item" onClick={() => onAlbumClick(album)}>
            <img src={album.images[0].url} alt={album.name} className="artist-image" />
            <div className="artist-details">
              <h3>{album.name}</h3>
              <p>{album.release_date}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArtistList;