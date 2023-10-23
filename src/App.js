import "./App.css";
import { LeftMenu } from "./Components/LeftMenu";
import { MainContainer } from "./Components/MainContainer";
import { RightMenu } from "./Components/RightMenu";
import { Footer } from "./Components/Footer";

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
      <Footer />
    </div>
  );
}

export default App;
