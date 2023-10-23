import React from "react";
import artist from "../img/artist.jpg";
import check from "../img/check.png";
import { FaEllipsisH, FaHeadphones, FaCheck } from "react-icons/fa";
function Banner() {
  return (
    <div className="Banner">
      <img src={artist} alt="" className="bannerImg" />

      <div className="content">
        <div className="breadCrump">
          <p>
            Home<span>/Unbelievable</span>
          </p>
          <i>
            <FaEllipsisH />
          </i>
        </div>

        <div className="artist">
          <div className="left">
            <div className="name">
              <h2>GLong25</h2>
              <img src={check} /**/ alt="" />
            </div>

            <p>
              <i>
                <FaHeadphones />
              </i>
              12,345,678 <span>Monthly Listeners</span>
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
