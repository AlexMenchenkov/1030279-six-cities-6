import React from 'react';
import PropTypes from 'prop-types';
import MainScreen from '/src/components/main-screen/main-screen.jsx';
import {propTypesCard} from '/src/prop-types.js';
import Favorites from '/src/components/favorites/favorites.jsx';
import NotFoundScreen from '/src/components/not-found-screen/notFoundScreen.jsx';
import Room from '/src/components/room/room.jsx';
import Login from '/src/components/login/login.jsx';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {cityDataDefault} from '/src/mocks/points.js';
import {iconData} from '/src/consts.js';
import {points} from '/src/mocks/points.js';

const App = ({offers}) => {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact
          render={() => (
            <
              MainScreen
              offers={offers}
              cityDataDefault={cityDataDefault}
              iconData={iconData}
              points={points}
            />
          )}
        />
        <Route path="/login" exact
          render={() => (
            <Login/>
          )}
        />
        <Route path="/favorites" exact
          render={() => (
            <Favorites offers={offers}/>
          )}
        />
        <Route path="/offer/:id" exact
          render={(props) => (
            <
              Room
              id={props}
            />
          )}
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
  ).isRequired,
};

export default App;
