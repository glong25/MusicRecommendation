import React, { useEffect, useState } from "react";
import artist from "../img/artist.jpg";
import check from "../img/check.png";
import { FaEllipsisH, FaUsers } from "react-icons/fa";
import { useParams } from "react-router-dom";
import axios from "axios";
import authHeader from "../Service/auth_header";
function Banner() {
  let params = useParams();
  const [data, setData] = useState({});
  const [followers, setFollowers] = useState({});
  useEffect(() => {
    axios.get(`https://api.spotify.com/v1/artists/${params.Artistsid}`,{headers:authHeader()})
    .then((res)=>{
      setData(res.data)
      setFollowers(res.data.followers.total)
      console.info(res.data)
    })
    .catch(error => {
      console.info(error)
    });
  },[]);

  return (
    <div className="Banner">
      <img src={artist} alt="" className="bannerImg" />

      <div className="content">
        <div className="breadCrump">
          
          <i>
            <FaEllipsisH />
          </i>
        </div>

        <div className="artist">
          <div className="left">
            <div className="name">
              <h2>{data.name}</h2>
              <img src={check} /**/ alt="" />
            </div>

            <p>
              <i>
                <FaUsers />
              </i>
              {followers.toLocaleString()}<span>Followers</span>
            </p>
          </div>

          <div className="">
            <a href="#"></a>
            <a href="#">
              <i>{/* <FaCheck /> */}</i>
            </a>
          </div>
        </div>
      </div>

      <div className="bottom"></div>
    </div>
  );
}

export { Banner };
