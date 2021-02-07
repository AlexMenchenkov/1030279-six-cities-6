import React from 'react';
import PropTypes from 'prop-types';
import MainScreen from '/src/components/mainScreen/mainScreen.jsx';
import Login from '/src/components/login/login.jsx';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {getPropTypesCard} from '/src/components/card-place/card-place.jsx';
import Favorites from '/src/components/favorites/favorites.jsx';
import NotFoundScreen from '/src/components/not-found-screen/notFoundScreen.jsx';
import Room from '/src/components/room/room.jsx';

const App = ({data}) => {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact
          render={() => (
            <
              MainScreen data={data}
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
  data: PropTypes.arrayOf(
      PropTypes.shape({
        getPropTypesCard,
      }),
  ).isRequired,
};

export default App;
