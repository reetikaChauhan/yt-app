import React,{ useState,useEffect } from 'react';
import SearchBar from './SearchBar';
//import youtube from  '../api/youtube';
import VideoList from './videoList';
import VideoDetail from './videoDetail';
//import VideoItem from './videoItem';
import useVideos from '../hooks/UseVideos';

const App = () => {
    
    const [selectedVideo , setSelectedVideo] = useState(null);
    const [videos,search] = useVideos('buildings');
    useEffect(() => {
        setSelectedVideo(videos[0]);
    }, [videos]);
    
    return (
        <div className="ui container" style={{marginTop:'10px'}}>
            <SearchBar onFormSubmit = {search} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo} />
                    </div >
                    <div className="five wide column">
                        <VideoList 
                        // onVideoSelect={(video) => setSelectedVideo(video) } 
                        onVideoSelect = {setSelectedVideo}
                        videos = {videos}/>
                    </div>
                </div>
            </div> 
        </div>
    );
   
    
    
     
};

export default App;



