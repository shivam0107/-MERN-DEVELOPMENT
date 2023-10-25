import react from "react";
import "./App.css";
import Video from "./components/Video";
import videos from "./data/data"; 
import Playbutton from "./components/Playbutton";
function App() {

  


  return (
    <>
      <div className="App">
        <h1>Videos</h1>

        {videos.map((video) => (
          <Video
            title = {video.title}
            views = {video.views}
            time  = {video.time}
            channel = {video.channel}
            verified={video.verified}
            id = {video.id}
          ></Video> 
        ))}

        <Playbutton></Playbutton>

      </div>
    </>
  );
}

export default App;
