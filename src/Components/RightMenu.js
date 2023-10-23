import React, { useState } from "react";
import "../Styles/RightMenu.css";
import { FaCrown, FaBell, FaRegHeart, FaCogs } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { BsCloudUpload } from "react-icons/bs";
import Profile from "../img/profile.jpg";
import { motion } from "framer-motion";

function RightMenu() {
  return (
    <div className="rightContainer">
      <div className="goPro">
        <i>
          <FaCrown className="duy" />
          <p>Vip</p>
        </i>

        <i>
          <FaBell />
        </i>

        <i>
          <FaRegHeart />
        </i>
      </div>
      <div className="profile">
        <i>
          <BsCloudUpload />
        </i>
        <i>
          <FiSettings />
        </i>
        <i>
          <FaCogs />
        </i>

        <div className="profileImage">
          <motion.img
            src={Profile} // profile này m thêm ảnh m vào vô folder img r thêm ảnh vào
            alt=""
            whileTap={{ scale: 0.6 }}
          />
        </div>
      </div>
    </div>
  );
}

export { RightMenu };
