import "./App.css";
import { LeftMenu } from "./Components/LeftMenu";
import { MainContainer } from "./Pages/MainContainer";
import { RightMenu } from "./Components/RightMenu";
import { Footer } from "./Components/Footer";
import MusicPlayer from "./Components/MusicPlayer";

function App() {
  return (
    <div className="App">
      <div className="App2">
        <LeftMenu />
        <MainContainer />
       
        <RightMenu />
        <div className="background"></div>
      </div>
      <span className="bor"></span>
      <MusicPlayer song={''} imgSrc={''} autoplay={''} />
      <Footer />
    </div>
  );
}

export default App;
