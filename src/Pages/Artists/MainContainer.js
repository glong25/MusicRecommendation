import React, { useEffect, useState } from "react";
import "../../Styles/MainContainer.css";
import { FaUsers } from "react-icons/fa";
import { AudioList } from "../../Components/AudioList";
import { Banner } from "../../Components/Banner";
import Album from "./Album";
import ArtistList from "./Album";
import artistsData from './artistsData';
import axios from "axios";
import authHeader from "../../Service/auth_header";

function MainContainer() {






  const [data,setData]=useState({});
  const [error,setError]=useState();
  const [loading,setLoading]=useState();

  useEffect(() => {
    axios.get('https://api.spotify.com/v1/artists/06HL4z0CvFAxyc27GXpf02/albums',{headers:authHeader()})
    .then((res)=>{
      setData(res.data)
      setLoading(false);
    })
    .catch(error => {
      console.info(error)
      setError(error);
      setLoading(false);
    });

    const allLi = document.querySelector(".menuList").querySelectorAll("li");

    function changePopularActive() {
      allLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    allLi.forEach((n) => n.addEventListener("click", changePopularActive));
  }, []);
  const handleArtistClick = (album) => {
    console.log(`Clicked on ${album.name}`);
    // Add your logic for handling the click event
  };
  return (
    <div className="mainContainer">
      <Banner />

      <div className="menuList">
        <ul>
          <li>
            <a href="#">Popular</a>
          </li>
          <li>
            <a href="#">Albums</a>
          </li>
          <li>
            <a href="#">Songs</a>
          </li>
          <li>
            <a href="#">Fans</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>

        <p>
          <i>
            <FaUsers />
          </i>
          12.3M <span>Followers</span>
        </p>
      </div>

      <ArtistList data={data.items} onAlbumClick={handleArtistClick}/>
    </div>
  );
}

export { MainContainer };