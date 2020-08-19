import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import QuemSomos from '../pages/QuemSomos';
import Cursos from '../pages/Cursos';
import Contato from '../pages/Contato';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/quemsomos" component={QuemSomos} />
    <Route path="/cursos" component={Cursos} />
    <Route path="/contato" component={Contato} />
  </Switch>
);

export default Routes;
