import React from "react";
import "../Styles/LeftMenu.css";
import Track from "../img/Track.png";
import { motion } from "framer-motion";
import { BsFillVolumeUpFill, BsMusicNoteList } from "react-icons/bs";
import { FaDesktop } from "react-icons/fa";

function TrackList({ trackName, artistName }) {
  return (
    <div className="trackList">
      <div className="top">
        <motion.img
          src={Track}
          /* chỗ track này thêm hình của m vào vô m vô chỗ thư mục img thêm ảnh vào r đổi tên*/ whileTap={{
            scale: 0.6,
          }}
        />
        <p>
          {trackName} <span>{artistName}</span>
        </p>
      </div>

      <div className="bottom">
        <i>
          <BsFillVolumeUpFill />
        </i>

        <input type="range" />

        <i>
          <BsMusicNoteList />
        </i>

        <i>
          <FaDesktop />
        </i>
      </div>
    </div>
  );
}

export default TrackList;
