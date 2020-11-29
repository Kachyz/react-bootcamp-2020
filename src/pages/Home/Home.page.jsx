/* eslint-disable */
import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useVideo } from '../../providers/Api/videosearch';
import VideoCard from '../../components/VideoCard';

import { useAuth } from '../../providers/Auth';
import './Home.styles.css';

function HomePage() {
  const history = useHistory();
  const sectionRef = useRef(null);
  const { authenticated, logout } = useAuth();
  const { videoData } = useVideo();

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
  }

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
        {videoData && (
           videoData
            .filter(result => result.id.kind === "youtube#video" )
            .map((video) => (
             <VideoCard
                thumbnail={video.snippet.thumbnails.high.url}
                key={video.id.videoId}
                title={video.snippet.title}
                videoId={video.id.videoId}
             />
           )
        ))}
      </div>
    </div>
  );
}

export default HomePage;
