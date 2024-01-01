import React, { useEffect, useState } from "react";
import "../../Styles/MainContainer.css";
import { FaUsers } from "react-icons/fa";
import { AudioList } from "../../Components/AudioList";
import { Banner } from "../../Components/Banner";
import Album from "./Album";
import AlbumList from "./Album";
import artistsData from './artistsData';
import axios from "axios";
import authHeader from "../../Service/auth_header";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";

function AlbumPage() {
  let navigate = useNavigate();

  const routeChange = (path) => {
    navigate(path);
  }

  let params = useParams();
  useEffect(() => {
    const allLi = document.querySelector(".menuList").querySelectorAll("li");

    function changePopularActive() {
      allLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    allLi.forEach((n) => n.addEventListener("click", changePopularActive));
  }, []);

  return (
    <div className="mainContainer">
      <Banner />

      <div className="menuList">
      <ul>
          <li>
            <a href="" onClick={()=>routeChange(`/Artists/${params.Artistsid}`)}>Popular</a>
          </li>
          <li>
            <a href="" onClick={()=>routeChange(`/Artists/${params.Artistsid}/Albums`)}>Albums</a>
          </li>
          <li>
            <a href="" onClick={()=>routeChange(`/Artists/${params.Artistsid}/Songs`)}>Songs</a>
          </li>
          <li>
            <a href="" onClick={()=>routeChange(`/Artists/${params.Artistsid}/Fans`)}>Fans</a>
          </li>
          <li>
            <a href="" onClick={()=>routeChange(`/Artists/${params.Artistsid}/About`)}>About</a>
          </li>
        </ul>

       
      </div>

      <AlbumList />
    </div>
  );
}

export { AlbumPage };