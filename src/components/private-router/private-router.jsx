import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {AuthorizationStatus, AppRoute} from '/src/consts';
import LoadingScreen from '/src/components/loading-screen/loading-screen';
import {props} from './private-router-prop';

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

PrivateRoute.propTypes = props;

const mapStateToProps = (state) => ({
  statusAuth: state.statusAuth,
  checkedAuth: state.checkedAuth,
});


export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
