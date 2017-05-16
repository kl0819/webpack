import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Home from './components/Home';
import ArtistMain from './components/artists/ArtistMain';

// Plain JS Object (aka behind the scenes jsx)
const componentRoutes = {
  component: Home,
  path: '/',
  indexRoute: { component: ArtistMain },
  childRoutes: [
    {
      path: 'artist/new',
      getComponent(location, cb) {
        System.import('./components/artists/ArtistCreate')
        .then(module => cb(null, module.default));
      }
    },
    {
      path: 'artist/:id',
      getComponent(location, cb) {
        System.import('./components/artists/ArtistDetail')
        .then(module => cb(null, module.default));
      }
    },
    {
      path: 'artist/:id/edit',
      getComponent(location, cb) {
        System.import('./components/artists/ArtistEdit')
        .then(module => cb(null, module.default));
      }
    }
  ]
};

// JSX
const Routes = () => {
  return (
    <Router history={hashHistory} routes={componentRoutes} />
  );
};

export default Routes;
