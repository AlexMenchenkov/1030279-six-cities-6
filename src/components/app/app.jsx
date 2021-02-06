import React from "react";
import PropTypes from 'prop-types';
import MainPage from '/src/components/main-page/main-page.jsx';
import Login from '/src/components/login/login.jsx';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {getPropTypesCard} from '/src/components/card-place/card-place.jsx';
import Favorites from '/src/components/app/favorites/favorites.jsx';
import Page404 from '/src/components/page-404/page-404.jsx';
import Room from '/src/components/room/room.jsx';

const App = (props) => {
  const {data} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact
          render={() => (
            <
              MainPage data={data}
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
        <Route path="/room" exact
          render={() => (
            <Room/>
          )}
        />
        <Route>
          <Page404/>
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
