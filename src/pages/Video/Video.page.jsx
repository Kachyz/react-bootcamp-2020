import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useVideo } from '../../providers/Api/videosearch';
import VideoPlayer from '../../components/VideoPlayer';
import './Video.styles.css';

const VideoPage = () => {
  const { id } = useParams();
  const { videoData } = useVideo();
  const [videoInfo, setVideoInfo] = useState(null);

  useEffect(() => {
    const extractVideoData = () => {
      const selectedVideo = videoData.filter(video => video.id.videoId === id)[0]
      setVideoInfo(selectedVideo.snippet);
    };
    if(videoData)
      extractVideoData();

  }, [videoData]);

  return (
    <div className="video-page-container">
      { videoInfo && <>
        <div className="selected-video">
          <VideoPlayer id={id} title={videoInfo.title} description={videoInfo.description}/>
        </div>
        <div className="video-list"></div>
      </>}
    </div>
  );
}

export default VideoPage;

