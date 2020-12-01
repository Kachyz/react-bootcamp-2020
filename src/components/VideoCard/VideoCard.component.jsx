import React, {useContext} from 'react';
import { useHistory } from 'react-router';
import { ThemeContext } from '../../providers/Theme/ThemeProvider';
import styled from 'styled-components';

const VideoCard = (props) => {
  const { thumbnail, title, videoId } = props;
  const fixedTitle = title.replaceAll('&#39;', "'", 'g').replaceAll('&amp;', '&', 'g');
  const degrees = Math.random() * 70 - 35;
  const { theme } = useContext(ThemeContext);

  const history = useHistory();

  const showVideo = () => {
    history.push(`video/${videoId}`);
  };

  return (
    <Container rotation={degrees} onClick={showVideo} background={theme.backgroundColor}>
      <Thumbnail src={thumbnail} />
      <Text>{fixedTitle}</Text>
    </Container>
  );
};

const Container = styled.button`
  box-shadow: 3px 3px 5px black;
  background: ${props => props.background};
  width: 300px;
  height: 350px;
  text-align: center;
  margin: 35px;
  border: none;
  transform: rotateZ(${(props) => props.rotation}deg);
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
