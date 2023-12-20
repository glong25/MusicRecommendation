import "./App.css";
import { LeftMenu } from "./Components/LeftMenu";
import { MainContainer } from "./Pages/Artists/MainContainer";
import { RightMenu } from "./Components/RightMenu";
import MusicPlayer from "./Components/MusicPlayer";
import { useEffect, useState } from "react";
import eventBus from "./Store/EventBus";
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
        <MainContainer />
        <RightMenu />
        <div className="background"></div>
      </div>
      <MusicPlayer song={song} imgSrc={img} autoplay={true} />
    </div>
  );
}

export default App;
