import React from 'react';
import styled from 'styled-components';

const VideoCard = props => {
  const { thumbnail } = props;
  const degrees = Math.random() * 90 - 45;

  return (
    <Container rotation={degrees}>
      <Thumbnail src={ thumbnail }/>
    </Container>
  );
};

const Container = styled.div`
  box-shadow: 3px 3px 5px black;
  background: #e4e4e4;
  width: 300px;
  height: 350px;
  text-align: center;
  margin: 35px;
  transform: rotateZ( ${props => props.rotation}deg );
`;

const Thumbnail = styled.img`
  height: 260px;
  width: 280px;
  margin-top: 10px;
  border: black 1px solid;
`;

export default VideoCard;
