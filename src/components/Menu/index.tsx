import React from 'react';
import { Link } from 'react-router-dom';
import { FaLaptopMedical } from 'react-icons/fa';
import { MdPermPhoneMsg } from 'react-icons/md';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { Ul } from './styles';

const Header: React.FC = () => {
  return (
    <Ul>
      <li>
        <Link to="/quemsomos">
          <AiOutlineUsergroupAdd size={24} style={{ marginRight: '4px' }} />
          Quem Somos
        </Link>
      </li>
      <li>
        <Link to="/cursos">
          <FaLaptopMedical size={24} style={{ marginRight: '4px' }} />
          Cursos
        </Link>
      </li>
      <li>
        <Link to="/contato">
          <MdPermPhoneMsg size={24} style={{ marginRight: '4px' }} />
          Contato
        </Link>
      </li>
    </Ul>
  );
};

export default Header;
