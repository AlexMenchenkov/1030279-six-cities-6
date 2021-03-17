import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {AuthorizationStatus, AppRoute} from '/src/consts.js';

const PrivateRoute = ({render, path, exact, statusAuth}) => {
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
};

const mapStateToProps = (state) => ({
  statusAuth: state.statusAuth,
});


export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
