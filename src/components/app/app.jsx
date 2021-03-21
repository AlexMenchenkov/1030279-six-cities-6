import React from 'react';
import PropTypes from 'prop-types';
import MainScreen from '/src/components/main-screen/main-screen.jsx';
import {propTypesCard} from '/src/prop-types.js';
import Favorites from '/src/components/favorites/favorites.jsx';
import NotFoundScreen from '/src/components/not-found-screen/notFoundScreen.jsx';
import Room from '/src/components/room/room.jsx';
import Login from '/src/components/login/login.jsx';
import {Router as BrowserRouter, Route, Switch} from 'react-router-dom';
import {AppRoute} from '/src/consts.js';
import PrivateRoute from '/src/components/private-router/private-router';
import browserHistory from '/src/browser-history.js';

const App = () => {

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route path={AppRoute.LOGIN} exact
          render={() => (
            <Login/>
          )}
        />
        <Route path={AppRoute.OFFER} exact
          render={(props) => (
            <
              Room
              id={props}
            />
          )}
        />
        <Route path={AppRoute.ROOT} exact
          render={() => (
            <MainScreen/>
          )}
        />
        <PrivateRoute
          exact
          path={AppRoute.FAVORITES}
          render={() => {
            return (
              <
                Favorites
              />
            );
          }}
        />
        <Route>
          <NotFoundScreen/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.objectOf(PropTypes.shape(
          propTypesCard,
      )),
  ),
};

export default App;
