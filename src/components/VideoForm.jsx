import { useState } from "react";

function VideoForm(props){
const [url, setUrl] = useState("");

// function handleAddVideo(){
//     console.log("Video added");
// }

const handleAddVideo = () => {
    const newVideo = {
        id: Date.now(),
        url: url,
        completed: false
    }
    props.onAddVideo(newVideo);
setUrl("");
}


    return (
        <div>
<h1>Video Form</h1>
<input type="text" placeholder="Video URL..." />
<button onClick={handleAddVideo}>Add Video</button>
        </div>
    )

}
export default VideoForm;