import React, { useEffect, useState } from "react";
import { FaHeadphones, FaRegClock, FaRegHeart, FaHeart } from "react-icons/fa";
import "../Styles/LeftMenu.css";
import { Songs } from "./Songs";
import eventBus from "../Store/EventBus";
import axios from "axios";
import authHeader from "../Service/auth_header";
import { useParams } from "react-router-dom";

function AudioList({ AudioType}) {


  const [songs, setSongs] = useState(Songs);
  const [data, setData] = useState();
  const [abum, setAbum] = useState({});
  const [image, setImage] = useState();


  function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }
  let params = useParams();
  
  useEffect(() => {
    if(AudioType == "Album"){
      axios.get(`https://api.spotify.com/v1/albums/${params.Albumsid}/tracks`,{headers:authHeader()})
      .then((res)=>{
        setData(res.data.items)
      })
      .catch(error => {
        console.error(error)
      });
  
      axios.get(`https://api.spotify.com/v1/albums/${params.Albumsid}`,{headers:authHeader()})
      .then((res)=>{
        setAbum(res.data)
      })
      .catch(error => {
        console.info(error)
        setAbum(error);
      });
    }
    else if(AudioType == "Popular"){
      axios.get(`https://api.spotify.com/v1/artists/${params.Artistsid}/top-tracks?market=VN`,{headers:authHeader()})
      .then((res)=>{
        setData(res.data.tracks)
      })
      .catch(error => {
        console.error(error)
      });


    }

    const allSongs = document.querySelectorAll(".songs");
    function changeActive() {
      allSongs.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }
    allSongs.forEach((n) => n.addEventListener("click", changeActive));    
  },[]);
  

  const changeFavourite = (id) => {
    Songs.forEach((song) => {
      if (song.id == id) {
        song.favourite = !song.favourite;
      }
    });

    setSongs([...songs]);
  };

  const setMainSong = (songSrc, imgSrc) => {
    const data = {
      song:songSrc,
      img:imgSrc
    }

    eventBus.emit('song', data);
    
  };
  const takeImage = (index) => {
    if (AudioType == "Album") {
      return (abum.images[0].url || " ");
    }else if(AudioType == "Popular"){

      return (data[index].album.images[0].url || " ")
    }
  }
  
  return (
    <div className="AudioList">
    {AudioType == "Album" ? (
      <h2 className="title">   
        {abum.name} <span>{abum.total_tracks} songs</span>
      </h2>
      ):AudioType == "Popular" ? (
        <h2 className="title">   
        Popular
      </h2>
      ):null}
     

      <div className="songsContainer">
        {data &&
          data.map((song, index) => (
            <div
              className="songs"
              key={song?.id}
              onClick={() => setMainSong(song?.preview_url, takeImage(index))}
            >
              <div className="count">
                <p>{`#${index + 1}`}</p>
              </div>
              <div className="song">
                <div className="imgBox">
                  <img src={takeImage(index)} alt="" />
                </div>
                <div className="section">
                  <p className="songName">
                    {song.name.charAt(0).toUpperCase()
                    + song.name.slice(1)}{" "}
                    <span className="songSpan">{song.artists && song.artists.map((name, index)=>(
                      <p>{name.name}</p>
                    ))}
                    </span>
                  </p>

                  <div className="hits">
                    

                    <p className="duration">
                      <i>
                        <FaRegClock />
                      </i>
                      {millisToMinutesAndSeconds(song.duration_ms)}
                    </p>
                    <div
                      className="favourite"
                      onClick={() => changeFavourite(song?.id)}
                    >
                      {song?.favourite ? (
                        <i>
                          <FaHeart />
                        </i>
                      ) : (
                        <i>
                          <FaRegHeart />
                        </i>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

      </div>

      
    </div>
  );
}

export { AudioList };