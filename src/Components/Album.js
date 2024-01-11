// ArtistList.js
import React, { useEffect, useState } from 'react';
import '../Styles/ArtistList.css';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import authHeader from '../Service/auth_header';


const AlbumList = () => {
  let navigate= useNavigate();
  const  routeChange = (path) =>{
    navigate(path);
  }
  let params = useParams();
  const [data, setData]=useState();
  const [error, setError]=useState();
  const [loading, setLoading]=useState();
  useEffect(() => {

    axios.get(`https://api.spotify.com/v1/artists/${params.Artistsid}/albums`,{headers:authHeader()})
    .then((res)=>{
      setData(res.data.items)
      setLoading(false);
    })
    .catch(error => {
      console.info(error)
      setError(error);
      setLoading(false);
    });

      
  },[]);


  return (
    <div className="artist-list-container">
      <h2>List of Album:</h2>
      <ul className="artist-list">
        {data && data.map((album, index) => (
          <li key={index} className="artist-item" onClick={()=>routeChange(album.id)}>
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

export default AlbumList;