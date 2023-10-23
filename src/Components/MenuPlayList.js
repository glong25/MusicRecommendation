import React from "react";
import "../Styles/LeftMenu.css";
import { FaPlus } from "react-icons/fa";
import { BsMusicNoteList, BsTrash } from "react-icons/bs";
import { PlayList } from "./PlayList";

function MenuPlayList() {
  return (
    <div className="playListContainer">
      <div className="nameContainer">
        <p>My Favorite</p>
        <i>
          <FaPlus />
        </i>
      </div>

      <div className="playListScroll">
        {PlayList &&
          PlayList.map((list) => (
            <div className="playLists">
              <i className="list">
                <BsMusicNoteList />
              </i>
              <p>{list.name}</p>
              <i className="trash">
                <BsTrash />
              </i>
            </div>
          ))}
      </div>
    </div>
  );
}

export { MenuPlayList };
