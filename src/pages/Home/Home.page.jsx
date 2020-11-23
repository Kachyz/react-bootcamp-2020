/* eslint-disable */
import React, { useRef, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import VideoCard from '../../components/VideoCard';
import axios from 'axios';

import { useAuth } from '../../providers/Auth';
import './Home.styles.css';

function HomePage() {
  const history = useHistory();
  const sectionRef = useRef(null);
  const { authenticated, logout } = useAuth();
  const [receivedData, setReceivedData] = useState()

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
  }

  useEffect(() => {
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
        console.log('aqui mereo', response.data.items);
        setReceivedData(response.data.items)
      })
      .catch(function (error) {
        console.log('error', error);
      });
  }, []);

  return (
    <div className="homepage" ref={sectionRef}>
      {/*
      <h1>Hello stranger!</h1>
          {authenticated ? (
        <>
        <h2>Good to have you back</h2>
          <span>
            <Link to="/" onClick={deAuthenticate}>
            ← logout
            </Link>
          <span className="separator" />
          <Link to="/secret">show me something cool →</Link>
          </span>
            </>
          ) : (
            <Link to="/login">let me in →</Link>
      )}
      */}
      <div className="mainContainer">
        { receivedData && (
           receivedData.map((video) => <VideoCard thumbnail={video.snippet.thumbnails.high.url}/>)
        )}
      </div>
    </div>
  );
}

export default HomePage;
