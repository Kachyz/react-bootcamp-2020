/* eslint-disable */
import React from 'react';
import styled from 'styled-components';

const VideoPlayer = ({ id, title, description }) => {
  return (
    <>
      <iframe width="100%" height="500px" src={`https://www.youtube.com/embed/${id}`} />
      <VideoTitle>{title}</VideoTitle>
      <VideoDescription>{description}</VideoDescription>
    </>
  );
};

const VideoTitle = styled.h2`
  color: #e8e8e8;
`;

const VideoDescription = styled.p`
  color: #e8e8e8;
`;

export default VideoPlayer;
