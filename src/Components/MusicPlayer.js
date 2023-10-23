import React, { useState, useRef, useEffect } from "react";
import "../Styles/MusicPlayer.css";
import {
  FaRegHeart,
  FaHeart,
  FaForward,
  FaStepForward,
  FaStepBackward,
  FaBackward,
  FaPlay,
  FaPause,
  FaShareAlt,
} from "react-icons/fa";
import { AiOutlineDownload } from "react-icons/ai";

function MusicPlayer({ song, imgSrc, auto }) {
  return (
    <div className="musicPlayer">
      <div className="songImage">
        <img src={imgSrc} alt="" />
      </div>
      <div className="songAttributes">
        <audio src={song} preload="metadata" />

        <div className="top">
          <div className="left">
            <div className="loved">
              <i>
                <FaRegHeart />
              </i>
              <i>
                <FaHeart />
              </i>
            </div>
            <i className="download">
              <AiOutlineDownload />
            </i>
          </div>

          <div className="middle">
            <div className="back">
              <i>
                <FaStepBackward />
              </i>
              <i>
                <FaBackward />
              </i>
            </div>
            <div className="playPause">
              <i>
                <FaPause />
              </i>
              <i>
                <FaPlay />
              </i>
            </div>
            <div className="forward">
              <i>
                <FaForward />
              </i>
              <i>
                <FaStepForward />
              </i>
            </div>
          </div>

          <div className="right">
            <i>
              <FaShareAlt />
            </i>
          </div>
        </div>

        <div className="bottom">
          <div className="currentTime"></div>
          <input type="range" className="progressBar" />
          <div className="duration"></div>
        </div>
      </div>
    </div>
  );
}

export default MusicPlayer;
