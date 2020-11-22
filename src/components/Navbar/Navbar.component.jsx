import React from 'react';
import styled from 'styled-components';
import profileimg from '../../assets/profileimg.png';

const NavBar = () => {
  return (
    <NavbarContainer>soy el navbar
      <ProfilePic src={ profileimg }/>
    </NavbarContainer>
  );
}

const NavbarContainer = styled.div`
  background: #7400B8;
  height: 60px;
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
`

const ProfilePic = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50px;
`

export default NavBar;

