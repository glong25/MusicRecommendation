import React, { useEffect, useState } from 'react';
import { FaRegClock, FaRegHeart, FaHeart } from "react-icons/fa";
import { AudioList } from '../../Components/AudioList';
import { useParams } from 'react-router-dom';
import eventBus from '../../Store/EventBus';
import axios from 'axios';
import authHeader from '../../Service/auth_header';

const RecommendPage = () => {
  const [data, setData] = useState();
  const [abum, setAbum] = useState({});
  const [image, setImage] = useState();


  function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }
  const topTracksIds = [
    '1BxfuPKGuaTgP7aM0Bbdwr','2jB9QaPJyVdz2Q0Va8rrnU','5rZQUcZVDCCUsJHeaxVPpG','5cF0dROlMOK5uNZtivgu50','7x9aauaA9cu6tyfpHnqDLo'
  ];
  useEffect(() => {
    axios.get(`https://api.spotify.com/v1/recommendations?limit=30&seed_tracks=${topTracksIds.join(',')}`,{headers:authHeader()})
    .then((res)=>{
      setData(res.data.tracks)
    })
    .catch(error => {
      console.error(error)
    });
   
  },[]);
  

  const setMainSong = (songSrc, imgSrc) => {
    const data = {
      song:songSrc,
      img:imgSrc
    }

    eventBus.emit('song', data);
    
  };


  return (
    <div className="AudioList">
        <h2 className="title">   
        Recommendation playlist:
      </h2>
      <div className="songsContainer">
        {data &&
          data.map((song, index) => (
            <div
              className="songs"
              key={song?.id}
              onClick={() => setMainSong(song?.preview_url, song?.album.images[0].url)}
            >
              <div className="count">
                <p>{`#${index + 1}`}</p>
              </div>
              <div className="song">
                <div className="imgBox">
                  <img src={song?.album.images[0].url} alt="" />
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
};

export default RecommendPage;
