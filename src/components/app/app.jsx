import React from 'react';
import PropTypes from 'prop-types';
import MainScreen from '/src/components/mainScreen/mainScreen.jsx';
import {propTypesCard} from '/src/consts.js';
import Favorites from '/src/components/favorites/favorites.jsx';
import NotFoundScreen from '/src/components/not-found-screen/notFoundScreen.jsx';
import Room from '/src/components/room/room.jsx';
import Login from '/src/components/login/login.jsx';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

const App = ({offers}) => {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact
          render={() => (
            <
              MainScreen offers={offers}
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
            <Favorites/>
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
      PropTypes.shape(
          propTypesCard,
      ),
  ).isRequired,
};

export default App;
