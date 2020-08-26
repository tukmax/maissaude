import React from 'react';
import Header from '../../components/Header';
import PhotoMosaic from '../../components/PhotoMosaic';

const Home: React.FC = () => (
  <>
    <Header />

    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '90px',
      }}
    >
      <PhotoMosaic />

      <h1
        style={{
          maxWidth: '600px',
          marginLeft: '40px',
          textIndent: '40px',
          textAlign: 'justify',
        }}
      >
        Contamos com cursos diversos para qualificação profissional na área da
        saúde, com foco em desenvolvimento de carreira e evolução profissional.
        Nossos instrutores tem um amplo conhecimento nas áreas que abordam,
        dando-lhes ferramentas necessarias para integrar os alunos no mercado de
        trabalho.
      </h1>
    </div>
  </>
);

export default Home;
