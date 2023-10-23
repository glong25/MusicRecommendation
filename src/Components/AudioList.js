import React, { useEffect, useState } from "react";
import { FaHeadphones, FaRegClock, FaRegHeart, FaHeart } from "react-icons/fa";
import "../Styles/LeftMenu.css";
import MusicPlayer from "./MusicPlayer";

function AudioList() {
  return (
    <div className="AudioList">
      <h2 className="title">
        My list <span>15 bài hát</span>
      </h2>

      <div className="songsContainer">
        <div className="songs">
          <div className="count"></div>
          <div className="song">
            <div className="imgBox"></div>
            <div className="section">
              <p className="songName"></p>

              <div className="hits">
                <p className="hit">
                  <i>
                    <FaHeadphones />
                  </i>
                  98,765,432
                </p>

                <p className="duration">
                  <i>
                    <FaRegClock />
                  </i>
                  03:15
                </p>
                <div className="favourite">
                  <i>
                    <FaHeart />
                  </i>

                  <i>
                    <FaRegHeart />
                  </i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <MusicPlayer />
    </div>
  );
}

export { AudioList };
