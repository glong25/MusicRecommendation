import React, { useEffect, useState } from "react";
import { FaHeadphones, FaRegClock, FaRegHeart, FaHeart } from "react-icons/fa";
import "../Styles/LeftMenu.css";
import { Songs } from "./Songs";
import eventBus from "../Store/EventBus";
import axios from "axios";
import authHeader from "../Service/auth_header";

function AudioList() {


  const [songs, setSongs] = useState(Songs);
  const [song, setSong] = useState(songs[0].song);
  const [img, setImage] = useState(songs[0].imgSrc);
  const [auto, setAuto] = useState(false);
  const [data, setData] = useState({});
  const [abum, setAbum] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }
  
  useEffect(() => {

    axios.get('https://api.spotify.com/v1/albums/4hDok0OAJd57SGIT8xuWJH/tracks',{headers:authHeader()})
    .then((res)=>{
      setData(res.data)
      setLoading(false);
    })
    .catch(error => {
      console.info(error)
      setError(error);
      setLoading(false);
    });

    axios.get('https://api.spotify.com/v1/albums/4hDok0OAJd57SGIT8xuWJH',{headers:authHeader()})
    .then((res)=>{
      setAbum(res.data)
      setLoading(false);
    })
    .catch(error => {
      console.info(error)
      setAbum(error);
      setLoading(false);
    });
    console.info("a")
    const allSongs = document.querySelectorAll(".songs");
    function changeActive() {
      allSongs.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }
    allSongs.forEach((n) => n.addEventListener("click", changeActive));    
  }, []);
  

  const changeFavourite = (id) => {
    Songs.forEach((song) => {
      if (song.id == id) {
        song.favourite = !song.favourite;
      }
    });

    setSongs([...songs]);
  };

  const setMainSong = (songSrc, imgSrc) => {
    setSong(songSrc);
    setImage(imgSrc);
    setAuto(true);

    const data = {
      song:songSrc,
      img:imgSrc
    }

    eventBus.emit('song', data);
    
  };
  
  console.info(abum)
  
  return (
    <div className="AudioList">
      <h2 className="title">
        {abum.name} <span>{abum.total_tracks} songs</span>
      
      </h2>

      <div className="songsContainer">
        {data.items &&
          data.items.map((song, index) => (
            <div
              className="songs"
              key={song?.id}
              onClick={() => setMainSong(song?.preview_url, abum.images[0].url)}
            >
              <div className="count">
                <p>{`#${index + 1}`}</p>
              </div>
              <div className="song">
                <div className="imgBox">
                  <img src={abum.images[0].url} alt="" />
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