import { BsJournalAlbum } from "react-icons/bs";
import { BiLibrary } from "react-icons/bi";
import { FaPodcast, FaMicrophoneAlt } from "react-icons/fa";
import {GiMicrophone} from 'react-icons/gi';
import {IoMdRadio} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'

const MenuList = [
  {
    id: 1,
    icon: <AiFillHome />,
    name: "Home",
  },
  {
    id: 2,
    icon: <BiLibrary />,
    name: "Library",
  },
  {
    id: 3,
    icon: <FaMicrophoneAlt/>,
    name: "Artists",
  },
  {
    id: 4,
    icon: <GiMicrophone />,
    name: "Karaoke",
  },
  {
    id: 5,
    icon: <BsJournalAlbum />,
    name: "Albums",
  },
  {
    id: 6,
    icon: <FaPodcast />,
    name: "Podcasts",
  },
];

export { MenuList };