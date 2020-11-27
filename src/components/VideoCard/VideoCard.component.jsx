import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';

const VideoCard = props => {
  const { thumbnail, title, videoId } = props;
  const fixedTitle = title
    .replaceAll('&#39;', "'", 'g')
    .replaceAll('&amp;', '&', 'g')
  const degrees = Math.random() * 70 - 35;

  const history = useHistory();

  const showVideo = () => {
    history.push(`video/${videoId}`);
  }

  return (
    <Container rotation={degrees} onClick={showVideo}>
      <Thumbnail src={ thumbnail }/>
      <Text>{ fixedTitle }</Text>
    </Container>
  );
};

const Container = styled.button`
  box-shadow: 3px 3px 5px black;
  background: #e4e4e4;
  width: 300px;
  height: 350px;
  text-align: center;
  margin: 35px;
  border: none;
  transform: rotateZ( ${props => props.rotation}deg );
`;

const Thumbnail = styled.img`
  height: 260px;
  width: 280px;
  margin-top: 10px;
  border: black 1px solid;
`;

const Text = styled.p`
  font-family: 'Indie Flower', cursive;
  font-size: 18px;
  margin: 0;
  padding: 0;
`;

export default VideoCard;
