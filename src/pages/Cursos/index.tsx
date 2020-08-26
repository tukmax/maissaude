import React from 'react';

import { FaLaptopMedical } from 'react-icons/fa';

// import { UlVideos } from '../../components/VideoComponent/styles';
// import VideoComponent from '../../components/VideoComponent';

import Header from '../../components/Header';
import { UlImg } from './styles';

const Cursos: React.FC = () => (
  <>
    <Header />
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginRight: '10px',
        }}
      >
        <h1>Venha conhecer nossos cursos</h1>
        <h2>Conhecimento agrega valor e transforma!</h2>
      </div>
      <FaLaptopMedical size={60} />
    </div>

    <UlImg>
      <li>
        <img
          src="https://www.paodospobres.org.br/site/wp-content/uploads/2018/09/cursos-devmedia-facebook.jpg"
          alt=""
        />
        <div>
          <h1>Titulo</h1>
          <h5
            style={{
              display: 'inline-block',
              padding: '4px 20px',
              backgroundColor: 'lightgreen',
              borderRadius: '8px',
            }}
          >
            Online
          </h5>
          <h3>
            Mssum Ipsum, cacilds vidis litro abertis. Admodum accumsan
            disputationi eu sit. Vide electram sadipscing et per. Mé faiz
            elementum girarzis, nisi eros vermeio.
          </h3>
        </div>
      </li>
      <li>
        <img
          src="https://www.paodospobres.org.br/site/wp-content/uploads/2018/09/cursos-devmedia-facebook.jpg"
          alt=""
        />
        <div>
          <h1>Titulo</h1>
          {/* w3-tag{background-color:#000;color:#fff;display:inline-block;padding-left:8px;padding-right:8px;text-align:center} */}
          <h5
            style={{
              display: 'inline-block',
              padding: '4px 20px',
              backgroundColor: 'lightcoral',
              borderRadius: '8px',
            }}
          >
            Presencial
          </h5>

          <h3>
            Mssum Ipsum, cacilds vidis litro abertis. Admodum accumsan
            disputationi eu sit. Vide electram sadipscing et per. Mé faiz
            elementum girarzis, nisi eros vermeio.
          </h3>
        </div>
      </li>
    </UlImg>
  </>
);

export default Cursos;
