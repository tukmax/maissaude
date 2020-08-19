import React from 'react';
import { Link } from 'react-router-dom';
import { Ul, Li } from './styled';

const Header: React.FC = () => (
  <Ul>
    <Li>
      <Link to="/quemsomos">Quem Somos</Link>
    </Li>
    <Li>
      <Link to="/cursos">Cursos</Link>
    </Li>
    <Li>
      <Link to="/contato">Contato</Link>
    </Li>
  </Ul>
);

export default Header;
