import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import MainScreen from '/src/components/main-screen/main-screen.jsx';
import {propTypesCard} from '/src/prop-types.js';
import Favorites from '/src/components/favorites/favorites.jsx';
import NotFoundScreen from '/src/components/not-found-screen/notFoundScreen.jsx';
import Room from '/src/components/room/room.jsx';
import Login from '/src/components/login/login.jsx';
import {connect} from "react-redux";
import {Router as BrowserRouter, Route, Switch} from 'react-router-dom';
import {iconData, AppRoute} from '/src/consts.js';
import PrivateRoute from '/src/components/private-router/private-router';
import browserHistory from '/src/browser-history.js';
import LoadingScreen from '/src/components/loading-screen/loading-screen.js';
import {fetchCityList} from '/src/store/api-actions.js';

const App = ({onLoadData, isDataLoaded}) => {

  useEffect(() => {
    if (!isDataLoaded) {
      onLoadData();
    }
  }, [isDataLoaded]);

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route path={AppRoute.LOGIN} exact
          render={() => (
            <Login/>
          )}
        />
        <Route path={AppRoute.FAVORITES} exact
          render={() => (
            <Favorites/>
          )}
        />
        <Route path={AppRoute.ROOT} exact
          render={() => (
            <
              MainScreen
              iconData={iconData}
            />
          )}
        />
        <PrivateRoute
          exact
          path={AppRoute.OFFER}
          render={(props) => {
            return (
              <
                Room
                id={props}
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
  onLoadData: PropTypes.func.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isDataLoaded: state.isDataLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchCityList());
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
