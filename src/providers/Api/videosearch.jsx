/* eslint-disable */
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import videoSearchMock from '../../mocks/videoSearch.json';

const VideoContext = React.createContext(null);

function useVideo() {
  const context = useContext(VideoContext);
  return context;
}

const VideoProvider = ({ children }) => {
  const [receivedData, setReceivedData] = useState();

  useEffect(() => {
    if (process.env.REACT_APP_MODE === 'DEV') {
      setReceivedData(videoSearchMock.items);
    } else {
      axios
        .get('https://content-youtube.googleapis.com/youtube/v3/search', {
          params: {
            q: 'wizeline',
            maxResults: 25,
            part: 'id',
            part: 'snippet',
            key: process.env.REACT_APP_API_KEY,
          },
        })
        .then(function (response) {
          console.log('FROM API', response.data.items);
          setReceivedData(response.data.items);
        })
        .catch(function (error) {
          console.log('error', error);
        });
    }
  }, []);

  return (
    <VideoContext.Provider value={{ videoData: receivedData }}>
      {children}
    </VideoContext.Provider>
  );
};

export default VideoProvider;
export { useVideo };
