import "./index.css";
import VideoForm from "./components/VideoForm";
import { useState } from "react";
import ProgressBar from "./components/ProgressBar";
import VideoList from "./components/VideoList";
import Create from "./Create";


function App() {

const [progress, setProgress] = useState(0);
const [videos, setVideos]= useState([]);


function onAddVideo(newVideo){
  setVideos([...videos, newVideo ])
}


function onHandleProgress(){
  if(progress < 5){
    setProgress(progress + 1);
  }
  
}

function onHandleReset(){
  setProgress(0);
}

  return(
<div>
<VideoForm onAddVideo={onAddVideo} />
<ProgressBar progress={progress}onHandleProgress={onHandleProgress} onHandleReset={onHandleReset}/>
<VideoList/>
<Create/>
</div>

  );
}












export default App;
