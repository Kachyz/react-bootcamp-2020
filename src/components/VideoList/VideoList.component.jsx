import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { useVideo } from '../../providers/Api/videosearch';

const VideoList = ({ avoidId }) => {
  const { videoData } = useVideo();
  const [videoList, setVideoList] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState('');

  const history = useHistory();

  useEffect(() => {
    const extractVideoData = () => {
      const allVideos = videoData.filter((video) => video.id.videoId !== avoidId);
      setVideoList(allVideos);
    };
    if (videoData) extractVideoData();
  }, [videoData, selectedVideo]);

  const showVideo = (videoId) => {
    setSelectedVideo(videoId);
    history.push(`/video/${videoId}`);
  };

  return (
    <div>
      {videoList.map(({ id, snippet }) => (
        <ListElement onClick={() => showVideo(id.videoId)}>
          <Thumbnail src={snippet.thumbnails.default.url} />
          <ElementTitle>{snippet.title}</ElementTitle>
        </ListElement>
      ))}
    </div>
  );
};

const Thumbnail = styled.img`
  height: 100px;
  width: 120px;
  margin: 10px;
`;

const ListElement = styled.div`
  border: solid 1px #e2e2e222;
  display: flex;
`;

const ElementTitle = styled.p`
  font-size: 25px;
  color: #d2d2d2;
`;

export default VideoList;
