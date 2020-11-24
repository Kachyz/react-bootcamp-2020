import React from 'react';
import styled from 'styled-components';
import Toogle from './Toogle/Toogle.component';
import profileimg from '../../assets/profileimg.png';

const NavBar = () => {
  return (
    <NavbarContainer>
      soy el navbar
      <ConfigContainer>
        <Toogle />
        <DarkmodeText>Dark mode</DarkmodeText>
        <ProfilePic src={profileimg} />
      </ConfigContainer>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.div`
  background: #7400b8;
  height: 60px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
`;

const ProfilePic = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50px;
`;

const ConfigContainer = styled.div`
  height: inherit;
  justify-content: space-between;
  align-items: center;
  width: 250px;
  display: flex;
`;

const DarkmodeText = styled.b`
  color: #bbb;
`;

export default NavBar;
