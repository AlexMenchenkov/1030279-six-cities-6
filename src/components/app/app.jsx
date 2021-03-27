import React from 'react';
import PropTypes from 'prop-types';
import MainScreen from '/src/components/main-screen/main-screen';
import {propTypesCard} from '/src/prop-types';
import FavoritesScreen from '/src/components/favorite-screen/favorite-screen';
import NotFoundScreen from '/src/components/not-found-screen/notFoundScreen';
import RoomScreen from '/src/components/room-screen/room-screen';
import Login from '/src/components/login/login';
import {Router as BrowserRouter, Route, Switch} from 'react-router-dom';
import {AppRoute} from '/src/consts';
import PrivateRoute from '/src/components/private-router/private-router';
import browserHistory from '/src/browser-history';

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
              RoomScreen
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
                FavoritesScreen
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
