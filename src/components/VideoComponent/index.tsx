import React from 'react';
import { Li } from './styles';

const VideoComponent: React.FC = () => {
  return (
    <Li>
      <iframe
        src="https://www.youtube.com/embed/gYaw8IB12H0"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="video"
      />
      <div>
        <h1>Titulo</h1>
        <h5>Descrição do video</h5>
        <span>
          Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan
          disputationi eu sit. Vide electram sadipscing et per. Mé faiz
          elementum girarzis, nisi eros vermeio.
        </span>
      </div>
    </Li>
  );
};

export default VideoComponent;
