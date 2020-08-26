import React from 'react';
import { IoLogoWhatsapp } from 'react-icons/io';
import { FaFacebook } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import Header from '../../components/Header';
import { Div, Title, SubTitle, LinkBox } from './styles';

const Contato: React.FC = () => (
  <>
    <Header />
    <Div>
      <Title>Entre em contato conosco!</Title>
      <SubTitle>
        Contenos suas experiencias, duvidas e diga-nos onde podemos melhorar.
      </SubTitle>
      <LinkBox>
        <a
          href="http://api.whatsapp.com/send?1=pt_BR&phone=5581996686358&text=Olá%20acabei%20de%20vir%20do%20seu%20site!"
          target="blank"
        >
          <IoLogoWhatsapp />
        </a>
        <a href="https://www.instagram.com/maisaudecursos/" target="blank">
          <AiFillInstagram />
        </a>
        <a href="https://www.facebook.com/maisaudecursos" target="blank">
          <FaFacebook />
        </a>
      </LinkBox>
    </Div>
  </>
);

export default Contato;
