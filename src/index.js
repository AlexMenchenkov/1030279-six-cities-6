import React from 'react';
import ReactDOM from 'react-dom';
import App from '/src/components/app/app';
import {createAPI} from '/src/api/api';
import {ActionCreator} from '/src/store/action';
import {AuthorizationStatus} from '/src/consts';
import {checkAuth} from '/src/store/api-actions';
import {redirect} from '/src/store/middlewares/redirect';
import {reducer} from './store/reducer';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const api = createAPI(
    () => store.dispatch(ActionCreator.requireAuthorization({
      auth: AuthorizationStatus.NO_AUTH,
      checkedAuth: true,
    }))
);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect),
    ),
);

store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById(`root`)
);
