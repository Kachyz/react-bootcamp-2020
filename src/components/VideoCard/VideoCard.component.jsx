import React from 'react';
import styled from 'styled-components';

const VideoCard = () => {
  return <Container>
    <Thumbnail src="https://i.ytimg.com/vi/E1Vq_A3WKK8/hqdefault.jpg" />
  </Container>;
}

const Container = styled.div`
  box-shadow: 3px 3px 5px black;
  background: #e4e4e4;
  width: 300px;
  height: 350px;
`;

const Thumbnail = styled.img`
  height: 260px;
  width: 280px;
  margin-top: 10px;
  border: black 1px solid;
`

export default VideoCard;

