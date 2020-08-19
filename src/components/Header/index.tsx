import React from 'react';

import { Link } from 'react-router-dom';

import { ImgLogo, Heade } from './style';

import Menu from '../Menu';
import logo from '../../assets/logo_mais_saude.png';

const Header = () => (
  <Heade>
    <Link to="/">
      <ImgLogo src={logo} alt="logo" />
    </Link>
    <Menu />
  </Heade>
);

export default Header;
