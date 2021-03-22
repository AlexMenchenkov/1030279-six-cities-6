import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {AuthorizationStatus, AppRoute} from '/src/consts.js';
import LoadingScreen from '/src/components/loading-screen/loading-screen.js';

const PrivateRoute = ({render, path, exact, statusAuth, checkedAuth}) => {

  if (!checkedAuth) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <Route
      path={path}
      exact={exact}
      render={() => {
        return (
          statusAuth === AuthorizationStatus.AUTH
            ? render()
            : <Redirect to={AppRoute.LOGIN} />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  statusAuth: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
  checkedAuth: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  statusAuth: state.statusAuth,
  checkedAuth: state.checkedAuth,
});


export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
