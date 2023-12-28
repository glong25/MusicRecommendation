// ArtistList.js
import React, { useEffect, useState } from 'react';
import '../../Styles/ArtistList.css';
import axios from 'axios';
import authHeader from '../../Service/auth_header';
import { useNavigate } from 'react-router-dom';


const ArtistsList = () => {
  const [artists, setArtists]=useState();
  const [loading, setLoading]=useState();
  const [error, setError]=useState();

  const link = 'https://api.spotify.com/v1/artists';
  const listArtist = '2CIMQHirSU0MQqyYHq0eOx%2C57dN52uHvrHOxijzpIgu3E%2C1vCWHaC5f2uS3yhpwWbIA6%2C06HL4z0CvFAxyc27GXpf02'

  let navigate= useNavigate();
  const  routeChange = (path) =>{ 
    navigate(path);
  }

  useEffect(() => {

    axios.get(link + '?ids='+listArtist,{headers:authHeader()})
    .then((res)=>{
      setArtists(res.data.artists)
      setLoading(false);
      console.info(res.data.artists)
    })
    .catch(error => {
      console.info(error)
      setError(error);
      setLoading(false);
    });

      
  }, []);

  return (
    <div className="artist-list-container" >
      <h2>List of Altists:</h2>
      <ul className="artist-list">
        {artists && artists.map((artist, index) => (
          <li key={index} className="artist-item" onClick={()=>routeChange(artist.id)}>
            <img src={artist.images[0].url} alt={artist.name} className="artist-image" />
            <div className="artist-details">
              <h3>{artist.name}</h3>
              <p>{artist.genres[0]}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArtistsList;