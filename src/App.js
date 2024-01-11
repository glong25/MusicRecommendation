import "./App.css";
import { LeftMenu } from "./Components/LeftMenu";
import { AlbumPage } from "./Pages/Artists/AlbumPage";
import { RightMenu } from "./Components/RightMenu";
import MusicPlayer from "./Components/MusicPlayer";
import { useEffect, useState } from "react";
import eventBus from "./Store/EventBus";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ArtistsList from "./Components/Artists";
import { AlbumSongPage } from "./Pages/Artists/AlbumSongPage";
import { PopularSongPage } from "./Pages/Artists/PopularSongPage";
import HomePage from "./Pages/Home/HomePage";
import RecommendPage from "./Pages/RecommendPage/RecommendPage";


const router = createBrowserRouter([
  {
    path: "/Home",
    Component: HomePage,
  },
  {
    path: "/Recommend",
    Component: RecommendPage,
  },
  {
    path:"/Artists",
    Component:ArtistsList,
  },
  {
    path:"/Artists/:Artistsid",
    Component:PopularSongPage,
  },
  {
    path:"/Artists/:Artistsid/Albums",
    Component:AlbumPage,
  },
  {
    path:"/Artists/:Artistsid/Albums/:Albumsid",
    Component:AlbumSongPage,
  },
  
])
function App() {

  const [song,setSong]=useState('')
  const [img,setImg]=useState('')
  const [auto,setAuto]=useState()


  useEffect(()=>{
    const dataSong = eventBus.on('song', (song) => {
      console.log('Received data:', song);
      setSong(song.song)
      setImg(song.img)
    });
    
    return () => {
      dataSong.removeAllListeners();

    };
  },[song]) 
  console.info("song",song)
  console.info("img",img)


  return (
    <div className="App">
      <div className="App2">
        <LeftMenu />
        <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
        <div className="background"></div>
      </div>
      <MusicPlayer song={song} imgSrc={img} autoplay={true} />
    </div>
  );
}

export default App;
